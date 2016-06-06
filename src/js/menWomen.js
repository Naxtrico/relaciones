$(document).ready(function () {
	$("#btnMujeres").click(function () {
		$('#hombres').fadeOut();
		$('#mujeres').fadeIn(2000);
		$('#btnMujeres').addClass('btnSelectSex--active');
		$('#btnHombres').removeClass('btnSelectSex--active');  
	});
	$("#btnHombres").click(function () {
		$('#hombres').fadeIn(2000);
		$('#mujeres').fadeOut(0);
		$('#btnHombres').addClass('btnSelectSex--active');
		$('#btnMujeres').removeClass('btnSelectSex--active');     
	});
});