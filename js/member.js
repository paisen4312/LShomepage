'use strict';

$('#members').load("member/19th.html");
$('#regends').load("member/16th.html");

$('.grade').click(function(){
    
    $('#members').fadeOut(1000);
    $('#regends').fadeOut(1000);
    $('.selected-header').fadeOut(1000);
    var grade = $(this).attr("id");
    setTimeout('changeMember(grade)' , 2000);
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
    $('#members').fadeIn(1000);
    $('#regends').fadeIn(1000);
    $('.selected-header').fadeIn(1000);
};

