document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const burgerToggle = document.getElementById('burgerToggle');
  const burgerMenu = document.getElementById('burgerMenu');
  const menuLinks = document.querySelectorAll(
    '.burger-menu__link, .burger-menu__button, .header-top__link',
  );
  const body = document.body;

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
  });

  const openMenu = () => {
    burgerMenu.classList.add('burger-menu--active');
    body.classList.add('no-scroll');
    body.dataset.menu = 'open';
  };

  const closeMenu = () => {
    burgerMenu.classList.remove('burger-menu--active');
    body.classList.remove('no-scroll');
    delete body.dataset.menu;
  };

  const toggleMenu = () => {
    if (burgerMenu.classList.contains('burger-menu--active')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  burgerToggle?.addEventListener('click', toggleMenu);

  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
});

function observeAndAnimate({
  targetElement,
  elementsToAnimate,
  threshold = 0.5,
  className = 'animate-show',
}) {
  if (!targetElement || !elementsToAnimate.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observerRef) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          elementsToAnimate.forEach((el) => {
            if (el && !el.classList.contains(className)) {
              el.classList.add(className);
            }
          });
          observerRef.unobserve(entry.target);
        }
      });
    },
    {
      threshold,
    },
  );

  observer.observe(targetElement);
}

function getResponsiveThreshold() {
  const width = window.innerWidth;

  if (width > 1260) {
    return 0.35;
  } else if (width > 768) {
    return 0.5;
  }

  return 0.65;
}

function assignAnimationClasses(elements, variants) {
  elements.forEach((el, index) => {
    if (!el.classList.contains('animate-show')) {
      el.classList.remove('animate-left', 'animate-right', 'animate-bottom');
      el.classList.add(variants[index % variants.length]);
    }
  });
}

// ========== DOM Elements ========== //
const container = document.querySelector('.contact__container');
const formAnimation = document.querySelector('.contact__form');
const contactInfo = document.querySelector('.contact__info');

const compareContainer = document.querySelector('.compare__container');
const bikeCards = document.querySelectorAll('.bike-card');

const detailsContainer = document.querySelector('.details__container');
const detailCards = document.querySelectorAll('.detail-card');

// ========== DETAIL CARDS (постійні) ========== //
if (detailsContainer) {
  assignAnimationClasses(detailCards, [
    'animate-left',
    'animate-right',
    'animate-left',
  ]);

  observeAndAnimate({
    targetElement: detailsContainer,
    elementsToAnimate: [...detailCards],
    threshold: getResponsiveThreshold(),
  });
}

// ========== CONTACT BLOCK ========== //
if (container) {
  if (formAnimation) {
    formAnimation.classList.add('animate-left');
  }

  if (contactInfo) {
    contactInfo.classList.add('animate-right');
  }

  observeAndAnimate({
    targetElement: container,
    elementsToAnimate: [formAnimation, contactInfo],
    threshold: getResponsiveThreshold(),
  });
}

// ========== BIKE CARDS ========== //

function updateBikeCardAnimations() {
  const isWide = window.innerWidth > 1260;

  const variants = isWide
    ? ['animate-left', 'animate-bottom', 'animate-right']
    : ['animate-left', 'animate-right', 'animate-left'];

  assignAnimationClasses(bikeCards, variants);
}

// Initial setup
if (compareContainer) {
  updateBikeCardAnimations();

  observeAndAnimate({
    targetElement: compareContainer,
    elementsToAnimate: [...bikeCards],
    threshold: getResponsiveThreshold(),
  });
}

// On resize
window.addEventListener('resize', () => {
  updateBikeCardAnimations();
});

const headerTop = document.querySelector('.header-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    headerTop.classList.add('header-top--scrolled');
  } else {
    headerTop.classList.remove('header-top--scrolled');
  }
});
