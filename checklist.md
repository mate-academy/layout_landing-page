- [x] Use the logo as a favicon.
- [x] Use the landing name as a page title.
- [x] All logos are links to the top of the page.
- [x] Change text color on hover for phone, email, and address.
- [x] Phone icons and phone numbers are real links to start a call.
- [x] All addresses are links to Google Maps and open in a new tab with `target="_blank"`.
- [x] All images increase on hover and are wrapped in links.
- [x] Everything looks neat on mobile and without horizontal scrolling.
- [x] The speed of animations is consistent throughout the page.
- [x] All `nav__links` work smoothly.
- [x] Disable page scrolling under the menu with:

  ```css
  .page:has(.page__menu:target) {
    overflow: hidden;
  }
  ```

- [x] Allow menu scrolling and keep the top area sticky:

  ```css
  .menu {
    overflow: auto;
  }

  .menu__top {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #e5e5e5;
  }
  ```

- [x] All form fields are required and use the correct field types.
- [x] Placeholders include examples of the expected input.
- [x] The form resets without reloading the page using `onsubmit="this.reset(); return false;"`.
- [x] The `footer` is sticky at the bottom with `z-index: -1`.
