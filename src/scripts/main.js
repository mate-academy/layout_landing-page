'use strict';
// =================== Animations ==================================

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

const numberShow = document.querySelector('.icon--number');

const numberButton = document.querySelector('.icon--phone');

numberButton.addEventListener('mouseenter', () => {
  numberShow.classList.add('icon--number-show');
});

numberButton.addEventListener('mouseleave', () => {
  setTimeout(() => {
    numberShow.classList.remove('icon--number-show');
  }, 3000);
});

// =================== Scroll UP ==================================
const scrollup = document.querySelector('.scrollup');

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

scrollup.addEventListener('click', () => {
  setTimeout(() => {
    scrollToTop();
  }, 300);
});

// scrollup.addEventListener('click', scrollToTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollup.style.visibility = 'visible';
  } else {
    scrollup.style.visibility = 'hidden';
  }
});
