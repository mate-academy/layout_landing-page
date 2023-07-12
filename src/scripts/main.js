'use strict';

window.addEventListener('hashchange', ()=> {
  if(window.location.hash === "#menu") {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
})

const form = document.getElementById("form-footer");
function submitForm(event){
  event.preventDefault();
  form.reset();
}
form.addEventListener('submit', submitForm);
console.log(form);