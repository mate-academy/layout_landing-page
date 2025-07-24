const inputs = document.getElementById('form');

inputs.addEventListener('submit', function (event) {
  event.preventDefault();
  inputs.reset();
});
