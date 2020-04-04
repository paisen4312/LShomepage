'use strict';



  var menuContents = $('<div>').addClass("menu-contents").addClass("hidden-menu").append('<a href="index.html">TOPPAGE</a><br>')
  .append('<a href="events.html">EVENTS</a><br>')
  .append('<a href="member.html">MEMBERS</a><br>')
  .append('<a href="comingsoon.html">NEWS</a><br>')
  .append('<a href="comingsoon.html">RESULTS</a><br>')
  .append('<a href="https://twitter.com/waseda_ls2013">TWITTER</a><br>')
  .append('<a href="https://www.instagram.com/ls_waseda/?hl=ja">INSTAGRAM</a><br>')
  .append('<a href="history.html">HISTORY</a>')

$('.menu').append(menuContents);

$('.menu').click(function(){
    if($('.menu-contents').hasClass("hidden-menu")){
        $('.menu-contents').fadeIn(1000);
        $('.menu-contents').removeClass("hidden-menu");
    }else{
        $('.menu-contents').fadeOut(1000);
        $('.menu-contents').addClass("hidden-menu");
    }
    if($(this).hasClass("back")){
        $(this).removeClass("back").children('.hub').text('MENU(開く)');
    }else{
        $(this).addClass("back").children('.hub').text('MENU(閉じる)') 
    }
});



$('.menu-contents').children('a').hover(
    function(){
        $(this).stop(true).animate({color: "red", "font-size": "60px"}, 500);
    },
    function(){
        $(this).stop(true).animate({color: "white", "font-size": "40px"}, 500);
    }
);

/*
    * Slideshow
    */
// slideshow クラスを持った要素ごとに処理を実行
$('.slideshow').each(function () {
    var $slides = $(this).find('img'), // すべてのスライド
        slideCount = $slides.length,   // スライドの点数
        currentIndex = 0;              // 現在のスライドを示すインデックス
    // 1 番目のスライドをフェードインで表示
    $slides.eq(currentIndex).fadeIn();
    // 7500 ミリ秒ごとに showNextSlide 関数を実行
    setInterval(showNextSlide, 5000);

    //フェードアウト、フェードインを時間差をおいて行う関数
    function showNextSlide(){
            var nextIndex = fadeOutSlide();
            setTimeout(function(){fadeInSlide(nextIndex)} , 1000);
    }

    // 次のスライドを表示する関数
    function fadeOutSlide () {
        // 次に表示するスライドのインデックス
        // (もし最後のスライドなら最初に戻る)
        var nextIndex = (currentIndex + 1) % slideCount;
        // 現在のスライドをフェードアウト
        $slides.eq(currentIndex).fadeOut(1000);
        return nextIndex;
    }

    // 次のスライドを表示する関数
    function fadeInSlide (nextIndex) {
        // 次のスライドをフェードイン
        $slides.eq(nextIndex).fadeIn(1000);
        // 現在のスライドのインデックスを更新
        currentIndex = nextIndex;
    }
});

$('.gasshuku').hover(function(){

    $(this).animate({})

});