import Splide from '@splidejs/splide';
import '@splidejs/splide/css/core';

export const featuresSwiper = () => {
  const arrowPrev = document.querySelector('.swiper-features__button--prev');
  const arrowNext = document.querySelector('.swiper-features__button--next');

  document.addEventListener('DOMContentLoaded', () => {
    const main = new Splide('.swiper-features', {
      type: 'fade',
      rewind: true,
      pagination: false,
      arrows: false,
    });

    const thumbnails = new Splide('.swiper-trumb', {
      type: 'fade',
      rewind: true,
      pagination: false,
      arrows: false,
    });
    const thumbnails2 = new Splide('.swiper-trumb2', {
      type: 'fade',
      rewind: true,
      pagination: false,
      arrows: false,
    });

    if (window.innerWidth >= 1440) {
      thumbnails.mount();
      thumbnails2.mount();
      main.sync(thumbnails);
      main.sync(thumbnails2);
    }

    main.mount();

    arrowPrev.addEventListener('click', () => {
      main.go('-1');
    });
    arrowNext.addEventListener('click', () => {
      main.go('+1');
    });
  });
};
