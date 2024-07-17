const ProductSchemas = require("../schemas/Product/Product.schemas");
const ProductsService = require("../services/Products.service");
const Products = require("../models/Products");

class ProductController {
    async createProduct(req, res) {
        try {
            const { name, category, type, price, stock, description } = req.body;
            
            const isInvalid = ProductSchemas.createProductSchema(
                name,
                category,
                type,
                price,
                stock,
                description
            );

            if (isInvalid) {
                const errors = {};
                Object.entries(isInvalid).forEach(([field, errorMessages]) => {
                    errors[field] = errorMessages.join(", ");
                });

                return res.status(400).json({ message: "Erro de validação", errors });
            }

            const product = await ProductsService.createProduct({
                name,
                category,
                type,
                price,
                stock,
                description
            });

            return res.status(201).json(product);
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
        }
    }
    
    async getAllProducts(req, res) {
        try {
            const products = await ProductsService.getAllProducts();
            return res.status(200).json(products);
        } catch(error) {
            return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
        }
    }

    async getProductById(req, res) {
        try {
            const productId = req.params.id;
            const product = await ProductsService.findProductById(productId);
            if (!product) {
                return res.status(404).json({ message: "Produto não encontrado" });
            }
            return res.status(200).json(product);
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
        }
    }

    async deleteProduct(req, res) {
        try {
            const productId = req.params.id;
            await ProductsService.deleteProduct(productId);
            return res.status(204).send();
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
        }
    }

    async updateProduct(req, res) {
        try {
            const productId = req.params.id;
            const { name, category, type, price, stock, description } = req.body;

            const isInvalid = ProductSchemas.createProductSchema(
                name,
                category,
                type,
                price,
                stock,
                description
            );

            if (isInvalid) {
                const errors = {};
                Object.entries(isInvalid).forEach(([field, errorMessages]) => {
                    errors[field] = errorMessages.join(", ");
                });

                return res.status(400).json({ message: "Erro de validação", errors });
            }

            const updatedProduct = await ProductsService.updateProduct(productId, {
                name,
                category,
                type,
                price,
                stock,
                description
            });

            return res.status(200).json(updatedProduct);
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
        }
    }

    async toggleProductForSale(req, res) {
        try {
            const productId = req.params.id;

            const updatedProduct = await ProductsService.toggleProductForSale(productId);

            return res.status(200).json(updatedProduct);
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
        }
    }

    async getProductsForSale(req, res) {
        try {
            const { category } = req.body;

            let filter = {};
            if (category) {
                if (category === 'tech' || category === 'marketing' || category === 'all') {
                    filter = { category, forSale: true };
                } else {
                    return res.status(400).json({ message: "Categoria inválida" });
                }
            } else {
                filter = { forSale: true };
            }

            const products = await Products.findAll({
                where: filter,
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            });

            return res.status(200).json(products);
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
        }
    }
}

module.exports = new ProductController();
