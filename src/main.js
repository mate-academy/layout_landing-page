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

const menuLinks = document.querySelectorAll('.nav__link');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.classList.remove('disable-scroll');
  });
});

document
  .querySelector('.contact__form')
  .addEventListener('submit', function (event) {
    if (!this.checkValidity()) {
      return;
    }

    event.preventDefault();

    alert('Form successfully submitted!');

    this.reset();
  });
