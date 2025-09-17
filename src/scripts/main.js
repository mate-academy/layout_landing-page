'use strict';


        // Mobile menu toggle
        const menuToggle = document.getElementById('menu-toggle');
        const menuClose = document.getElementById('menu-close');
        const nav = document.getElementById('nav');
        const overlay = document.getElementById('overlay');
        const body = document.body;

        function toggleMenu() {
            nav.classList.toggle('nav--active');
            overlay.classList.toggle('overlay--active');
            if (nav.classList.contains('nav--active')) {
                body.classList.add('page__menu--open');
            } else {
                body.classList.remove('page__menu--open');
            }
        }

        menuToggle.addEventListener('click', toggleMenu);
        menuClose.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    if (nav.classList.contains('nav--active')) {
                        toggleMenu();
                    }

                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Product category filtering
        const categoryButtons = document.querySelectorAll('.products__category');
        const productCards = document.querySelectorAll('.product-card');

        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                categoryButtons.forEach(btn => btn.classList.remove('products__category--active'));
                button.classList.add('products__category--active');

                const category = button.dataset.category;

                if (category === 'all') {
                    productCards.forEach(card => {
                        card.classList.remove('product-card--hidden');
                    });
                    return;
                }

                productCards.forEach(card => {
                    const cardCategories = card.dataset.categories.split(' ');

                    if (cardCategories.includes(category)) {
                        card.classList.remove('product-card--hidden');
                    } else {
                        card.classList.add('product-card--hidden');
                    }
                });
            });
        });

        // Funcionalidade para campo de país com bandeira
        const countrySelect = document.getElementById('country');
        const countryFlag = document.getElementById('country-flag');

        countrySelect.addEventListener('change', function() {
            const selectedOption = this.options[this.selectedIndex];
            const flagUrl = selectedOption.getAttribute('data-flag');

            if (flagUrl) {
                // CORREÇÃO APLICADA: Aspas simples adicionadas ao redor da URL
                countryFlag.style.backgroundImage = `url('${flagUrl}')`;
            }
        });

        // Inicializar com a bandeira padrão (também corrigido)
        countryFlag.style.backgroundImage = "url('https://flagcdn.com/16x12/un.png')";

        // Função de envio do formulário
        function submitForm() {
            // Mostrar mensagem de sucesso
            const successMessage = document.getElementById('successMessage');
            successMessage.classList.add('show');

            // Limpar formulário
            document.getElementById('contactForm').reset();

            // Resetar bandeira do país
            countryFlag.style.backgroundImage = "url('https://flagcdn.com/16x12/un.png')";

            // Ocultar mensagem após 5 segundos
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
        }
