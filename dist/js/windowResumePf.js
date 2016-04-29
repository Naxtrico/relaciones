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

  $("#masaje").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();    
   $("#yourSelectionAmbient").html( "<img src='img/masaje.jpg' class='resumeImg'>" + masaje+ "<div class='yourSelectionItemPrice'>110€</div>");
   $("#yourSelectionResumePrice").html("<div class='yourSelectionItemPrice'>Total: 110€</div>");
   if(($('#close').css('right') == '279px')){  

   }else {
    $('#selection').fadeIn(80).animate({ "right": "+=280px" }, "fast" );
    $('#close').fadeIn(80).animate({ "right": "+=279px" }, "fast" );
  }

}); 

  $("#copa").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();    
   $("#yourSelectionAmbient").html( "<img src='img/copa.jpg' class='resumeImg'> " + masaje + "<div class='yourSelectionItemPrice'>80€</div>");
   $("#yourSelectionResumePrice").html("Total: 80€");
   if(($('#close').css('right') == '279px')){

   }else {
    $('#selection').fadeIn(80).animate({ "right": "+=280px" }, "fast" );
    $('#close').fadeIn(80).animate({ "right": "+=279px" }, "fast" );
  }
});

  $("#correr").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();    
   $("#yourSelectionAmbient").html( "<img src='img/runner1.jpg' class='resumeImg'> " + masaje+ "<div class='yourSelectionItemPrice'>99€</div>");
   $("#yourSelectionResumePrice").html("Total: 99€");
   if(($('#close').css('right') == '279px')){ 

   }else {
    $('#selection').fadeIn(80).animate({ "right": "+=280px" }, "fast" );
    $('#close').fadeIn(80).animate({ "right": "+=279px" }, "fast" );
  }
});        

  $("#biblio").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();    
   $("#yourSelectionAmbient").html( "<img src='img/biblioteca.jpg' class='resumeImg'> " + masaje+ "<div class='yourSelectionItemPrice'>105€</div>");
   $("#yourSelectionResumePrice").html("Total: 105€");
   if(($('#close').css('right') == '279px')){  

   }else {
    $('#selection').fadeIn(80).animate({ "right": "+=280px" }, "fast" );
    $('#close').fadeIn(80).animate({ "right": "+=279px" }, "fast" );
  }
});        

  $("#arregla").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();    
   $("#yourSelectionAmbient").html( "<img src='img/arreglar.jpg' class='resumeImg'> " + masaje+ "<div class='yourSelectionItemPrice'>112€</div>");
   $("#yourSelectionResumePrice").html("Total: 112€");
   if(($('#close').css('right') == '279px')){ 

   }else {
    $('#selection').fadeIn(80).animate({ "right": "+=280px" }, "fast" );
    $('#close').fadeIn(80).animate({ "right": "+=279px" }, "fast" );
  }
});        

  $("#ley").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();    
   $("#yourSelectionAmbient").html( "<img src='img/esposas.jpg' class='resumeImg'> " + masaje+ "<div class='yourSelectionItemPrice'>95€</div>");
   $("#yourSelectionResumePrice").html("Total: 95€");
   if(($('#close').css('right') == '279px')){  

   }else {
    $('#selection').fadeIn(80).animate({ "right": "+=280px" }, "fast" );
    $('#close').fadeIn(80).animate({ "right": "+=279px" }, "fast" );
  }
});

});






$(document).ready(function(){

  $("#arno1").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actor1.jpg' class='resumeImg'> " + masaje);

   if(($('#close').css('right') == '279px')){  

   }else {
    $('#selection').fadeIn(80).animate({ "right": "+=280px" }, "fast" );
    $('#close').fadeIn(80).animate({ "right": "+=279px" }, "fast" );
  }

}); 

  $("#arno2").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actor2.jpg' class='resumeImg'> " + masaje);
   if(($('#close').css('right') == '279px')){  

   }else {
    $('#selection').fadeIn(80).animate({ "right": "+=280px" }, "fast" );
    $('#close').fadeIn(80).animate({ "right": "+=279px" }, "fast" );
  }
});

  $("#arno3").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actor3.jpg' class='resumeImg'> " + masaje);
   if(($('#close').css('right') == '279px')){ 

   }else {
    $('#selection').fadeIn(80).animate({ "right": "+=280px" }, "fast" );
    $('#close').fadeIn(80).animate({ "right": "+=279px" }, "fast" );
  }
});  

});


$('#close_x').click(function (e) {
  e.preventDefault();

  if($('#close').css('right') == '279px'){

    $('#selection').animate({ "right": "-=279px" }, "fast" );
    $('#close').animate({ "right": "-=279px" }, "fast" );

  } else{    

    $('#selection').fadeIn(80).animate({ "right": "+=279px" }, "fast" );
    $('#close').fadeIn(80).animate({ "right": "+=279px" }, "fast" );
  }           
});