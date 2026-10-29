# MyBike — Landing Page

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white)
![BEM](https://img.shields.io/badge/BEM-000000?style=flat-square&logo=bem&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

A responsive landing page for the MyBike electric bicycles brand. Built from a Figma design using semantic HTML and SCSS, following the BEM methodology.

**[Live Demo](https://insomniaorno.github.io/layout_landing-page/)** | **[Figma Design](https://www.figma.com/file/NZQAIydtHo5QkINyGLHNcq/BIKE-New-Version?node-id=0%3A1)**

## Overview & Features

- **Responsive layout:** Mobile-first approach with breakpoints for tablet (`576px`) and desktop (`1024px`).
- **Navigation:** Slide-in burger menu with scroll lock and smooth anchor navigation.
- **UI & Layout:** Custom grid system using CSS Grid and Flexbox, sticky footer with a reveal effect, and smooth hover states on interactive elements.
- **Contact Form:** Native HTML5 validation with auto-reset on submit.

## Tech Stack

- **Markup:** HTML5
- **Styling:** SCSS (variables, mixins, nesting), BEM architecture
- **Bundler:** Vite
- **Linters:** Stylelint, LintHTML, BEMLint

## Local Setup

Requires [Node.js](https://nodejs.org/) (v20 or higher recommended)..

1. Clone the repository:
   ```bash
   git clone https://github.com/insomniaorno/layout_landing-page.git
   cd layout_landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Build for production:
   ```bash
   npm run build
   ```
