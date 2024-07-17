const { CouponUsageHistory } = require("../models");
const AppError = require("../errors/AppError");

class CouponUsageHistoryService {
    async addUsageHistory(couponId, userId) {
        let transaction;
        try {
            transaction = await CouponUsageHistory.sequelize.transaction();

            const usageRecord = await CouponUsageHistory.create({
                CouponId: couponId,
                userId: userId
            }, { transaction });

            await transaction.commit();

            return usageRecord;
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

}

module.exports = new CouponUsageHistoryService();
