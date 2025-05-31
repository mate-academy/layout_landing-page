'use strict';

// ==========================================================================
// BURGER MENU FUNCTIONALITY
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
  // Get elements
  const burgerToggle = document.getElementById('burger-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navClose = document.getElementById('nav-close');
  const navOverlay = document.getElementById('nav-overlay');
  const navLinks = document.querySelectorAll('.nav-menu__link');
  const body = document.body;
  const callButton = document.getElementById('phone-icon');

  function makeCall() {
    window.location.href = 'tel:+123455555555';
  }

  // Function to open menu
  function openMenu() {
    navMenu.classList.add('active');
    body.classList.add('menu-open');
  }

  // Function to close menu
  function closeMenu() {
    navMenu.classList.remove('active');
    body.classList.remove('menu-open');
  }

  // Event listeners
  burgerToggle.addEventListener('click', openMenu);
  navClose.addEventListener('click', closeMenu);
  navOverlay.addEventListener('click', closeMenu);
  callButton.addEventListener('click', makeCall);

  // Close menu when clicking on navigation links
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();

      // Smooth scroll to section (optional)
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        setTimeout(() => {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 300); // Wait for menu to close
      }
    });
  });

  // Close menu with Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      closeMenu();
    }
  });

  // Handle window resize
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
      closeMenu();
    }
  });
});

// ==========================================================================
// CONTACT FORM HANDLING
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      // Simple validation
      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }

      // Here you would typically send the data to your server
      console.log('Form submitted:', { name, email, message });
      alert('Thank you for your message! We will get back to you soon.');

      // Reset form
      contactForm.reset();
    });
  }
});

