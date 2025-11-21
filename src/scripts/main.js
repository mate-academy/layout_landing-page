const botaoAbrir = document.getElementById('menu-button');
const botaoFechar = document.getElementById('close-menu-button');
const menuVermelho = document.querySelector('.menu-mobile');

function alternarMenu() {
  menuVermelho.classList.toggle('is-open');

  document.body.classList.toggle('no-scroll');
}

botaoAbrir.addEventListener('click', alternarMenu);
botaoFechar.addEventListener('click', alternarMenu);