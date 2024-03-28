1. [x] Use the logo as a favicon
2. [x] Use the landing name as a page title
3. [x] All logos should be links to the top of the page
4. [x] Change text color on hover for phone, email, and address
5. [x] Make sure phone icons and phone numbers are real links to start a call
6. [x] All addresses should be links to some location on Google Maps. Open them in a new tab with `target="_blank"`.
7. [x] Increase all images on hover (make them links to #, if there is no better option)
8. [x] Make sure everything looks neat on mobile and without horizontal scrolling
9. [x] The speed of animations should be the same throughout the page (for example, increasing when hovering or moving blocks when scrolling)
10.[x]  Ensure that all `nav__links` work smoothly
11.[x]  Disable page scrolling under the menu using the next code:
    ```css
    .page:has(.page__menu:target) {
      overflow: hidden; /* not to scroll the page */
    }
    ```
12. [x] Make it possible to scroll the menu if it is higher than the viewport;
    ```css
    .menu {
      overflow: auto; /* to scroll the menu if needed */
    }
    .menu__top {
      position: sticky; /* to keep cross always visible */
      top: 0;
      z-index: 1;
      background-color: #e5e5e5;
    }
    ```
13. [x] All form fields should be required and have correct types (`email`, `tel`, etc.)
14. [x] Placeholders should give examples of what should be added, to make the expected format clear
15. [x] The page shouldn't be reloaded on form submit, but the fields should be cleared. Use:
    ```html
    <form onsubmit="this.reset(); return false;">
    ```
16. [x] Make the `footer` sticky at the bottom with `z-index: -1` to get a `fixed` background effect.
