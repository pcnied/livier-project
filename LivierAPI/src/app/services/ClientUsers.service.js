const AppError = require("../errors/AppError");
const ClientUsers = require("../models/ClientUsers");
const Orders = require("../models/Orders");

class ClientUsersService {
    async findUserById(id){
        const user = await ClientUsers.findByPk(id);
        return user;
    }
    
    async findUserByUsernameOrEmail(usernameOrEmail) {
        const user = await ClientUsers.findOne({
            where: {
                [Op.or]: [
                    { mail: usernameOrEmail },
                    { username: usernameOrEmail }
                ]
            }
        });
        return user;
    }
    

    async getAllUsers() {
        try {
            const users = await ClientUsers.findAll();
            return users;
        } catch (error) {
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

    async createUser(name, mail, password, username, hash=true) {
        try {
            const userAlreadyExist = await this.findUserByUsernameOrEmail(mail);
            if (userAlreadyExist) {
                throw new AppError(409, "Email já cadastrado!");
            }
            if (hash===false) {
                await ClientUsers.create({
                    name,
                    mail,
                    password,
                    username
                });
    
                return { message: `Usuário criado com sucesso! senha => ${password}` }
            }
            const hashedPassword = await bcrypt.hash(password, 8)
            password = hashedPassword
            await ClientUsers.create({
                name,
                mail,
                password,
                username
            });

            return { message: "Usuário criado com sucesso!" }
        } catch (error) {
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

    async updateUser(id, newData) {
        try {
            const user = await ClientUsers.findByPk(id);
            
            if (!user) {
                throw new AppError(404, "Usuário não encontrado!");
            }

            if (newData.password) {
                newData.password = await bcrypt.hash(newData.password, 8);
            }
    
            await user.update(newData);
    
            return user;
        } catch (error) {
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }
    

    async deleteUser(id) {
        try {
            const user = await ClientUsers.findByPk(id);
            if (!user) {
                throw new AppError(404, "Usuário não encontrado!");
            }

            await ClientUsers.destroy({ where: { id } });
        } catch (error) {
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

    async updateUserPassword(id, newPassword) {
        try {
            const user = await ClientUsers.findByPk(id);
            
            if (!user) {
                throw new AppError(404, "Usuário não encontrado!");
            }
    
            user.password = newPassword;
            user.loginFails = 0;
            await user.save();
    
            return user;
        } catch (error) {
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

    async getAllUserOrders(userId) {
        try {
            const user = await ClientUsers.findByPk(userId);
            if (!user) {
                throw new AppError(404, "Usuário não encontrado!");
            }

            const orders = await Orders.findAll({ where: { clientUserId: userId } });
            return orders;
        } catch (error) {
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }
}

module.exports = new ClientUsersService();
