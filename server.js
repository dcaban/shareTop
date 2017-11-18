// require dependencies
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// instanciate express server
const app = express();

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
//routes

//start sever
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening on port ` + port);
