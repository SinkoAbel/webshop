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

export default mongoose.model('UserGroup', userGroupSchema);
