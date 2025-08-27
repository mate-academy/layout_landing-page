document.addEventListener('DOMContentLoaded', function () {
  const phoneLink = document.querySelector('.phone-link');
  const tooltip = phoneLink.querySelector('.phone-tooltip');

  phoneLink.addEventListener('mouseenter', function () {
    tooltip.style.transition =
      'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    tooltip.style.opacity = '1';
    tooltip.style.transform = 'translateX(-50%) scale(1)';
  });

  phoneLink.addEventListener('mouseleave', function () {
    tooltip.style.transition = 'all 0.3s ease';
    tooltip.style.opacity = '0';
    tooltip.style.transform = 'translateX(-50%) scale(0.8)';
  });
});
