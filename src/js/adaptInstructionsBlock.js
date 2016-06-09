initScrollEvent();
initResizeEvent();

function initScrollEvent() {
	$(window).on("scroll", adaptHireElement);
	adaptHireElement();
}

function initResizeEvent() {
	$(window).resize(function () {
		adaptHireElement();
	});
}

function adaptHireElement() {
	var windowHeight = $(window).height();
	var footerTop = $("footer")[0].getBoundingClientRect().top;
	if( footerTop < $(window).height() )
		$('.purchase-block').css({
			'bottom': String(windowHeight - footerTop) + "px"
		});
	else
		$('.purchase-block').css({
			'bottom': '0px'
		});
}