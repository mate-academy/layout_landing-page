'use strict';

const inputs = document.querySelectorAll('.contacts__input, .contacts__input-textarea');

inputs.forEach(input => {
  const placeholder = input.getAttribute('placeholder');

  input.addEventListener('focus', () => {
    if (!input.value) {
      input.value = placeholder;
      input.setSelectionRange(placeholder.length, placeholder.length);
    }
  });

  input.addEventListener('blur', () => {
    if (input.value === placeholder) {
      input.value = '';
    }
  });
});

