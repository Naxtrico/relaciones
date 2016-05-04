$(document).ready(function () {
  var $all_listItems = $('.card_btn');
  $all_listItems.on('click', function () {
    var index = $all_listItems.index(this);

    
    $(this).parent().parent().parent().siblings().stop().fadeTo(300, 0.6);
    $('.cardDejar').css('opacity', '1');
  });

});