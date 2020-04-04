$('header').load("header.html");
$('.member-header').load("../memberHeader.html");
$('.main-side').load("side.html");
$('.view-change').load("viewChange.html");
$('.member-main-side').load("../memberSide.html");
$('.member-view-change').load("../memberViewChange.html");


$(window).on("load",function() {
    $('body').fadeIn(3000);
});
//
$(document)
.on('mouseover', '.header-content', function(){
    $(this).stop(true).animate({color: "red", "font-size": "27px"}, 500);
    }
)
.on('mouseout', '.header-content', function(){
    $(this).stop(true).animate({color: "white", "font-size": "20px"}, 500);
    }
);

$(document)
.on('mouseover', '.view-change', function(){
    $(this).find('a').stop(true).animate({color: "red"}, 500);
    }
)
.on('mouseout', '.view-change', function(){
    $(this).find('a').stop(true).animate({color: "black"}, 500);
    }
);

$(document)
.on('mouseover', '.grade-link', function(){
    $(this).find('a').stop(true).animate({color: "red", fontSize: "45px"}, 500);
    }
)
.on('mouseout', '.grade-link', function(){
    $(this).find('a').stop(true).animate({color: "white", fontSize: "40px"}, 500);
    }
);

// $('.grade').click(function(){
//     $('main').fadeOut(1000); 
//     var grade = $(this).attr("id");
//     setTimeout(function(){href(grade)} , 1000);
//     setTimeout(function(){changeMember(grade)} , 2000);
// });

function href(grade){
    window.location.href ='member.html'
        $(window).load(function() {
            $('body').fadeIn(800);
        });
};

// function changeMember(grade){

//     var leftPicRow = $('<img>').addClass("selected-header first-pic").attr("src" , "../img/" + grade + "/1.jpeg");
//     $('.first-pic').replaceWith(leftPicRow);

//     var row = $('<h1>').addClass("selected-header selected-main").text(grade);
//     $('.selected-main').replaceWith(row);

//     var rightPicRow = $('<img>').addClass("selected-header second-pic").attr("src" , "../img/" + grade + "/2.jpeg");
//     $('.second-pic').replaceWith(rightPicRow);

//     $('#members').load("../member/" + grade + ".html");
//     $('#regends').load("../member/" + grade + ".html");
//     $('.main-content').fadeIn(1000);
//     $('.selected-grade').fadeIn(1000);
// };