var max = 100;

  $('#heigthBoost').click(function(){
    //if height maxed reset height to 10px
    if ($('#rectangle').height() < max){
      $('#rectangle').css('height', '+=10px');
    }else{
      $('#rectangle').css('height', '50px');
    };
  });
  //click button change color to green
  $('#green').click(function(){
    $('#rectangle').css({'background-color': 'green'});
  });
  //click button change color to default
  $('#resetColor').click(function(){
    $('#rectangle').css({'background-color': '#D13B7F'});
  });
  //click button make div disappear
  $('#disappear').click(function(){
    $('#rectangle').hide();
  });
  //click button make div reappear
  $('#reappear').click(function(){
    $('#rectangle').show();
  });
