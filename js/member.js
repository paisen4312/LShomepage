$(function(){

$('#members').load("member/19th.html");
$('#regends').load("member/16th.html");

$('.grade').click(function(){
    $('.main-content').fadeOut(1000);
    $('.selected-header').fadeOut(1000);
    var grade = $(this).attr("id");
    setTimeout(function(){changeMember(grade)} , 2000);
});
    $(document)
    .on('mouseover','.player', function(){
        $(this).find('span').stop(true).animate({
            opacity: 0.8
        }, 1000);
    })
    .on('mouseout','.player', function(){
        $(this).find('span').stop(true).animate({
            opacity: 0
        }, 1000);
    });

function changeMember(grade){

    var leftPicRow = $('<img>').addClass("selected-header first-pic").attr("src" , "img/" + grade + "/1.jfif");
    $('.first-pic').replaceWith(leftPicRow);

    var row = $('<p>').addClass("selected-header selected-main").text(grade);
    $('.selected-main').replaceWith(row);

    var rightPicRow = $('<img>').addClass("selected-header second-pic").attr("src" , "img/" + grade + "/2.jfif");
    $('.second-pic').replaceWith(rightPicRow);

    $('#members').load("member/" + grade + ".html");
    $('#regends').load("member/" + grade + ".html");
    $('.main-content').fadeIn(1000);
    $('.selected-header').fadeIn(1000);
};
    
});

