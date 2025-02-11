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

// //menu functionality
// document.addEventListener('DOMContentLoaded', () => {
//   const menu = document.getElementById('menuOpen');
//   const menuSection = document.getElementById('menuSection');
//   const menuExit = document.getElementById('menuExit');
//   const body = document.body;
//   const menuLinks = document.querySelectorAll('.menu__link-text');

//   // Відкрити меню
//   menu.addEventListener('click', (event) => {
//     event.preventDefault();
//     menuSection.style.display = 'block';
//     body.style.overflow = 'hidden'; // Заборонити прокрутку сторінки
//   });

//   // Закрити меню
//   menuExit.addEventListener('click', (event) => {
//     event.preventDefault();
//     menuSection.style.display = 'none';
//     body.style.overflow = ''; // Дозволити прокрутку сторінки
//   });

//   // Закрити меню при виборі посилання
//   menuLinks.forEach(link => {
//     link.addEventListener('click', () => {
//       menuSection.style.display = 'none';
//       body.style.overflow = ''; // Дозволити прокрутку сторінки
//     });
//   });
// });
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
      menuSection.classList.add('menu-active'); // Додаємо клас для відкриття
    }, 10);

    // menuSection.classList.remove('menu-closing'); // Видаляємо клас закриття
    // menuSection.style.visibility = 'visible'; // Включаємо видимість перед анімацією
    body.style.overflow = 'hidden'; // Блокуємо прокручування
  });

  // Закрити меню
  function closeMenu() {
    menuSection.classList.remove('menu-active'); // Видаляємо клас для відкриття

    setTimeout(() => {
      menuSection.style.visibility = 'hidden'; // Змінюємо visibility після завершення анімації
      menuSection.style.zIndex = '-1';
      menuSection.classList.remove('menu-closing'); // Очищаємо клас для повторного використання
    }, 300); // Час затримки анімації

    // menuSection.classList.add('menu-closing'); // Додаємо клас для закриття
    body.style.overflow = ''; // Відновлюємо прокручування
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
