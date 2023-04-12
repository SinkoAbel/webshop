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
        const { name, description, price, isAdmin } = req.body;
        const product = new Product({
            name,
            description,
            price,
            isAdmin
        });
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        next(createError(400, error.message));
    }
};

export const updateProduct = async (req, res, next) => {
    try {
        const { name, description, price, isAdmin } = req.body;
        const product = await Product.findById(req.params.id);

        if (!product) {
            return next(createError(404, 'Product not found'));
        }

        product.name = name;
        product.description = description;
        product.price = price;
        product.isAdmin = isAdmin;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (error) {
        next(createError(400, error.message));
    }
};

export const deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return next(createError(404, 'Product not found'));
        }

        await product.remove();
        res.json({ message: 'Product removed successfully' });
    } catch (error) {
        next(createError(500, error.message));
    }
};
