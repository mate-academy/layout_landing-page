'use strict';

const webpSupport = () => {
  const image = document.createElement('img');

  image.onload = () => {
    document.body.classList.add('webp');
  };

  image.onerror = () => {
    document.body.classList.add('no-webp');
  };

  image.src =
    'data:image/webp;base64,' +
    'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAUAmJaQAA3AA/v89WAAAAA==';
};

webpSupport();
