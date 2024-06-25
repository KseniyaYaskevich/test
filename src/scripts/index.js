import { filter } from './modules/filter';
import { search } from './modules/search';
import { hoverVideo } from './modules/hoverVideo';
import { carousels } from './modules/carousels';
import { featuresSwiper } from './modules/featuresSwiper';

const homePage = document.querySelector('.page-home');

filter();
search();
hoverVideo();

if (homePage) {
  carousels();
  featuresSwiper();
}
