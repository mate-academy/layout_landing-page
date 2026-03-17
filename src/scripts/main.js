const btnMenu = document.querySelector('.btn-menu');
const btnClose = document.querySelector('#btn-close');
const sideMenu = document.querySelector('#side-menu');

// Abre o menu
btnMenu.addEventListener('click', () => {
  sideMenu.classList.add('active');
});

// Fecha o menu
btnClose.addEventListener('click', () => {
  sideMenu.classList.remove('active');
});
