const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    userGroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserGroup'
    }
});

userSchema.pre('save', async function(next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const hashed = await bcrypt.hash(this.password, 10);
        this.password = hashed;
        return next();
    } catch (err) {
        return next(err);
    }
});

userSchema.methods.comparePassword = async function(candidate, next) {
    try {
        const isMatch = await bcrypt.compare(candidate, this.password);
        return isMatch;
    } catch (err) {
        return next(err);
    }
}

const User = mongoose.model('User', userSchema);

module.exports = User;