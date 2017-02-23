console.log('sourced!');
$(document).ready(function(){
  console.log('jquery was correctly sourced!');
  $.ajax({
    type: 'GET',
    url: '/fish/first/name',
    success: function(response) {
      console.log('response', response);
      $('#firstFishy').text(response);
    }
  });

  getFishData();

  function getFishData() {
    $.ajax({
      type: 'GET',
      url: '/fish',
      success: function(response) {
        console.log('response', response);
        $('#fishTank').empty();
        for (var i = 0; i < response.length; i++) {
          $('#fishTank').append('<li>' + response[i].name + ' ' + response[i].dateAdded + '</li>');
        }
      }
    });
  }

  $('#newFishButton').on('click', function(){
    var newFishObject = {};
    var d = new Date();
    newFishObject.name = $('#newFishName').val();
    newFishObject.dateAdded = d.toDateString();
    $.ajax({
      type: 'POST',
      url: '/fish/new',
      data: newFishObject,
      success: function(response){
        console.log(response);
        getFishData();
      },
      error: function(error){
        $('#errorMsg').append('TRY AGAIN FISHMASTER');
      }
    });
    setTimeout(function(){
      $('#errorMsg').empty();
    }, 1000)
  });
});
