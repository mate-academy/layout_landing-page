document.addEventListener('DOMContentLoaded', () => {
  // Усі кнопки навігації
  const navLinks = document.querySelectorAll('.btm-navigation');
  const sections = document.querySelectorAll('.content-section');
  const defaultContent = document.querySelector('.default-section');

  // Кнопка "Services"
  const servicesButton = document.querySelector(
    ".btm-navigation[href='#services']",
  );
  const backToServicesButtons = document.querySelectorAll(
    ".btn-navigation[href='#services']",
  );

  // Бургер-кнопка та навігація
  const burgerMenu = document.getElementById('burger-menu');
  const navigation = document.getElementById('navigation');

  // Логіка для бургер-кнопки
  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navigation.classList.toggle('active');
  });

  // Логіка для кнопок навігації
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.querySelector(
        `.content-section.${targetId}-section`,
      );

      sections.forEach((section) => section.classList.remove('active'));
      if (defaultContent) {
        defaultContent.classList.remove('active');
      }

      if (targetSection) {
        targetSection.classList.add('active');
      }

      burgerMenu.classList.remove('active');
      navigation.classList.remove('active');
    });
  });

  // Функція для відновлення початкового стану розділу "Services"
  function resetServicesView() {
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceDescriptions = document.querySelectorAll(
      '.service-description',
    );

    // Показати всі картки послуг
    serviceCards.forEach((card) => (card.style.display = 'block'));

    // Приховати всі описи послуг
    serviceDescriptions.forEach((desc) => (desc.style.display = 'none'));

    // Увімкнути розділ "Services"
    sections.forEach((section) => section.classList.remove('active'));
    document
      .querySelector('.content-section.services-section')
      .classList.add('active');
  }

  // Додаємо обробник подій для кнопок "Services" і "Back to Services"
  if (servicesButton) {
    servicesButton.addEventListener('click', () => {
      resetServicesView();
    });
  }

  backToServicesButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      resetServicesView();
    });
  });

  // Логіка для розділу "Послуги"
  const serviceCards = document.querySelectorAll('.service-card');
  const serviceDescriptions = document.querySelectorAll('.service-description');

  serviceCards.forEach((card) => {
    card.addEventListener('click', () => {
      // Приховати всі картки послуг
      serviceCards.forEach((serviceCard) => {
        serviceCard.style.display = 'none';
      });

      // Показати відповідний опис
      const descriptionId = card.getAttribute('data-service');
      serviceDescriptions.forEach((description) => {
        if (description.id === `service-description-${descriptionId}`) {
          description.style.display = 'block';
        } else {
          description.style.display = 'none';
        }
      });
    });
  });

  // Логіка для форми
  const form = document.querySelector('.booking-form');
  const orderSection = document.querySelector('.order-section');
  const submitButton = form?.querySelector('.submit-button'); // Кнопка "Submit Booking"
  const requiredFields = form?.querySelectorAll('input[required]'); // Усі обов'язкові поля
  const serviceCheckboxes = form?.querySelectorAll('input[name="services[]"]'); // Чекбокси вибору послуг

  if (form && submitButton) {
    // Функція перевірки валідності форми
    const validateForm = () => {
      let isValid = true;

      // Перевірка кожного обов'язкового поля
      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
        }
      });

      // Перевірка, чи вибрано хоча б один чекбокс
      const isServiceSelected = Array.from(serviceCheckboxes).some(
        (checkbox) => checkbox.checked,
      );

      if (!isServiceSelected) {
        isValid = false;
      }

      // Зміна стану кнопки
      if (isValid) {
        submitButton.classList.remove('inactive');
        submitButton.classList.add('active');
        submitButton.disabled = false;
      } else {
        submitButton.classList.remove('active');
        submitButton.classList.add('inactive');
        submitButton.disabled = true;
      }
    };

    // Додаємо слухачі подій для всіх полів і чекбоксів
    requiredFields.forEach((field) => {
      field.addEventListener('input', validateForm);
      field.addEventListener('change', validateForm); // Для Safari та iOS
      field.addEventListener('blur', validateForm); // Додатково для iPad
    });

    serviceCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', validateForm);
      checkbox.addEventListener('input', validateForm); // Додатково для iOS
    });

    // Перевіряємо стан кнопки при завантаженні сторінки
    validateForm();

    // Логіка відправки форми
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(form);

      // Додаємо вибрані послуги до formData
      const selectedServices = Array.from(serviceCheckboxes)
        .filter((checkbox) => checkbox.checked)
        .map((service) => service.value);

      formData.append('services', selectedServices.join(', '));

      try {
        const response = await fetch('send-mail.php', {
          method: 'POST',
          body: formData,
        });
        const result = await response.json();

        if (result.status === 'success') {
          const successMessage = document.createElement('div');
          successMessage.classList.add('success-message');
          successMessage.innerHTML = `
            <h2>Thank You for Your Booking!</h2>
            <p>We have received your request and will contact you shortly to confirm your booking and discuss any details. Have a great day!</p>
          `;
          form.style.display = 'none';
          orderSection.appendChild(successMessage);
        } else {
          alert('Failed to send your booking request. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again later.');
      }
    });
  }
});
