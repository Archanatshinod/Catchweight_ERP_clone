// 
$(document).ready(function(){
  $('.industry-slider').slick({
    // dots: true,            // Show dots below the slider
    infinite: true,        // Infinite loop
    speed: 500,            // Transition speed
    slidesToShow: 4,       // Show 4 slides at a time
    slidesToScroll: 1,     // Scroll 1 slide at a time
    autoplay: true,        // Auto scroll
    autoplaySpeed: 2000,   // Auto scroll every 2 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
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
});
