# Landing Page

> ❗❗ You will complete this task in the **Landing** topic.
> Now just choose a design and do the parts from the videos.
> Note: in the first task of this topic you will find 4 examples of landing pages. Choose **only one** of them and create your page.

Choose a design for your landing page:

- [MET landing](https://www.figma.com/file/lSR1m42L9YwzQwzzxKwHpw/THE-MET)
- [MYBIKE landing](https://www.figma.com/file/NZQAIydtHo5QkINyGLHNcq/BIKE-New-Version?node-id=0%3A1)
- [B&O](https://www.figma.com/file/DtkQmQ797hk0nI4KfMi2Uq/BOSE-New-Version?type=design&node-id=6817-212&t=ZTV6Gl8NzaWkJ4FK-0)
- [Nothing](https://www.figma.com/file/DtkQmQ797hk0nI4KfMi2Uq/BOSE-New-Version?type=design&node-id=6802-139&t=L7eKz5YKLN0m5WxR-0)

Follow the instructions in this and next lessons to implement the page block by block:

- Here is [the design from the video](https://www.figma.com/file/DtkQmQ797hk0nI4KfMi2Uq/BOSE-New-Version?type=design&node-id=6703-88&t=L7eKz5YKLN0m5WxR-0) (❗❗ DO NOT implement this design ❗❗ choose one of the options above ❗❗ ☝️)
- Start writing styles in the `main.scss` file. It is be explained in the `Sass` lesson.
- **DON'T** try to do it `Pixel Perfect` - implement it the most `simple` way so it looks similar.
- When done check yourself using the [CHECKLIST](./checklist.md) when finished.
- Deploy and create a Pull Request with a [DEMO LINK](https://ndie1311.github.io/layout_landing-page/).

# Tips & Hints
- Check `background-image: url()` to be relative to the `main.scss`. So should start with `../images`.
- If some points from the checklist are not relevant to your design, just skip it.


1. Use the logo as a favicon
2. Use the landing name as a page title
3. All logos should be links to the top of the page
4. Change text color on hover for phone, email, and address
5. Make sure phone icons and phone numbers are real links to start a call
6. All addresses should be links to some location on Google Maps. Open them in a new tab with `target="_blank"`.

8. Make sure everything looks neat on mobile and without horizontal scrolling
9. The speed of animations should be the same throughout the page (for example, increasing when hovering or moving blocks when scrolling)
10. Ensure that all `nav__links` work smoothly
11. Disable page scrolling under the menu using the next code:
    ```css
    .page:has(.page__menu:target) {
      overflow: hidden; /* not to scroll the page */
    }
    ```
12. Make it possible to scroll the menu if it is higher than the viewport;
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
13. All form fields should be required and have correct types (`email`, `tel`, etc.)
14. Placeholders should give examples of what should be added, to make the expected format clear
15. The page shouldn't be reloaded on form submit, but the fields should be cleared. Use:
    ```html
    <form onsubmit="this.reset(); return false;">
    ```
16. Make the `footer` sticky at the bottom with `z-index: -1` to get a `fixed` background effect.


modified
