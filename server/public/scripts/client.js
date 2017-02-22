console.log('sourced!');
$(document).ready(function(){
  console.log('jquery was correctly sourced!');
  $.ajax({
    type: 'GET',
    url: '/fish',
    success: function(response) {
      console.log('response', response);
      for (var i = 0; i < response.length; i++) {
        $('#fishTank').append('<li>' + response[i].name + '</li>');
      }
    }
  });

  $.ajax({
    type: 'GET',
    url: '/fish/first/name',
    success: function(response) {
      console.log('response', response);
      $('#firstFishy').text(response);
    }
  });
});
