//=========================//
//==REQUIRE DEPENDENCIES==//
//=========================//
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Instanciate express server
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
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
app.use('/login', require('./routes/htmlRoutes/usersRoutes'));//routes for user login
app.use('createUser', require('/routes/htmlRoutes/userRoutes'));//routes for user creation
app.use("/", require("./routes/htmlRoutes/appRoutes.js"));



//================//
//==START SERVER==//
//================//
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening on port ` + port);
