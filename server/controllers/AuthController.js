import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { createError } from '../utils/error.js';
import User from '../models/User.js';


export const register = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const userExists = await User.findOne({ $or: [{ username }, { email }] });
    if (userExists) {
      throw createError(400, 'Username or email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ username, password: hashedPassword, email });
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ message: 'User created', token });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || 'Something went wrong' });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      throw createError(404, 'User not found');
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw createError(401, 'Invalid credentials');
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || 'Something went wrong' });
  }
};
