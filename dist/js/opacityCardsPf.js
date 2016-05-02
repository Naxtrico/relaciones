$(document).ready(function () {
  var $all_listItems = $('.card');
  $all_listItems.on('click', function () {
    var index = $all_listItems.index(this);

    $(this).siblings().stop().fadeTo(300, 0.5);
    $(this).parent().siblings().stop().fadeTo(300, 0.3);
    $('.card').css('opacity', '1');
  });

});