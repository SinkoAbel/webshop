import {createError} from "./error.js";
import User from "../models/User.js";

export const verifyUser = async (req, res, next) => {
    try {
        const userID = req.headers.userid;
        const user = await User.findById(userID);

        if (!user)
            next(createError(403, "You're not authorized!"));
    } catch (err) {
        console.log(err);
    }

    if (req.user) {
        console.log(`User is set: ${req.user._id}`);
    } else {
        console.log('User is not set.');
    }


    next();
};

export const verifyAdmin = async (req, res, next) => {
    try {
        const userID = req.headers.userid;
        if (userID === null || userID === undefined)
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