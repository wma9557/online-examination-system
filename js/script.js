$(document).ready(function(){
    var navbar = $('.navbar');
    var content = $(".paralex-container"); 
    $(window).scroll(function(){
        var abc = $(window).scrollTop();
        $("#main_image").css("background-position-y",+(abc*0.1)+"px");
        if($(window).scrollTop() <= 40){
            navbar.removeClass('navbar-scroll');
        } 
        else if($(window).scrollTop() >= 40 || window.matchMedia("(max-width: 768px)").matches){
            navbar.addClass('navbar-scroll');
        }
    });
});

//  $(document).ready(function (){
//     $("#panel-hide").click(function(){
//         $(".sec-container").animate({width: "toggle"})
               
                
//     })
    
    
    // $("#nav-mobile-button").click(function(){
    //     $(".nav-mobile").fadeIn(250)
    // })
    
 //})