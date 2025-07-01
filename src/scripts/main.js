'use strict';

// Main JavaScript functionality for Bang & Olufsen Landing Page

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuOpener = document.getElementById('menu-opener');
  const menu = document.getElementById('menu');
  const menuClose = document.querySelector('.menu__close');
  const menuLinks = document.querySelectorAll('.menu__link');
  const body = document.body;

  // Toggle mobile menu
  function toggleMenu() {
    const isMenuOpen = window.location.hash === '#menu';
    
    if (isMenuOpen) {
      // Close menu
      history.pushState('', document.title, window.location.pathname);
      menuOpener.classList.remove('active');
    } else {
      // Open menu
      window.location.hash = '#menu';
      menuOpener.classList.add('active');
    }
  }

  // Event listeners for menu
  if (menuOpener) {
    menuOpener.addEventListener('click', toggleMenu);
  }

  if (menuClose) {
    menuClose.addEventListener('click', function(e) {
      e.preventDefault();
      history.pushState('', document.title, window.location.pathname);
      menuOpener.classList.remove('active');
    });
  }

  // Close menu when clicking on menu links
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      history.pushState('', document.title, window.location.pathname);
      menuOpener.classList.remove('active');
    });
  });

  // Header Scroll Effect
  const header = document.querySelector('.header');
  
  function handleScroll() {
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);

  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's the menu toggle
      if (href === '#menu' || href === '#') {
        return;
      }
      
      e.preventDefault();
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Form Handling
  const contactForm = document.querySelector('.contact__form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form elements
      const formData = new FormData(this);
      const inputs = this.querySelectorAll('.form-input');
      
      // Show success message
      showNotification('Thank you! Your message has been sent successfully.', 'success');
      
      // Reset form
      this.reset();
      
      // Remove focus from inputs
      inputs.forEach(input => input.blur());
    });
  }

  // Button Click Handlers
  const buttons = document.querySelectorAll('.button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const buttonText = this.textContent.trim();
      
      // Handle different button actions
      switch(buttonText) {
        case 'Explore Collection':
          scrollToSection('products');
          break;
        case 'Our Story':
          showNotification('Learn more about our 95-year journey in audio excellence.', 'info');
          break;
        case 'Learn More':
          showNotification('Product details coming soon!', 'info');
          break;
        default:
          break;
      }
    });
  });

  // Helper function to scroll to section
  function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const headerHeight = header.offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  // Notification System
  function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
      <div class="notification__content">
        <span class="notification__message">${message}</span>
        <button class="notification__close">&times;</button>
      </div>
    `;

    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
      color: white;
      padding: 15px 20px;
      border-radius: 5px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      z-index: 10000;
      transform: translateX(400px);
      transition: transform 0.3s ease-in-out;
      max-width: 300px;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    // Handle close button
    const closeBtn = notification.querySelector('.notification__close');
    closeBtn.addEventListener('click', () => {
      hideNotification(notification);
    });

    // Auto-hide after 5 seconds
    setTimeout(() => {
      hideNotification(notification);
    }, 5000);
  }

  function hideNotification(notification) {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }

  // Image Hover Effects
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    img.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    img.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // Product Card Click Handlers
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    card.addEventListener('click', function() {
      const productName = this.querySelector('.product-card__title').textContent;
      showNotification(`Showing details for ${productName}`, 'info');
    });
  });

  // Scroll Animation Trigger
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.product-card, .about__content, .contact__content');
  animatedElements.forEach(el => observer.observe(el));

  // Keyboard Navigation
  document.addEventListener('keydown', function(e) {
    // Escape key to close mobile menu
    if (e.key === 'Escape' && window.location.hash === '#menu') {
      history.pushState('', document.title, window.location.pathname);
      menuOpener.classList.remove('active');
    }
  });

  // Touch Gestures for Mobile Menu
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 100;
    const swipeDistance = touchEndX - touchStartX;
    
    // Swipe right to open menu (from left edge)
    if (swipeDistance > swipeThreshold && touchStartX < 50 && window.location.hash !== '#menu') {
      window.location.hash = '#menu';
      menuOpener.classList.add('active');
    }
    
    // Swipe left to close menu
    if (swipeDistance < -swipeThreshold && window.location.hash === '#menu') {
      history.pushState('', document.title, window.location.pathname);
      menuOpener.classList.remove('active');
    }
  }

  // Loading Animation
  window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Fade in hero content
    const heroContent = document.querySelector('.hero__content');
    const heroImage = document.querySelector('.hero__image');
    
    if (heroContent) {
      setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateX(0)';
      }, 100);
    }
    
    if (heroImage) {
      setTimeout(() => {
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'translateX(0)';
      }, 300);
    }
  });

  // Performance Optimization: Throttled Scroll Handler
  let scrollTimeout;
  
  function throttledScrollHandler() {
    if (scrollTimeout) {
      return;
    }
    
    scrollTimeout = setTimeout(() => {
      handleScroll();
      scrollTimeout = null;
    }, 16); // ~60fps
  }

  window.removeEventListener('scroll', handleScroll);
  window.addEventListener('scroll', throttledScrollHandler);

  // Initialize page
  console.log('Bang & Olufsen Landing Page Loaded Successfully! 🎵');
  
  // Handle initial load with hash
  if (window.location.hash === '#menu') {
    menuOpener.classList.add('active');
  }
});
