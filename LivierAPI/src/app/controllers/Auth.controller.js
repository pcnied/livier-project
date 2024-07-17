const AdminUsersService = require("../services/AdminUsers.service");
const ClientUsersService = require("../services/ClientUsers.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AppError = require("../errors/AppError");

class AuthController {
    async loginAdmin(req, res) {
        try {
            const { usernameOrEmail, password } = req.body;

            const adminUser = await AdminUsersService.findUserByUsernameOrEmail(usernameOrEmail);
            if (!adminUser) {
                throw new AppError(401, "Email ou usuário não registrado.");
            }

            const passwordMatch = await bcrypt.compare(password, adminUser.password);
            if (!passwordMatch) {
                throw new AppError(401, "Senha não corresponde a este email!");
            }

            const token = jwt.sign({ id: adminUser.id, userType: 'admin' }, process.env.JWT_SECRET, {
                expiresIn: '1h' 
            });

            return res.status(200).json({ token });
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message });
        }
    }

    async loginClient(req, res) {
        try {
            const { usernameOrEmail, password } = req.body;
    
            const clientUser = await ClientUsersService.findUserByUsernameOrEmail(usernameOrEmail);
            if (!clientUser) {
                throw new AppError(401, "Nome de usuário ou email não cadastrado!");
            }
    
            if (clientUser.loginFails >= 5) {
                throw new AppError(401, "Conta suspensa devido a muitas falhas no login, altere a senha para poder logar");
            }
    
            let passwordMatch = false;
            if (clientUser.password.startsWith('$2b$')) { // Verifica se a senha está com hash
                passwordMatch = await bcrypt.compare(password, clientUser.password);
            } else { // Senha não está com hash, faz uma comparação normal
                passwordMatch = password === clientUser.password;
            }
    
            if (!passwordMatch) {
                clientUser.loginFails += 1;
                clientUser.lastLogin = new Date();
                await clientUser.save();    
                throw new AppError(401, "Senha incorreta!");
            }
            
            clientUser.loginFails = 0;
            clientUser.lastLogin = new Date();
            clientUser.recoveryCode = null;
            await clientUser.save();
            
            const token = jwt.sign({ id: clientUser.id, userType: 'client' }, process.env.JWT_SECRET, {
                expiresIn: '12h' 
            });
            
            return res.status(200).json({ token });
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message });
        }
    }
}

module.exports = new AuthController();
