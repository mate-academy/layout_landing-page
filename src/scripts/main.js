const pageEl = document.querySelector('.page');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.icon--menu');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  },
);

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
  observer.observe(el);
});

document.querySelectorAll('.menu__link').forEach((link) => {
  link.addEventListener('click', () => {
    history.pushState(null, '', '#');
    closeMenu();
  });
});

/* ============ MENU ============ */
function syncMenuState() {
  const isOpen = location.hash === '#menu';

  if (isOpen) {
    pageEl.classList.add('menu-open');
  } else {
    pageEl.classList.remove('menu-open');
  }

  if (menuToggle) {
    if (isOpen) {
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.setAttribute('aria-label', 'Close menu');
    } else {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
    }
  }

  if (menu) {
    if (isOpen) {
      menu.setAttribute('aria-modal', 'true');
    } else {
      menu.removeAttribute('aria-modal');
    }
  }
}

function closeMenu() {
  if (location.hash === '#menu') {
    history.pushState(null, '', location.pathname + location.search);
  }
  pageEl.classList.remove('menu-open');

  if (menuToggle) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
  }

  if (menu) {
    menu.removeAttribute('aria-modal');
  }
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    setTimeout(syncMenuState, 0);
  });
}

document.querySelectorAll('.icon--close').forEach((el) => {
  el.addEventListener('click', closeMenu);
});

window.addEventListener('hashchange', syncMenuState);
syncMenuState();

const form = document.querySelector('.contact__form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const btn = form.querySelector('.contact__submit');
    const original = btn.textContent;

    form.reset();

    btn.textContent = 'Message sent ✓';
    btn.disabled = true;
    btn.style.backgroundColor = '#2a7a4b';

    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      btn.style.backgroundColor = '';
    }, 3000);
  });
}
