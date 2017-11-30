// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Display ALL equipment in database[shareTop]
  // ***😊This api function works - 11/30/2017
  app.get("/api/:equipment", function(req, res) {
    db.Equipment.create({
      model: req.body.model
    }).then(function(results) {
      res.end();
    });
  });

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

  // DELETE route for deleting equipment
  // ***😊This api function works - 11/30/2017
  app.delete("/api/equipment/:id", function(req, res) {
    db.Equipment.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  // DELETE route for deleting user account in Passport
  // 😊This api function works - 11/30/2017
  app.delete("/api/passport/:id", function(req, res) {
    db.Passport.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbPassport) {
      res.json(dbPassport);
    });
  });

  // PUT route for updating equipment
  // ***Receives "Cannot PUT /api/equipment" error in Postman - 11/30/2017
  // ***Receives "PUT /api/equipment 404 2.172 ms - 152" in terminal - 11/30/2017
  app.put("/api/equpiment", function(req, res) {
    db.Equipment.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  // PUT route for updating password in useraccount in Passport
  app.put("/api/passport", function(req, res) {
    db.Passport.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbPassport) {
      res.json(dbPassport);
    });
  });

  // PUT route for updating user account in Passport
  app.put("/api/passport", function(req, res) {
    db.Passport.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbUserAccount) {
      res.json(dbUserAccount);
    });
  });

    // Search for specific equipment (or all equipment) then provides JSON
    // ***😊This displays all equipment. 🙁Working on figuring out how to get specific equipment to display. - 11/30/2017
    app.get("/api/:equipment?", function(req, res) {
      
          // If the user provides a specific piece of equipment in the URL...
          if (req.params.equipment) {
      
            // Then display the JSON for ONLY that equipment.
            // (Note how we're using the ORM here to run our searches)
            db.Equipment.findOne({
              where: {
                routeName: req.params.equipment
              }
            }).then(function(result) {
              return res.json(result);
            });
          }
      
          // Otherwise...
          else {
            // Otherwise display the data for all of the equipment.
            // (Note how we're using Sequelize here to run our searches)
            db.Equipment.findAll({})
              .then(function(result) {
                return res.json(result);
              });
          }
      
        });
      
    // Get route for returning posts of a specific model
    app.get("/api/posts/model/:model", function(req, res) {
      db.Post.findAll({
        where: {
          model: req.params.model
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
    });
  
    // Get route for retrieving a single post
    app.get("/api/posts/:id", function(req, res) {
      db.Post.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
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
  
    // DELETE route for deleting posts
    app.delete("/api/posts/:id", function(req, res) {
      db.Post.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
    });
  
    // PUT route for updating posts
    app.put("/api/posts", function(req, res) {
      db.Post.update(req.body,
        {
          where: {
            id: req.body.id
          }
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
