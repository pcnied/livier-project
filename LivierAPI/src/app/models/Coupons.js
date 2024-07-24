const { Sequelize, Model, DataTypes } = require("sequelize");

class Coupons extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true
                },
                code: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true
                },
                discountPercent: {
                    type: DataTypes.DECIMAL(10, 2),
                    allowNull: true
                },
                discountFixed: {
                    type: DataTypes.DECIMAL(10, 2),
                    allowNull: true
                },
                reusable: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false
                },
                useLimit: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    defaultValue: null // Pode ser null para indicar uso ilimitado
                },
                usedCount: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 0
                }
            },
            {
                sequelize,
            }
        );
    }

    static associate(models) {
        this.hasOne(models.CouponUsageHistory, {
            foreignKey: {
                allowNull: false,
                onDelete: "CASCADE"
            }
        });
    }
}

module.exports = Coupons;
