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

//menu functionality
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menuOpen');
  const menuSection = document.getElementById('menuSection');
  const menuExit = document.getElementById('menuExit');
  const body = document.body;
  const menuLinks = document.querySelectorAll('.menu__link-text');

  // Відкрити меню
  menu.addEventListener('click', (event) => {
    event.preventDefault();
    menuSection.style.display = 'block';
    body.style.overflow = 'hidden'; // Заборонити прокрутку сторінки
  });

  // Закрити меню
  menuExit.addEventListener('click', (event) => {
    event.preventDefault();
    menuSection.style.display = 'none';
    body.style.overflow = ''; // Дозволити прокрутку сторінки
  });

  // Закрити меню при виборі посилання
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuSection.style.display = 'none';
      body.style.overflow = ''; // Дозволити прокрутку сторінки
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const mainElement = document.querySelector("main");

  function updateBackgroundSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 578) {
      // Логіка для екрану до 578 пікселів включно
      mainElement.style.backgroundSize = "578px 480px";

    } else if (screenWidth > 578 && screenWidth < 744) {
      // Логіка для екрану між 578 і 744 пікселів
      mainElement.style.backgroundSize = `${screenWidth}px 480px`;
    } else if (screenWidth >= 744 && screenWidth < 1024) {
      // Логіка для екрану між 744 і 1024 пікселів
      mainElement.style.backgroundSize = `${screenWidth}px 628px`;
    } else {
      // Логіка для екрану від 1024 пікселів
      mainElement.style.backgroundSize = `${screenWidth}px 711px`;
    }
  }

  // Викликаємо функцію при завантаженні сторінки
  updateBackgroundSize();

  // Додаємо слухач на зміну розміру вікна
  window.addEventListener("resize", updateBackgroundSize);
});
