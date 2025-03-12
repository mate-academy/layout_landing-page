'use strict';

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Останавливаем стандартную отправку
    alert("Форма отправлена!");
    this.reset();
  });
});
