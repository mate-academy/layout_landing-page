'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      if (href.startsWith('#')) {
        e.preventDefault();

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const menu = document.getElementById('menu');

          if (menu && window.location.hash === '#menu') {
            window.location.hash = '';
          }

          const headerHeight = 80;
          const targetPosition = targetElement.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });

          setTimeout(() => {
            window.history.pushState(null, null, href);
          }, 100);
        }
      }
    });
  });

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

  document.addEventListener('click', function (e) {
    const menu = document.getElementById('menu');
    const menuToggle = document.querySelector('.icon--menu');

    if (menu && window.location.hash === '#menu') {
      if (
        !menu.contains(e.target) &&
        menuToggle &&
        !menuToggle.contains(e.target)
      ) {
        window.location.hash = '';
      }
    }
  });

  const contactForm = document.querySelector('.form');

  if (contactForm) {
    contactForm.addEventListener('submit', function () {
      setTimeout(() => {
        window.alert("Thank you for your message! We'll get back to you soon.");
      }, 100);
    });
  }

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

  const animateElements = document.querySelectorAll('.product, .section-title');

  animateElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });

  const productCards = document.querySelectorAll('.product');

  productCards.forEach((card) => {
    const img = card.querySelector('.product__photo');

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

  window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });
});
