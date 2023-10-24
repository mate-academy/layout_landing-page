'use strict';

const modalOpen = document.getElementById('openModal');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');

modalOpen.onclick = function() {
  if (window.screen.width < 1260) {
    modal.style.display = 'block';
  }
};

modalClose.onclick = function() {
  modal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
