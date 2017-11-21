//=========================//
//==REQUIRE DEPENDENCIES==//
//=========================//
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Instanciate express server
const app = express();

//==============//
//==MIDDLEWARE==//
//==============//
//Use morgan to see request traffic in console
app.use(morgan('dev'));
//Use body-parser to parse body of responses
app.use(bodyParser.json());

//==================//
//==SET HANDLEBAES==//
//==================//
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//==========//
//==ROUTES==//
//==========//
// Data
var lunches = [
    {
      lunch: "Beet & Goat Cheese Salad with minestrone soup."
    }, {
      lunch: "Pizza, two double veggie burgers, fries with a big glup"
    }
  ];
  
  app.get("/", function(req, res) {
    res.render("index", {
      foods: lunches,
      eater: "david"
    });
  });


//================//
//==START SERVER==//
//================//
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening on port ` + port);
