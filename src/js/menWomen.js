
$("#mujeres").hide();
  $("#selectSex").change(function() {
    if($(this).val() == ('Mujeres')){    
        $("#hombres").fadeOut();
        $("#mujeres").fadeIn(2000);
       }else{
        $("#hombres").fadeIn(2000);
        $("#mujeres").fadeOut(0);
       }
    });