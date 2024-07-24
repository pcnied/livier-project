const { Sequelize } = require("sequelize");
const { development } = require("../config/database");
const AdminUser = require("../app/models/AdminUsers");
const ClientUser = require("../app/models/ClientUsers")
const Product = require("../app/models/Products");
const Order = require("../app/models/Orders");
const Coupon = require("../app/models/Coupons");
const CouponUsageHistory = require("../app/models/CouponsUsageHistory");

const models = [AdminUser, Order, Product, ClientUser, Coupon, CouponUsageHistory];

class Database {
    constructor() {
        this.init();
    }

    init() {
        const { database, username, password, host, dialect, port } = development;
        this.connection = new Sequelize(database, username, password, {
            host,
            dialect,
            port,
            define: {
                timestamps: true,
                underscored: true,
            },
        });

        models.forEach(model => model.init(this.connection));
        models.forEach(model => {
            if (model.associate) {
                model.associate(this.connection.models);
            }
        });

        this.connection.sync({ alter: true })
            .then(() => {
                console.log('Tabelas sincronizadas com sucesso!');
            })
            .catch(err => {
                console.error('Erro ao sincronizar tabelas:', err);
            });
    }
}

module.exports = new Database();