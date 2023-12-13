'use strict';

const inputs = document.querySelectorAll('input');

for (const element of inputs) {
  element.setAttribute('autocomplete', 'none');
}
