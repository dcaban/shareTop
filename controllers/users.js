
//=====//
//====//
//=====//
// const User = require('../models/customer');
const express = require('express');
const Joi = require('joi');
const db = require('../models');
const bcrypt = require('bcryptjs');


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

//hashing function
let hashPassword = async (password) => {
    try {
        console.log('Hashing...');
        const salt = await bcrypt.genSalt(10);
        console.log('salt:', salt);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        throw new Error ('Hashing failed', error);
    }
};


module.exports = {
    //////////////////////////////////////////////////////
    signUp: async (req, res, next) => {
        console.log('req.body');
        // console.log(req.body);
        console.log('Called: userController.signUp()');
        console.log('Validation schema results');
        //Validate input data
        const result = Joi.validate(req.body, userSchema);
        console.log(result);
        if (result.error) {
            console.log('error!');//code for display error message           
            res.redirect('/signup'); //reload create user form page.
            return; 
        }
        
        //check if email exists//
        console.log('Check if email exists.');
        console.log(req.body.emailaddress);
        var emailChecker = db.Customer.findOne({
            where: {
                emailaddress: req.body.emailaddress
            }
        }).then(function(dbCustomer) {
            res.json(dbCustomer);
        });

        console.log('Results', emailChecker);

        if (emailChecker) {
            console.log('email exists!')//account already exists error message
            res.redirect('/signup');//redirect to signUp
            return;
        } 

        console.log('Email is unique. Go on to hashing PW.');
        //password hashing
        const hash = await hashPassword(req.body.password);
        console.log('hash', hash);

        //post: create user sequalize functions
        db.Customer.create(req.body).then(function(dbCustomer) {
            res.json(dbCustomer);
        });
    },
    //////////////////////////////////////////////////////////
    signIn: async (req, res, next) => {
        console.log('req.body');
        console.log(req.body);
        console.log('Called: userController.signIn()');
    },
    //////////////////////////////////////////////////////////
    secret: async (req, res, next) => {
        console.log('Called: userController.secret()');
    },
    ///////////////////////////////////////////////////////////
    search: async (req, res, next) => {
        console.log('Called: userController.search()');
    },
    ////////////////////////////////////////////////////////////
    profileUpdate: async (req, res, next) => {
        console.log('Called: userController.profileUpdate()');
    },


}


