$(document).ready(() => {
    var top1 = ($(window).width() * 0.0221) + 24.86;
    var top11 = ($(window).width() * 0.0441) + 49.73;
    var top2 = ($(window).width() * 0.0205) + 23.06;
    var top22 = ($(window).width() * 0.0409) + 46.11;
    var top3 = ($(window).width() * 0.0225) + 25.35;
    var top33 = ($(window).width() * 0.0449) + 50.63;

    $('#nav-links-1').mouseenter(function() {
      $('#nav-links-icons-1').slideDown("fast");
    });
    $('#nav-links-1').mouseleave(function() {
      $('#nav-links-icons-1').slideUp("fast");
    });

    $('#nav-links-2').mouseenter(function() {
      $('#nav-links-icons-2').slideDown("fast");
    });
    $('#nav-links-2').mouseleave(function() {
      $('#nav-links-icons-2').slideUp("fast");
    });

    $('#nav-links-3').mouseenter(function() {
      $('#nav-links-icons-3').slideDown("fast");
    });
    $('#nav-links-3').mouseleave(function() {
      $('#nav-links-icons-3').slideUp("fast");
    });

    $('#nav-links-4').mouseenter(function() {
      $('#nav-links-icons-4').slideDown("fast");
    });
    $('#nav-links-4').mouseleave(function() {
      $('#nav-links-icons-4').slideUp("fast");
    });

    $('#circle-1').mouseenter(function() {
      $('#img-icon-lightning').animate({
        top:'0px',
        opacity:'0'
      }, 90);
      $('#img-icons-animate-1').delay(90).animate({
        top:top1,
        opacity:'1'
      }, 90);
      $('#circle-1').animate({
        borderColor:'white',
      }, 150);
      $('#text-circles-1').animate({
        color:'white',
      }, 90);
    });
    $('#circle-1').mouseleave(function() {
      $('#img-icon-lightning').delay(90).animate({
        top:top1,
        opacity:'1'
      }, 90);
      $('#img-icons-animate-1').animate({
        top:top11,
        opacity:'0'
      }, 90);
      $('#circle-1').animate({
        borderColor:'black',
      }, 150);
      $('#text-circles-1').animate({
        color:'black',
      }, 90);
    });

    $('#circle-2').mouseenter(function() {
      $('#img-icon-lightbulb').animate({
        top:'0px',
        opacity:'0'
      }, 90);
      $('#img-icons-animate-2').delay(90).animate({
        top:top2,
        opacity:'1'
      }, 90);
      $('#circle-2').animate({
        borderColor:'white',
      }, 150);
      $('#text-circles-2').animate({
        color:'white',
      }, 90);
    });
    $('#circle-2').mouseleave(function() {
      $('#img-icon-lightbulb').delay(90).animate({
        top:top2,
        opacity:'1'
      }, 90);
      $('#img-icons-animate-2').animate({
        top:top22,
        opacity:'0'
      }, 90);
      $('#circle-2').animate({
        borderColor:'black',
      }, 150);
      $('#text-circles-2').animate({
        color:'black',
      }, 90);
    });

    $('#circle-3').mouseenter(function() {
      $('#img-icon-pen').animate({
        top:'0px',
        opacity:'0'
      }, 90);
      $('#img-icons-animate-3').delay(90).animate({
        top:top3,
        opacity:'1'
      }, 90);
      $('#circle-3').animate({
        borderColor:'white',
      }, 150);
      $('#text-circles-3').animate({
        color:'white',
      }, 90);
    });
    $('#circle-3').mouseleave(function() {
      $('#img-icon-pen').delay(90).animate({
        top:top3,
        opacity:'1'
      }, 90);
      $('#img-icons-animate-3').animate({
        top:top33,
        opacity:'0'
      }, 90);
      $('#circle-3').animate({
        borderColor:'black',
      }, 150);
      $('#text-circles-3').animate({
        color:'black',
      }, 90);
    });

    $('.slider').bxSlider({
      slideMargin: 200
    });

    $('#social-links-1').mouseenter(function() {
      $("#img-social-1").animate({
        width:'4.5vw',
        marginLeft:'-0.25vw',
        marginTop:'-0.25vw'
      }, 150);
    });
    $('#social-links-1').mouseleave(function() {
      $("#img-social-1").animate({
        width:'4vw',
        marginLeft:'0',
        marginTop:'0'
      }, 150);
    });

    $('#social-links-2').mouseenter(function() {
      $("#img-social-2").animate({
        width:'4.5vw',
        marginLeft:'-0.25vw',
        marginTop:'-0.25vw'
      }, 150);
    });
    $('#social-links-2').mouseleave(function() {
      $("#img-social-2").animate({
        width:'4vw',
        marginLeft:'0',
        marginTop:'0'
      }, 150);
    });

    $("#mob-menu-icon").click(function() {
      if($("nav").height() === 315) {
        $("nav").animate({
          height:'60px'
        }, 200);

        $(".nav-links").hide();
      }

      else {
        $("nav").animate({
          height:'315px'
        }, 200);

        $(".nav-links").animate({
          left:'0'
        }, 200);

        $(".nav-links").show();
      }
    });
});
