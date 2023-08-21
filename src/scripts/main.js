'use strict';

// Form
const forms = document.querySelectorAll('.form');
const icons = document.getElementsByClassName('card-form__image');

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener('click', function() {
    const clickedIconId = this.id;

    this.classList.add('_hidden');

    switch (clickedIconId) {
      case 'visa':
        document.getElementById('master-card').classList.remove('_hidden');
        break;
      case 'master-card':
        document.getElementById('visa').classList.remove('_hidden');
        break;
    }
  });
}

function validateEmail(email) {
  const re = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/;

  return re.test(String(email).toLowerCase());
}

function validateText(inputText, input) {
  const reText = /^[a-zA-Z\s`'-]{2,100}$/;
  const reAddress = /^.{20,200}$/;

  if (input && input.getAttribute('name') === 'shipping-address') {
    return reAddress.test(String(inputText).toLowerCase());
  } else {
    return reText.test(String(inputText).toLowerCase());
  }
}

function validatePhone(phone) {
  const re = /^(?=[+\d\s()-]{7,20}$)[+\d\s()-]+$/;

  return re.test(String(phone).toLowerCase());
}

function addError(input) {
  if (input.hasAttribute('required')) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');

    const inputErrorText = input.getAttribute('data-error');

    if (inputErrorText && inputErrorText !== '') {
      input.value = '';
      input.classList.remove('_complete');
      input.nextElementSibling.textContent = inputErrorText;
    }

    // if (input.nextElementSibling
    //   && input.nextElementSibling.classList.toString().includes('__label')
    // ) {
    //   input.value = '';
    //   input.classList.remove('_complete');
    //   input.nextElementSibling.textContent = inputErrorText;
    // }
  } else {
    removeError(input);
  }
}

function removeError(input) {
  input.classList.remove('_error');
  input.parentElement.classList.remove('_error');

  input.value = '';
  input.classList.remove('_complete');
}

forms.forEach(function(form) {
  const formInputs = form.querySelectorAll('.form__input');
  const cardFormInputs = form.querySelectorAll('.card-form__input');
  const inputEmail = form.querySelector('.form__input--email');
  const inputPhone = form.querySelector('.form__input--phone');

  formInputs.forEach(function(input) {
    const inputPlaceholder = input.getAttribute('data-placeholder');

    input.nextElementSibling.textContent = inputPlaceholder;

    input.onfocus = function() {
      const inputErrorText = input.getAttribute('data-error');

      if (inputErrorText) {
        input.nextElementSibling.textContent = inputPlaceholder;
      }

      if (this.classList.contains('_error')) {
        removeError(this);
        this.value = '';
      }
    };

    input.onblur = function() {
      if (input.value !== '') {
        input.classList.add('_complete');
      } else {
        input.classList.remove('_complete');
      }
    };
  });

  cardFormInputs.forEach(function(input) {
    input.onfocus = function() {
      if (input.closest('.card-form--number')) {
        this.parentNode.classList.add('_active');
      }

      if (this.classList.contains('_error')) {
        removeError(this);
        // this.value = '';
      }
    };

    input.onblur = function() {
      this.parentNode.classList.remove('_active');

      if (input.value !== '') {
        input.classList.add('_complete');
      } else {
        input.classList.remove('_complete');
      }
    };
  });

  form.onsubmit = function(e) {
    e.preventDefault();

    const emptyInputs = Array.from(formInputs).filter(
      input => input.value === ''
    );

    const emptyCardFormInputs = Array.from(cardFormInputs).filter(
      input => input.value === ''
    );

    formInputs.forEach(function(input) {
      if (input.value === '' && emptyInputs.length > 0) {
        addError(input);

        return false;
      }

      if (input.getAttribute('type') === 'text') {
        const textVal = input.value;

        if (validateText && !validateText(textVal, input)) {
          addError(input);

          return false;
        } else {
          removeError(input);
        }
      }

      if (input === inputEmail && inputEmail.value) {
        const emailVal = inputEmail.value;

        if (validateEmail && !validateEmail(emailVal)) {
          addError(input);

          return false;
        } else {
          removeError(input);
        }
      }

      if (input === inputPhone && inputPhone.value) {
        const phonelVal = inputPhone.value;

        if (validatePhone && !validatePhone(phonelVal)) {
          addError(input);

          return false;
        } else {
          removeError(input);
        }
      }

      removeError(input);
    });

    if (cardFormInputs && cardFormInputs.length > 0) {
      cardFormInputs.forEach(function(input) {
        if (input.value === '' && emptyCardFormInputs.length > 0) {
          addError(input);
          // input.classList.add('_error');

          return false;
        } else {
          removeError(input);
          // input.classList.remove('_error');
        }
      });
    }

    // if (form.closest('.order__card')) {
    //   const hasError = form.querySelector('input._error');

    //   if (hasError) {
    //     form.closest('.order__card').classList.add('_error');
    //   } else {
    //     form.closest('.order__card').classList.remove('_error');
    //   }
    // }
  };
});
