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

module.exports = {

  fishiesList: fishiesList,

  isDupe: isDupe,

}
