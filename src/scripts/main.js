'use strict';

document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = event.target;
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const successMessage = document.getElementById("success-message");

  let isValid = true;

  if (nameInput.value.trim().length < 2) {
    nameError.textContent = "Name must be at least 2 characters long.";
    nameError.style.display = "block";
    nameInput.classList.add("error");
    isValid = false;
  } else {
    nameError.style.display = "none";
    nameInput.classList.remove("error");
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;

  const emailValue = emailInput.value.trim().replace(/\s+/g, "");

  if (!emailPattern.test(emailValue)) {
    emailError.textContent = "Please enter a valid email without spaces.";
    emailError.style.display = "block";
    emailInput.classList.add("error");
    isValid = false;
  } else {
    emailError.style.display = "none";
    emailInput.classList.remove("error");
  }

  if (isValid) {
    successMessage.classList.add("show");
    form.reset();
  }

  setTimeout(() => {
    successMessage.classList.remove("show");
  }, 3000);
});
