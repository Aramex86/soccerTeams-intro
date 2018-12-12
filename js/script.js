$(document).ready(function () {

    $('.away').click(function () {
        $(this).toggleClass('away-move');
        $('.home').removeClass('home-move');
        $('.home').css('background-color', 'unset');
        $(".home-wrap").fadeOut(500);
        $('.away-wrap').fadeIn(500);
    });

    $('.home').click(function () {
        $(this).addClass('home-move');
        $('.away').removeClass('away-move');
        $(".away-wrap").fadeOut(500);
        $('.home-wrap').fadeIn(500);
    });
    $('.formation').mouseover(function () {
        $('.card', this).addClass('show');
    });
    $('.formation').mouseout(function () {
        $('.card', this).removeClass('show');
    });
    $('.formation').mouseover(function () {
        $('.away_card',this).addClass('show').removeClass('away_card');
    });
    $('.formation').mouseout(function () {
        $('.show',this).removeClass('show').addClass('away_card');
    });


});