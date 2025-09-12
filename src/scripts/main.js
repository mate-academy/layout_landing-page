/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.header__menu-toggle');
  const menuClose = document.querySelector('.menu__close');
  const menu = document.getElementById('main-menu');

  if (menuToggle && menuClose && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.add('is-active');
    });

    menuClose.addEventListener('click', () => {
      menu.classList.remove('is-active');
    });
  }

  // Função para limpar o formulário
  function clearForm(form) {
    if (form) {
      form.reset();
    }
  }

  // Função para impedir o reload do formulário
  window.naoReload = function (event) {
    event.preventDefault();

    // Acessa o formulário que disparou o evento diretamente
    const form = event.target;

    clearForm(form);

    alert('Formulário enviado com sucesso!');
  };
});
