const validate = require("validate.js");
const constraints = require("./Constraints");

class CouponSchemas {
    createCouponSchema(code, discountPercent, discountFixed, reusable) {
        const couponData = { code, discountPercent, discountFixed, reusable };
        const validationResult = validate(couponData, constraints);
        return validationResult;
    }
}

module.exports = new CouponSchemas();

