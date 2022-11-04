$(document).ready(function(){
  $('.autoplay').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      // centerMode: true,
      responsive: [
          {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
          }
          },
          {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          }
      ]
  });

  $('.single-item').slick({
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
});