'use strict';

$('#members').load("member/19th.html");
$('#regends').load("member/16th.html");

$('.grade').click(function(){
    
    $('#members').fadeOut(1500)
    $('.selected-header').fadeOut(1500)
    var grade = $(this).attr("id");
    setTimeout( "changeMember(grade)" ,1000 )

    function changeMember(grade){

        var leftPicRow = $('<img>').addClass("selected-header first-pic").attr("src" , "img/" + grade + "/1.jfif");
        $('.first-pic').replaceWith(leftPicRow);

        var row = $('<p>').addClass("selected-header selected-main").text(grade);
        $('.selected-main').replaceWith(row);

        var rightPicRow = $('<img>').addClass("selected-header second-pic").attr("src" , "img/" + grade + "/2.jfif");
        $('.second-pic').replaceWith(rightPicRow);

        $('#members').load("member/" + grade + ".html");
        $('#regends').load("member/" + grade + ".html");
        $('#members').fadeIn(1500)
        $('.selected-header').fadeIn(1500)
    };
});
