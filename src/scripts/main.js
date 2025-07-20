'use strict';
/*MÓDULO DE CONTROLE DO MODAL DE CONTATOS*/
const modalContactsController = document.querySelector('.nav__item');
const modalContacts = document.querySelector('.nav__modal-contacts');

modalContactsController.addEventListener('mouseover', () => {
    modalContacts.classList.remove('nav__modal-contacts--hidden');
    modalContacts.classList.add('nav__modal-contacts--show');
})

modalContactsController.addEventListener('mouseout', () => {
    modalContacts.classList.remove('nav__modal-contacts--show');
    modalContacts.classList.add('nav__modal-contacts--hidden');
})

/*MÓDULO DE CONTROLE DO MENU LATERAL DE NAVEGAÇÃO*/

const menu = document.querySelector('.menu');
const menuOpenController = document.querySelectorAll('.nav__item')[1];
const page = document.querySelector('.page');

menuOpenController.addEventListener('click', () => {

    menu.classList.remove('menu--hidden');
    menu.classList.add('menu--show');
    page.style.overflow = 'hidden';
    
})

const menuCloseController = document.querySelector('.menu__btn-close');

const closeMenu = () => {
    menu.classList.remove('menu--show');
    menu.classList.add('menu--hidden');
    page.style.overflowY = 'visible';
}

menuCloseController.addEventListener('click', closeMenu);

/*MÓDULO DE CONTROLE DAS ÂNCORAS DO MENU LATERAL*/ 
const anchors = document.querySelectorAll('.menu__nav__anchor');
console.log(anchors);

anchors.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
        //e.preventDefault()
        closeMenu()
    })
})

/*REMENDO DE CONTORNO PARA CORREÇÃO DA LARGURA DO BOTÃO DE SUBMISSÃO DO FORMULÁRIO*/

const btnSubmit = document.querySelector('.submit');
const inputEmail = document.querySelector('.email');

window.addEventListener('load', () => {
    btnSubmit.style.width = `${inputEmail.offsetWidth}px`
})

window.addEventListener('resize', () => {
    btnSubmit.style.width = `${inputEmail.offsetWidth}px`
})
