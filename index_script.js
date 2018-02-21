$(document).ready(() => {
    var top1 = ($(window).width() * 0.0221) + 24.86;
    var top11 = ($(window).width() * 0.0441) + 49.73;
    var top2 = ($(window).width() * 0.0205) + 23.06;
    var top22 = ($(window).width() * 0.0409) + 46.11;
    var top3 = ($(window).width() * 0.0225) + 25.35;
    var top33 = ($(window).width() * 0.0449) + 50.63;
    var nav = $("nav").height();

    if($(window).width() > 960) {
      $(window).scroll(function() {
        $('nav').toggleClass('nav-scroll', $(this).scrollTop() > 100);
        $('.nav-links').toggleClass('nav-links-scroll', $(this).scrollTop() > 100);
        $('.nav-links-2').toggleClass('nav-links-2-scroll', $(this).scrollTop() > 100);
        $('.nav-links-3').toggleClass('nav-links-3-scroll', $(this).scrollTop() > 100);
        $('.fa-wrench').toggleClass('nav-links-icons-1-scroll', $(this).scrollTop() > 100);
        $('.fa-shopping-bag').toggleClass('nav-links-icons-2-scroll', $(this).scrollTop() > 100);
        $('.fa-info-circle').toggleClass('nav-links-icons-3-scroll', $(this).scrollTop() > 100);
        $('.fa-phone').toggleClass('nav-links-icons-4-scroll', $(this).scrollTop() > 100);
        $('.logo').toggleClass('logo-scroll', $(this).scrollTop() > 100);
        $('.fa-arrow-circle-up').toggleClass('fa-arrow-circle-up-scroll', $(this).scrollTop() > 150);
      });
    }
    else {
      $("nav").removeClass('transition');
      $(".nav-links").removeClass('transition');
      $(window).scroll(function() {
        $('.fa-arrow-circle-up').toggleClass('fa-arrow-circle-up-scroll', $(this).scrollTop() > 150);
      });
      $("#facebook").attr({
        "src":"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmultimathuf&tabs=timeline&width=250&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",
        "width":"250px",
        "height":"400px"
      });
    }

    $('.nav-links-1').mouseenter(function() {
      $('#nav-links-icons-1').slideDown("fast");
    });
    $('.nav-links-1').mouseleave(function() {
      $('#nav-links-icons-1').slideUp("fast");
    });

    $('.nav-links-2').mouseenter(function() {
      $('#nav-links-icons-2').slideDown("fast");
    });
    $('.nav-links-2').mouseleave(function() {
      $('#nav-links-icons-2').slideUp("fast");
    });

    $('.nav-links-3').mouseenter(function() {
      $('#nav-links-icons-3').slideDown("fast");
    });
    $('.nav-links-3').mouseleave(function() {
      $('#nav-links-icons-3').slideUp("fast");
    });

    $('.nav-links-4').mouseenter(function() {
      $('#nav-links-icons-4').slideDown("fast");
    });
    $('.nav-links-4').mouseleave(function() {
      $('#nav-links-icons-4').slideUp("fast");
    });

    if($(window).width() > 960) {
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

      $('.fa-arrow-circle-up').mouseenter(function() {
        $(this).animate({
          color:'gray'
        }, 20);
      });
      $('.fa-arrow-circle-up').mouseleave(function() {
        $(this).animate({
          color:'rgba(80, 80, 80, 0.5)'
        }, 20);
      });
    }

    setTimeout(function(){
      $('.feedback').animate({
        bottom:'-4px'
      }, 750);
    }, 10000);

    $('.feedback').click(function() {
      $(this).hide();
    });

    if($(".slider").length > 0) {
      $('.slider').bxSlider({
        slideMargin: 200
      });
    }

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
      if($("nav").height() > nav) {
        $("nav").animate({
          height:'21.67vw'
        }, 200);

        $(".nav-links").hide();
      }

      else {
        $("nav").animate({
          height:'92.5vw'
        }, 200);

        $(".nav-links").animate({
          left:'0'
        }, 200);

        $(".nav-links").show();
      }
    });
});
