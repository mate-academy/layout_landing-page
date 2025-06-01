'use strict';

// ==========================================================================
// HASH NAVIGATION HANDLING
// ==========================================================================

function handleHashNavigation() {
  if (window.location.hash) {
    const targetId = window.location.hash;
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      setTimeout(() => {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 300);
    }
  }
}

function scrollToSection(targetId) {
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

// ==========================================================================
// BURGER MENU FUNCTIONALITY
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
  // Handle hash navigation on page load

  // Get elements
  const burgerToggle = document.getElementById('burger-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navClose = document.getElementById('nav-close');
  const navOverlay = document.getElementById('nav-overlay');
  const navLinks = document.querySelectorAll('.nav-menu__link');
  const body = document.body;
  const callButton = document.querySelector('.phone-icon');

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
    console.log('Adding click event to link:', link);
    link.addEventListener('click', (e) => {
      // Close menu first
      closeMenu();

      // Get the target from href attribute
      const href = link.getAttribute('href');

      // If it's a hash link, handle the scrolling after menu closes
      if (href && href.startsWith('#')) {
        e.preventDefault(); // Prevent default jump behavior

        // Wait for menu to close before scrolling
        setTimeout(() => {
          scrollToSection(href);
          // Update URL hash
          window.history.pushState(null, null, href);
        }, 100); // Adjust timing based on your menu close animation
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

// Handle hash changes (when user clicks browser back/forward)
window.addEventListener('hashchange', handleHashNavigation);

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

      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }

      console.log('Form submitted:', { name, email, message });
      alert('Thank you for your message! We will get back to you soon.');

      contactForm.reset();
    });
  }
});
