import '../styles/blocks/main.scss';

const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
