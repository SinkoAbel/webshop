import User from "../models/User.js";
import { createError } from "../utils/error.js";

// Get all users
export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find().populate("userGroup", "-__v");
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};

// Get user by ID
export const getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId).populate("userGroup", "-__v");
        if (!user) {
            throw createError(404, "User not found");
        }
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

// Create new user
export const createAdmin = async (req, res, next) => {
    const { username, password, email } = req.body;
    const isAdmin = true;
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            next(createError(400, "Username or email already exists"));
        }
        const user = new User({ username, password, email, isAdmin });
        const result = await user.save();
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
};

// Update user by ID
export const updateUserById = async (req, res, next) => {
    const { username, password, email, userGroupId } = req.body;
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            throw createError(404, "User not found");
        }
        // Check if new username or email already exists
        const existingUser = await User.findOne({
            $or: [{ username, _id: { $ne: user._id } }, { email, _id: { $ne: user._id } }],
        });
        if (existingUser) {
            throw createError(400, "Username or email already exists");
        }
        // Check if new user group exists
        if (userGroupId) {
            const userGroup = await UserGroup.findById(userGroupId);
            if (!userGroup) {
                throw createError(400, "User group not found");
            }
            user.userGroup = userGroup._id;
        }
        user.username = username || user.username;
        user.password = password || user.password;
        user.email = email || user.email;
        const result = await user.save();
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

// Delete user by ID
export const deleteUserById = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userId);
        if (!user) {
            throw createError(404, "User not found");
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        next(err);
    }
};
