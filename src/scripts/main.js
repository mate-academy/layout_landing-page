'use strict';

import { clearForm } from './clearForm';
import { onDelayedLeaveHover } from './onDelayedLeaveHover';
import { setOverflowBody } from './setOverflowBody';

const iconWrapper = document.querySelector('.__js-icon-wrapper');
const contactForm = document.querySelector('.__js-contact-form');

window.addEventListener('hashchange', setOverflowBody('#menu'));
contactForm.addEventListener('submit', clearForm(contactForm, '.__js-field'));

onDelayedLeaveHover({
  target: iconWrapper,
  onEnter() {
    iconWrapper.classList.remove('top-bar__icon-wrapper--inactive');
  },
  onLeave() {
    iconWrapper.classList.add('top-bar__icon-wrapper--inactive');
  },
  delay: 300,
});
