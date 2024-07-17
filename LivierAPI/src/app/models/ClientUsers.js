const { Sequelize, Model, DataTypes } = require("sequelize");

class ClientUsers extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                mail: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                username: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                recoveryCode: {
                    type: DataTypes.INTEGER,
                    defaultValue: null
                },
                loginFails: {
                    type: DataTypes.INTEGER,
                    defaultValue: 0
                },
                lastLogin: {
                    type: DataTypes.DATE,
                    defaultValue: null
                }
            },
            {
                sequelize,
            }
        );
    }
}

module.exports = ClientUsers;
