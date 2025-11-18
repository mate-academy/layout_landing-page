'use strict';

const page = document.querySelector('.page');

function openClose() {
  const elements = document.querySelectorAll('[data-open-close]');

  elements.forEach((el) => {
    el.addEventListener('click', () => {
      const targetName = el.dataset.openClose;
      const targetElement = document.querySelector(`.${targetName}`);

      if (targetElement) {
        targetElement.classList.toggle(`${targetName}--open`);
        page.classList.toggle('page--overflow');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', openClose);
