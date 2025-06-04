/* eslint-env browser */
'use strict';

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav__link, .menu__link');

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Check if it's an internal link (starts with #)
      if (href.startsWith('#')) {
        e.preventDefault();

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Close mobile menu if open
          const menu = document.getElementById('menu');

          if (menu && window.location.hash === '#menu') {
            window.location.hash = '';
          }

          // Smooth scroll to target
          const headerHeight = 80;
          const targetPosition = targetElement.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });

          // Update URL hash
          setTimeout(() => {
            window.history.pushState(null, null, href);
          }, 100);
        }
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('.header');

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = 'none';
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function (e) {
    const menu = document.getElementById('menu');
    const menuToggle = document.querySelector('.header__menu-toggle');

    if (menu && window.location.hash === '#menu') {
      if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        window.location.hash = '';
      }
    }
  });

  // Form submission success message
  const contactForm = document.querySelector('.contact__form');

  if (contactForm) {
    contactForm.addEventListener('submit', function () {
      // Form is already set to reset in HTML, but we can add success feedback
      setTimeout(() => {
        // eslint-disable-next-line no-alert
        window.alert("Thank you for your message! We'll get back to you soon.");
      }, 100);
    });
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new window.IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    '.product-card, .feature, .section-title',
  );

  animateElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });

  // Image hover effects for product cards
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach((card) => {
    const img = card.querySelector('.product-card__img');

    card.addEventListener('mouseenter', function () {
      if (img) {
        img.style.transform = 'scale(1.1)';
      }
    });

    card.addEventListener('mouseleave', function () {
      if (img) {
        img.style.transform = 'scale(1)';
      }
    });
  });

  // Add loading class removal after page load
  window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });
});
