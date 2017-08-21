//spHover
$('.sp_hover').on('touchstart', function () {
    $(this).attr('id', 'contents img:hover');
}).on('touchend', function(){
   $(this).removeAttr('id', 'contents img:hover');
});

