'use strict';

// Get the element to animate
const elements = document.querySelectorAll('.my-element');

// Define the options for the Intersection Observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    // If element is in viewport, add the 'show' class to trigger the animation
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
      entry.target.classList.remove('show');
    }
  });
}, options);


// Start observing the elemen
elements.forEach((el) => observer.observe(el));

// // Get the element to animate
// const element1 = document.querySelector('.my-element1');

// // Define the options for the Intersection Observer
// const options1 = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.1
// };

// // Create a new Intersection Observer
// const observer1 = new IntersectionObserver(function(entries, observer) {
//   entries.forEach(entry => {
//     // If element is in viewport, add the 'show' class to trigger the animation
//     if (entry.isIntersecting) {
//       element1.classList.add('show');
//     }
//     else {
//       element1.classList.remove('show');
//     }
//   });
// }, options1);


// // Start observing the elemen
// observer1.observe(element1);
