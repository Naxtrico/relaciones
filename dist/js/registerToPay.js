$("#login_pay").click(function () {
  console.log($("#Container_login").css("display"));
  if($("#Container_login").css("display") == "block" ){
    $("#Container_login").hide();
  }else{
    $('#registration').hide();
    $("#Container_login #login").show();
    $("#Container_login").show();
  }
});

$("#registrarse").click(function () {
  console.log($("#Container_login").css("display"));
  if($("#Container_login").css("display") == "block" ){
    $("#Container_login").hide();
    $("#registration").hide(); 
  }else{
    $("#Container_login").show();   
    $("#registration").show();    
  }
});
