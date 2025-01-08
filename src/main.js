'use strict';

const page = document.querySelector('.page__body');
const linkBloсkScroll = document.querySelector('.icon--menu');
const endBlockScroll = document.querySelector('.icon--close');
const listMenu = document.querySelector('.nav__list');

linkBloсkScroll.addEventListener('click', () => {
  page.classList.add('hidden');
});

endBlockScroll.addEventListener('click', () => {
  page.classList.remove('hidden');
});

listMenu.addEventListener('click', () => {
  page.classList.remove('hidden');
});
// остановка отправки формы на отсутствующий action="#"

const form = document.querySelector('.contacts__form');
const inputName = form.elements.contactName;
const inputEmail = form.elements.contactEmail;
const textArea = form.elements.contactMessage;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputName.value = '';
  inputEmail.value = '';
  textArea.value = '';

  alert('Форма успешно отправленна!');
});
