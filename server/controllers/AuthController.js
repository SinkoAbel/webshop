import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { createError } from '../utils/error.js';
import User from '../models/User.js';

const secretKey = 'your-secret-key';

const AuthController = {
  async login(req, res, next) {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username });

      if (!user) {
        throw createError(401, 'Invalid credentials');
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        throw createError(401, 'Invalid credentials');
      }

      const token = jwt.sign(
        { userId: user._id },
        secretKey,
        { expiresIn: '1h' }
      );

      res.status(200).json({ token });
    } catch (err) {
      next(err);
    }
  },

  async register(req, res, next) {
    const { username, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });

      if (existingUser) {
        throw createError(409, 'Username or email already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({
        username,
        email,
        password: hashedPassword,
      });

      await user.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      next(err);
    }
  },
};

