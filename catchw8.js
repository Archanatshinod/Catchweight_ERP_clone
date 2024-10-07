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
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
    // arrows: true,  // Display navigation arrows
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
    slidesToShow: 1,         // Show 1 full slide
    centerMode: true,        // Center the active slide
    centerPadding: '20%',    // Show half of the next and previous slides
    slidesToScroll: 1,
    autoplay: true,          // Enable auto-slide
    autoplaySpeed: 2500,     // Auto-slide speed
    arrows: false,           // Disable navigation arrows
    responsive: [
      {
        breakpoint: 1024,    // Tablet and small desktops
        settings: {
          slidesToShow: 1,   // Show 2 slides
          centerPadding: '20%', // Less padding for smaller screens
          centerMode: true,  // Center the active slide
        }
      },
      {
        breakpoint: 768,     // Tablets and larger phones
        settings: {
          slidesToShow: 1,   // Show 1 slide
          centerMode: false, // Disable center mode
          centerPadding: '0px' // No padding for smaller screens
        }
      },
      {
        breakpoint: 600,     // Small phones
        settings: {
          slidesToShow: 1,   // Show only 1 slide
          centerMode: false, // Disable center mode
          centerPadding: '0px' // Remove padding
        }
      }
    ]
  });
});

// /owl
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items: 3, // Number of items to display
      margin: 10, // Margin between items
      nav: true, // Show navigation buttons
      autoplay: true, // Autoplay feature
      autoplayTimeout: 3000, // Time between each slide
      autoplayHoverPause: true, // Pause on hover
  });
});


// //slideer
$(document).ready(function(){
  $('.slider').slick({
      // dots: true, // Show dots for navigation
      infinite: true, // Infinite loop sliding
      speed: 5000, // Transition speed
      slidesToShow: 1, // Show 1 slide at a time
      slidesToScroll: 1, // Scroll 1 slide at a time
      autoplay: true, // Enable autoplay
      autoplaySpeed: 2000 // Autoplay speed in milliseconds
  });
});

$(document).ready(function(){
  $('#myModal').modal('show'); // To show the modal programmatically
});


// Show Popup
document.querySelector('[data-popup-target]').addEventListener('click', function() {
  document.getElementById('customPopup').style.display = 'flex';
});

// Close Popup
document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('customPopup').style.display = 'none';
});

// Close Popup on Outside Click
window.addEventListener('click', function(event) {
  if (event.target === document.getElementById('customPopup')) {
      document.getElementById('customPopup').style.display = 'none';
  }
});

/// chat
function closeWidget() {
  const chatWidget = document.querySelector('.chat-widget');
  chatWidget.style.display = 'none'; // Hides the widget
}