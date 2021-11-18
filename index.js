$(window).on('load resize', function(){
    var sarah_option = $('#sarah-option');
    var sarah_intern = $('#sarah-intern');
    var sarah_block = $('#Sarah');

    if($(window).width() < 768){
        sarah_block.prepend(sarah_intern).append(sarah_option);
    }else{
        sarah_block.prepend(sarah_option).append(sarah_intern);
    }
});

$(function() {
    /* 按下GoTop按鈕時的事件 */
    $('#gotop').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'ease');   /* 返回到最頂上 */
        return false;
    });
    
    /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 400){
            $('#gotop').fadeIn();
        } else {
            $('#gotop').fadeOut();
        }
    });
});
