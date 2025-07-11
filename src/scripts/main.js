'use strict';

document.getElementById('submit-btn').addEventListener('click',
  function (event) {

    event.preventDefault();
    document.getElementById("myForm").reset();
  });