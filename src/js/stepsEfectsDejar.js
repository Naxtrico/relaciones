$(document).ready(function(){
  var altura = $("#1").offset().top -200;
  $(window).scroll(function(){
    if($(window).scrollTop() >= altura){
      $("#paso1").addClass("stepNumber-item-selected");
    }else{

     $("#paso1").removeClass("stepNumber-item-selected");
   }
 });
});
$(document).ready(function(){
  var altura = $("#2").offset().top -200;
  $(window).scroll(function(){
    if($(window).scrollTop() >= altura){
      $("#paso2").addClass("stepNumber-item-selected");
      $("#paso1").removeClass("stepNumber-item-selected");
    }else{

     $("#paso2").removeClass("stepNumber-item-selected");
   }
 });
});