'use strict';

const header = document.querySelector('.header');
const menuBtn = document.querySelector('.header__menu-btn');
const body = document.body;
const mobileLinks = document.querySelectorAll('.mobile-menu a');
const contactForm = document.querySelector('.contact__form');

// Перевіряємо, чи існують елементи перед додаванням слухачів
if (menuBtn && header) {
  menuBtn.addEventListener('click', () => {
    header.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
  });
}

// Закриваємо мобільне меню при кліку на будь-яке посилання
mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('is-open');
    body.classList.remove('no-scroll');
  });
});

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Імітуємо "відправку" (наприклад, 1 секунда)
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      contactForm.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      window.alert('✅ Message sent! We will contact you soon.');
    }, 1000);
  });
}
