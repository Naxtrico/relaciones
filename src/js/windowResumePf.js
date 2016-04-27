$(document).ready(function(){
  var windowIsOpen = false;

  var selectAmbient = function(elem) {
    var ambiente = elem.val();

    $('#WindowMessage-text').text('Has elegido el ambiente:');

    if($('#WindowMessage-ambient').length <= 0) {
      $('<li>', {
        text: ambiente,
        id: 'WindowMessage-ambient'
      }).prependTo($('#WindowMessage-list'));
    } else {
        $('#WindowMessage-ambient').text(ambiente);
    } 
  };

  var toggleWindow = function() {
    $('#WindowMessage-button').show();
    
    if(windowIsOpen){

      $('#WindowMessage').removeClass('is_open');

    } else {
        $('#WindowMessage').addClass('is_open');
    }
   
  } 

  $('#masaje').on('click', function() {
    selectAmbient($(this));
  });

   $('#copa').on('click', function() {
    selectAmbient($(this));
  });

  $('#correr').on('click', function() {
    selectAmbient($(this));
  });

  $('#biblio').on('click', function() {
    selectAmbient($(this));
  });

    $('#arregla').on('click', function() {
    selectAmbient($(this)); 
  });
      $('#ley').on('click', function() {
    selectAmbient($(this));         
  });

});



/*$(document).ready(function(){

  $("#masaje").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();    
   $("#yourSelection").text( "Has elegido el ambiente: " + masaje);

   if(($('#close').css('right') == '250px')){  

   }else {
    $('#selection').fadeIn(80).animate({ "right": "+=250px" }, "fast" );
   $('#close').fadeIn(80).animate({ "right": "+=250px" }, "fast" );
   }

 }); 

  $("#copa").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();    
   $("#yourSelection").text( "Has elegido el ambiente: " + masaje);
   if(($('#close').css('right') == '250px')){  

   }else {
    $('#selection').fadeIn(80).animate({ "right": "+=250px" }, "fast" );
   $('#close').fadeIn(80).animate({ "right": "+=250px" }, "fast" );
   }
 });

  $("#correr").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();    
   $("#yourSelection").text( "Has elegido el ambiente: " + masaje);
  if(($('#close').css('right') == '250px')){  

   }else {
    $('#selection').fadeIn(80).animate({ "right": "+=250px" }, "fast" );
   $('#close').fadeIn(80).animate({ "right": "+=250px" }, "fast" );
   }
 });        

  $("#biblio").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();    
   $("#yourSelection").text( "Has elegido el ambiente: " + masaje);
   if(($('#close').css('right') == '250px')){  

   }else {
    $('#selection').fadeIn(80).animate({ "right": "+=250px" }, "fast" );
   $('#close').fadeIn(80).animate({ "right": "+=250px" }, "fast" );
   }
 });        

  $("#arregla").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();    
   $("#yourSelection").text( "Has elegido el ambiente: " + masaje);
   if(($('#close').css('right') == '250px')){  

   }else {
    $('#selection').fadeIn(80).animate({ "right": "+=250px" }, "fast" );
   $('#close').fadeIn(80).animate({ "right": "+=250px" }, "fast" );
   }
 });        

  $("#ley").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();    
   $("#yourSelection").text( "Has elegido el ambiente: " + masaje);
  if(($('#close').css('right') == '250px')){  

   }else {
    $('#selection').fadeIn(80).animate({ "right": "+=250px" }, "fast" );
   $('#close').fadeIn(80).animate({ "right": "+=250px" }, "fast" );
   }
 });

});

$('#close_x').click(function (e) {
  e.preventDefault();

  if($('#close').css('right') == '250px'){

    $('#selection').animate({ "right": "-=250px" }, "fast" ).fadeOut(80);
    $('#close').animate({ "right": "-=250px" }, "fast" );

  } else{    

    $('#selection').fadeIn(80).animate({ "right": "+=250px" }, "fast" );
    $('#close').fadeIn(80).animate({ "right": "+=250px" }, "fast" );
  }           
});*/