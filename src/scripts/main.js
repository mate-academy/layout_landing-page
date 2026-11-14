const phone = document.querySelector('.header__phone');
const phoneWrapper = document.querySelector('.header__phone-wrapper');

phone.addEventListener('click', () => {
  const isOpen = phoneWrapper.classList.toggle('is-open');

  phone.setAttribute('aria-expanded', isOpen);
});
