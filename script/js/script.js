$(document).ready(function () {
  // Menu toggle functionality
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  // Window scroll and load events
  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    // Show/hide scroll to top button
    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }
  });

  // Smooth scrolling for all anchor links
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    
    const target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 50
      }, 800, 'linear');
    }
  });

  // Contact form handling
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();
    
    const formData = {
      name: $('input[name="name"]').val().trim(),
      email: $('input[name="email"]').val().trim(),
      project: $('input[name="project"]').val().trim(),
      message: $('#message').val().trim()
    };

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Show loading state
    const submitBtn = $(this).find('button[type="submit"]');
    const originalText = submitBtn.html();
    submitBtn.html('Sending... <i class="fas fa-spinner fa-spin"></i>').prop('disabled', true);

    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
      submitBtn.html(originalText).prop('disabled', false);
    }, 2000);
  });

  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Add smooth animations to skill items
  $('.skill').hover(
    function() {
      $(this).addClass('skill-hover');
    },
    function() {
      $(this).removeClass('skill-hover');
    }
  );

  // Add loading animation to projects
  $('.project').each(function(index) {
    $(this).css('animation-delay', (index * 0.1) + 's');
  });

  // Navbar scrollbar handling
  const navbar = document.querySelector('.navbar');
  const navbarContent = document.querySelector('.navbar ul');

  if (navbarContent && navbarContent.scrollHeight > navbar.clientHeight) {
    navbar.style.overflowY = 'auto';
  }

  // Add scroll reveal effect
  $(window).scroll(function() {
    $('.box, .project, .skill').each(function() {
      const elementTop = $(this).offset().top;
      const elementBottom = elementTop + $(this).outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).addClass('animate-in');
      }
    });
  });
});
