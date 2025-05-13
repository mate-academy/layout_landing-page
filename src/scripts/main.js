'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const phoneIcon = document.querySelector('.header_right img[alt="Phone"]');
  const contactsBlock = document.querySelector('.header_contacts');
  const burgerIcon = document.querySelector('img[alt="Menu"]');
  const menu = document.querySelector('.menu_nav');
  const closeBtn = document.querySelector('.menu_close');
  const menuLinks = document.querySelectorAll('.menu_content a');

  phoneIcon.addEventListener('mouseenter', () => {
    contactsBlock.style.display = 'flex';
  });

  phoneIcon.addEventListener('mouseleave', () => {
    contactsBlock.style.display = 'none';
  });

  contactsBlock.addEventListener('mouseenter', () => {
    contactsBlock.style.display = 'flex';
  });

  contactsBlock.addEventListener('mouseleave', () => {
    contactsBlock.style.display = 'none';
  });

  burgerIcon.addEventListener('click', () => {
    menu.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.add('hidden');
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
});
