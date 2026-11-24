'use strict';

const contactForm = document.querySelector('.contacts__form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get('name')).trim();
    const email = String(formData.get('email')).trim();
    const message = String(formData.get('message')).trim();
    const subject = encodeURIComponent('B&O website enquiry');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    contactForm.reset();
    window.location.href = `${contactForm.getAttribute('action')}?subject=${subject}&body=${body}`;
  });
}
