const { Router } = require("express");
const routes = Router();

const CouponsController = require("../controllers/Coupons.controller");
const isAdminAuthenticated = require("../middlewares/isAdminAuthenticated");
const isClientAuthenticated = require("../middlewares/isClientAuthenticated");

routes.post("/", isAdminAuthenticated, CouponsController.createCoupon);

routes.get("/", isAdminAuthenticated, CouponsController.getAllCoupons);

routes.get("/:id", isAdminAuthenticated, CouponsController.getCoupon);

routes.get("/verify-coupon/:code", isClientAuthenticated, CouponsController.getCouponByCode)

routes.put("/:id", isAdminAuthenticated, CouponsController.updateCoupon);

routes.delete("/:id", isAdminAuthenticated, CouponsController.deleteCoupon);

module.exports = routes;
