$(function() {
    $('#dateEle').datepicker({
        autoclose: 'true',
        format: 'dd-mm-yyyy'
    });
    $('#icon').on('click', function() {
        $('.myVideo').attr('src', 'https://www.youtube.com/embed/lH7Z1ohVv48');
        $('#play').slideDown();
    });
    $('.close').on('click', function() {
        $('#play').slideUp();
        $('.myVideo').removeAttr('src');
    });
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 300) {
            $('.nav-fixed').slideDown();
        } else {
            $('.nav-fixed').slideUp();
        }
    });
    $('#readMore').on('click', function() {
        $('.read-content').slideDown(1000);
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });
    $('#closer').on('click', function() {
        $('.read-content').slideUp(1000);
        $("html, body").animate({ scrollTop: 1000 }, 1000);
        $('.read-content h2').removeClass('fadeInRight', 'wow');
        $('.read-content p').removeClass('fadeInRight', 'wow');
    });
});