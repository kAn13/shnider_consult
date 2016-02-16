$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 5000
    });

    var nextMonday = moment().day(8).format('DD.MM.YYYY');
    $('.sale__next-monday').html(nextMonday + '!');
});

