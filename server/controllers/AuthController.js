import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { createError } from '../utils/error.js';
import User from '../models/User.js';


export const register = async (req, res, next) => {
  const { username, password, email } = req.body;

  try {
    const userExists = await User.findOne({ $or: [{ username }, { email }] });
    if (userExists) {
      next(createError(400, 'Username or email already exists'));
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ username, password: hashedPassword, email });
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || 'Something went wrong' });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      next(createError(404, 'User not found'));
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      next(createError(401, 'Invalid credentials'));
    }

    res.status(200).json({
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      _id: user._id,
    });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || 'Something went wrong' });
  }
};
