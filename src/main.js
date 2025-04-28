const burger = document.querySelector('.icon--menu');
const close = document.querySelector('.icon--close');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  menu.classList.add('active');
  document.body.classList.add('disable-scroll');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
  document.body.classList.remove('disable-scroll');
});

document
  .querySelector('.contact__button')
  .addEventListener('click', function (event) {
    event.preventDefault();

    document.querySelector('.contact__form').reset();
  });
