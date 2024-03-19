const menuBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const close = document.getElementById('close-btn');

function toggleMenu() {
  menu.classList.toggle('active');
  document.body.classList.toggle('body-scroll-disabled');
}

menuBtn.addEventListener('click', toggleMenu);

close.addEventListener('click', function() {
  menu.classList.remove('active');
  document.body.classList.remove('body-scroll-disabled');
});
