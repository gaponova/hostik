$(document).ready(function(){
  $('.header-slider').slick({
    fade: true,
    speed: 1000,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true
  });

  $('.say-slider').slick({
    fade: false,
    speed: 700,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });

});