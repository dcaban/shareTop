// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../../models");
var express = require("express");
var app = express();

// Routes
// =============================================================
module.exports = function(app) {

    // Add equipment
  // ***Receives "Cannot POST /api/equipmenthp" error in Postman - 11/30/2017
  // ***Receives "/api/equipmenthp 404 0.355 ms - 155" in terminal - 11/30/2017
  app.post("/api/equipment", function(req, res) {
    
        console.log("Equipment Data:");
        console.log(req.body);
    
        db.Equipment.create({
          model: req.body.model,
          speed: req.body.speed,
          ram: req.body.ram,
          screen_size: req.body.screen_size,
          price: req.body.price,
          description: req.body.description     
        }).then(function(results) {
          // `results` here would be the newly created piece of equipment
          res.end();
        });
      });

  // Add user account in passport
  app.post("/api/passport", function(req, res) {
    
        console.log("Passport Data:");
        console.log(req.body);
    
        db.Passport.create({
          emailaddress: req.body.emailaddress,
          password: req.body.password        
        }).then(function(results) {
          // `results` here would be the newly created user.
          res.end();
        });
      });

  // Add customer
  app.post("/api/customer", function(req, res) {
    
        console.log("Customer Data:");
        console.log(req.body);
    
       db.Customer.create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          address: req.body.address,
          address2: req.body.address2,
          city: req.body.city,
          state: req.body.state,
          postal_code: req.body.postal_code,
          phone: req.body.phone,
          create_date: req.body.create_date,
          last_update: req.body.last_update     
        }).then(function(results) {
          // `results` here would be the newly created customer.
          res.end();
        });
      });
       // POST route for saving a new post
    app.post("/api/posts", function(req, res) {
        console.log(req.body);
        db.Post.create({
          title: req.body.title,
          body: req.body.body,
          category: req.body.category
        })
        .then(function(dbPost) {
          res.json(dbPost);
        });
      });
      //post for a new search
    app.post("/api/search", function(req, res) {
        console.log("Server side body:",req.body);
        res.send("Post to search")
      //ToDO: Make new search model
        // db.Search.findAll({
        //   title: req.body.title,
        //   body: req.body.body,
        //   category: req.body.category
        // })
        // .then(function(dbPost) {
        //   res.json(dbPost);
        // });
      });
    };