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

$(document).ready(function(){
  var altura = $("#3").offset().top -200;
  $(window).scroll(function(){
    if($(window).scrollTop() >= altura){
      $("#paso3").addClass("stepNumber-item-selected");
      $("#paso2").removeClass("stepNumber-item-selected");
    }else{

     $("#paso3").removeClass("stepNumber-item-selected");
   }
 });
});
$(document).ready(function(){
  var altura = $("#4").offset().top -200;
  $(window).scroll(function(){
    if($(window).scrollTop() >= altura){
      $("#paso4").addClass("stepNumber-item-selected");
      $("#paso3").removeClass("stepNumber-item-selected");
    }else{

     $("#paso4").removeClass("stepNumber-item-selected");
   }
 });
});
$(document).ready(function(){
  var altura = $("#5").offset().top -200;
  $(window).scroll(function(){
    if($(window).scrollTop() >= altura){
      $("#paso5").addClass("stepNumber-item-selected");
      $("#paso4").removeClass("stepNumber-item-selected");
    }else{

     $("#paso5").removeClass("stepNumber-item-selected");
   }
 });
});