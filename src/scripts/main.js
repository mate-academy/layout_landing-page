'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu__toggle');
  const menuLinks = document.querySelectorAll('.menu__box a');

  menuToggle.addEventListener('change', function() {
    if (!this.checked) {
      return;
    }

    menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        setTimeout(function() {
          menuToggle.checked = false;
        }, 300);
      });
    });
  });
});
