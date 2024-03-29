const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.signup = async (req, res, next) =>{
    try{

        const newUser = await User.create(req.body);
        res.status(201).json({
            status:'success',
            data:{
                user: newUser
            }
        });
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
};

