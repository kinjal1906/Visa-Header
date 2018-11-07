//  ribbon animation 
var activeOffset = $('.menu .nav .active').position().left;
var activeItemWidth = $('.menu .nav .active').width();

$(document).ready(function () {
    $('.navbar-indicator').css('left', activeOffset + activeItemWidth + 80 );
    
});
$('.menu .nav li').hover(function () {
    var navOffset = $(this).position().left;
    var navItemWidth = $(this).width();

    $('.navbar-indicator').css('left', navOffset + navItemWidth + 80);
   
    
});