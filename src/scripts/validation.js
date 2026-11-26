'use strict';

const form = document.querySelector('.form');

if (form) {
  const nameInput = form.querySelector('.form__input--name');
  const nameSubinput = form.querySelector('.form__subinput--name');

  const emailInput = form.querySelector('.form__input--email');
  const emailSubinput = form.querySelector('.form__subinput--email');

  const messageInput = form.querySelector('.form__input--message');
  const messageSubinput = form.querySelector('.form__subinput--message');

  const validateName = ({ value }) => {
    const numbs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (!value.trim()) {
      return 'Fill the Field!';
    }

    if (value.trim() !== value || value.split(' ').some((el) => el === '')) {
      return 'Incorrest space position!';
    }

    for (const numb of numbs) {
      if (value.includes(String(numb))) {
        return 'Numbers are not allowed!';
      }
    }

    return '';
  };

  const validateEmail = ({ value }) => {
    const atIndex = value.indexOf('@');
    const dotIndex = value.lastIndexOf('.');

    if (!value.trim()) {
      return 'Fill the Field!';
    }

    if (
      atIndex < 1 ||
      atIndex !== value.lastIndexOf('@') ||
      dotIndex < atIndex + 2 ||
      dotIndex === value.length - 1
    ) {
      return 'Enter a valid email';
    }

    return '';
  };

  const validateMessage = ({ value }) => {
    if (!value.trim()) {
      return 'Fill the Field!';
    }

    if (value.trim() !== value || value.split(' ').some((el) => el === '')) {
      return 'Incorrest space position!';
    }

    return '';
  };

  const elementsAndChecks = [
    { inputEl: nameInput, errorEl: nameSubinput, check: validateName },
    { inputEl: emailInput, errorEl: emailSubinput, check: validateEmail },
    { inputEl: messageInput, errorEl: messageSubinput, check: validateMessage },
  ];

  elementsAndChecks.forEach(({ inputEl, errorEl, check }) => {
    inputEl.addEventListener('focus', () => {
      inputEl.classList.remove('error');
      errorEl.innerText = '';
    });

    inputEl.addEventListener('blur', () => {
      const errorMessage = check(inputEl);

      if (errorMessage) {
        inputEl.classList.add('error');
        errorEl.innerText = errorMessage;
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isValid = elementsAndChecks.every(
      ({ inputEl, check }) => !check(inputEl),
    );

    if (isValid) {
      form.reset();
    }
  });
}
