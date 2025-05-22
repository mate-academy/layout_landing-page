export function initForm() {
  const form = document.getElementById('contactForm');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
  });
}
