const body = document.querySelector('.page__body');
const menuOpen = document.querySelector('.icon--menu');
const menuClose = document.querySelector('.icon--close');

menuOpen.addEventListener('click', () => {
  body.classList.add('page__body--no-scroll');
});

menuClose.addEventListener('click', () => {
  body.classList.remove('page__body--no-scroll');
});
