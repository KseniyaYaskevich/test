import { filter } from './modules/filter';
import { search } from './modules/search';
import { hoverVideo } from './modules/hoverVideo';
import { profileTabs } from './modules/profileTabs';

import { carousels } from './modules/carousels';
import { featuresSwiper } from './modules/featuresSwiper';

filter();
search();
hoverVideo();
profileTabs();

if (document.querySelector('.page-home')) {
  carousels();
  featuresSwiper();
}
