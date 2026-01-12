# BOSE Landing Page

A modern, responsive landing page showcasing BOSE products. The project focuses on clean layout, accessibility, performance‑friendly animations, and maintainable styles architecture.

## Live Demo

Preview: https://teti-web.github.io/layout_landing-page/

## Design

Figma design: https://www.figma.com/design/DtkQmQ797hk0nI4KfMi2Uq/BOSE-New-Version?node-id=6802-140&t=MwfIPMvQ2T8BJK11-0

## Tech Stack

- HTML5, semantic markup
- SCSS (Sass) with BEM, variables, mixins, and modular structure
- Vanilla JavaScript (ES6+)
- IntersectionObserver for reveal-on-scroll (with prefers-reduced-motion fallback)
- Custom form validation (ARIA-friendly, browser-native validation disabled)
- Tooling: Vite, Stylelint, Prettier

## Features

- Responsive layout for mobile, tablet, and desktop
- Smooth section reveal on scroll with accessibility fallback
- Form validation with clear error messages and ARIA attributes
- Consistent styles via SCSS utilities (variables, mixins)

## Getting Started

Prerequisites:

- Node.js >= 18
- npm >= 9

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm start
```

Run linters and format styles:

```bash
npm run lint        # stylelint + prettier + project lint
npm run style-format
npm run format
```

Build for production:

```bash
npm run build
```

Deploy (GitHub Pages via mate-scripts):

```bash
npm run deploy
```

## Project Structure

- `index.html` – markup
- `src/styles/` – SCSS sources (blocks, utils, main)
- `src/scripts/main.js` – interactions (form validation, reveal-on-scroll)
- `src/images/` – assets

## Notes

- Reveal animations respect `prefers-reduced-motion`
- Form uses `novalidate` and custom validation with user-friendly messages
