'use strict';

const phoneOpener = document.querySelector('.phone-block__opener');
const phoneContent = document.querySelector('.phone-block__content');
const phoneLink = document.querySelector('.phone-block__link');
const phoneContainer = document.querySelector('.phone-block');

if (phoneContainer && phoneOpener && phoneContent && phoneLink) {
  const toggleHeightPhone = () => {
    phoneContainer.classList.toggle('phone-block--opened');

    if (phoneContainer.classList.contains('phone-block--opened')) {
      phoneContent.style.height = phoneLink.offsetHeight + 'px';
    } else {
      phoneContent.style.height = '';
    }
  };
  const toggleWidthPhone = () => {
    phoneContainer.classList.toggle('phone-block--opened');

    if (phoneContainer.classList.contains('phone-block--opened')) {
      phoneContent.style.width = phoneLink.offsetWidth + 'px';
    } else {
      phoneContent.style.width = '';
    }
  };

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
    document.body.addEventListener('click', (e) => {
      if (e.target.closest('.phone-block__opener')) {
        toggleHeightPhone();
      } else {
        hideHeightPhone();
      }
    });

    phoneOpener.addEventListener('blur', showHeightPhone);
    phoneLink.addEventListener('blur', hideHeightPhone);
  } else {
    document.body.addEventListener('click', (e) => {
      if (e.target.closest('.phone-block__opener')) {
        toggleWidthPhone();
      } else {
        hideWidthPhone();
      }
    });

    phoneOpener.addEventListener('blur', showWidthPhone);
    phoneLink.addEventListener('blur', hideWidthPhone);
  }
}
