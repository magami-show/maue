//headerFix
$(function () {
    var $win = $(window),
        $main = $('main'),
        $header = $('header'),
        headerHeight = $header.outerHeight(),
        headerPos = $header.offset().top,
        fixedClass = 'header_fixed';
    //ロード、またはスクロールしたらヘッダーを固定
    $win.on('load scroll', function () {
        var value = $(this).scrollTop();
        if (value > headerPos) {
            $header.addClass(fixedClass);
            $main.css('margin-top', headerHeight);
        } else {
            $header.removeClass(fixedClass);
            $main.css('margin-top', '0');
        }
    });
});
