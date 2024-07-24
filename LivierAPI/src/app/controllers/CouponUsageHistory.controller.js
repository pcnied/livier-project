const Coupon = require("../models/Coupons");
const CouponUsageHistoryService = require("../services/CouponUsageHistory.service");

async function applyCoupon(req, res) {
    try {
        const { code } = req.body;
        const userId = req.user.id;
        
        const coupon = await Coupon.findOne({ where: { code } });
        if (!coupon) {
            return res.status(404).json({ message: "Cupom não encontrado" });
        }
        
        const usageRecord = await CouponUsageHistoryService.findUsageRecord(coupon.id, userId);
        if (usageRecord) {
            return res.status(400).json({ message: "Este cupom já foi utilizado por este usuário" });
        }
        
        await CouponUsageHistoryService.addUsageHistory(coupon.id, userId);
        
        return res.status(200).json({ message: "Cupom aplicado com sucesso" });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
    }
}

module.exports = {
    applyCoupon
};
