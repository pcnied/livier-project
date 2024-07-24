const { Router } = require("express");
const routes = Router();

const AuthRoutes = require("./Auth.routes");
const CouponsRoutes = require("./Coupons.routes");
const ClientUserRoutes = require("./ClientUsers.routes")
const ProductRoutes = require("./Products.routes");
const OrderRoutes = require("./Orders.routes");

routes.use("/auth", AuthRoutes);
routes.use("/adm", CouponsRoutes);
routes.use("/client", ClientUserRoutes);
routes.use("/product", ProductRoutes);
routes.use("/order", OrderRoutes);
routes.use("/coupon", CouponsRoutes)

module.exports = routes;