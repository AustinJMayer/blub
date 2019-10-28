
$(document).ready(function() {
    //shows overlay on click//
    $(".fa-bars").on("click", function(){
        $('.hamburger').addClass('hamburger-shown').removeClass('hamburger');
        $('.fa-bars').hide();
        $('.fa-times').show();
    })

    $(".fa-times").on("click", function(){
        $('.hamburger-shown').addClass('hamburger').removeClass('hamburger-shown');
        $('.fa-times').hide();
        $('.fa-bars').show();
    })

    $("#sideabout").on("click", function(){
        $("#overlay").fadeIn(1000);
        $('#sidefish').fadeIn(1000);
        //shows modal on click//
        $('.about-section').addClass('about-section-shown').removeClass('about-section');
    
        //Hides the overlay and modal//
        $('.about-close').on('click', function(){
            $('.about-section-shown').addClass('about-section').removeClass('about-section-shown');
            $('#overlay').fadeOut(1000);
            $('#sidefish').fadeOut(1000);
        });
});

    $("#sideservices").on("click", function(){
        $("#overlay").fadeIn(1000)
        $('#sidefish').fadeIn(1000);
    
        $('.service-section').addClass('service-section-shown').removeClass('service-section');

        //Hides the overlay and modal//
    
        $('.service-close').on('click', function(){
            $('.service-section-shown').addClass('service-section').removeClass('service-section-shown');
            $('#overlay').fadeOut(1000);
            $('#sidefish').fadeOut(1000);
        });
    });

    $("#sidecontact").on("click", function(){
        $("#overlay").fadeIn(1000)
        $('#sidefish').fadeIn(1000);
    
        $('.contact-section').addClass('contact-section-shown').removeClass('contact-section');

        //Hides the overlay and modal//
    
        $('.contact-close').on('click', function(){
            $('.contact-section-shown').addClass('contact-section').removeClass('contact-section-shown');
            $('#overlay').fadeOut(1000);
            $('#sidefish').fadeOut(1000);
        });
    });

    $("#sidemore").on("click", function(){
        $("#overlay").fadeIn(1000)
        $('#sidefish').fadeIn(1000);
    
        $('.more-section').addClass('more-section-shown').removeClass('more-section');

        //Hides the overlay and modal//
    
        $('.more-close').on('click', function(){
            $('.more-section-shown').addClass('more-section').removeClass('more-section-shown');
            $('#overlay').fadeOut(1000);
            $('#sidefish').fadeOut(1000);
        });
    });
});
