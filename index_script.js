$(document).ready(() => {
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
        top:'4.02vw',
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
        top:'4.02vw',
        opacity:'1'
      }, 90);
      $('#img-icons-animate-1').animate({
        top:'8.05vw',
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
        top:'3.73vw',
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
        top:'3.73vw',
        opacity:'1'
      }, 90);
      $('#img-icons-animate-2').animate({
        top:'7.46vw',
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
        top:'4.09vw',
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
        top:'4.09vw',
        opacity:'1'
      }, 90);
      $('#img-icons-animate-3').animate({
        top:'8.19vw',
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
      if($("nav").height() === 460) {
        $("nav").animate({
          height:'90px'
        }, 200);

        $(".nav-links").hide();
      }

      else {
        $("nav").animate({
          height:'460px'
        }, 200);

        $(".nav-links").animate({
          left:'0'
        }, 200);

        $(".nav-links").show();
      }
    });
});
