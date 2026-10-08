import header from './components/header.js';
import menu from './components/menu.js';
import hero from './components/hero.js';
import moveFree from './components/move-free.js';
import compareBikes from './components/compare-bikes.js';
import details from './components/details.js';
import contacts from './components/contacts.js';
import footer from './components/footer.js';

const app = document.querySelector('#app');

app.innerHTML = `
  <main class="page">
    ${header}
    ${menu}
    ${hero}
    ${moveFree}
    ${compareBikes}
    ${details}
    ${contacts}
    ${footer}
  </main>
`;

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  contactForm.reset();

  formStatus.textContent =
    'Formulário demonstrativo: o envio ainda não está conectado.';
});
