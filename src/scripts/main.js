'use strict';

let menuToggle = document.querySelectorAll('.header__menu-toggle')
let navItems = document.querySelectorAll('.nav__items')

let body = document.querySelector('body')


menuToggle.forEach((itemToggle) => {
    itemToggle.addEventListener('click', ()=> {
        
        if(body.classList.contains('_menu-open')) {
            body.classList.remove('_menu-open')
        } else {
            body.classList.add('_menu-open')
        }
    })
})


navItems.forEach((items) => {
    items.addEventListener('click', ()=> {
        
        body.classList.remove('_menu-open')
       
    })
})

