import { openBurgerMenu, closeBurgerMenu } from './burgerMenu';
import { animOnScroll } from './animOnScroll';
import { popupOpen, popupClose } from './popup';

const refs = {
  menuIconOpen: document.querySelector('.icon--menu'),
  menuBurgerLinks: document.querySelectorAll('.nav__link'),
  animItems: document.querySelectorAll('.js-anim-items'),
  popupLinks: document.querySelectorAll('.popup-link'),
  popupImages: document.querySelectorAll('.popup-link .detail__photo'),
  popupImg: document.querySelector('.popup__image'),
  popupCloseIcon: document.querySelectorAll('.close-popup'),
};

refs.menuIconOpen.addEventListener('click', openBurgerMenu);

if (refs.menuBurgerLinks.length > 0) {
  refs.menuBurgerLinks.forEach(menuBurgerLink => {
    menuBurgerLink.addEventListener('click', function(e) {
      const linkId = menuBurgerLink.getAttribute('href').replace('#', '');
      const curentView = document.getElementById(linkId);

      if (!curentView) {
        closeBurgerMenu(e);
      } else {
        curentView.scrollIntoView({ behavior: 'smooth' });
        closeBurgerMenu(e);
      }
    });
  });
}

if (refs.animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
}

setTimeout(() => {
  animOnScroll();
}, 300);

if (refs.popupImages.length > 0) {
  refs.popupImages.forEach(popupImage => {
    popupImage.addEventListener('click', function(e) {
      const popupSrc = popupImage.previousSibling
        .previousSibling.getAttribute('srcset');
      const popupAlt = popupImage.getAttribute('alt');

      refs.popupImg.src = `${popupSrc}`;
      refs.popupImg.alt = `${popupAlt}`;
    });
  });
}

if (refs.popupLinks.length > 0) {
  refs.popupLinks.forEach(popupLink => {
    popupLink.addEventListener('click', function(e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);

      popupOpen(curentPopup);
      e.preventDefault();
    });
  });
}

if (refs.popupCloseIcon.length > 0) {
  refs.popupCloseIcon.forEach(el => {
    el.addEventListener('click', function(e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  });
}
