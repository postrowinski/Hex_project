$(document).ready(function () {
    
    function scrollTopAnimation(top) {
        $('html, body').animate({
            scrollTop: top
        }, 800);
    }
    
    $('.nav').find('a').click(function (e) {
        var getLink = $(this).attr('href'),
            getTop = $(getLink).offset().top;
        
        e.preventDefault();
        scrollTopAnimation(getTop);
    });
});