import {createError} from "./error.js";
import User from "../models/User.js";

export const verifyUser = async (req, res, next) => {
    const userID = req.params.id;
    const user = await User.findById(userID);

    if (!user)
        next(createError(403, "You're not authorized!"));

    next();
};

export const verifyAdmin = async (req, res, next) => {
    const userID = req.params.id;
    const user = await User.findById(userID);

    if (!user)
        next(createError(403, "You're not authorized"));
    if (!user.isAdmin)
        next(createError(403, "You do not have the permissions to access!"));

    next();
};