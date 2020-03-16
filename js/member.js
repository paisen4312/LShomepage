'use strict';

$('#members').load("member/19th.html");
$('#regends').load("member/16th.html");

$('.grade').click(function(){

    var grade = $(this).attr("id");

    var leftPicRow = $('<img>').addClass("selected-header first-pic").attr("src" , "img/" + grade + "/1.jfif");
    $('.first-pic').replaceWith(leftPicRow);

    var row = $('<p>').addClass("selected-header selected-main").text(grade);
    $('.selected-main').replaceWith(row);
    
    var rightPicRow = $('<img>').addClass("selected-header second-pic").attr("src" , "img/" + grade + "/2.jfif");
    $('.second-pic').replaceWith(rightPicRow);

    $('#members').load("member/" + grade + ".html");
    $('#regends').load("member/" + grade + ".html");

});