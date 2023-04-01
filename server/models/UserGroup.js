const mongoose = require('mongoose');

const userGroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    permissions: [{
        type: String,
        required: true
    }]
});

const UserGroup = mongoose.model('UserGroup', userGroupSchema);

module.exports = UserGroup;