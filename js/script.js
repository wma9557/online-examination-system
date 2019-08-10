$(document).ready(function(){
    var navbar = $('.navbar');
    var content = $(".paralex-container"); 
    $(window).scroll(function(){
        var abc = $(window).scrollTop();
        $("#main").css("background-position-y",+(-abc*0.3)+"px");
        $(".main_contian").css("position","relative").css("top",+(abc*0.5+130)+"px");
        $(".main_contian2").css("top",+(abc*0.5+500)+"px");
        if($(window).scrollTop() <= 40){
            navbar.removeClass('navbar-scroll');
        } 
        else if($(window).scrollTop() >= 40 || window.matchMedia("(max-width: 768px)").matches){
            navbar.addClass('navbar-scroll');
        }
    });
});