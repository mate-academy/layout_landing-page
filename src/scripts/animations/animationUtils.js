export function assignAnimationClasses(elements, variants) {
  elements.forEach((el, index) => {
    if (!el.classList.contains('animate-show')) {
      el.classList.remove('animate-left', 'animate-right', 'animate-bottom');
      el.classList.add(variants[index % variants.length]);
    }
  });
}
