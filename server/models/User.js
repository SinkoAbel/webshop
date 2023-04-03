const mongoose = require('mongoose');

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

export default mongoose.model('User', userSchema);
