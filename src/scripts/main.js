'use strict';

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const nameValue = nameInput.value.trim();

  // Перевірка на те, що ім'я починається з великої літери і не містить спеціальних символів
  const nameRegex = /^[A-Z][a-zA-z\s]*$/;
  if (!nameRegex.test(nameValue)) {
    alert('Name must start with a capital letter and contain only alphabetic characters.');
    return;
  }

  // Отримання данних форми
  const formData = {
    name: nameValue,
    email: document.getElementById('email').value.trim(),
    message: document.getElementById('message').value.trim(),
  };

  // Надсилання даних
  console.log('Form data submitted:', formData);
  alert('Form submitted successfully');

  // Додатково: очищення форми після успішного надсилання
  this.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menuOpen');
  const menuSection = document.getElementById('menuSection');
  const menuExit = document.getElementById('menuExit');
  const body = document.body;
  const menuLinks = document.querySelectorAll('.menu__link-text');

  // Відкрити меню
  menu.addEventListener('click', (event) => {
    event.preventDefault();

    menuSection.style.visibility = 'visible';
    menuSection.style.zIndex = '100';

    setTimeout(() => {
      menuSection.classList.add('menu-active');
    }, 10);

    body.style.overflow = 'hidden';
  });

  // Закрити меню
  function closeMenu() {
    menuSection.classList.remove('menu-active');

    setTimeout(() => {
      menuSection.style.visibility = 'hidden';
      menuSection.style.zIndex = '-1';
      menuSection.classList.remove('menu-closing');
    }, 300);

    body.style.overflow = '';
  }

  // Закрити меню при натисканні на кнопку закриття
  menuExit.addEventListener('click', (event) => {
    event.preventDefault();
    closeMenu();
  });

  // Закрити меню при кліку на посилання
  menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      setTimeout(() => {
        window.location.href = link.href;
      }, 300);

      closeMenu();
    });
  });
});
