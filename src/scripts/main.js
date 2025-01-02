const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

const menuToggle = document.querySelector('.icon--menu');  // Иконка открытия меню
const closeButton = document.querySelector('.icon--close'); // Иконка закрытия меню
const body = document.body;
const menu = document.getElementById('menu'); // Меню
const menuLinks = document.querySelectorAll('.menu__nav a'); // Ссылки в меню

// Когда нажимается иконка меню, блокируем прокрутку
menuToggle.addEventListener('click', function() {
  body.classList.add('no-scroll'); // Блокируем прокрутку
  menu.classList.add('open'); // Добавляем класс открытого меню (если нужно для анимации)
});

// Когда нажимается кнопка закрытия меню, разрешаем прокрутку
closeButton.addEventListener('click', function() {
  body.classList.remove('no-scroll'); // Разрешаем прокрутку
  menu.classList.remove('open'); // Убираем класс открытого меню
});

// Когда нажимается пункт меню, убираем блокировку прокрутки
menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    body.classList.remove('no-scroll'); // Разрешаем прокрутку при переходе по пункту меню
    menu.classList.remove('open'); // Закрываем меню
  });
});
