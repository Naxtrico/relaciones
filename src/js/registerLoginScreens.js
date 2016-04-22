


$("#registry_icon").click(function () {
  console.log($("#Container_login").css("display"));
  if($("#Container_login").css("display") == "block" ){
    $("#Container_login").hide();
  }else{
    $('#registration').hide();
    $("#Container_login #login").show();
    $("#Container_login").show();
  }
});


$(document).ready(function () {
 $("#registrate").click(function () {
   $("#Container_login #login").hide();
   $('#registration').show();
 });
});
$("#registration a.back-to-login").click(function(){
 $("#Container_login #login").show();
 $('#registration').hide();
 return false;
});



$("#registry_icon_mobile").click(function () {
  console.log($("#Container_login").css("display"));
  if($("#Container_login").css("display") == "block" ){
    $("#Container_login").hide();
  }else{
    $('#registration').hide();
    $("#Container_login #login").show();
    $("#Container_login").show();
  }
});


$(document).ready(function () {
 $("#registrate").click(function () {
   $("#Container_login #login").hide();
   $('#registration').show();
 });
});
$("#registration a.back-to-login").click(function(){
 $("#Container_login #login").show();
 $('#registration').hide();
 return false;
});

$("#identificar").click(function () {
  console.log($("#Container_login").css("display"));
  if($("#Container_login").css("display") == "block" ){
    $("#Container_login").hide();
  }else{
    $('#registration').hide();
    $("#Container_login #login").hide();
    $("#Container_login").hide();
  }
});

$("#registrar").click(function () {
  console.log($("#Container_login").css("display"));
  if($("#Container_login").css("display") == "block" ){
    $("#Container_login").hide();
  }else{
    $('#registration').hide();
    $("#Container_login #login").hide();
    $("#Container_login").hide();
  }
});