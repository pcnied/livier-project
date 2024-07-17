const AppError = require("../errors/AppError");
const Coupons = require("../models/Coupons");

class CouponsService {
    async getAllCoupons() {
        try {
            const coupons = await Coupons.findAll();
            return coupons;
        } catch (error) {
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

    async getCoupon(id) {
        try {
            const coupon = await Coupons.findByPk(id);
            if (!coupon) {
                throw new AppError(404, "Cupom não encontrado");
            }
            return coupon;
        } catch (error) {
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

    async createCoupon(data) {
        let transaction;
        try {
            transaction = await Coupons.sequelize.transaction();

            const newCoupon = await Coupons.create(data, { transaction });

            await transaction.commit();

            return newCoupon;
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

    async updateCoupon(id, newData) {
        let transaction;
        try {
            transaction = await Coupons.sequelize.transaction();
    
            const coupon = await Coupons.findByPk(id, { transaction });
            if (!coupon) {
                throw new AppError(404, "Cupom não encontrado");
            }
    
            // Filtrar apenas as chaves do objeto newData que existem no modelo de Coupons
            const allowedFields = Object.keys(Coupons.rawAttributes);
            const filteredData = {};
            for (const key in newData) {
                if (allowedFields.includes(key)) {
                    filteredData[key] = newData[key];
                }
            }
    
            await Coupons.update(filteredData, { where: { id }, transaction });
    
            await transaction.commit();
    
            return { message: "Cupom atualizado com sucesso" };
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

    async deleteCoupon(id) {
        let transaction;
        try {
            transaction = await Coupons.sequelize.transaction();

            const coupon = await Coupons.findByPk(id, { transaction });
            if (!coupon) {
                throw new AppError(404, "Cupom não encontrado");
            }

            await Coupons.destroy({ where: { id }, transaction });

            await transaction.commit();

            return { message: "Cupom excluído com sucesso" };
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }
    async findCouponByCode(code) {
        const coupon = await Coupons.findOne({ where: { code } });
        return coupon;
    }

    async findUsageRecord(couponId, userId) {
        const usageRecord = await CouponUsageHistory.findOne({
            where: { CouponId: couponId, userId: userId }
        });
        return usageRecord;
    }

    async applyCoupon(code, userId) {
        let transaction;
        try {
            transaction = await Coupons.sequelize.transaction();

            const coupon = await this.findCouponByCode(code);
            if (!coupon) {
                throw new AppError(404, "Cupom não encontrado");
            }

            if (!coupon.reusable) {
                const usageRecord = await this.findUsageRecord(coupon.id, userId);
                if (usageRecord) {
                    throw new AppError(400, "Este cupom já foi utilizado por este usuário");
                }
            }

            if (coupon.useLimit !== null && coupon.usedCount >= coupon.useLimit) {
                throw new AppError(400, "Este cupom atingiu o limite de uso");
            }

            await CouponUsageHistory.create({
                CouponId: coupon.id,
                userId: userId
            }, { transaction });

            await Coupons.update(
                { usedCount: coupon.usedCount + 1 },
                { where: { id: coupon.id }, transaction }
            );

            await transaction.commit();

            return { coupon, message: "Cupom aplicado com sucesso" };
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }
}

module.exports = new CouponsService();
