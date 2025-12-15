# Landing Page

# Landing Page: 'My Bike'

Single-page portfolio/landing implementing from the Figma mockup (BIKE New Version design) with responsive layout, lazy-loaded images, scroll animations, and accessibility improvements.

---

## Live Preview & Design Source

* **Live Site:** [https://JorJio-svg.github.io/layout_landing-page/](https://JorJio-svg.github.io/layout_landing-page/)
* **Figma Design:** [Link to Figma]

---

## Technologies Used

* **Core Languages:** HTML5 (semantic), CSS3 (responsive, BEM), SASS, JavaScript (ES6)
* **Tools & APIs:** Vite (build tool), Intersection Observer (for scroll animations), GitHub Pages (deployment)
* **Optimization:** Image Lazy-loading (using `<picture>` and `<source>` tags), Favicon (responsive sizes, .ico format)

---

## Project Highlights & Quality

* **Design Accuracy:** Implemented the design faithfully according to the Figma mockup.
* **Navigation & UX:** Provided smooth navigation (smooth scroll), hover states, and reveal-on-scroll animations.
* **Performance:** Optimized images for fast loading.
* **Responsiveness:** No horizontal scrolling on any device.
* **Functionality:** All buttons, menus, and forms are fully functional and link to correct sections.

### Accessibility & Forms

* Clear placeholders hint at required input.
* Interactive elements include appropriate `aria-labels` and accessibility attributes.

---

## How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone <REPO_URL>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run in development mode:** (Opens HMR server via Vite)
    ```bash
    npm start
    ```
4.  **Build for production:**
    ```bash
    npm run build
    ```
5.  **Deploy to hosting:**
    ```bash
    npm run deploy
    ```
6.  **Run linters and tests:**
    ```bash
    npm test
    ```

---

## Troubleshooting & Cache

* After deployment, please **clear your browser cache** (e.g., Ctrl+F5) or check the live preview in an incognito window to ensure you see the latest changes.
* If the live preview doesn't update, verify that you pushed to the correct branch and that any automated deployment steps (GitHub Actions) completed successfully.
