'use strict';

var header = $('<div>').addClass("contents").append('<a href="index.html">TOP PAGE</a>')
.append('<a href="comingsoon.html">EVENTS</a>')
.append('<a href="member.html">MEMBERS</a>')
.append('<a href="comingsoon.html">NEWS</a>')
.append('<a href="comingsoon.html">RESULT</a>')
.append('<a href="https://twitter.com/waseda_ls2013">TWITTER</a>')
.append('<a href="https://www.instagram.com/ls_waseda/?hl=ja">INSTAGRAM</a>')
.append('<a href="history.html">HISTORY</a>')
.append('<div class = "menu" ><p>MENU</p></div>')

var footer = $('<div>').addClass("contents").append('<a href="index.html">TOP PAGE</a>')
.append('<a href="comingsoon.html">EVENTS</a>')
.append('<a href="member.html">MEMBERS</a>')
.append('<a href="comingsoon.html">NEWS</a>')
.append('<a href="comingsoon.html">RESULT</a>')
.append('<a href="https://twitter.com/waseda_ls2013">TWITTER</a>')
.append('<a href="https://www.instagram.com/ls_waseda/?hl=ja">INSTAGRAM</a>')
.append('<a href="history.html">HISTORY</a>')

  var menuContents = $('<div>').addClass("menu-contents").addClass("hidden-menu").append('<a href="index.html">TOP PAGE</a><br>')
  .append('<a href="comingsoon.html">EVENTS</a><br>')
  .append('<a href="member.html">MEMBERS</a><br>')
  .append('<a href="comingsoon.html">NEWS</a><br>')
  .append('<a href="comingsoon.html">RESULT</a><br>')
  .append('<a href="https://twitter.com/waseda_ls2013">TWITTER</a><br>')
  .append('<a href="https://www.instagram.com/ls_waseda/?hl=ja">INSTAGRAM</a><br>')
  .append('<a href="history.html">HISTORY</a>')
  


$('#header').append(header);
$('#footer').append(footer);
$('.menu').append(menuContents);

$('.menu').click(function(){
  
  if($('.menu-contents').hasClass("hidden-menu")){
    
      $('.menu-contents').fadeIn(1000)
      $('.menu-contents').removeClass("hidden-menu")
      

  }else{
  
    $('.menu-contents').fadeOut(1000)
    $('.menu-contents').addClass("hidden-menu")

  }
});


$('a').click(function(){

  $('.main-content').fadeIn(2000)

});
