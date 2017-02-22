console.log('Starting up the server');

var express = require('express');
var app = express();

app.use(express.static('server/public'));

app.listen(5000);
