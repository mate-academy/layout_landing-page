'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contacts-fields');

    console.log(form);

    if(form){
        
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.reset();
        });
        
    }
});
