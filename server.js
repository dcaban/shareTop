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


//==========//
//==ROUTES==//
//==========//
app.use('/users', require('./routes/htmlRoutes/usersRoutes'));


//================//
//==START SERVER==//
//================//
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening on port ` + port);
