const { Router } = require("express");
const isAdminAuthenticated = require("../middlewares/isAdminAuthenticated");
const routes = Router();

const AdminUsersController = require("../controllers/AdminUsers.controller")

routes.get("", isAdminAuthenticated, AdminUsersController.getUserDataTokenBased);
routes.put("", isAdminAuthenticated, AdminUsersController.updateUser);
routes.delete("", isAdminAuthenticated, AdminUsersController.deleteUser);

module.exports = routes;