var db = require("../models");

module.exports = function(app) {
  // Find all equipment and return them to the user with res.json
  app.get("/api/equipment", function(req, res) {
    db.Equipment.findAll({}).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  app.get("/api/equipment/:code", function(req, res) {
     // Find one Equipment with the code in req.params.id and return them to the user with res.json
    db.Equipment.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbEquipment) {
      res.json(dbAuthor);
    });
  });

  app.post("/api/equipment", function(req, res) {
     // Create an Equipment with the data available to us in req.body
    console.log(req.body);
    db.Equipment.create(req.body).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  app.delete("/api/equipment/:code", function(req, res) {
    // Delete the Equipment with the code available to us in req.params.code
    db.Equipment.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

};
