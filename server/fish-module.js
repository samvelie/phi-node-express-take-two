var express = require('express');
var router = express.Router();

var fishiesList = [
  {name: 'walleye',
  dateAdded: 'Wed Feb 22 2017'},
  {name: 'pike',
  dateAdded: 'Wed Feb 22 2017'},
  {name: 'muskie',
  dateAdded: 'Wed Feb 22 2017'}
];

var isDupe = function(fishObject) {
  for (var i = 0; i < fishiesList.length; i++) {
        if(fishiesList[i].name.toLowerCase() == fishObject.name.toLowerCase()){
          return true;
        }
  }
}

//sends object on initial get of /fish
router.get('/', function(req, res){
  res.send(fishiesList);
});

// handle the request for the first fish
router.get('/first', function(req, res){
  res.send(fishiesList[0]);
});

// handle the request for the last fish
router.get('/last', function(req, res){
  var lastIndex = fishiesList.length - 1;
  res.send(fishiesList[lastIndex]);
});

// handle request for the name of the first fish
router.get('/first/name', function(req, res){
  res.send(fishiesList[0].name);
});

// handle request for the name of the last fish
router.get('/last/name', function(req, res){
  var lastIndex = fishiesList.length - 1;
  res.send(fishiesList[lastIndex].name);
});

router.post('/new', function(req, res){
  var newFish = req.body;
  if(newFish.name == '' || newFish.name.charAt(0)==' '){ //checks if entered name is an empty string or begins with a space
    res.sendStatus(400);
  } else if (isDupe(newFish)){
    res.sendStatus(400)
  } else {
    fishiesList.push(newFish);
    res.sendStatus(200);
  }
});

module.exports = router;
