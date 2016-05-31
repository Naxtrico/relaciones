
$(document).ready(function() {
    $('#slide-1').show();
    $('#nav-1').addClass('active-cd');
    

    function siguienteSlide() {
        var actual = $('.slides li:visible');
        var siguiente = actual.next();
        var circuloActual = $('.active-cd');
        var siguienteCirculo = circuloActual.next();

        if (siguiente.length == 0) {
            siguiente = $('#slide-1');
        }

        if (siguienteCirculo.length == 0) {
            siguienteCirculo = $('#nav-1');
        }

        actual.fadeOut(500);
        circuloActual.removeClass('active-cd');
        siguiente.fadeIn(500);
        siguienteCirculo.addClass('active-cd');
    }
    
    var intervalo = setInterval(siguienteSlide, 1000);

    $('.slideshow').mouseenter(function() {
        clearInterval(intervalo);
    });

    $('.slideshow').mouseleave(function() {
        intervalo = setInterval(siguienteSlide, 1000);
    });

    $('.next').click(siguienteSlide);
    $('.prev').click(function() {
        var actual = $('.slides li:visible');
        var anterior = actual.prev();
        var circuloActual = $('.active-cd');
        var circuloAnterior = circuloActual.prev();

        if (anterior.length == 0) {
            anterior = $('#slide-4');
        }
        if (circuloAnterior.length == 0) {
            circuloAnterior = $('#nav-4');
        }

        actual.hide();
        anterior.show();
        circuloActual.removeClass('active-cd');
        circuloAnterior.addClass('active-cd');
    });

    $('.nav li').click(function() {
        $('.active-cd').removeClass('active-cd');
        $('.slides li:visible').hide();
        $(this).addClass('active-cd');
        var indice = $(this).data('cd');
        $('.slides li[data-n='+indice+']').show();
    });
});


$(document).ready(function() {
    $('#slideM-1').show();
    $('#navM-1').addClass('activeM-cd');
    

    function siguienteSlide() {
        var actual = $('.slidesM li:visible');
        var siguiente = actual.next();
        var circuloActual = $('.activeM-cd');
        var siguienteCirculo = circuloActual.next();

        if (siguiente.length == 0) {
            siguiente = $('#slideM-1');
        }

        if (siguienteCirculo.length == 0) {
            siguienteCirculo = $('#navM-1');
        }

        actual.fadeOut(500);
        circuloActual.removeClass('activeM-cd');
        siguiente.fadeIn(500);
        siguienteCirculo.addClass('activeM-cd');
    }
    
    var intervalo = setInterval(siguienteSlide, 1000);

    $('.slideshowM').mouseenter(function() {
        clearInterval(intervalo);
    });

    $('.slideshowM').mouseleave(function() {
        intervalo = setInterval(siguienteSlide, 1000);
    });

    $('.nextM').click(siguienteSlide);
    $('.prevM').click(function() {
        var actual = $('.slidesM li:visible');
        var anterior = actual.prev();
        var circuloActual = $('.activeM-cd');
        var circuloAnterior = circuloActual.prev();

        if (anterior.length == 0) {
            anterior = $('#slideM-4');
        }
        if (circuloAnterior.length == 0) {
            circuloAnterior = $('#navM-4');
        }

        actual.hide();
        anterior.show();
        circuloActual.removeClass('activeM-cd');
        circuloAnterior.addClass('activeM-cd');
    });

    $('.navM li').click(function() {
        $('.activeM-cd').removeClass('activeM-cd');
        $('.slidesM li:visible').hide();
        $(this).addClass('activeM-cd');
        var indice = $(this).data('cd');
        $('.slidesM li[data-n='+indice+']').show();
    });
});

$(document).ready(function() {
    $('#slideMu-1').show();
    $('#navMu-1').addClass('activeMu-cd');
    

    function siguienteSlide() {
        var actual = $('.slidesMu li:visible');
        var siguiente = actual.next();
        var circuloActual = $('.activeMu-cd');
        var siguienteCirculo = circuloActual.next();

        if (siguiente.length == 0) {
            siguiente = $('#slideMu-1');
        }

        if (siguienteCirculo.length == 0) {
            siguienteCirculo = $('#navMu-1');
        }

        actual.fadeOut(500);
        circuloActual.removeClass('activeMu-cd');
        siguiente.fadeIn(500);
        siguienteCirculo.addClass('activeMu-cd');
    }
    
    var intervalo = setInterval(siguienteSlide, 1000);

    $('.slideshowMu').mouseenter(function() {
        clearInterval(intervalo);
    });

    $('.slideshowMu').mouseleave(function() {
        intervalo = setInterval(siguienteSlide, 1000);
    });

    $('.nextMu').click(siguienteSlide);
    $('.prevMu').click(function() {
        var actual = $('.slidesMu li:visible');
        var anterior = actual.prev();
        var circuloActual = $('.activeMu-cd');
        var circuloAnterior = circuloActual.prev();

        if (anterior.length == 0) {
            anterior = $('#slideMu-4');
        }
        if (circuloAnterior.length == 0) {
            circuloAnterior = $('#navMu-4');
        }

        actual.hide();
        anterior.show();
        circuloActual.removeClass('activeMu-cd');
        circuloAnterior.addClass('activeMu-cd');
    });

    $('.navMu li').click(function() {
        $('.activeMu-cd').removeClass('activeMu-cd');
        $('.slidesMu li:visible').hide();
        $(this).addClass('activeMu-cd');
        var indice = $(this).data('cd');
        $('.slidesMu li[data-n='+indice+']').show();
    });
});