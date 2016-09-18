// server.js

// set up ========================
var express  	= require('express');
var app      	= express();
var morgan 		= require('morgan');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// listen (start app with node server.js) ======================================
app.listen(8082);
console.log("App listening on port 8082");