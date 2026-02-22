'use strict';

const phoneIcon = document.querySelector('.icon--phone-call');

if (phoneIcon) {
  phoneIcon.addEventListener('click', (event) => {
    event.preventDefault();

    // додаємо клас активності (збільшення)
    phoneIcon.classList.add('icon--phone-call--active');

    // через 3 секунди прибираємо клас
    setTimeout(() => {
      phoneIcon.classList.remove('icon--phone-call--active');
    }, 3000);
  });
}

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const closeIcon = document.querySelector('.icon--close'); // Додано

burger.addEventListener('click', (event) => {
  event.preventDefault();

  const isActive = menu.classList.toggle('page__menu--active');

  if (isActive) {
    burger.classList.remove('icon--burger-menu', 'icon-burger-menu-hover');
    burger.classList.add('icon--close');
    document.body.style.overflow = 'hidden';
  } else {
    burger.classList.remove('icon--close', 'icon-burger-menu-hover');
    burger.classList.add('icon--burger-menu');
    document.body.style.overflow = '';
  }
});

// Додано: клік по хрестику всередині меню
closeIcon.addEventListener('click', (event) => {
  event.preventDefault();

  menu.classList.remove('page__menu--active');
  burger.classList.remove('icon--close');
  burger.classList.add('icon--burger-menu');
  document.body.style.overflow = '';
});

const footerForm = document.querySelector('.footer__form');

if (footerForm) {
  footerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const submitBtn = this.querySelector('.footer__button');
    const originalText = submitBtn.textContent; // Зберігаємо "SEND"

    // 1. Очищуємо поля форми
    this.reset();

    // 2. Знімаємо фокус, щоб прибрати "темний" стан
    submitBtn.blur();

    // 3. Міняємо текст на кнопці
    submitBtn.textContent = 'Your message has been sent!';

    // Блокуємо кнопку, щоб користувач не натискав багато разів під час паузи
    submitBtn.disabled = true;

    // 4. Через 3 секунди повертаємо все назад
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 3000);
  });
}

const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');

    if (targetId.startsWith('#')) {
      e.preventDefault();

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Закриваємо меню
        if (menu) {
          menu.classList.remove('page__menu--active');
        }
        document.body.style.overflow = 'auto';

        // Плавна прокрутка через scrollTo
        const topOffset = targetElement.offsetTop;

        window.scrollTo({
          top: topOffset,
          behavior: 'smooth',
        });
      }
    }
  });
});
