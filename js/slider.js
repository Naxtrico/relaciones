var Slider = function(target, options) {
    if( !options ) options = {};

    var currentImage = 0;
    var _slider = $(target);
    var visibleSliderWidth = _slider.width();
    console.log(visibleSliderWidth);
    var visibleImages = options.visibleImages || 5;
    var imageMargin = options.imageMargin || 20;
    var imageWidth = Math.ceil(((visibleSliderWidth-(imageMargin*2)) / visibleImages));
    var images = _slider.find("ul li img").length;
    var sliderWidth = imageWidth * images + ((images-1)*imageMargin);

    _slider.find("ul li:first").addClass("first");
    _slider.find("ul li[class!='first']").css("margin-left", String(imageMargin)+"px");
    _slider.find("ul li img").css("width", String(imageWidth)+"px");

    var sliderHeight = _slider.find("ul li img").height();

    _slider.css("height", String(sliderHeight)+"px");
    _slider.children("ul").css("height",String(sliderHeight)+"px");
    _slider.children("ul").css("width", String(sliderWidth)+"px");


    var _lastCompleted = true;
    var _moveLeft = function() {
        if( currentImage < (images-visibleImages) && _lastCompleted ) {
            _lastCompleted = false;
            var moveTo = Math.floor(((currentImage + 1) * imageWidth) + (imageMargin*(currentImage+1)));
            _slider.children("ul").animate(
                {
                    left: String(-1*moveTo)+"px"
                },
                {
                    duration: 400,
                    easing: "swing",
                    complete: function() {
                        currentImage++;
                        _lastCompleted = true;
                    }
                }
            );
        }
    }

    var _moveRight = function() {
        if( currentImage > 0 && _lastCompleted ) {
            _lastCompleted = false;
            var moveTo = Math.floor(((currentImage - 1) * imageWidth) + (imageMargin*(currentImage-1)));
            _slider.children("ul").animate(
                {
                    left: String(-1*moveTo)+"px"
                },
                {
                    duration: 400,
                    easing: "swing",
                    complete: function() {
                        currentImage--;
                        _lastCompleted = true;
                    }
                }
            );
        }
    }

    _slider.find("span.left").click(function(){
        if( _lastCompleted )
            _moveRight();
    });
    _slider.find("span.right").click(function(){
        if( _lastCompleted )
            _moveLeft();
    });

    return this;
}

$(document).ready(function() {
    var womenSliderStarted = false;
    var width = $(window).width();
    $("#mujeres").click(function () {
        $("#men_slider").hide();
        $("#women_slider").show();
        if( !womenSliderStarted ) {
            if (width >= 1023) {
                new Slider(
                    "#women_slider",
                    {
                        visibleImages: 3,
                        imageMargin: 160
                    }
                );
            } else {
                new Slider(
                    "#women_slider",
                    {
                        visibleImages: 2,
                        imageMargin: 80
                    }
                );
            }
            womenSliderStarted = true;
        }
    });
});


    $("#hombres").click(function () {
        $("#women_slider").hide();
        $("#men_slider").show();
    });

    $(document).ready(function() {
        var width = $(window).width();        
    if (width >= 1023) {
                new Slider(
                    "#men_slider",
                    {
                        visibleImages: 3,
                        imageMargin: 160
                    }
                );
            } else {
                new Slider(
                    "#men_slider",
                    {
                        visibleImages: 2,
                        imageMargin: 80,                        
                    }
                );
            }

});

   /* $(document).ready(function() {
        var width = $(window).width();        
    if (width <= 500) {
                new Slider(
                    "#men_slider",
                    {
                        visibleImages: 1,
                        imageMargin: 50, 
                        
                    }
                );
            }else if (width <= 1023){
                new Slider(
                    "#men_slider",
                    {
                        visibleImages: 2,
                        imageMargin: 80, 
                    }
                );

            }else {
                new Slider(
                    "#men_slider",
                    {   
                        isibleImages: 3,
                        imageMargin: 160
                                               
                    }
                );
            }

});*/

/*ORIGINAL

$(document).ready(function(){
    var womenSliderStarted = false;
    $("#mujeres").click(function () {
        $("#men_slider").hide();
        $("#women_slider").show();
        if( !womenSliderStarted )
            new Slider(
                "#women_slider",
                {
                    visibleImages: 3,
                    imageMargin: 160
                }
            );
        womenSliderStarted = true;
    });
    $("#hombres").click(function () {
        $("#women_slider").hide();
        $("#men_slider").show();
    });
    new Slider(
        "#men_slider",
        {
            visibleImages: 3,
            imageMargin: 160
        }
    );
});





*/