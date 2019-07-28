$(document).ready(function(){
    var navbar = $('.navbar');
    var content = $(".paralex-container"); 
    $(window).scroll(function(){
        var abc = $(window).scrollTop();
        $("#main").css("background-position-y",+(-abc*0.2)+"px");
        $(".main_contian").css("position","relative").css("top",+(abc*0.5+130)+"px");
        $(".main_contian2").css("top",+(abc*0.5+500)+"px");
        if($(window).scrollTop() <= 40){
            navbar.removeClass('navbar-scroll');
        } else {
            navbar.addClass('navbar-scroll');
        }
    });
});