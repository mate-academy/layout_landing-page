'use strict';

const form = document.getElementById('myForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();  
    form.reset();        
    alert('Форма очищена!'); 
  });