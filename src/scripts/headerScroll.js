export function initHeaderScroll() {
  const headerTop = document.querySelector('.header-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      headerTop.classList.add('header-top--scrolled');
    } else {
      headerTop.classList.remove('header-top--scrolled');
    }
  });
}
