'use strict';

import { onDelayedLeaveHover } from './onDelayedLeaveHover';
import { setOverflowBody } from './setOverflowBody';

window.addEventListener('hashchange', setOverflowBody('#menu'));

const iconWrapper = document.querySelector('.__js-icon-wrapper');

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
