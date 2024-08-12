
$(document).ready(function () {


    // estate card slider -------------------------------------- //
    var swiper = new Swiper(".estcard__slider", {
        slidesPerView: "auto",
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' + ' з ' + '<span class="' + totalClass + '"></span>';
            },
        },
        keyboard: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },

            768: {
                slidesPerView: "auto",
            },
        },
    });

    // estate page slider -------------------------------------- //
    var swiper = new Swiper(".estpage__slider", {
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            // type: "fraction",        
        },
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
        keyboard: true,
    });

    //  gallery ----------- //
    $('[data-fancybox^="images"]').each(function () {
        var galleryType = $(this).data('fancybox');

        $(`[data-fancybox="${galleryType}"]`).fancybox({
            thumbs: {
                autoStart: true
            },
        });
    });

    // estate page card buttons
    $('.estcard__buttons a').on('click', function () {
        $(this).toggleClass('active');
    });



    // more/less text
    $('.more-btn').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.estcard__box').find('.estcard__box-moretext').slideToggle('active');
    });


    // estpage slider buttons
    $('.estpage__slider-btns a').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });

    // estpage header buttons
    $('.estheader__info-btn').on('click', function () {
        $(this).toggleClass('active');
    });

    // estpage popup
    $('.propos-btn').on('click', function () {
        $('.popup-element').addClass('active');
        $('.price-popup').addClass('active');
    });

    $('.close-popup, .popup-element').on('click', function () {
        $('.popup-element').removeClass('active');
        $('.estate-popup').removeClass('active');
    });




});

