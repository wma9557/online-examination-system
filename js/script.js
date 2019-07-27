$(document).ready(function(){
    var navbar = $('.navbar');
    $(window).scroll(function(){
        var abc = $(window).scrollTop();
        $("#main").css("background-position-y",+(-abc*0.2)+"px");
        if($(window).scrollTop() <= 40){
            navbar.removeClass('navbar-scroll');
        } else {
            navbar.addClass('navbar-scroll');
        }
    });
});