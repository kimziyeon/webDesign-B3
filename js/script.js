$(function () {

    $('header>.inner>ul>li').mouseenter(function () {
        var i = $(this).index();
        console.log(i);
        $('.sub').hide();
        $('.sub').eq(i).stop().slideDown();
    })

    $('header>.inner>ul>li').mouseleave(function () {
        $('.sub').stop().slideUp();
    })

    function slide() {
        $('.slide ul').animate({ top: '-300px' }, 1000, function () {
            $('.slide ul').append(
                $('.slide ul li').first());
            $('.slide ul').css({ top: '0' });
        })
    }
    setInterval(slide, 3000)


    $('.popup_on').click(function () {
        $('.popup').show();
    })

    $('.popup_off').click(function () {
        $('.popup').hide();
    })


    $('header .inner>ul>li').focusin(function () {
        var i = $(this).index();

        $('.sub').hide();


        $('.sub').eq(i).stop().show();

    })

    $('header .inner>ul>li:last-child>.sub>li:last-child').focusout(function () {
        $('.sub').stop().hide();
    })


})