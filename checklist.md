1. Use the logo as a favicon - OK!
2. Use the landing name as a page title - OK!
3. All logos should be links to the top of the page - which logo? OK!
4. Change text color on hover for phone, email, and address - OK!
5. Make sure phone icons and phone numbers are real links to start a call - OK!
6. All addresses should be links to some location on Google Maps. Open them in a new tab with `target="_blank"`.   - OK!
7. Increase all images on hover (make them links to #, if there is no better option) - OK!
8. Make sure everything looks neat on mobile and without horizontal scrolling - OK!
9. The speed of animations should be the same throughout the page (for example, increasing when hovering or moving blocks when scrolling) - OK!
10. Ensure that all `nav__links` work smoothly - OK!
11. Disable page scrolling under the menu using the next code: - OK!
    ```css
    .page:has(.page__menu:target) {
      overflow: hidden; /* not to scroll the page */
    }
    ```
12. Make it possible to scroll the menu if it is higher than the viewport; - NONEED OK!
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
13. All form fields should be required and have correct types (`email`, `tel`, etc.) - OK!
14. Placeholders should give examples of what should be added, to make the expected format clear - OK !
15. The page shouldn't be reloaded on form submit, but the fields should be cleared. Use:
    ```html - OK!
    <form onsubmit="this.reset(); return false;">
    ```
16. Make the `footer` sticky at the bottom with `z-index: -1` to get a `fixed` background effect. - OK !
