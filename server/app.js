console.log('Starting up the server');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var fishModule = require('./fish-module.js')

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true})); // this creates req.body

//fishiesList formerly here

app.get('/fish', function(req, res){
  res.send(fishModule.fishiesList);
});

// handle the request for the first fish
app.get('/fish/first', function(req, res){
  res.send(fishModule.fishiesList[0]);
});

// handle the request for the last fish
app.get('/fish/last', function(req, res){
  var lastIndex = fishModule.fishiesList.length - 1;
  res.send(fishModule.fishiesList[lastIndex]);
});

// handle request for the name of the first fish
app.get('/fish/first/name', function(req, res){
  res.send(fishModule.fishiesList[0].name);
});

// handle request for the name of the last fish
app.get('/fish/last/name', function(req, res){
  var lastIndex = fishModule.fishiesList.length - 1;
  res.send(fishModule.fishiesList[lastIndex].name);
});



app.post('/fish/new', function(req, res){
  var newFish = req.body;
  if(newFish.name.length == '' || newFish.name.charAt(0)==' '){
    res.sendStatus(400);
  } else if (fishModule.isDupe(newFish)){
    res.sendStatus(400)
  } else {
    fishModule.fishiesList.push(newFish);
    res.sendStatus(200);
  }
});


app.listen(5000);
