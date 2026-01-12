'use strict';

const menu = document.querySelector('.menu');
const iconMenu = document.querySelector('.icon--menu');
const iconClose = document.querySelector('.icon--close');

if (menu && iconMenu) {
  iconMenu.addEventListener('click', () => {
    menu.classList.toggle('menu--open');

    if (menu.classList.contains('menu--open')) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  });

  if (iconClose) {
    iconClose.addEventListener('click', () => {
      menu.classList.remove('menu--open');
      document.documentElement.style.overflow = 'auto';
    });
  }

  menu.addEventListener('click', (event) => {
    const link = event.target.closest('a');

    if (!link) {
      return;
    }

    menu.classList.remove('menu--open');
    document.documentElement.style.overflow = 'auto';
  });
}

const form = document.querySelector('.footer__form');
const successMessage = document.querySelector('.footer__success-message');

if (form) {
  form.setAttribute('novalidate', 'novalidate');

  const formName = form.querySelector('input[name="name"]');
  const formEmail = form.querySelector('input[name="email"]');
  const formMessage = form.querySelector('textarea[name="message"]');

  const getOrCreateErrorElement = (el) => {
    if (!el) {
      return null;
    }

    const existing = el.nextElementSibling;

    if (
      existing &&
      existing.classList &&
      existing.classList.contains('input__error')
    ) {
      return existing;
    }

    const errorEl = document.createElement('div');

    errorEl.className = 'input__error';
    errorEl.style.display = 'none';
    errorEl.setAttribute('aria-live', 'polite');

    const fieldName = el.getAttribute('name') || 'field';
    const errorId = `error-${fieldName}`;

    errorEl.id = errorId;

    el.insertAdjacentElement('afterend', errorEl);

    return errorEl;
  };

  const showFieldError = (el, message) => {
    if (!el) {
      return;
    }

    el.classList.add('input--error');
    el.setAttribute('aria-invalid', 'true');

    const errorEl = getOrCreateErrorElement(el);

    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.display = 'inline-block';
      errorEl.style.color = '#ff4f4f';
      errorEl.style.fontSize = '12px';
      errorEl.style.fontWeight = '400';
      errorEl.style.fontFamily = 'Space Mono';
      errorEl.style.lineHeight = '1.4';
      errorEl.style.textAlign = 'left';
      errorEl.style.textTransform = 'none';
      errorEl.style.textDecoration = 'none';
      errorEl.style.opacity = '1';
      errorEl.style.visibility = 'visible';
      el.setAttribute('aria-describedby', errorEl.id);
    }
  };

  const clearFieldError = (el) => {
    if (!el) {
      return;
    }

    el.classList.remove('input--error');
    el.removeAttribute('aria-invalid');
    el.removeAttribute('aria-describedby');

    const errorEl = getOrCreateErrorElement(el);

    if (errorEl) {
      errorEl.textContent = '';
      errorEl.style.display = 'none';
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isNonEmptyMin = (value, min = 1) => {
    return value.trim().length >= min;
  };

  const validateName = () => {
    if (!formName) {
      return true;
    }

    const value = formName.value || '';

    if (value.trim() === '') {
      showFieldError(formName, 'Name is required.');

      return false;
    }

    if (!isNonEmptyMin(value, 2)) {
      showFieldError(formName, 'Name must be at least 2 characters.');

      return false;
    }

    clearFieldError(formName);

    return true;
  };

  const validateEmail = () => {
    if (!formEmail) {
      return true;
    }

    const value = (formEmail.value || '').trim();

    if (value === '') {
      showFieldError(formEmail, 'Email is required.');

      return false;
    }

    if (!isValidEmail(value)) {
      showFieldError(formEmail, 'Please enter a valid email address.');

      return false;
    }

    clearFieldError(formEmail);

    return true;
  };

  const validateMessage = () => {
    if (!formMessage) {
      return true;
    }

    const value = formMessage.value || '';

    if (value.trim() === '') {
      showFieldError(formMessage, 'Message is required.');

      return false;
    }

    if (!isNonEmptyMin(value, 10)) {
      showFieldError(formMessage, 'Message must be at least 10 characters.');

      return false;
    }

    clearFieldError(formMessage);

    return true;
  };

  // Handle form submit
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameOk = validateName();
    const emailOk = validateEmail();
    const messageOk = validateMessage();

    if (!nameOk || !emailOk || !messageOk) {
      // focus first invalid
      if (!nameOk && formName) {
        formName.focus();
      } else if (!emailOk && formEmail) {
        formEmail.focus();
      } else if (!messageOk && formMessage) {
        formMessage.focus();
      }

      return;
    }

    form.reset();

    if (successMessage) {
      successMessage.classList.add('footer__success-message--visible');

      setTimeout(() => {
        successMessage.classList.remove('footer__success-message--visible');
      }, 10000);
    }
  });

  // Live validation
  if (formName) {
    formName.addEventListener('input', () => {
      validateName();
    });
  }

  if (formEmail) {
    formEmail.addEventListener('input', () => {
      validateEmail();
    });
  }

  if (formMessage) {
    formMessage.addEventListener('input', () => {
      validateMessage();
    });
  }
}

if (successMessage) {
  successMessage.addEventListener('click', (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

// Reveal on scroll
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('[data-reveal]');

  if (!revealElements.length) {
    return;
  }

  const prefersReduced =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    revealElements.forEach((el) => {
      el.classList.add('reveal', 'reveal--visible');
    });

    return;
  }

  revealElements.forEach((el) => {
    el.classList.add('reveal');
  });

  const hasWindow = typeof window !== 'undefined';
  const hasIO = hasWindow && 'IntersectionObserver' in window;

  if (!hasIO) {
    revealElements.forEach((el) => {
      el.classList.add('reveal--visible');
    });

    return;
  }

  const observer = new window.IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px',
    },
  );

  revealElements.forEach((el) => observer.observe(el));
});
