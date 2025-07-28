document.addEventListener('DOMContentLoaded', () => {
  // Seleciona os elementos do DOM
  const menuToggle = document.querySelector('.menu-toggle');
  const sideMenu = document.querySelector('.side-menu');
  const overlay = document.querySelector('.overlay');

  // Verifica se todos os elementos necessários existem
  if (menuToggle && sideMenu && overlay) {
    // Função para alternar o menu
    const toggleMenu = () => {
      sideMenu.classList.toggle('is-open');
      overlay.classList.toggle('is-active');
      // Impede o scroll do body quando o menu está aberto
      document.body.style.overflow = sideMenu.classList.contains('is-open') ? 'hidden' : '';
        };
        // Adiciona o evento de clique ao botão do menu
        menuToggle.addEventListener('click', toggleMenu);

    // Adiciona o evento de clique ao overlay para fechar o menu
    overlay.addEventListener('click', toggleMenu);
    }
});
