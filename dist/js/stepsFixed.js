$(document).ready(function(){
  var altura = $("#steps").offset().top;
  $(window).scroll(function(){
    if($(window).scrollTop() >= altura){
      $("#steps").addClass("steps_fixed");
    }else{

     $("#steps").removeClass("steps_fixed");
   }
 });
});
