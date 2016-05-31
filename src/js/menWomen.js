$(document).ready(function () {
	$("#btnMujeres").click(function () {
		$('#hombres').fadeOut();
		$('#mujeres').fadeIn(2000);    
	});
	$("#btnHombres").click(function () {
		$('#hombres').fadeIn(2000);
		$('#mujeres').fadeOut(0);      
	});
});