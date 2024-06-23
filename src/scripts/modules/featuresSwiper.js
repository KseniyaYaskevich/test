import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const featuresSwiper = () => {
  const swiper = new Swiper('.swiper-features', {
    modules: [Navigation],
    loop: true,
    navigation: {
      nextEl: '.swiper-features__button--next',
      prevEl: '.swiper-features__button--prev',
    },
  });
};
