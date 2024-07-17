const CouponsService = require("../services/Coupons.service");
const AppError = require("../errors/AppError");
const CouponsSchemas = require("../schemas/Coupon/Coupon.schemas");

async function getAllCoupons(req, res) {
    try {
        const coupons = await CouponsService.getAllCoupons();
        return res.status(200).json(coupons);
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
    }
}

async function getCoupon(req, res) {
    const { id } = req.params;
    try {
        const coupon = await CouponsService.getCoupon(id);
        return res.status(200).json(coupon);
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
    }
}

async function createCoupon(req, res) {
    const data = req.body;
    try {
        const validationResult = CouponsSchemas.createCouponSchema(data);
        if (validationResult) {
            const errors = {};
            Object.entries(validationResult).forEach(([field, errorMessages]) => {
                errors[field] = errorMessages.join(", ");
            });
            return res.status(400).json({ message: "Erro de validação", errors });
        }

        const newCoupon = await CouponsService.createCoupon(data);
        return res.status(201).json(newCoupon);
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
    }
}

async function updateCoupon(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const result = await CouponsService.updateCoupon(id, newData);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
    }
}

async function deleteCoupon(req, res) {
    const { id } = req.params;
    try {
        const result = await CouponsService.deleteCoupon(id);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
    }
}

async function applyCoupon(req, res) {
    const { code, userId } = req.body;
    try {
        const result = await CouponsService.applyCoupon(code, userId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
    }
}

async function getCouponByCode(req, res) {
    const { code } = req.params;
    try {
        const coupon = await CouponsService.findCouponByCode(code);
        if (!coupon) {
            return res.status(404).json({ message: "Cupom não encontrado" });
        }
        return res.status(200).json(coupon);
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
    }
}

module.exports = {
    getAllCoupons,
    getCoupon,
    createCoupon,
    updateCoupon,
    deleteCoupon,
    applyCoupon,
    getCouponByCode
};
