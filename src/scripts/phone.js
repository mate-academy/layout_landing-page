'use strict';

const phoneOpener = document.querySelector('.phone-block__opener');
const phoneContent = document.querySelector('.phone-block__content');
const phoneLink = document.querySelector('.phone-block__link span');
const phoneContainer = document.querySelector('.phone-block');

if (phoneContainer && phoneOpener && phoneContent && phoneLink) {
  const showHeightPhone = () => {
    phoneContainer.classList.add('phone-block--opened');
    phoneContent.style.height = phoneLink.offsetHeight + 'px';
  };
  const showWidthPhone = () => {
    phoneContainer.classList.add('phone-block--opened');
    phoneContent.style.width = phoneLink.offsetWidth + 'px';
  };

  const hideHeightPhone = () => {
    phoneContainer.classList.remove('phone-block--opened');
    phoneContent.style.height = '';
  };
  const hideWidthPhone = () => {
    phoneContainer.classList.remove('phone-block--opened');
    phoneContent.style.width = '';
  };

  if (window.innerWidth <= 768) {
    phoneOpener.addEventListener('mouseenter', showHeightPhone);
    phoneOpener.addEventListener('mouseleave', hideHeightPhone);

    phoneOpener.addEventListener('focus', showHeightPhone);
    phoneOpener.addEventListener('blur', hideHeightPhone);
  } else {
    phoneOpener.addEventListener('mouseenter', showWidthPhone);
    phoneOpener.addEventListener('mouseleave', hideWidthPhone);

    phoneOpener.addEventListener('focus', showWidthPhone);
    phoneOpener.addEventListener('blur', hideWidthPhone);
  }
}
