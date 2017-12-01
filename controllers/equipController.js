
//=====//
//====//
//=====//
// const User = require('../models/customer');
const express = require('express');
const Joi = require('joi');
const db = require('../models');

//Validation Schema
const equipSchema = Joi.object().keys({
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

// Equipment API and sequelize function calls
module.exports = {
   allEquip: async (req, res, next) => {//select all equipment avaiable from equip table
    console.log('Called: equipmentController.allEquip()');
   },
   
   equipByOwner: async (req, res, next) => {//returns all equip where email = sessionStorage.email
    console.log('Called: equipmentController.equipByOwner()');
   }
}