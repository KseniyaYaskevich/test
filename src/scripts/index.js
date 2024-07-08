import { filter } from './modules/filter';
import { search } from './modules/search';
import { hoverVideo } from './modules/hoverVideo';
import { profileTabs } from './modules/profileTabs';
import { userNavMenu } from './modules/userNavMenu';

import { carousels } from './modules/carousels';
import { featuresSwiper } from './modules/featuresSwiper';

filter();
search();
hoverVideo();
profileTabs();
userNavMenu();

if (document.querySelector('.page-home')) {
  carousels();
  featuresSwiper();
}
