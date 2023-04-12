import Order from '../models/Order.js';
import Product from '../models/Product.js';
import { createError } from '../utils/error.js';

export const getAllOrders = async (req, res, next) => {
    try {
        if (!req.user.isAdmin) {
            return next(createError(403, 'Nincs jogosultság a művelet végrehajtásához.'));
        }
        const orders = await Order.find().populate('product');
        res.status(200).json(orders);
    } catch (error) {
        next(createError(500, 'A rendelések lekérdezése sikertelen.'));
    }
};

export const getOrderById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const order = await Order.findById(id);

        if (!order) {
            return next(createError(404, 'A megadott azonosítóval nincs rendelés.'));
        }

        if (req.user.isAdmin || req.user._id.toString() === order.user.toString()) {
            res.status(200).json(order);
        } else {
            return next(createError(403, 'Nincs jogosultság a művelet végrehajtásához.'));
        }
    } catch (error) {
        next(createError(500, 'A rendelés lekérdezése sikertelen.'));
    }
};

export const createOrder = async (req, res, next) => {
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
        return next(createError(400, 'A termékazonosító és mennyiség megadása kötelező.'));
    }

    try {
        const product = await Product.findById(productId);

        if (!product) {
            return next(createError(404, 'A megadott azonosítóval nincs termék.'));
        }

        if (product.stock < quantity) {
            return next(createError(400, 'A kívánt mennyiség nem áll rendelkezésre.'));
        }

        product.stock -= quantity;
        await product.save();

        const order = new Order({
            product: productId,
            quantity,
            user: req.user._id,
        });

        const savedOrder = await order.save();

        res.status(201).json(savedOrder);
    } catch (error) {
        next(createError(500, 'A rendelés létrehozása sikertelen.'));
    }
};

export const deleteOrder = async (req, res, next) => {
    const { id } = req.params;

    try {
        const order = await Order.findById(id);

        if (!order) {
            return next(createError(404, 'A megadott azonosítóval nincs rendelés.'));
        }

        if (req.user.isAdmin || req.user._id.toString() === order.user.toString()) {
            const product = await Product.findById(order.product);
            product.stock += order.quantity;
            await product.save();

            await order.remove();

            res.status(200).json({ message: 'A rendelés sikeresen törölve.' });
        } else {
            return next(createError(403, 'Nincs jogosultság a művelet végrehajtásához.'));
        }
    } catch (error) {
        next(createError(500, 'A rendelés törlése sikertelen.'));
    }
};

export const updateOrder = async (req, res, next) => {
    const { id } = req.params;
    const { quantity } = req.body;

    if (!quantity) {
        return next(createError(400, 'A mennyiség megadása kötelező.'));
    }

    try {
        const order = await Order.findById(id);

        if (!order) {
            return next(createError(404, 'A megadott azonosítóval nincs rendelés.'));
        }

        if (req.user.isAdmin || req.user._id.toString() === order.user.toString()) {
            const product = await Product.findById(order.product);

            if (product.stock + order.quantity < quantity) {
                return next(createError(400, 'A kívánt mennyiség nem áll rendelkezésre.'));
            }

            product.stock += order.quantity;
            product.stock -= quantity;
            await product.save();

            order.quantity = quantity;
            const savedOrder = await order.save();

            res.status(200).json(savedOrder);
        } else {
            return next(createError(403, 'Nincs jogosultság a művelet végrehajtásához.'));
        }
    } catch (error) {
        next(createError(500, 'A rendelés módosítása sikertelen.'));
    }
};
