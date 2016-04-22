jQuery(window).scroll(function () {
  var threshold = 1;
  if  (jQuery(window).scrollTop() >= 1)
    jQuery('header').addClass('fixed');

  else
    jQuery('header').removeClass('fixed');
});