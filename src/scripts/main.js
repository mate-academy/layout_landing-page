const contactsForm = document.querySelector('.contacts__form');

if (contactsForm) {
  contactsForm.addEventListener('submit', function (event) {
    event.preventDefault();
    contactsForm.reset();
  });
}
