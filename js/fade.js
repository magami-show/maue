//fade
if (!navigator.userAgent.match(/(iPhone|iPad|Android)/)) {
    $(function () {
        $('.fade').css('opacity', '.2');
        $(window).on('scroll load reload', function () {
            $('.fade').each(function () {
                var ef = $(this).offset().top;
                var sc = $(window).scrollTop();
                var wh = $(window).height();
                if (sc > ef - wh + 100) {
                    $(this).animate({
                        'opacity': '1'
                    }, 500);
                }
            });
        });
    });
}
