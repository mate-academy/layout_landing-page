'use strict';
document.addEventListener('keydown', (event)=>{
console.log(event.target.id)
if (event.target.id === 'last_phone'){
  event.preventDefault()
}
})

