$(document).ready(function () {

    $('.away').click(function () {
       $(this).toggleClass('away-move');
        $('.home').removeClass('home-move');
        $('.home').css('background-color','unset');
        $(".home-wrap").fadeOut(500);
        $('.away-wrap').fadeIn(500);
    });
    $('.home').click(function () {
        $(this).addClass('home-move');
        $('.away').removeClass('away-move');
        $(".away-wrap").fadeOut(500);
        $('.home-wrap').fadeIn(500);
    });









});