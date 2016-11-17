$(document).ready(function() {

    function calcLeft() {
        var space = $(window).width() - 900;
        return space / 2;
    }

    var leftSpace = calcLeft();

    $('.v-container-fixed').css('left', leftSpace);

    $(window).on('resize', function() {
        if ($(window).width() >= 900)
        {
            leftSpace = calcLeft();

            $('.v-container-fixed').css('left', leftSpace);
        }
    });
});