'use strict';

let menuToggle = document.querySelectorAll('.header__menu-toggle')
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

