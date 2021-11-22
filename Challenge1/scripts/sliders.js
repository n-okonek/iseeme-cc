var $j = jQuery.noConflict();

$j(document).ready(function(){
    $j('.trust-builders').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        responsive: [{
            breakpoint: 1600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true
            }
        }, {
            breakpoint: 1350,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true

            }
        }, {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true

            }
        }, {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
            }
        }, {
            breakpoint: 390,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
            }
        }]
    });
    $j('.product-carousel').slick({
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        centerPadding: '30px',
        responsive: [{
            breakpoint: 1600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true
            }
        }, {
            breakpoint: 1350,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true

            }
        }, {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true

            }
        }, {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
            }
        }, {
            breakpoint: 390,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
            }
        }]
    });

});
