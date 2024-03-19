'use strict';
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});


document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Очищаємо поля вводу
    var nameInput = document.getElementsByName('name')[0];
    var emailInput = document.getElementsByName('email')[0];
    var messageInput = document.getElementsByName('text')[0];
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

  });
});
