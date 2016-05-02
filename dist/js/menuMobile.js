document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
  this.classList.toggle( "active" );
});

$("#nav-toggle").click(function () {
  if($('#nav_principal').hasClass('visible')){
    $('#nav_principal').removeClass('visible');
  }else{

   $('#nav_principal').addClass('visible');
 }
});