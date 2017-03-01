var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fishModule = require('./fish-module.js');
var port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/fish', fishModule); //now routing all /fish requests to fish-module

app.listen(port, function(){
  console.log('Starting up the server on port', port);
});
