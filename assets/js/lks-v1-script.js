/*
 * ----------------------------------------------------------------------------------------
    Author        : Himas Rafeek
    Template Name : LKS - Resume, CV 1.0.1 - Responsive Bootstrap Template
    Version       : 1.0.1
    Author URI    : https://himasrafeek.com/about
 * ----------------------------------------------------------------------------------------
 */

$(function () {


  /**
   * --------------------------------------------------------
   *
   *   SMOOTH SCROLL 
   *    - Plugin: jquery ease
   *
   * --------------------------------------------------------
   * --------------------------------------------------------
   */
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate({
            scrollTop: target.offset().top - 54
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 54
  });





  /**
   * --------------------------------------------------------
   *
   *   NAVBAR BAR LKS - V1
   *    - Custom javscript & jQuery code 
   *
   * --------------------------------------------------------
   * --------------------------------------------------------
   */

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 100) {
      $(".navbar").addClass("lks-border");
    } else {
      $(".navbar").removeClass("lks-border");
    }
  });



  /**
   * --------------------------------------------------------
   *
   *   SKILL BAR LKS - 1.0.1
   *    - Custom javscript & jQuery code 
   *
   * --------------------------------------------------------
   * --------------------------------------------------------
   */

  //  Non Colored Skill dots
  //  Uncomment This to code and comment the code below this code to get the regular skill dots 
  /*


  $(".lks-dot-bar-v1").each(function () {
    var template = $(this).html();
    var skillPercent = $(this).parents(".lks-skill-bar-v1").find(".lks-percent").text();
    skillPercent = skillPercent.toString();
    skillPercent = skillPercent.split("");
    skillPercent = parseFloat(skillPercent[0] + "." + skillPercent[1]);
    var percentageCalc = Math.round(skillPercent);
    $(this).html("");
    for (var i = 1; i <= 10; i++) {
      if (i > percentageCalc) {
        $(this)
          .append(template)
          .find(":last-child")
          .addClass("gray-dot");

      } else {
        $(this).append(template);
      }
    }
  });



*/

// Colored Skill Dots

  $(".lks-dot-bar-v1").each(function () {
    var template = $(this).html();
    var skillPercent = $(this)
      .parents(".lks-skill-bar-v1")
      .find(".lks-percent")
      .text();

    skillPercent = skillPercent.toString();
    skillPercent = skillPercent.split("");
    skillPercent = parseFloat(skillPercent[0] + "." + skillPercent[1]);

    var percentageCalc = Math.round(skillPercent);
    $(this).html("");

    for (var i = 1; i <= 10; i++) {
      if (i > percentageCalc) {
        $(this)
          .append(template)
          .find(":last-child")
          .addClass("gray-dot");
      } else {
        $(this).append(template);
      }

      if (percentageCalc < 5) {
        $(this)
          .find(":last-child")
          .addClass("lks-red");
      }

      if (percentageCalc >= 5 && percentageCalc <= 6) {
        $(this)
          .find(":last-child")
          .addClass("lks-yellow");
      }

      if (percentageCalc > 6 && percentageCalc >= 7) {
        $(this)
          .find(":last-child")
          .addClass("lks-green");
      }
    }
  });



  /**
   * --------------------------------------------------------
   *
   *   WORK LKS - V1
   *    - Plugin: Filtrz
   *
   * --------------------------------------------------------
   * --------------------------------------------------------
   */

  var filterizd = $('.filtr-container').filterizr({
    "delay": 25,
    "filterOutCss": {
      "opacity": 0,
      "transform": "scale(0.75)"
    },
    "filterInCss": {
      "opacity": 1,
      "transform": "scale(1)"
    }
  });

  $('#filter li').on('click', function () {
    $(this).parents('#filter').find('li').removeClass('active');
    $(this).addClass('active');
  });


  /**
   * --------------------------------------------------------
   *
   *   TESTIMONIALS LKS - V1
   *    - Plugin: Owl Carousel
   *
   * --------------------------------------------------------
   * --------------------------------------------------------
   */
  $("#testimonials .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    nav: false,
    margin: 15,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });



});