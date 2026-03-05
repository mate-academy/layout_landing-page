'use strict';

const phoneText = `Designed with instinct, to bring joy back to the everyday.
  Through the Glyph Interface, a perfected OS and exceptional dual camera.
  All startlingly fast.`;
const desktopText = `Through the Glyph Interface, a perfected OS and exceptional dual camera.
  All startlingly fast.`;

const phoneElement = document.querySelector('#phone-text');

function updateText() {
  const width = window.innerWidth;

  if (width >= 1024) {
    phoneElement.textContent = desktopText;
  } else {
    phoneElement.textContent = phoneText;
  }
}

updateText();

window.addEventListener('resize', updateText);
