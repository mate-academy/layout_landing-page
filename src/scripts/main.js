const menuOpen   = document.getElementById('menuOpen');
const menuClose  = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');

function openMenu() {
  mobileMenu.classList.add('is-open');
  document.body.classList.add('no-scroll');
}

function closeMenu() {
  mobileMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

if (menuOpen) {
  menuOpen.addEventListener('click', openMenu);
}

if (menuClose) {
  menuClose.addEventListener('click', closeMenu);
}

document.querySelectorAll('.mobile-menu__nav a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');

    if (id === '#') return;

    const target = document.querySelector(id);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const heroTitle = document.querySelector('.hero__title');

function fitTitle() {
  if (!heroTitle) return;

  heroTitle.style.fontSize = '100px';

  const titleWidth  = heroTitle.scrollWidth;
  const windowWidth = window.innerWidth;
  const newSize     = 100 * (windowWidth / titleWidth) * 0.85;

  heroTitle.style.fontSize = newSize + 'px';
}

window.addEventListener('load', () => {
  document.fonts.ready.then(() => {
    fitTitle();
    setTimeout(fitTitle, 300);
  });
});

window.addEventListener('resize', fitTitle);

// ── Contact photo parallax ───────────────────────────────────────
const photoWrap = document.querySelector('.contact__photo');
const photoImg  = photoWrap ? photoWrap.querySelector('img') : null;

if (photoImg) {
  const update = () => {
    const rect     = photoWrap.getBoundingClientRect();
    const wh       = window.innerHeight;
    const progress = Math.min(Math.max((wh - rect.top) / (wh + rect.height), 0), 1);

    photoImg.style.transform = `scale(${1 + progress * 0.35})`;
    photoImg.style.opacity   = Math.min(progress * 2, 1);
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
}
