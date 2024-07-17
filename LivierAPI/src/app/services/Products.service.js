const AppError = require("../errors/AppError");
const Products = require("../models/Products");
const Orders = require("../models/Orders");

class ProductsService {
    async findProductById(id) {
        try {
            const product = await Products.findByPk(id);
            return product;
        } catch (error) {
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

    async createProduct(name, category, price, stock, description, photoStrings) {
        let transaction;
        try {
            transaction = await Products.sequelize.transaction();

            const productAlreadyExist = await Products.findOne({ where: { name }, transaction });
            if (productAlreadyExist) {
                throw new AppError(409, "Produto já cadastrado!");
            }

            const newProduct = await Products.create({
                name,
                category,
                price,
                stock,
                description,
                forSale: true
            }, { transaction });

            await transaction.commit();

            return newProduct;
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

    async getAllProducts() {
        try {
            const products = await Products.findAll();
            return products;
        } catch (error) {
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

    async deleteProduct(id) {
        let transaction;
        try {
            transaction = await Products.sequelize.transaction();

            const product = await Products.findByPk(id, { transaction });
            if (!product) {
                throw new AppError(404, "Produto não encontrado!");
            }

            await Products.destroy({ where: { id }, transaction });

            await transaction.commit();
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

    async updateProduct(id, newData) {
        let transaction;
        try {
            transaction = await Products.sequelize.transaction();

            const product = await Products.findByPk(id, { transaction });
            if (!product) {
                throw new AppError(404, "Produto não encontrado!");
            }

            if ('stock' in newData && newData.stock <= 0) {
                newData.forSale = false;
            }

            await Products.update(newData, { where: { id }, transaction });

            await transaction.commit();
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

    async getProductOrders(productId) {
        try {
            const product = await Products.findByPk(productId);
            if (!product) {
                throw new AppError(404, "Produto não encontrado!");
            }

            const orders = await Orders.findAll({ where: { productId } });
            return orders;
        } catch (error) {
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

    async toggleProductForSale(productId) {
        let transaction;
        try {
            transaction = await Products.sequelize.transaction();

            const product = await Products.findByPk(productId, { transaction });
            if (!product) {
                throw new AppError(404, "Produto não encontrado!");
            }

            const updatedProduct = await product.update({ forSale: !product.forSale }, { transaction });

            if (updatedProduct.stock <= 0) {
                await updatedProduct.update({ forSale: false }, { transaction });
            }

            await transaction.commit();

            return updatedProduct;
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

    async getProductsForSale(filter) {
        try {
            let whereClause = {
                forSale: true
            };
    
            if (filter && filter !== 'all') {
                whereClause = {
                    ...whereClause,
                    ...filter
                };
            }
    
            const products = await Products.findAll({
                where: whereClause,
                include: [{
                    model: Orders,
                    as: 'orders',
                    onDelete: 'CASCADE',
                    attributes: []
                }],
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            });
    
            return products;
        } catch (error) {
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }
}

module.exports = new ProductsService();
