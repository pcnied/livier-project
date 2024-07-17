const { Sequelize, Model, DataTypes } = require("sequelize");

class CouponUsageHistory extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true
                },
                userId: {
                    type: DataTypes.UUID,
                    allowNull: false
                },
                usedAt: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.NOW
                }
            },
            {
                sequelize,
                modelName: "CouponUsageHistory",
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.Coupons, {
            foreignKey: {
                allowNull: false,
                onDelete: "CASCADE"
            }
        });
    }
}

module.exports = CouponUsageHistory;
