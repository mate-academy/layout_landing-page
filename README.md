# [🚴‍♂️ MyBike – Landing Page](https://mybike-by-gtailde.netlify.app)

**Primary live demo:** [Netlify](https://mybike-by-gtailde.netlify.app)
**Backup live demo:** [gh pages](https://gtailde.github.io/layout_landing-page)

**MyBike** is a responsive landing page created to present a modern bike brand. It’s built with clean code, semantic HTML, SCSS architecture, and dynamic user interaction powered by JavaScript.

---

## 🔧 Technologies Used

- **HTML5** with semantic elements
- **SCSS (SASS)** with mixins and variables
- **JavaScript (Vanilla JS)**
  - `IntersectionObserver` for scroll-based animations
  - Custom threshold logic for responsive animations
- **BEM methodology** for CSS class naming
- **Responsive design** for mobile, tablet, and desktop
- **Optimized images** (compressed large assets)
- **Full interactivity** for all user-accessible elements

---

## 💡 Features

- Smooth animations on scroll using `IntersectionObserver`
- Component-based SCSS with reusable mixins
- Flexible responsive thresholds for animations
- Well-structured BEM class naming convention
- All interactive elements (e.g., buttons, links, form inputs) include focus/hover states
- Semantic and accessible markup

---

## 🧩 SCSS Mixins

**Text Styling**
```scss
@mixin text-style(
  $font-size: $text-font-size-medium,
  $font-weight: $font-weight-regular,
  $letter-spacing: 0,
  $line-height: 100%,
  $text_color: $text-color-white
) {
  font-size: $font-size;
  font-weight: $font-weight;
  letter-spacing: $letter-spacing;
  line-height: $line-height;
  color: $text_color;
}
```

**Flexbox Layout**
```scss
@mixin flex($justify: center, $align: center, $direction: row, $wrap: nowrap) {
  display: flex;
  justify-content: $justify;
  align-items: $align;
  flex-flow: $direction $wrap;
}
```

**Grid Layout**
```scss
@mixin grid($columns: 12, $column-gap: 24px, $row-gap: 0) {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);
  gap: $row-gap $column-gap;
}
```

**Responsive Media Queries**
```scss
@mixin respond-to($device1, $device2: null) {
  @if $device1 == phone or $device2 == phone {
    @media (max-width: #{$breakpoint-phone}) {
      @content;
    }
  }

  @if $device1 == tablet or $device2 == tablet {
    @media (min-width: #{ $breakpoint-phone }) and (max-width: #{$breakpoint-tablet}) {
      @content;
    }
  }

  @if $device1 == desktop or $device2 == desktop {
    @media (min-width: #{ $breakpoint-tablet }) and (max-width: #{$breakpoint-desktop}) {
      @content;
    }
  }
}
```

---

**Responsive Animation Logic**
```js
export function getResponsiveThreshold(blockType) {
  const width = window.innerWidth;

  const thresholds = {
    compareContainer: { large: 0.85, medium: 0.3, small: 0.1 },
    detailsContainer: { large: 0.25, medium: 0.3, small: 0.1 },
    contactContainer: { large: 1, medium: 0.8, small: 0.3 },
    default: { large: 100, medium: 100, small: 100 },
  };

  const sizeKey = width > 1260 ? 'large' : width > 768 ? 'medium' : 'small';
  const blockThresholds = thresholds[blockType] || thresholds.default;

  return blockThresholds[sizeKey];
}
```
---

## 🎯 Responsive Animation Logic

This function provides flexible control over the visibility threshold for `IntersectionObserver` animations depending on the screen size and the type of content block. It helps ensure animations trigger smoothly and appropriately on different devices.

---

## 📐 Code Style & Structure

- **BEM methodology** for CSS classes, improving clarity and maintainability.
- **Semantic HTML5** tags used to enhance accessibility and SEO.
- **Component-based SCSS architecture** with reusable mixins and variables to keep styles DRY and consistent.
- All interactive elements (buttons, links, form fields) include **hover** and **focus** states to improve user experience.
- Written in **vanilla JavaScript** without frameworks to keep the project lightweight and fast.
- Images are **optimized and compressed** for faster loading times.

---

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
