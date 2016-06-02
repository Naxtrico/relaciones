  var hombres= $('#hombres');
  var mujeres= $('#mujeres');
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
      $("#hombres").detach();
      $("#mujeres").detach();      
      $("#step2").append("<div id='hombres' class='slideshowM slideshowActors'>	<div class='prevM'>&lt;</div>	<div class='nextM'>&gt;</div>	<ul class='slidesM'>		<li id='slideM-1' data-n='1'>			<div class='contentCardsSlide'>				<div class='flip-container' ontouchstart='this.classList.toggle('hover');'>					<div class='flipper'>						<div class='front'>							<img src='img/actor1.jpg' alt='imagen modelo hombre' class='imageActors'/>						</div>						<div class='back'>							<h2>ARNO</h2>							<hr class='lineSeparator'>							<p class='descriptionActors'>ALTURA: 188 / 74'</p>							<p class='descriptionActors'>PELO: Marrón claro</p>							<p class='descriptionActors'>OJOS: Azul</p>							<label>								<input type='radio' name='actor' value='Arno' id='arno1'>								<span class='cardBtnActors'>Seleccionar</span>							</label>						</div>					</div>				</div>							</div>														</li>		<li id='slideM-2' data-n='2'>			<div class='contentCardsSlide'>				<div class='flip-container' ontouchstart='this.classList.toggle('hover');'>					<div class='flipper'>						<div class='front'>							<img src='img/actor3.jpg' alt='imagen modelo hombre' class='imageActors'/>						</div>						<div class='back'>							<h2>SEBASTIAN</h2>							<hr class='lineSeparator'>							<p class='descriptionActors'>ALTURA: 180 / 70'</p>							<p class='descriptionActors'>PELO: Marrón</p>							<p class='descriptionActors'>OJOS: Castaño</p>							<label>								<input type='radio' name='actor' value='SEBASTIAN' id='arno3'>								<span class='cardBtnActors'>Seleccionar</span>							</label>						</div>					</div>				</div>							</div>		</li>		<li id='slideM-3' data-n='3'>			<div class='contentCardsSlide'>								<div class='flip-container' ontouchstart='this.classList.toggle('hover');'>					<div class='flipper'>						<div class='front'>							<img src='img/actor2.jpg' alt='imagen modelo hombre' class='imageActors'/>						</div>						<div class='back'>							<h2>CHARLES</h2>							<hr class='lineSeparator'>							<p class='descriptionActors'>ALTURA: 180 / 70'</p>							<p class='descriptionActors'>PELO: Marrón</p>							<p class='descriptionActors'>OJOS: Castaño</p>							<label>								<input type='radio' name='actor' value='CHARLES' id='arno2'>								<span class='cardBtnActors'>Seleccionar</span>							</label>						</div>					</div>				</div>			</div>														</li>		<li id='slideM-4' data-n='4'>			<div class='contentCardsSlide'>								<div class='flip-container' ontouchstart='this.classList.toggle('hover');'>																		<div class='flipper'>																			<div class='front'>																				<img src='img/actor4.jpg' alt='imagen modelo hombre' class='imageActors'/>																			</div>																			<div class='back'>																				<h2>ENRIC</h2>																				<hr class='lineSeparator'>																				<p class='descriptionActors'>ALTURA: 189 / 75'</p>																				<p class='descriptionActors'>PELO: Marrón</p>																				<p class='descriptionActors'>OJOS: Azul</p>																				<label>																					<input type='radio' name='actor' value='ENRIC' id='arno4'>																					<span class='cardBtnActors'>Seleccionar</span>																				</label>																			</div>																		</div>													</div>			</div>														</li>												</ul>	<ul class='navM'>		<li id='navM-1' data-cd='1'></li>		<li id='navM-2' data-cd='2'></li>		<li id='navM-1' data-cd='3'></li>		<li id='navM-2' data-cd='4'></li>													</ul></div><div id='mujeres' class='slideshowMu slideshowActors'>	<div class='prevMu'>&lt;</div>	<div class='nextMu'>&gt;</div>	<ul class='slidesMu'>		<li id='slideMu-1' data-n='1'>			<div class='contentCardsSlide'>				<div class='flip-container' ontouchstart='this.classList.toggle('hover');'>					<div class='flipper'>						<div class='front'> <img src='img/actriz1.jpg' alt='imagen modelo hombre' class='imageActors'/> </div>						<div class='back'>							<h2>MARTA</h2>							<hr class='lineSeparator'>							<p class='descriptionActors'>ALTURA: 179 / 65'</p>							<p class='descriptionActors'>PELO: Marrón </p>							<p class='descriptionActors'>OJOS: Marrón</p>							<label>								<input type='radio' name='actor' value='MARTA' id='actriz1'>								<span class='cardBtnActors'>Seleccionar</span> </label>							</div>						</div>					</div>									</div>			</li>			<li id='slideMu-2' data-n='2'>				<div class='contentCardsSlide'>					<div class='flip-container' ontouchstart='this.classList.toggle('hover');'>						<div class='flipper'>							<div class='front'> <img src='img/actriz3.jpg' alt='imagen modelo hombre' class='imageActors'/> </div>							<div class='back'>								<h2>ALINA</h2>								<hr class='lineSeparator'>								<p class='descriptionActors'>ALTURA: 180 / 79'</p>								<p class='descriptionActors'>PELO: Marrón claro</p>								<p class='descriptionActors'>OJOS: Azul</p>								<label>									<input type='radio' name='actor' value='ALINA' id='actriz3'>									<span class='cardBtnActors'>Seleccionar</span> </label>								</div>							</div>						</div>											</li>					<li id='slideMu-3' data-n='3'>						<div class='contentCardsSlide'>											<div class='flip-container' ontouchstart='this.classList.toggle('hover');'>								<div class='flipper'>									<div class='front'> <img src='img/actriz2.jpg' alt='imagen modelo hombre' class='imageActors'/> </div>									<div class='back'>										<h2>CHLOE</h2>										<hr class='lineSeparator'>										<p class='descriptionActors'>ALTURA: 170 / 60'</p>										<p class='descriptionActors'>PELO: Marrón</p>										<p class='descriptionActors'>OJOS: Marrón</p>										<label>											<input type='radio' name='actor' value='CHLOE' id='actriz2'>											<span class='cardBtnActors'>Seleccionar</span> </label>										</div>									</div>								</div>							</div>						</li>						<li id='slideMu-4' data-n='4'>							<div class='contentCardsSlide'>												<div class='flip-container' ontouchstart='this.classList.toggle('hover');'>																									<div class='flipper'>																										<div class='front'> <img src='img/actriz4.jpg' alt='imagen modelo hombre' class='imageActors'/> </div>																										<div class='back'>																											<h2>PATRICIA</h2>																											<hr class='lineSeparator'>																											<p class='descriptionActors'>ALTURA: 175 / 62'</p>																											<p class='descriptionActors'>PELO: Pelirrojo</p>																											<p class='descriptionActors'>OJOS: Verde</p>																											<label>																												<input type='radio' name='actor' value='PATRICIA' id='actriz4'>																												<span class='cardBtnActors'>Seleccionar</span> </label>																											</div>																										</div>																	</div>								</div>							</li>						</ul>						<ul class='navMu'>							<li id='navMu-1' data-cd='1'></li>							<li id='navMu-2' data-cd='2'></li>							<li id='navMu-3' data-cd='3'></li>							<li id='navMu-4' data-cd='4'></li>						</ul>					</div>");
      $("#step1").append("<div id='ambient' class='slideshowA'>	<div class='prevA'>&lt;</div>	<div class='nextA'>&gt;</div>	<ul class='slidesA'>		<li id='slideA-1' data-n='1'>			<div class='contentCardsSlide'>											<div class='card'>					<div class='card_body'>						<div class='card_description'>							<h2 class='card_title'>Masaje Caliente</h2>							<p>Servicio a domicilio. El actor se hará pasar por un masajista profesional que no ofrecerá solo un masaje relajante a tu pareja sino que intentará ir más allá.							</p>							<p>¿Como reaccionarà tu pareja?</p>						</div>					</div>					<div class='card_footer'>						<p class='card_price'>100€</p><label><input type='radio' name='selec' value='Masaje caliente' id='masaje'><span class='card_btn'>Seleccionar</span></label>					</div>				</div>												</div>		</li>		<li id='slideA-2' data-n='2'>			<div class='contentCardsSlide'>				<div class='card' style='background-image: url(img/runner1.jpg);'>					<div class='card_body'>						<div class='card_description'>							<h2 class='card_title'>¿Corremos juntos?</h2>							<p> Indícanos un lugar al que suela ir a practicar deporte y nuestro actor le propondrá correr juntos y compartir experiencias…</p>							<p>Que crees que pasaria?</p>						</div>					</div>					<div class='card_footer'>						<p class='card_price'>80€</p><label><input type='radio' name='selec' value='¿Corremos juntos?' id='correr'><span class='card_btn'>Seleccionar</span></label>					</div>				</div>			</div>		</li>		<li id='slideA-3' data-n='3'>			<div class='contentCardsSlide'>				<div class='card' style='background-image: url(img/arreglar.jpg);'>					<div class='card_body'>						<div class='card_description'>							<h2 class='card_title'>Arréglame el aparato</h2>							<p> ¿Se te ha “estropeado” algo en casa y necesitas un profesional para que te lo repare?								Dinos que le gustaría que fuera nuestro actor (fontanero, carpintero, electricista...etc) para interpretar el papel e intentar conquistar a tu pareja con sus habilidades técnicas.</p>								<p> Como reaccionarà tu pareja?</p>							</div>						</div>						<div class='card_footer'>							<p class='card_price'>80€</p><label><input type='radio' name='selec' value='Arréglame el aparato' id='arregla'><span class='card_btn'>Seleccionar</span></label>						</div>					</div>				</div>			</li>			<li id='slideA-4' data-n='4'>				<div class='contentCardsSlide'>														<div class='card' style='background-image: url(img/copa.jpg);'>						<div class='card_body'>							<div class='card_description'>								<h2 class='card_title'>¿Te invito a una copa?</h2>								<p>Bar, pub o cafetería al que suela ir tu pareja a menudo.									uestro actor le invitara a una copa e intentara compartir con ella algo más que un trago…</p>									<p>Tu pareja lo permitirà?</p>								</div>							</div>							<div class='card_footer'>								<p class='card_price'>100€</p><label><input type='radio' name='selec' value='Te invito a una copa' id='copa'><span class='card_btn'>Seleccionar</span></label>							</div>						</div>					</div>				</li>				<li id='slideA-5' data-n='1'>					<div class='contentCardsSlide'>								<div class='card' style='background-image: url(img/copa.jpg);'>							<div class='card_body'>								<div class='card_description'>									<h2 class='card_title'>¿Te invito a una copa?</h2>									<p>Bar, pub o cafetería al que suela ir tu pareja a menudo.										uestro actor le invitara a una copa e intentara compartir con ella algo más que un trago…</p>										<p>Tu pareja lo permitirà?</p>									</div>								</div>								<div class='card_footer'>									<p class='card_price'>100€</p><label><input type='radio' name='selec' value='Te invito a una copa' id='copa'><span class='card_btn'>Seleccionar</span></label>								</div>							</div>						</div>					</li>					<li id='slideA-6' data-n='1'>						<div class='contentCardsSlide'>								<div class='card' style='background-image: url(img/copa.jpg);'>								<div class='card_body'>									<div class='card_description'>										<h2 class='card_title'>¿Te invito a una copa?</h2>										<p>Bar, pub o cafetería al que suela ir tu pareja a menudo.											uestro actor le invitara a una copa e intentara compartir con ella algo más que un trago…</p>											<p>Tu pareja lo permitirà?</p>										</div>									</div>									<div class='card_footer'>										<p class='card_price'>100€</p><label><input type='radio' name='selec' value='Te invito a una copa' id='copa'><span class='card_btn'>Seleccionar</span></label>									</div>								</div>							</div>						</li>					</ul>					<ul class='navA'>						<li id='navA-1' data-cd='1'></li>						<li id='navA-2' data-cd='2'></li>						<li id='navA-3' data-cd='3'></li>						<li id='navA-4' data-cd='3'></li>						<li id='navA-5' data-cd='3'></li>						<li id='navA-6' data-cd='3'></li>					</ul>				</div>");	
      $('#slideA-1').show();
      $('#slideM-1').show();
      $('#slideMu-1').show();

        $("#masaje").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');    
   $("#yourSelectionAmbient").html( "<img src='img/masaje.jpg' class='resumeImg'>" + masaje+ "<div class='yourSelectionItemPrice'>110€</div>");
   $("#yourSelectionResumePrice").html("Total: 100€");
    $("#step1").slideUp();    
    $("#step2").slideDown();
    $( "#lugar" ).prop( "checked", true );
}); 

  $("#copa").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');   
   $("#yourSelectionAmbient").html( "<img src='img/copa.jpg' class='resumeImg'> " + masaje + "<div class='yourSelectionItemPrice'>80€</div>");
   $("#yourSelectionResumePrice").html("Total: 100€");   
   $("#step1").slideUp();    
   $("#step2").slideDown();
   $( "#lugar" ).prop( "checked", true );
});

  $("#correr").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');    
   $("#yourSelectionAmbient").html( "<img src='img/runner1.jpg' class='resumeImg'> " + masaje+ "<div class='yourSelectionItemPrice'>99€</div>");
   $("#yourSelectionResumePrice").html("Total: 80€");
   $("#step1").slideUp();    
    $("#step2").slideDown();
    $( "#lugar" ).prop( "checked", true );
});        

  $("#biblio").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');  
   $("#yourSelectionAmbient").html( "<img src='img/biblioteca.jpg' class='resumeImg'> " + masaje+ "<div class='yourSelectionItemPrice'>105€</div>");
   $("#yourSelectionResumePrice").html("Total: 100€");
  $("#step1").slideUp();    
    $("#step2").slideDown();
    $( "#lugar" ).prop( "checked", true );
});        

  $("#arregla").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block'); 
   $("#yourSelectionAmbient").html( "<img src='img/arreglar.jpg' class='resumeImg'> " + masaje+ "<div class='yourSelectionItemPrice'>112€</div>");
   $("#yourSelectionResumePrice").html("Total: 80€");
  $("#step1").slideUp();    
    $("#step2").slideDown();
    $( "#lugar" ).prop( "checked", true );
  
});        

  $("#ley").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');
   $("#yourSelectionAmbient").html( "<img src='img/esposas.jpg' class='resumeImg'> " + masaje+ "<div class='yourSelectionItemPrice'>95€</div>");
   $("#yourSelectionResumePrice").html("Total: 80€");
  $("#step1").slideUp();    
    $("#step2").slideDown();
  $( "#lugar" ).prop( "checked", true );
});

   $("#arno1").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actor1.jpg' class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );        
}); 

  $("#arno2").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actor2.jpg' class='resumeImg'> " + masaje);
  $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
});

  $("#arno3").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actor3.jpg' class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
});

  $("#arno4").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actor4.jpg' class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
});

  $("#actriz1").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actriz1.jpg'  class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
});

  $("#actriz2").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actriz2.jpg'  class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
});

   $("#actriz3").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actriz3.jpg'  class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
});

   $("#actriz4").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actriz4.jpg'  class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
});


    } else { 
    	$("#ambient").detach();
    	$("#hombres").detach();
      $("#mujeres").detach();
      $("#step1").append(ambient);       
    	$("#step2").append(hombres); 
    	$("#step2").append(mujeres);    	
    	$('#slideA-1').show();
    	$('#slideM-1').show();
    	$('#slideMu-1').show(); 


  $("#masaje").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');    
   $("#yourSelectionAmbient").html( "<img src='img/masaje.jpg' class='resumeImg'>" + masaje+ "<div class='yourSelectionItemPrice'>110€</div>");
   $("#yourSelectionResumePrice").html("Total: 100€");
    $("#step1").slideUp();    
    $("#step2").slideDown();
    $( "#lugar" ).prop( "checked", true );
}); 

  $("#copa").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');   
   $("#yourSelectionAmbient").html( "<img src='img/copa.jpg' class='resumeImg'> " + masaje + "<div class='yourSelectionItemPrice'>80€</div>");
   $("#yourSelectionResumePrice").html("Total: 100€");   
   $("#step1").slideUp();    
   $("#step2").slideDown();
   $( "#lugar" ).prop( "checked", true );
});

  $("#correr").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');    
   $("#yourSelectionAmbient").html( "<img src='img/runner1.jpg' class='resumeImg'> " + masaje+ "<div class='yourSelectionItemPrice'>99€</div>");
   $("#yourSelectionResumePrice").html("Total: 80€");
   $("#step1").slideUp();    
    $("#step2").slideDown();
    $( "#lugar" ).prop( "checked", true );
});        

  $("#biblio").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');  
   $("#yourSelectionAmbient").html( "<img src='img/biblioteca.jpg' class='resumeImg'> " + masaje+ "<div class='yourSelectionItemPrice'>105€</div>");
   $("#yourSelectionResumePrice").html("Total: 100€");
  $("#step1").slideUp();    
    $("#step2").slideDown();
    $( "#lugar" ).prop( "checked", true );
});        

  $("#arregla").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block'); 
   $("#yourSelectionAmbient").html( "<img src='img/arreglar.jpg' class='resumeImg'> " + masaje+ "<div class='yourSelectionItemPrice'>112€</div>");
   $("#yourSelectionResumePrice").html("Total: 80€");
  $("#step1").slideUp();    
    $("#step2").slideDown();
    $( "#lugar" ).prop( "checked", true );
  
});        

  $("#ley").click(function () {        
   var masaje = $('input:radio[name=selec]:checked').val();
   $("#selection").css('display','block');
   $("#yourSelectionAmbient").html( "<img src='img/esposas.jpg' class='resumeImg'> " + masaje+ "<div class='yourSelectionItemPrice'>95€</div>");
   $("#yourSelectionResumePrice").html("Total: 80€");
  $("#step1").slideUp();    
    $("#step2").slideDown();
  $( "#lugar" ).prop( "checked", true );
});

   $("#arno1").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actor1.jpg' class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );        
}); 

  $("#arno2").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actor2.jpg' class='resumeImg'> " + masaje);
  $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
});

  $("#arno3").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actor3.jpg' class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
});

  $("#arno4").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actor4.jpg' class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
});

  $("#actriz1").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actriz1.jpg'  class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
});

  $("#actriz2").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actriz2.jpg'  class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
});

   $("#actriz3").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actriz3.jpg'  class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
});

   $("#actriz4").click(function () {        
   var masaje = $('input:radio[name=actor]:checked').val();    
   $("#yourSelectionActor").html( "<img src='img/actriz4.jpg'  class='resumeImg'> " + masaje);
   $("#step2").slideUp();
   $("#step3").slideDown();
   $(this).parents('li.itemSteps').addClass('itemSteps--Checked');
   $( "#actores" ).prop( "checked", true );
});


      }
});

});