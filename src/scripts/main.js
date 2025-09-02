function getElements(selector) {
  const res = document.querySelectorAll(selector);

  return res.length === 1 ? res[0] : res;
}

const toggleMenu = (open) => {
  if (open) {
    getElements('#menu').classList.add('menu--opened');
    getElements('#home').classList.add('header--moved');
  } else {
    getElements('#menu').classList.remove('menu--opened');
    getElements('#home').classList.remove('header--moved');
  }
};

getElements('#open-menu').addEventListener('click', () => toggleMenu(true));
getElements('#close-menu').addEventListener('click', () => toggleMenu(false));

getElements('.options-list__element').forEach((item) => {
  item.addEventListener('click', () => toggleMenu(false));
});
