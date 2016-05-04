/*$(document).ready(function(){
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
*/


$(document).ready(function(){

  $("#persona").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();    
   $("#yourSelectionMode").html( "<img src='img/imagen-enpersona-1.jpg' class='resumeImg'>" + masaje+ "<div class='yourSelectionItemPrice'>25€</div>");
   $("#yourSelectionResumePrice").html("Total: 25€");
   if(($('#selection').css('right') == '280px')){

   }if(($('#selection').css('right') == '0px')){}

   else {
    $('#selection').fadeIn(80).animate({ "right": "+=280px" }, "fast" );
    $('#close').fadeIn(80);
  }

}); 

  $("#carta").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();    
   $("#yourSelectionMode").html( "<img src='img/imagen-carta-2.jpg' class='resumeImg'> " + masaje + "<div class='yourSelectionItemPrice'>15€</div>");
   $("#yourSelectionResumePrice").html("Total: 15€");
   if(($('#selection').css('right') == '280px')){

   }if(($('#selection').css('right') == '0px')){}

   else {
    $('#selection').fadeIn(80).animate({ "right": "+=280px" }, "fast" );
    $('#close').fadeIn(80);
  }
});

  $("#llamada").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();    
   $("#yourSelectionMode").html( "<img src='img/imagen-mobil-3.jpg' class='resumeImg'> " + masaje+ "<div class='yourSelectionItemPrice'>10€</div>");
   $("#yourSelectionResumePrice").html("Total: 10€");
   if(($('#selection').css('right') == '280px')){

   }if(($('#selection').css('right') == '0px')){}

   else {
    $('#selection').fadeIn(80).animate({ "right": "+=280px" }, "fast" );
    $('#close').fadeIn(80);
  }
});        

  $("#sms").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();    
   $("#yourSelectionMode").html( "<img src='img/imagen-sms-4.jpg' class='resumeImg'> " + masaje+ "<div class='yourSelectionItemPrice'>5€</div>");
   $("#yourSelectionResumePrice").html("Total: 5€");
   if(($('#selection').css('right') == '280px')){

   }if(($('#selection').css('right') == '0px')){}

   else {
    $('#selection').fadeIn(80).animate({ "right": "+=280px" }, "fast" );
    $('#close').fadeIn(80);
  }
});

});      



$('#close_x').click(function (e) {
  e.preventDefault();

  if($('#selection').css('right') == '0px'){

    $('#selection').animate({ "right": "-=280px" }, "fast" );
    //$('#close').animate({ "right": "-=279px" }, "fast" );

  } else{    

    $('#selection').animate({ "right": "+=280px" }, "fast" );
    
  }           
});