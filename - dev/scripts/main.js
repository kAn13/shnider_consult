$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        effect: 'coverflow',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        },
        autoplay: 5000
    });

    var nextMonday = moment().day(8).format('DD.MM.YYYY');
    $('.sale__next-monday').html(nextMonday + '!');
});


