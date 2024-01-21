const mongoose = require('mongoose');


// name userid password

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,'please tell us your name!']
    },
    userid:{
        type:String,
        required:[true,'Please tell us your userid'],
        unique:true,
        lowercase: true
    },
    password:{
        type: String,
        required: [true,'Please confirm your password'],
        minlength: 0
    },
    passwordConfirm:{
        type: String,
        required:[true,'Please confirm your password']
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;