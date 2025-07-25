'use strict';

/*Módulo de controle do modal de contatos*/

const contactsModal = document.querySelector('.list__item--modal');
const controlButton = document.querySelector('.list__item--phone');

const toggleModal = () => {
    if(!contactsModal.classList.contains('show')) {
            contactsModal.classList.remove('hidden');
            contactsModal.classList.add('show');
            return
    }

    contactsModal.classList.remove('show');
    contactsModal.classList.add('hidden');
    return;

}

controlButton.addEventListener('mouseover', toggleModal);
contactsModal.addEventListener('mouseout', toggleModal);

/*Módulo de controle de abertura e fechamento do menu*/

const controllerOpenMenu = document.querySelector('.list__item--menu');
const controllerCloseMenu = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');
const page = document.querySelector('.page');

const toggleMenu = (e) => {
    page.classList.toggle('page--hidden');
    menu.classList.toggle('menu--hidden');
}

controllerOpenMenu.addEventListener('click', toggleMenu);
controllerCloseMenu.addEventListener('click', toggleMenu)

/*Módulo de controle do comportamento de scroll no acionamento de uma âncora*/

const anchorsList = document.querySelectorAll('.nav__link');

anchorsList.forEach((anchor) => anchor.addEventListener('click', toggleMenu));

/*Módulo para satisfação do comportamento de link telefônico especificado na lista de checagem*/

const iconPhone = document.querySelector('.list__item--phone');
const phoneAnchor = document.querySelector('.list__item--phone .item__anchor');

iconPhone.addEventListener('click', () => {
    phoneAnchor.click();
})

/*Módulo para satisfação do requisito de ancoragem suave especificado na lista de chechagem*/

const navMenuLinks = document.querySelectorAll('.menu .nav__link');

navMenuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
    
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
  });

