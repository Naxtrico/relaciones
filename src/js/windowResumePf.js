$(document).ready(function(){

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
});