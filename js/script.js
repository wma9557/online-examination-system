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
    $(".sec-container>*").hide();
    $(".sec-container>*").slideDown(1500);
    $("#panel-hide").click(function(){
        // if ( $(window).width() > 768 ) {
        // }
        if($(".side_nav").width() > 50){
          $("#user_image").hide(300);
          $(".sec-container>*").slideUp(800);
          $(".side_nav").animate({width: "50px"});
        }
        else{
          $("#user_image ").show();
          $(".side_nav").animate({width: "240px"});
          $(".sec-container>*").slideDown(800);
        }
    });
    $("button").click(function(){
        $("#navigaton-mobile").fadeOut(250);
    });
    $("#nav-mobile-button").click(function(){
        $(".nav-mobile").fadeIn(250);
    });
});




var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["January" , "February" , "March" , "April", "May","June", "July", "August", "September"],
        datasets: [{
            label: 'Number Of Exams',
            data: [12, 19, 3, 8, 13, 6,10,15,7],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(50, 115, 220, 0.2)',
                'rgba(32, 252, 3, 0.2)',
                'rgba(3, 227, 252,0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(50, 115, 220, 1)',
                'rgba(32, 252, 3, 1)',
                'rgba(3, 227, 252, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
var africa = [86,114,106,106,107,111,133,221,783,2478];
var asia = [282,350,411,502,635,809,947,1402,3700,5267];
var europe = [168,170,178,190,203,276,408,547,675,734];
var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
var northAmerica = [6,3,2,2,7,26,82,172,312,433];

var ctx = document.getElementById("myChart2");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: africa,
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      },
      { 
        data: asia,
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: false
      },
      { 
        data: europe,
        label: "Europe",
        borderColor: "#3cba9f",
        fill: false
      },
      { 
        data: latinAmerica,
        label: "Latin America",
        borderColor: "#e8c3b9",
        fill: false
      },
      { 
        data: northAmerica,
        label: "North America",
        borderColor: "#c45850",
        fill: false
      }
    ]
  }
});