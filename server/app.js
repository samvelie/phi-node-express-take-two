console.log('Starting up the server');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true})); // this creates req.body

var fishiesList = [{name: 'walleye'}, {name: 'pike'}, {name: 'muskie'}];

app.get('/fish', function(req, res){
  res.send(fishiesList);
});

// handle the request for the first fish
app.get('/fish/first', function(req, res){
  res.send(fishiesList[0]);
});

// handle the request for the last fish
app.get('/fish/last', function(req, res){
  var lastIndex = fishiesList.length - 1;
  res.send(fishiesList[lastIndex]);
});

// handle request for the name of the first fish
app.get('/fish/first/name', function(req, res){
  res.send(fishiesList[0].name);
});

// handle request for the name of the last fish
app.get('/fish/last/name', function(req, res){
  var lastIndex = fishiesList.length - 1;
  res.send(fishiesList[lastIndex].name);
});

// for (var i = 0; i < fishiesList.length; i++) {
//   fishiesList[i].name ==
// }

app.post('/fish/new', function(req, res){
  var newFish = req.body;
  if(newFish.name.length == '' || newFish.name.charAt(0)==' '){
    res.sendStatus(400);
  } else{
    fishiesList.push(newFish);
    res.sendStatus(200);
  }
});


app.listen(5000);
