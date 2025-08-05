$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({

      scrollTop: $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});

$(document).ready(function () {
  // Smooth scrolling to the project section
  $("a[href='#projects']").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});
// JavaScript code to show the scrollbar when needed
window.addEventListener('load', function () {
  var navbar = document.querySelector('.navbar');
  var navbarContent = document.querySelector('.navbar ul');

  // Check if the menu content exceeds the maximum height
  if (navbarContent.scrollHeight > navbar.clientHeight) {
    navbar.style.overflowY = 'auto'; // Show the scrollbar
  }
});
