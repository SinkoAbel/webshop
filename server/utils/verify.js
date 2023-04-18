import {createError} from "./error.js";
import User from "../models/User.js";

export const verifyUser = async (req, res, next) => {
    try {
        const userID = req.params.id;
        const user = await User.findById(userID);

        if (!user)
            next(createError(403, "You're not authorized!"));
    } catch (err) {
        console.log(err);
    }

    next();
};

export const verifyAdmin = async (req, res, next) => {
    try {
        const userID = req.headers['userId'];
        if (userID === null)
            next(createError(400, "You're not authorized!"));

        const user = await User.findById(userID);

        if (!user)
            next(createError(403, "You're not authorized!"));
        if (!user.isAdmin)
            next(createError(403, "You do not have the permissions to access!"));

    } catch (err) {
        console.log(err);
    }
    next();
};