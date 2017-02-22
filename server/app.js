console.log('Starting up the server');

var express = require('express');
var app = express();

app.use(express.static('server/public'));

var fishiesList = [{name: 'walleye'}, {name: 'pike'}];

app.get('/fish', function(req, res){
  res.send(fishiesList);
});

// handle the request for the first fish


// handle the request for the last fish



app.listen(5000);
