$(function () {
    const MVS = new Swiper('.main_visual_slide', {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".main_visual .arrows .next",
            prevEl: ".main_visual .arrows .prev",
        }
    });

    $('.mopen').on('click', function () {
        $('.header .gnb').toggleClass('on')
    })

})