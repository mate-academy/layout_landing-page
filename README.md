# THE MET — Landing Page

Адаптивний лендінг музею The Met, зверстаний за макетом у Figma.

- [DEMO LINK](https://mursalovaa.github.io/layout_landing-page/)
- [Макет у Figma](https://www.figma.com/file/lSR1m42L9YwzQwzzxKwHpw/THE-MET)

## Що реалізовано

- Блоки: hero, Museum Hours, Now On View, More to Explore Online, Contact Us, sticky-футер з фото.
- Сітка з макета: 1260px (поля 120px), 744px (поля 72px), 320px (поля 20px).
- Меню-оверлей на `:target` (сторінка під ним не скролиться, саме меню скролиться), плавна навігація якорями.
- Шапка: при наведенні на іконку телефону з'являються номери обох локацій.
- Hover-ефекти (збільшення зображень, зміна кольору посилань, стани кнопки Default / Hover / Pressed), поява блоків при скролі — з однаковою швидкістю анімацій.
- Телефони — `tel:`, адреси — посилання на Google Maps у новій вкладці.
- Форма: усі поля `required`, відповідні типи, placeholder-приклади; без перезавантаження, поля очищаються.
- Зображення у форматі WebP з `srcset`, favicon у `src/images/favicon.svg`.

## Технології

HTML5, SCSS (BEM), JavaScript (IntersectionObserver), Vite (через `mate-scripts`).

## Запуск

```bash
npm install
npm start      # локальний сервер
npm run lint   # перевірка стилів та розмітки
npm run deploy # публікація на GitHub Pages
```



