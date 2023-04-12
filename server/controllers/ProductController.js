import Product from '../models/Product.js';
import {createError} from "../utils/error.js";

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        next(createError(500, error.message));
    }
};

export const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return next(createError(404, 'Product not found'));
        }

        res.json(product);
    } catch (error) {
        next(createError(500, error.message));
    }
};

export const createProduct = async (req, res, next) => {
    try {
        if (!req.user.isAdmin) {
            return next(createError(401, 'Only admin users can create a product'));
        }

        const {product_name, price, stock, category_id, photo_id} = req.body;
        const product = new Product({
            product_name,
            price,
            stock,
            category_id,
            photo_id
        });
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        next(createError(400, error.message));
    }
};

export const updateProduct = async (req, res, next) => {
    try {
        if (!req.user.isAdmin) {
            return next(createError(401, 'Only admin users can update a product'));
        }

        const {product_name, price, stock, category_id, photo_id} = req.body;
        const product = await Product.findById(req.params.id);

        if (!product) {
            return next(createError(404, 'Product not found'));
        }

        product.product_name = product_name;
        product.price = price;
        product.stock = stock;
        product.category_id = category_id;
        product.photo_id = photo_id;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (error) {
        next(createError(400, error.message));
    }
};

export const deleteProduct = async (req, res, next) => {
    try {
        if (!req.user.isAdmin) {
            return next(createError(401, 'Only admin users can delete a product'));
        }

        const product = await Product.findById(req.params.id);

        if (!product) {
            return next(createError(404, 'Product not found'));
        }

        await product.remove();
        res.json({message: 'Product removed successfully'});
    } catch (error) {
        next(createError(500, error.message));
    }
};