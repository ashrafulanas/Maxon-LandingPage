$(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 20,
    time: 1000,
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 3000,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$(document).ready(function () {
  $("#reviewSlider").slick({
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 1000,
    autoplaySpeed: 2500,
  });
});

AOS.init();
new WOW().init();
