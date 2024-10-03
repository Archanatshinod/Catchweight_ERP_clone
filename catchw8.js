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

// brand names sliding
$(document).ready(function(){
  $('.brand-slider').slick({
    slidesToShow: 6,  // Number of slides to show at once
    slidesToScroll: 1,  // Number of slides to scroll
    autoplay: true,  // Enable automatic scrolling
    autoplaySpeed: 2000,  // Speed of automatic scrolling
    arrows: true,  // Display navigation arrows
    // dots: true,  // Show navigation dots
    infinite: true,  // Enable looping
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});

// what we do

$(document).ready(function(){
  $('.what-we-do-slider').slick({
    infinite: true,
    slidesToShow: 3,          // Number of visible slides at a time
    slidesToScroll: 1,
    centerMode: true,         // Enables center focus for the middle slide
    centerPadding: '20px',    // Padding on either side of the center slide
    autoplay: true,           // Enable auto-slide
    autoplaySpeed: 2500,      // Auto-slide speed (in milliseconds)
    // dots: true,               // Enable dots navigation
    arrows: false,            // Disable navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,  // Disable center mode for smaller screens
          centerPadding: '0px'
        }
      }
    ]
  });
});