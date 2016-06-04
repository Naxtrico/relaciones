
$(document).ready(function() {
    $('#slideD-1').show();
    $('#navD-1').addClass('activeD-cd');
    

    function siguienteSlide() {
        var actual = $('.slidesD li:visible');
        var siguiente = actual.next();
        var circuloActual = $('.activeD-cd');
        var siguienteCirculo = circuloActual.next();

        if (siguiente.length == 0) {
            siguiente = $('#slideD-1');
        }

        if (siguienteCirculo.length == 0) {
            siguienteCirculo = $('#navD-1');
        }

        actual.fadeOut(500);
        circuloActual.removeClass('activeD-cd');
        siguiente.fadeIn(500);
        siguienteCirculo.addClass('activeD-cd');
    }
    
    

    $('.nextD').click(siguienteSlide);
    $('.prevD').click(function() {
        var actual = $('.slidesD li:visible');
        var anterior = actual.prev();
        var circuloActual = $('.activeD-cd');
        var circuloAnterior = circuloActual.prev();

        if (anterior.length == 0) {
            anterior = $('#slideD-2');
        }
        if (circuloAnterior.length == 0) {
            circuloAnterior = $('#navD-2');
        }

        actual.hide();
        anterior.show();
        circuloActual.removeClass('activeD-cd');
        circuloAnterior.addClass('activeD-cd');
    });

    $('.navD li').click(function() {
        $('.activeD-cd').removeClass('activeD-cd');
        $('.slidesD li:visible').hide();
        $(this).addClass('activeD-cd');
        var indice = $(this).data('cd');
        $('.slidesD li[data-n='+indice+']').show();
    });
});


$(document).ready(function() {
    $('#slideDe-1').show();
    $('#navDe-1').addClass('activeDe-cd');
    

    function siguienteSlide() {
        var actual = $('.slidesDe li:visible');
        var siguiente = actual.next();
        var circuloActual = $('.activeDe-cd');
        var siguienteCirculo = circuloActual.next();

        if (siguiente.length == 0) {
            siguiente = $('#slideDe-1');
        }

        if (siguienteCirculo.length == 0) {
            siguienteCirculo = $('#navDe-1');
        }

        actual.fadeOut(500);
        circuloActual.removeClass('activeDe-cd');
        siguiente.fadeIn(500);
        siguienteCirculo.addClass('activeDe-cd');
    }
    
    

    $('.nextD').click(siguienteSlide);
    $('.prevD').click(function() {
        var actual = $('.slidesDe li:visible');
        var anterior = actual.prev();
        var circuloActual = $('.activeDe-cd');
        var circuloAnterior = circuloActual.prev();

        if (anterior.length == 0) {
            anterior = $('#slideDe-4');
        }
        if (circuloAnterior.length == 0) {
            circuloAnterior = $('#navDe-4');
        }

        actual.hide();
        anterior.show();
        circuloActual.removeClass('activeDe-cd');
        circuloAnterior.addClass('activeDe-cd');
    });

    $('.navD li').click(function() {
        $('.activeDe-cd').removeClass('activeDe-cd');
        $('.slidesDe li:visible').hide();
        $(this).addClass('activeDe-cd');
        var indice = $(this).data('cd');
        $('.slidesD li[data-n='+indice+']').show();
    });
});