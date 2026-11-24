'use strict';

const phoneOpener = document.querySelector('.phone-block__opener');
const phoneContent = document.querySelector('.phone-block__content');
const phoneLink = document.querySelector('.phone-block__link');
const phoneContainer = document.querySelector('.phone-block');

if (phoneContainer && phoneOpener && phoneContent && phoneLink) {
  const togglePhone = () => {
    phoneContainer.classList.toggle('phone-block--opened');

    if (phoneContainer.classList.contains('phone-block--opened')) {
      phoneContent.style.width = phoneLink.offsetWidth + 'px';
    } else {
      phoneContent.style.width = '';
    }
  };

  const showPhone = () => {
    phoneContainer.classList.add('phone-block--opened');
    phoneContent.style.width = phoneLink.offsetWidth + 'px';
  };

  const hidePhone = () => {
    phoneContainer.classList.remove('phone-block--opened');
    phoneContent.style.width = '';
  };

  document.body.addEventListener('click', (e) => {
    if (e.target.closest('.phone-block__opener')) {
      togglePhone();
    } else {
      hidePhone();
    }
  });

  phoneOpener.addEventListener('blur', showPhone);
  phoneLink.addEventListener('blur', hidePhone);
}
