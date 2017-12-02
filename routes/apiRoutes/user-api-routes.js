// api-routes.js - this file offers a set of routes for displaying and saving data to the db


// Dependencies
// Requiring our Todo model
var db = require("../../models");
var express = require("express");
var app = express();

// Routes
module.exports = function (app) {

// PUT route for updating password in useraccount in Passport
  app.put("/api/passport", function (req, res) {
    db.Passport.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function (dbPassport) {
      res.json(dbPassport);
    });
  });

// PUT route for updating user account in Passport
  app.put("/api/passport", function (req, res) {
    db.Passport.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function (dbUserAccount) {
      res.json(dbUserAccount);
    });
  });
};