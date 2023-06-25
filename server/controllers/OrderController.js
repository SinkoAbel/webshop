import Order from '../models/Order.js';
import Product from '../models/Product.js';
import { createError } from '../utils/error.js';
import User from "../models/User.js";

export const getAllOrders = async (req, res, next) => {
    const orders = await Order.find().populate('products');
    res.status(200).json(orders);
};

export const getOrderById = async (req, res, next) => {
    const userID = req.headers.userid;
    const user = await User.findById(userID);
    // console.log(req.body);
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order) {
        return next(createError(404, 'There is no order with the given order number.'));
    }

    // if (req.user.isAdmin || req.user._id.toString() === order.user.toString()) {
    //     res.status(200).json(order);
    // } else {
    //     return next(createError(403, "You're not authorized!"));
    // }

    if (user.isAdmin || user._id.toString() === order.user.toString()) {
        res.status(200).json(order);
    } else {
        return next(createError(403, "You're not authorized!"));
    }
};

export const createOrder = async (req, res, next) => {
    const userID = req.headers.userid;
    const user = await User.findById(userID);
    const {productId,
        quantity,
        totalPrice,
        firstName,
        lastName,
        phone,
        zip,
        city,
        street,
        houseNumber } = req.body;

    // if (!productId || !quantity) {
    //     return next(createError(400, 'You need to specify a product and a quantity.' + productId + quantity));
    // }

    if (!productId || !quantity || !totalPrice || !firstName || !lastName || !phone || !zip || !city || !street || !houseNumber) {
        return next(createError(400, 'You need to specify the necessary data.'));
    }

    const product = await Product.findById(productId);

    if (!product) {
        return next(createError(404, "No product available: " + product));
    }

    if (product.stock < quantity) {
        return next(createError(400, 'There is not enough product in our stock.'));
    }

    product.stock -= quantity;
    await product.save();

    const order = new Order({
        // user: req.user._id,
        user: user,
        products: [
            {
                product: productId,
                quantity,
            }
        ],
        totalPrice,
        firstName,
        lastName,
        phone,
        zip,
        city,
        street,
        houseNumber,
    });

    const savedOrder = await order.save();

    res.status(201).json(savedOrder);
};

export const deleteOrder = async (req, res, next) => {
    const { id } = req.params;

    try {
        const order = await Order.findById(id);

        if (!order) {
            return next(createError(404, 'There is no order with the given order number.'));
        }

        if (req.user.isAdmin || req.user._id.toString() === order.user.toString()) {
            const product = await Product.findById(order.product);
            product.stock += order.quantity;
            await product.save();

            await order.remove();

            res.status(200).json({ message: 'Your order has been deleted successfully.' });
        } else {
            return next(createError(403, "You're not authorized."));
        }
    } catch (error) {
        next(createError(500, "Failed to delete your order."));
    }
};

export const updateOrder = async (req, res, next) => {
    const { id } = req.params;
    const { quantity } = req.body;

    if (!quantity) {
        return next(createError(400, 'You must have to specify a quantity'));
    }

    try {
        const order = await Order.findById(id);

        if (!order) {
            return next(createError(404, 'There is no order with the given order number.'));
        }

        if (req.user.isAdmin || req.user._id.toString() === order.user.toString()) {
            const product = await Product.findById(order.product);

            if (product.stock + order.quantity < quantity) {
                return next(createError(400, 'There is not enough product in our stock.'));
            }

            product.stock += order.quantity;
            product.stock -= quantity;
            await product.save();

            order.quantity = quantity;
            const savedOrder = await order.save();

            res.status(200).json(savedOrder);
        } else {
            return next(createError(403, "You're not authorized."));
        }
    } catch (error) {
        next(createError(500, 'The update of the product failed.'));
    }
};
