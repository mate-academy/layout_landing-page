'use strict';

$(document).ready(function () {
  const banner = $('.banner__wrapp');
  const closeButton = $('.close-top-banner');

  if (!banner.length || !closeButton.length) {
    return;
  }

  const bannerDate = banner.data('date'); // Format: "22-11-2024"
  const [day, month, year] = bannerDate.split('-');
  const bannerDateObject = new Date(year, month - 1, day);

  const today = new Date();
  const todayDateObject = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  const topBannerIsClose = localStorage.getItem('topBannerIsClose') === 'true';
  const topBannerDate = localStorage.getItem('topBannerDate');

  if (todayDateObject >= bannerDateObject) {
    localStorage.setItem('topBannerIsClose', 'true');
    localStorage.setItem('topBannerDate', bannerDate);
  } else if (
    (!topBannerIsClose && todayDateObject < bannerDateObject) ||
    (topBannerIsClose && topBannerDate !== bannerDate)
  ) {
    setTimeout(function () {
      $('.top-banner').slideDown();
    }, 3000);
    localStorage.setItem('topBannerIsClose', 'false');
    localStorage.setItem('topBannerDate', bannerDate);
  } else if (!topBannerIsClose) {
    setTimeout(function () {
      $('.top-banner').slideDown();
    }, 3000);
  }

  closeButton.on('click', function () {
    $('.top-banner').slideUp();
    localStorage.setItem('topBannerIsClose', 'true');
  });
});

$(document).ready(function () {
  function redirectToTab(tabIndex) {
    const baseURL = window.location.origin;
    const currentURL = window.location.href;

    if (currentURL === baseURL || currentURL === `${baseURL}/`) {
      return;
    }
    // Redirect only if not already on the target page or homepage
    window.location.href = `${baseURL}?tab=${tabIndex}`;
  }

  $('.freerasp').on('click', function () {
    redirectToTab(0);
  });

  $('.raspsdk').on('click', function () {
    redirectToTab(1);
  });

  $('.appicrypt').on('click', function () {
    redirectToTab(2);
  });

  $('.hardering').on('click', function () {
    redirectToTab(3);
  });

  $('.malware').on('click', function () {
    redirectToTab(4);
  });

  $('.pricing').on('click', function () {
    redirectToTab('pricing');
  });

  // navbar
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar-new');

    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // navbar slide down
  const $navbar = $('.navbar-new');

  if ($navbar.css('transform') === 'none') {
    $navbar.css('transform', 'matrix(1, 0, 0, 1, 0, -100)');
  }

  const transformValue = $navbar.css('transform');

  if (transformValue !== 'none') {
    const matrixValues = transformValue.match(/matrix\(([^)]+)\)/);

    if (matrixValues) {
      const values = matrixValues[1].split(', ');
      const translateY = parseFloat(values[5]);
      const baseURL = window.location.origin.replace(/\/+$/, '');
      const currentURL = window.location.href.replace(/\/+$/, '');

      if (translateY && currentURL !== baseURL) {
        $navbar.css({
          transform: 'translateY(0%)',
          transition: 'transform 0.8s ease',
        });
      }
    }
  }
});

const hubspotScript = document.querySelector('script[src*="hubspot"]');

if (hubspotScript) {
  hubspotScript.addEventListener('load', () => {
    console.log('HubSpot скрипт загружен и инициализирован');
  });
}
