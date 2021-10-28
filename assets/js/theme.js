$(document).ready(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $('header .navbar').addClass('active shadow');
    }
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $('header .navbar').addClass('active shadow');
        } else {
            $('header .navbar').removeClass('active  shadow');
            $('#themenavbar').removeClass('show');
        }
    });
});
