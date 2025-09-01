// eslint-disable-next-line no-unused-vars
const toggleMenu = () => {
  document.getElementById('menu').classList.toggle('menu--opened');
  document.getElementById('header').classList.toggle('header--moved');
  document.body.classList.toggle('scroll-blocked');

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
