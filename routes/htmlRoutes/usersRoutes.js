//========================//
//==REQUIRE DEPENDENCIES==//
//========================//
const express = require('express');
const router = require('express-promise-router')();

const userController = require('../../controllers/users');

router.route('/signup')
    .post(userController.signUp);

router.route('/signin')
    .post(userController.signIn);

router.route('/secret')
    .get(userController.secret);



//=================//
//==EXPORT MODULE==//
//=================//
module.exports = router;
