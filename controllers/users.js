
//=====//
//====//
//=====//
// const User = require('../models/customer');
const express = require('express');
const Joi = require('joi');
const db = require('../models');

//Validation Schema
const userSchema = Joi.object().keys({
    emailaddress: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9!@$~?-_ ]{3,20}$/).required(),
    confirmPassword: Joi.any().valid(Joi.ref('password')).required(),
    first_name: Joi.string().regex(/^[a-zA-Z ]{3,50}$/),
    last_name: Joi.string().regex(/^[a-zA-Z -]{3,50}$/),
    address: Joi.string().regex(/^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/),
    city: Joi.string().regex(/^[a-zA-Z ]{3,50}$/),
    postal_code: Joi.string().regex(/^[0-9]{5}$/),
    state: Joi.any(),
    action: Joi.any()
});


module.exports = {
    signUp: async (req, res, next) => {
        console.log('req.body');
        // console.log(req.body);
        console.log('Called: userController.signUp()');
        console.log('Validation schema results');
        //input error message 
        const result = Joi.validate(req.body, userSchema);
        console.log(result);
        if (result.error) {
            //code for display error message
           
            res.redirect('/signup'); //reload create user form page.
            return; 
        }
        
        //post sequalize functions
        db.Customer.create(req.body).then(function(dbCustomer) {
            res.json(dbCustomer);
        });
    },

    signIn: async (req, res, next) => {
        console.log('req.body');
        console.log(req.body);
        console.log('Called: userController.signIn()');
    },

    secret: async (req, res, next) => {
        console.log('Called: userController.secret()');
    },

    search: async (req, res, next) => {
        console.log('Called: userController.search()');
    },

    profileUpdate: async (req, res, next) => {
        console.log('Called: userCOntroller.profileUpdate()');
    }
}


