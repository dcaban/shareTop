//========================//
//==REQUIRE DEPENDENCIES==//
//========================//
const express = require('express');
const router = require('express-promise-router')();

const equipController = require('../../controllers/equipController');

//Equipment routing
router.route('/createEquip')
    .post(equipController.createEquip);

router.route('/updateEquip')
    .put(equipController.updateEquip);

router.route('/deleteEquip')
    .delete(equipController.deleteEquip);
   
 router.route('/searchEquip')
    .get(equipController.searchEquip);


//=================//
//==EXPORT MODULE==//
//=================//
module.exports = router;