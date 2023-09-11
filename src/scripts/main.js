'use strict';

let modal;

function toggleModal(event) {
  event.stopPropagation();
  modal.classList.toggle('show');
}

function closeModal() {
  modal.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', function() {
  modal = document.getElementById('modalMenu');
  modal.addEventListener('click', closeModal);

  const menuOpener = document.querySelector('.menu__opener');

  menuOpener.addEventListener('click', toggleModal);
});

function clearForm() {
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const messageTextarea = document.getElementById('message');

  // Clear the form fields
  usernameInput.value = '';
  emailInput.value = '';
  messageTextarea.value = '';
}

// Get references to form elements
const sendButton = document.getElementById('sendButton');
const contactForm = document.getElementById('contactForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const messageTextarea = document.getElementById('message');

// Add event listener to the "Send" button
sendButton.addEventListener('click', function(event) {
  if (usernameInput.value === '' || emailInput.value === '' || messageTextarea.value === '') {
    alert('Please fill in all required fields before sending.');
    event.preventDefault();
  } else {
    clearForm();
  }
});

// Add event listener to the form submission
contactForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
});

// Add event listener to the "Send" button
sendButton.addEventListener('click', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Scroll to the form section

  contactForm.scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  for (const link of internalLinks) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        const yOffset = -100; // Adjust as needed
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  }
});
