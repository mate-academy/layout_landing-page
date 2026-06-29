const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.reset();

  window.alert('Дякуємо! Повідомлення відправлено.');
});

document
  .querySelectorAll('.sidebar__list a, .sibebar__order')
  .forEach((link) => {
    link.addEventListener('click', () => {
      document.getElementById('menu-toggle').checked = false;
    });
  });
