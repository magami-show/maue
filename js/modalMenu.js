//modalMenu
$(function () {
    //リンクをクリックしたら
    $('#modal_open').on('click', function () {
        //キーボード操作などにより、オーバーレイが多重起動するのを防止する
        $(this).blur(); //ボタンからフォーカスを外す
        if ($("#modal_bg")[0]) return false;

        //bodyの最後に挿入する
        $('body').append('<div id="modal_bg"></div>');
        //モーダル表示中の背景の固定
        var scrollpos;
        scrollpos = $(window).scrollTop();
        $('body').addClass('modal_fixed').css({
            'top': -scrollpos
        });

        $('header').css({
            'top': scrollpos
        });

        $('main,footer').css({
            position: 'relative',
            zIndex: '-1'
        });

        //画面中央を計算する関数を実行
        modalResize();
        //モーダルの表示
        $('#modal_main,#modal_bg').fadeIn('slow');
        //activeを追加
        $(this).addClass('active');

        //画面のどこかをクリックしたらモーダルが閉じられる
        $('#modal_main,#modal_bg').on('click', function () {
            $('#modal_main,#modal_bg').fadeOut('slow', function () {
                $('#modal_bg').remove();
            });
            $('#modal_open').removeClass('active');
            $('body').removeClass('modal_fixed');
            $('header').css({
                'top': 0
            });

            window.scrollTo(0, scrollpos);

            $('main,footer').css({
                position: '',
                zIndex: ''
            });
        });
        //画面中央配置
        $(window).resize(modalResize);

        function modalResize() {
            var w = $(window).width();
            var h = $(window).height();
            var cw = $('#modal_main').outerWidth();
            var ch = $('#modal_main').outerHeight();

            $('#modal_main').css({
                'left': ((w - cw) / 2) + 'px',
                'top': ((h - ch) / 2) + 'px'
            });
        }
    });

});