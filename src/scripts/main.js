'use strict';
// main.js
document.addEventListener('DOMContentLoaded', () => {
  const phoneIcon = document.querySelector('.header_right img[alt="Phone"]');
  const contactsBlock = document.querySelector('.header_contacts');

  phoneIcon.addEventListener('mouseenter', () => {
    contactsBlock.style.display = 'flex';
  });

  phoneIcon.addEventListener('mouseleave', () => {
    contactsBlock.style.display = 'none';
  });

  // Чтобы не пропадал, когда наводишь на сам блок
  contactsBlock.addEventListener('mouseenter', () => {
    contactsBlock.style.display = 'flex';
  });

  contactsBlock.addEventListener('mouseleave', () => {
    contactsBlock.style.display = 'none';
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const burgerIcon = document.querySelector('img[alt="Menu"]');
  const menu = document.querySelector('.menu_nav');
  const closeBtn = document.querySelector('.menu_close');

  burgerIcon.addEventListener('mouseenter', () => {
    menu.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.add('hidden');
  });
});
