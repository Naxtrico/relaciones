$(document).ready(function () {
	$("#next1").click(function (event) {
		event.preventDefault();	
		$('#personal_data').addClass('ocult');
		$('#couple').removeClass('ocult');
		$('#tusDatos').removeClass('titleFormsDejar--color');
		$('#tuPareja').addClass('titleFormsDejar--color');  
	});
	$("#next2").click(function (event) {
	event.preventDefault();		
		$('#couple').addClass('ocult');
		$('#prueba').removeClass('ocult');
		$('#tuPareja').removeClass('titleFormsDejar--color');
		$('#pruebaForm').addClass('titleFormsDejar--color');         
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
		$('#tusDatos').addClass('titleFormsDejar--color');
		$('#tuPareja').removeClass('titleFormsDejar--color');  
	});

	$("#tuPareja").click(function () {		
		$('#personal_data').addClass('ocult');
		$('#prueba').addClass('ocult');
		$('#couple').removeClass('ocult');
		$('#tusDatos').removeClass('titleFormsDejar--color');
		$('#tuPareja').addClass('titleFormsDejar--color');
		$('#pruebaForm').removeClass('titleFormsDejar--color');         
	});

	$("#pruebaForm").click(function () {		
		$('#personal_data').addClass('ocult');
		$('#prueba').removeClass('ocult');		
		$('#couple').addClass('ocult');
		$('#tusDatos').removeClass('titleFormsDejar--color');
		$('#tuPareja').removeClass('titleFormsDejar--color');
		$('#pruebaForm').addClass('titleFormsDejar--color');         
	});

});