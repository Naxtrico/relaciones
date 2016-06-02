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
   $("#selection").css('display','block');    
   $("#yourSelectionAmbient").html( "<img src='img/masaje.jpg' class='resumeImg'>" + masaje+ "<div class='yourSelectionItemPrice'>110€</div>");
   $("#yourSelectionResumePrice").html("Total: 100€");
    $("#step1").slideUp();    
    $("#step2").slideDown();
    $( "#lugar" ).prop( "checked", true );
    $('.itemSteps').parents().find('.itemSteps--Checked').removeClass('itemSteps--Checked');
    $(this).parents('.itemSteps').next().addClass('itemSteps--Checked');
}); 

  $("#copa").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');   
   $("#yourSelectionAmbient").html( "<img src='img/copa.jpg' class='resumeImg'> " + masaje + "<div class='yourSelectionItemPrice'>80€</div>");
   $("#yourSelectionResumePrice").html("Total: 100€");   
   $("#step1").slideUp();    
   $("#step2").slideDown();
   $( "#lugar" ).prop( "checked", true );
   $('.itemSteps').parents().find('.itemSteps--Checked').removeClass('itemSteps--Checked');
    $(this).parents('.itemSteps').next().addClass('itemSteps--Checked');
});

  $("#correr").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');    
   $("#yourSelectionAmbient").html( "<img src='img/runner1.jpg' class='resumeImg'> " + masaje+ "<div class='yourSelectionItemPrice'>99€</div>");
   $("#yourSelectionResumePrice").html("Total: 80€");
   $("#step1").slideUp();    
    $("#step2").slideDown();
    $( "#lugar" ).prop( "checked", true );
    $('.itemSteps').parents().find('.itemSteps--Checked').removeClass('itemSteps--Checked');
    $(this).parents('.itemSteps').next().addClass('itemSteps--Checked');
});        

  $("#biblio").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');  
   $("#yourSelectionAmbient").html( "<img src='img/biblioteca.jpg' class='resumeImg'> " + masaje+ "<div class='yourSelectionItemPrice'>105€</div>");
   $("#yourSelectionResumePrice").html("Total: 100€");
  $("#step1").slideUp();    
    $("#step2").slideDown();
    $( "#lugar" ).prop( "checked", true );
    $('.itemSteps').parents().find('.itemSteps--Checked').removeClass('itemSteps--Checked');
    $(this).parents('.itemSteps').next().addClass('itemSteps--Checked');
});        

  $("#arregla").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block'); 
   $("#yourSelectionAmbient").html( "<img src='img/arreglar.jpg' class='resumeImg'> " + masaje+ "<div class='yourSelectionItemPrice'>112€</div>");
   $("#yourSelectionResumePrice").html("Total: 80€");
  $("#step1").slideUp();    
    $("#step2").slideDown();
    $( "#lugar" ).prop( "checked", true );
    $('.itemSteps').parents().find('.itemSteps--Checked').removeClass('itemSteps--Checked');
    $(this).parents('.itemSteps').next().addClass('itemSteps--Checked');
  
});        

  $("#ley").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');
   $("#yourSelectionAmbient").html( "<img src='img/esposas.jpg' class='resumeImg'> " + masaje+ "<div class='yourSelectionItemPrice'>95€</div>");
   $("#yourSelectionResumePrice").html("Total: 80€");
  $("#step1").slideUp();    
    $("#step2").slideDown();
  $( "#lugar" ).prop( "checked", true );
  $('.itemSteps').parents().find('.itemSteps--Checked').removeClass('itemSteps--Checked');
    $(this).parents('.itemSteps').next().addClass('itemSteps--Checked');
});

});






$(document).ready(function(){

  $("#arno1").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actor1.jpg' class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
   $('.itemSteps').parents().find('.itemSteps--Checked').removeClass('itemSteps--Checked');
    $(this).parents('.itemSteps').next().addClass('itemSteps--Checked');      
}); 

  $("#arno2").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actor2.jpg' class='resumeImg'> " + masaje);
  $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
   $('.itemSteps').parents().find('.itemSteps--Checked').removeClass('itemSteps--Checked');
    $(this).parents('.itemSteps').next().addClass('itemSteps--Checked');
});

  $("#arno3").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actor3.jpg' class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
   $('.itemSteps').parents().find('.itemSteps--Checked').removeClass('itemSteps--Checked');
    $(this).parents('.itemSteps').next().addClass('itemSteps--Checked');
});

  $("#arno4").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actor4.jpg' class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
   $('.itemSteps').parents().find('.itemSteps--Checked').removeClass('itemSteps--Checked');
    $(this).parents('.itemSteps').next().addClass('itemSteps--Checked');
});

  $("#actriz1").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actriz1.jpg'  class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
   $('.itemSteps').parents().find('.itemSteps--Checked').removeClass('itemSteps--Checked');
    $(this).parents('.itemSteps').next().addClass('itemSteps--Checked');
});

  $("#actriz2").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actriz2.jpg'  class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
   $('.itemSteps').parents().find('.itemSteps--Checked').removeClass('itemSteps--Checked');
    $(this).parents('.itemSteps').next().addClass('itemSteps--Checked');
});

   $("#actriz3").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actriz3.jpg'  class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
   $('.itemSteps').parents().find('.itemSteps--Checked').removeClass('itemSteps--Checked');
    $(this).parents('.itemSteps').next().addClass('itemSteps--Checked');
});

   $("#actriz4").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actriz4.jpg'  class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
   $('.itemSteps').parents().find('.itemSteps--Checked').removeClass('itemSteps--Checked');
    $(this).parents('.itemSteps').next().addClass('itemSteps--Checked');
});

});


/*$('#close_x').click(function (e) {
  e.preventDefault();

  if($('#selection').css('right') == '0px'){

    $('#selection').animate({ "right": "-=280px" }, "fast" );
    //$('#close').animate({ "right": "-=279px" }, "fast" );

  } else{    

    $('#selection').animate({ "right": "+=280px" }, "fast" );
    
  }           
});*/