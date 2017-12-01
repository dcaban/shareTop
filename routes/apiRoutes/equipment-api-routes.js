var db = require("../../models");

module.exports = function(app) {
  app.get("/api/equipment", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Equipment.findAll({
      include: [db.Post]
    }).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  app.get("/api/equipment/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Equipment.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  app.post("/api/equipment", function(req, res) {
    db.Equipment.create(req.body).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  app.delete("/api/equipment/:id", function(req, res) {
    db.Equipment.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

};
