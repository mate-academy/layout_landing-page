'use strict';

(function () {
  const menu = document.getElementById('menu');

  if (menu) {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && window.location.hash === '#menu') {
        window.location.hash = '';
      }
    });
  }

  const form = document.getElementById('contact-form');

  if (form) {
    const fields = [
      { input: form.elements['name'], errorId: 'contact-name-error' },
      { input: form.elements['email'], errorId: 'contact-email-error' },
      { input: form.elements['message'], errorId: 'contact-message-error' },
    ];

    fields.forEach(({ input }) => {
      if (!input) {
        return;
      }

      input.addEventListener('input', () => {
        if (input.checkValidity()) {
          input.setAttribute('aria-invalid', 'false');
          const error = document.getElementById(
            input.getAttribute('aria-describedby'),
          );
          if (error) {
            error.hidden = true;
          }
        }
      });
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      let isValid = true;
      let firstInvalid = null;

      fields.forEach(({ input, errorId }) => {
        if (!input) {
          return;
        }

        const error = document.getElementById(errorId);
        const value = input.value.trim();

        if (!value || !input.checkValidity()) {
          isValid = false;
          input.setAttribute('aria-invalid', 'true');
          if (error) {
            error.hidden = false;
          }
          if (!firstInvalid) {
            firstInvalid = input;
          }
        }
      });

      if (!isValid) {
        if (firstInvalid) {
          firstInvalid.focus();
        }
        return;
      }

      form.reset();
      form.querySelectorAll('[aria-invalid]').forEach((el) => {
        el.removeAttribute('aria-invalid');
      });

      const success = document.createElement('p');
      success.className = 'contact-us__form--success';
      success.textContent = 'Thank you! Your message has been sent.';
      form.appendChild(success);

      setTimeout(() => {
        if (success.parentNode) {
          success.remove();
        }
      }, 4000);
    });
  }
})();
