const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
       password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: string,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isUser: {
        type: Boolean,
        default: true,
    }
    

})

const User = mongoose.model('User', userSchema);

module.export = User;