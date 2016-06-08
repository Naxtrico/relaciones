$(document).ready(function () {
	$("#next1").click(function (event) {
		event.preventDefault();
		$('#personal_data').addClass('ocult');
		$('#couple').removeClass('ocult');
		$('#tusDatos').removeClass('form_stepsNoSelected');
		$('#tuPareja').addClass('form_stepsNoSelected');  
	});
	$("#next2").click(function (event) {
	event.preventDefault();		
		$('#couple').addClass('ocult');
		$('#prueba').removeClass('ocult');
		$('#tuPareja').removeClass('form_stepsNoSelected');
		$('#pruebaForm').addClass('form_stepsNoSelected');         
	});

	$("#next3").click(function (event) {
		event.preventDefault();
		$('#tusDatos').addClass('ocult');
		$('#tuPareja').addClass('ocult');
		$('#pruebaForm').addClass('ocult');  
		$('#prueba').addClass('ocult');
		$('#pay').removeClass('ocult');
		$( "#form" ).prop( "checked", true ); 	       
	});
});

$(document).ready(function () {
	$("#tusDatos").click(function () {
		$('#personal_data').removeClass('ocult');
		$('#couple').addClass('ocult');
		$('#prueba').addClass('ocult');	
		$('#tusDatos').addClass('form_stepsNoSelected');
		$('#tuPareja').removeClass('form_stepsNoSelected');  
	});

	$("#tuPareja").click(function () {		
		$('#personal_data').addClass('ocult');
		$('#prueba').addClass('ocult');
		$('#couple').removeClass('ocult');
		$('#tusDatos').removeClass('form_stepsNoSelected');
		$('#tuPareja').addClass('form_stepsNoSelected');
		$('#pruebaForm').removeClass('form_stepsNoSelected');         
	});

	$("#pruebaForm").click(function () {		
		$('#personal_data').addClass('ocult');
		$('#prueba').removeClass('ocult');		
		$('#couple').addClass('ocult');
		$('#tusDatos').removeClass('form_stepsNoSelected');
		$('#tuPareja').removeClass('form_stepsNoSelected');
		$('#pruebaForm').addClass('form_stepsNoSelected');         
	});

});