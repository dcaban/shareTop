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
    },

    secret: async (req, res, next) => {
        console.log('Called: userController.secret()');
    },
    search: async (req, res, next) => {
        console.log('Called: userController.search()');
    }
}


