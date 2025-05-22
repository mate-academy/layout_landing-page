export function observeAndAnimate({
  targetElement,
  elementsToAnimate,
  threshold = 0.5,
  className = 'animate-show',
}) {
  if (!targetElement || !elementsToAnimate.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observerRef) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          elementsToAnimate.forEach((el) => {
            if (el && !el.classList.contains(className)) {
              el.classList.add(className);
            }
          });
          observerRef.unobserve(entry.target);
        }
      });
    },
    {
      threshold,
    },
  );

  observer.observe(targetElement);
}

export function getResponsiveThreshold(blockType) {
  const width = window.innerWidth;

  const thresholds = {
    // compareContainer
    compareContainer: {
      large: 0.85,
      medium: 0.3,
      small: 0.1,
    },
    // detailsContainer
    detailsContainer: {
      large: 0.25,
      medium: 0.3,
      small: 0.1,
    },
    // contactContainer
    contactContainer: {
      large: 1,
      medium: 0.8,
      small: 0.3,
    },
    // default
    default: {
      large: 100,
      medium: 100,
      small: 100,
    },
  };

  const sizeKey = width > 1260 ? 'large' : width > 768 ? 'medium' : 'small';
  const blockThresholds = thresholds[blockType] || thresholds.default;

  return blockThresholds[sizeKey];
}
