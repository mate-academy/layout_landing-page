const elements = () => ({
  menu: document.querySelector('.menu'),
  hero: document.querySelector('.hero'),
  main: document.querySelector('.main'),

  burgerIcon: document.querySelector('.nav__icon--burger'),
  closeIcon: document.querySelector('.nav__icon--close'),
  menuLinks: document.querySelectorAll('.menu__link'),
});

const setMenuVisibility = (isOpen) => {
  const { menu, hero, main } = elements();

  if (isOpen) {
    menu.classList.add('is-visible');
    menu.classList.remove('is-hidden', 'hidden');

    hero.classList.add('is-hidden', 'hidden');
    hero.classList.remove('is-visible');

    main.classList.add('hidden');
  } else {
    menu.classList.remove('is-visible');
    menu.classList.add('is-hidden', 'hidden');

    hero.classList.remove('is-hidden', 'hidden');
    hero.classList.add('is-visible');

    main.classList.remove('hidden');
  }
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);

  setMenuVisibility(false);

  setTimeout(() => {
    element.scrollIntoView({ behavior: 'smooth' });
  }, 100);
};

const navigationLinks = (links) => {
  return [...links].filter((link) => {
    return (
      !link.classList.contains('menu__link--number') &&
      !link.classList.contains('menu__link--message')
    );
  });
};

const setupEventListeners = () => {
  const { burgerIcon, closeIcon, menuLinks } = elements();

  burgerIcon?.addEventListener('click', () => setMenuVisibility(true));
  closeIcon?.addEventListener('click', () => setMenuVisibility(false));

  navigationLinks(menuLinks).forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const targetId = link.getAttribute('href')?.substring(1);

      if (targetId) {
        scrollToSection(targetId);
      }
    });
  });
};

export const toggleMenu = () => {
  setupEventListeners();
};
