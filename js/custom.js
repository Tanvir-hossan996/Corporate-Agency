$(document).ready(function () {


    //smooth scroll and active menu button code
    var html_body = $('html, body');
    $('.navbar .navbar-nav .nav-item .nav-link').on('click', function () {
        //for active menu button
        $(this).parent().addClass('active').siblings().removeClass('active');
        //smooth scroll on menu click
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1000);
                return false;
            }
        }
    });


    //  active navbar start

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > 400) {

            $(".navbar").addClass("active-navbar");
        } else {

            $(".navbar").removeClass("active-navbar");
        }

        if (scrolling > 500) {

            $(".scroll-btn").fadeIn(1000);
        } else {

            $(".scroll-btn").fadeOut(1000);
        }

    });

    $(".scroll-btn").on("click", function () {

        $("html,body").animate({

            scrollTop: "0px"

        }, 1700)
    });



    //banner-slick start
    $(".banner-slider").slick({


        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2400,

    });


    //about venobox

    $(".venobox").venobox({

        overlayColor: "rgba(20, 126, 144, 0.78)",
        spinner: "wave",

    });


    //funfact-counter

    $(".counter").counterUp({

        time: 1800,
    })



    //testimonial-slider

    $(".testi-slider").slick({

        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        autoplaySpeed: 2400,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
          },

        ]

    });

});
