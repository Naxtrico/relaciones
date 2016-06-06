  var ambient= $('#ambient');

$(document).ready(function () {	    

$(window).resize(function(){
	var resizeTimer = null;




   clearTimeout(resizeTimer); //ignore previous trigger

   resizeTimer= setTimeout(function(){ //wait to execute handler again
     //execute actual handler here
   },10);

   if($(window).innerWidth() <= 1006) {
   	  $("#ambient").detach();
      $("#step1").append("<div class='slideshowDe' id='ambient'>  <div class='prevDe'>&lt;</div>  <div class='nextDe'>&gt;</div>  <ul class='slidesDe'>   <li id='slideDe-1' data-n='1'>      <div class='contentCardsSlide'>       <div class='cardDejar' style='background-image: url(img/imagen-carta-2.jpg);'>          <div class='cardDejar_body'>              <div class='cardDejar_description'>             <h2 class='cardDejar_title'>Carta correo</h2>                     <p>               Un método clásico pero que demuestra cariño hacia la persona que estas dejando, le explicaremos a esa persona que quieres los motivos que te han llevado a esto.              </p>                            </div>          </div>          <div class='cardDejar_footer'>            <a href='#' class='cardDejar_examples' data-popup-open='popup-3'>Ejemplo</a>            <p class='cardDejar_price'>15€</p><label><input type='radio' name='selec' value='CARTA' id='carta'><span class='card_btn'>Seleccionar</span></label>          </div>          </div>      </div>    </li>   <li id='slideDe-2' data-n='2'>      <div class='contentCardsSlide'>       <div class='cardDejar' style='background-image: url(img/imagen-mobil-3.jpg); background-position: initial;'>                  <div class='cardDejar' style='background-image: url(img/imagen-sms-4.jpg);'>          <div class='cardDejar_body'>                  <div class='cardDejar_description'>             <h2 class='cardDejar_title'>SMS</h2>                      <p>               Una opción perfecta para dejarle a ese “rollito” que para ti solo fue eso, que le deseas lo mejor pero que no quieres verlo más.              </p>                            </div>          </div>          <div class='cardDejar_footer'>            <a href='#' class='cardDejar_examples' data-popup-open='popup-5'>Ejemplo</a>                  <p class='cardDejar_price'>5€</p><label><input type='radio' name='selec' value='SMS' id='sms'><span class='card_btn'>Seleccionar</span></label>         </div>          </div>      </div>    </li>   <li id='slideDe-3' data-n='3'>      <div class='contentCardsSlide'>       <div class='cardDejar'>         <div class='cardDejar_body'>              <div class='cardDejar_description'>             <h2 class='cardDejar_title'>En persona</h2>                     <p>               Un psicólogo especialista en relaciones amorosas quedará con tu pareja y le explicará por ti los motivos por lo cuáles no puedes continuar una relación con el/ella.              </p>                            </div>          </div>          <div class='cardDejar_footer cardDejar_no_example'>           <p class='cardDejar_price'>25€</p><label><input type='radio' name='selec' value='EN PERSONA' id='persona'><span class='card_btn'>Seleccionar</span></label>         </div>        </div>              </div>    </li>   <li id='slideD-4' data-n='4'>     <div class='contentCardsSlide'>       <div class='cardDejar'>         <div class='cardDejar_body'>              <div class='cardDejar_description'>             <h2 class='cardDejar_title'>En persona</h2>                     <p>               Un psicólogo especialista en relaciones amorosas quedará con tu pareja y le explicará por ti los motivos por lo cuáles no puedes continuar una relación con el/ella.              </p>                            </div>          </div>          <div class='cardDejar_footer cardDejar_no_example'>           <p class='cardDejar_price'>25€</p><label><input type='radio' name='selec' value='EN PERSONA' id='persona'><span class='card_btn'>Seleccionar</span></label>         </div>        </div>      </div>    </li> </ul> <ul class='navDe'>    <li id='navDe-1' data-cd='1'></li>    <li id='navDe-2' data-cd='2'></li>    <li id='navDe-3' data-cd='3'></li>    <li id='navDe-4' data-cd='4'></li>");	
      $('#slideDe-1').show();

     $("#persona").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');    
   $("#yourSelectionAmbient").html( "<img src='img/imagen-enpersona-1.jpg' class='resumeImg'>" + masaje+ "<div class='yourSelectionItemPrice'>25€</div>");
   $("#yourSelectionResumePrice").html("Total: 15€");
    $("#step1").slideUp();    
    $("#step2").slideDown();
    $("#lugar").prop( "checked", true );
    $('.itemSteps').parents().find('.itemStepsDejar--Checked').removeClass('itemStepsDejar--Checked');
    $(this).parents('.itemSteps').next().addClass('itemStepsDejar--Checked');
}); 

  $("#carta").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');    
   $("#yourSelectionAmbient").html( "<img src='img/imagen-carta-2.jpg' class='resumeImg'>" + masaje+ "<div class='yourSelectionItemPrice'>15€</div>");
   $("#yourSelectionResumePrice").html("Total: 15€");
    $("#step1").slideUp();    
    $("#step2").slideDown();
    $("#lugar").prop( "checked", true );
    $('.itemSteps').parents().find('.itemStepsDejar--Checked').removeClass('itemStepsDejar--Checked');
    $(this).parents('.itemSteps').next().addClass('itemStepsDejar--Checked');
}); 

  $("#llamada").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');    
   $("#yourSelectionAmbient").html( "<img src='img/imagen-mobil-3.jpg' class='resumeImg'>" + masaje+ "<div class='yourSelectionItemPrice'>10€</div>");
   $("#yourSelectionResumePrice").html("Total: 15€");
    $("#step1").slideUp();    
    $("#step2").slideDown();
    $("#lugar").prop( "checked", true );
    $('.itemSteps').parents().find('.itemStepsDejar--Checked').removeClass('itemStepsDejar--Checked');
    $(this).parents('.itemSteps').next().addClass('itemStepsDejar--Checked');
}); 

  $("#sms").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');    
   $("#yourSelectionAmbient").html( "<img src='img/imagen-sms-4.jpg' class='resumeImg'>" + masaje+ "<div class='yourSelectionItemPrice'>5€</div>");
   $("#yourSelectionResumePrice").html("Total: 15€");
    $("#step1").slideUp();    
    $("#step2").slideDown();
    $("#lugar").prop( "checked", true );
    $('.itemSteps').parents().find('.itemStepsDejar--Checked').removeClass('itemStepsDejar--Checked');
    $(this).parents('.itemSteps').next().addClass('itemStepsDejar--Checked');
}); 
     

        


    } else { 
    	$("#ambient").detach();    	
      $("#step1").append(ambient);   		
    	$('#slideD-1').show();

      $("#persona").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');    
   $("#yourSelectionAmbient").html( "<img src='img/imagen-enpersona-1.jpg' class='resumeImg'>" + masaje+ "<div class='yourSelectionItemPrice'>25€</div>");
   $("#yourSelectionResumePrice").html("Total: 15€");
    $("#step1").slideUp();    
    $("#step2").slideDown();
    $("#lugar").prop( "checked", true );
    $('.itemSteps').parents().find('.itemStepsDejar--Checked').removeClass('itemStepsDejar--Checked');
    $(this).parents('.itemSteps').next().addClass('itemStepsDejar--Checked');
}); 

  $("#carta").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');    
   $("#yourSelectionAmbient").html( "<img src='img/imagen-carta-2.jpg' class='resumeImg'>" + masaje+ "<div class='yourSelectionItemPrice'>15€</div>");
   $("#yourSelectionResumePrice").html("Total: 15€");
    $("#step1").slideUp();    
    $("#step2").slideDown();
    $("#lugar").prop( "checked", true );
    $('.itemSteps').parents().find('.itemStepsDejar--Checked').removeClass('itemStepsDejar--Checked');
    $(this).parents('.itemSteps').next().addClass('itemStepsDejar--Checked');
}); 

  $("#llamada").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');    
   $("#yourSelectionAmbient").html( "<img src='img/imagen-mobil-3.jpg' class='resumeImg'>" + masaje+ "<div class='yourSelectionItemPrice'>10€</div>");
   $("#yourSelectionResumePrice").html("Total: 15€");
    $("#step1").slideUp();    
    $("#step2").slideDown();
    $("#lugar").prop( "checked", true );
    $('.itemSteps').parents().find('.itemStepsDejar--Checked').removeClass('itemStepsDejar--Checked');
    $(this).parents('.itemSteps').next().addClass('itemStepsDejar--Checked');
}); 

  $("#sms").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');    
   $("#yourSelectionAmbient").html( "<img src='img/imagen-sms-4.jpg' class='resumeImg'>" + masaje+ "<div class='yourSelectionItemPrice'>5€</div>");
   $("#yourSelectionResumePrice").html("Total: 15€");
    $("#step1").slideUp();    
    $("#step2").slideDown();
    $("#lugar").prop( "checked", true );
    $('.itemSteps').parents().find('.itemStepsDejar--Checked').removeClass('itemStepsDejar--Checked');
    $(this).parents('.itemSteps').next().addClass('itemStepsDejar--Checked');
}); 
      }
});

});