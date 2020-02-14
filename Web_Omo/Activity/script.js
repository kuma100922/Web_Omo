
$(function () {
    var $pageTop = $(".pagetop")
    $pageTop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $pageTop.fadeIn();
        } else {
            $pageTop.fadeOut();
        }
    });
    $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, 500, "swing");
        return false;
    });
});