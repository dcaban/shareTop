var express = require("express");

var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/signup", function(req, res) {
    res.render("createUser");
  })
  .post((req, res, next) => { //post createUser form data
    console.log('req.body', req.body);
  });
  router.get("/", function(req, res) {
    res.render("index");
  });
  router.get("/login", function(req, res) {
    res.render("login");
  });

  router.get("/results", function(req, res) {
    res.render("results");
  });
  router.get("/admin", function(req, res) {
    res.render("admin");
  });
  router.get("/addequipment", function(req, res) {
    res.render("addequipment");
  });
  router.get("/security", function(req, res) {
    res.render("security");
  });
  router.get("/edit", function(req, res) {
    res.render("edit");
  });
  router.get("/tech", function(req, res) {
    res.render("tech");
  });
  router.get("/next", function(req, res) {
    res.render("next");
  });


// Export routes for server.js to use.
module.exports = router;
