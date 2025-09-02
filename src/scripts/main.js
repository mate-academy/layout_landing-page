function getById(id) {
  return document.getElementById(id);
}

const toggleMenu = () => {
  getById('menu').classList.toggle('menu--opened');
  getById('header').classList.toggle('header--moved');
  document.body.classList.toggle('scroll-blocked');

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

getById('open-menu').addEventListener('click', toggleMenu);
getById('close-menu').addEventListener('click', toggleMenu);
