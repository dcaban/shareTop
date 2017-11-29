//=====//
//====//
//=====//
const User = require('../models/customer');

module.exports = {
    signUp: async (req, res, next) => {
        console.log('Called: userController.signUp()');
    },

    signIn: async (req, res, next) => {
        console.log('Called: userController.signIn()');
        var name = req.body.first_name;
        console.log(name);
    },

    secret: async (req, res, next) => {
        console.log('Called: userController.secret()');
    },
}


