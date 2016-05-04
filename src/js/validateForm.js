function validaUusario(){
  var nombre = $('input[name="nombre_usuario"]').val();
  if(nombre.length < 1 || nombre.length >15){
    $('input[name="nombre_usuario"]').prev().show();
    $('input[name="nombre_usuario"]').addClass('error');
    $('input[name="nombre_usuario"]').focus();
  }else{
    $('input[name="nombre_usuario"]').prev().hide();
    $('input[name="nombre_usuario"]').removeClass('error');
  }
}

function validaEmailPf(){
  var email_usuario = $('input[name="email_usuario"]').val();
  if(email_usuario.length == 0 ){
    $('input[name="email_usuario"]').prev().show();
    $('input[name="email_usuario"]').addClass('error');
    $('input[name="nombre_usuario"]').focus();
  }else{
    $('input[name="email_usuario"]').prev().hide();
    $('input[name="email_usuario"]').removeClass('error');
  }
}

function validaMovil(){
  var email_usuario = $('input[name="mobil"]').val();
  if(nombre.length < 9){
    $('input[name="mobil"]').prev().show();
    $('input[name="mobil"]').addClass('error');
    $('input[name="nombre_usuario"]').focus();
  }else{
    $('input[name="mobil"]').prev().hide();
    $('input[name="mobil"]').removeClass('error');
  }
}



$('input[name="Nombre_contact"]').focusout(function(){
  validaUusario(); 
});


$('input[name="email_contact"]').focusout(function(){
  validaEmailPf(); 
});

$('input[name="mobil"]').focusout(function(){
  validaMovil(); 
});

$('#btn_prueba').click(function(ev){  
  validaUusario();
  validaEmailPf();
  validaMovil(); 
  if ($('.error:visible').length > 0){
    ev.preventDefault();
  }  
});





function validateEmail(sEmail) {
  var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (filter.test(sEmail))
    return true;
  else
    return false;
}


function validaNombre(){
  var nombre = $('input[name="Nombre_contact"]').val();
  if(nombre.length == 0){
    $('input[name="Nombre_contact"]').prev().show();
    $('input[name="Nombre_contact"]').addClass('error');
    $('input[name="Nombre_contact"]').focus();
  }else{
    $('input[name="Nombre_contact"]').prev().hide();
    $('input[name="Nombre_contact"]').removeClass('error');
  }
}

function validaEmail(){
  var email_usuario = $('input[name="email_contact"]').val();
  if(email_usuario.length == 0 ){
    $('input[name="email_contact"]').prev().show();
    $('input[name="email_contact"]').addClass('error');
  }else{
    $('input[name="email_contact"]').prev().hide();
    $('input[name="email_contact"]').removeClass('error');
  }
}



$('input[name="Nombre_contact"]').focusout(function(){
  validaNombre(); 
});


$('input[name="email_contact"]').focusout(function(){
  validaEmail(); 
});

$('#formContact').click(function(ev){  
  validaNombre();
  validaEmail();
  if ($('.error:visible').length > 0){
    ev.preventDefault();
  }  
});


