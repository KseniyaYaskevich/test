export const carousels = () => {
  const owlRight = $('.carousels__direction--right');
  owlRight.owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
    autoWidth: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    slideTransition: 'linear',
    smartSpeed: 5000,
    responsive: {
      0: {
        margin: 16,
      },
      720: {
        margin: 24,
      },
    },
  });
  setTimeout(() => {
    $('.owl-carousel.carousels__direction--right').trigger('next.owl.carousel');
  }, 500);

  const owlLeft = $('.carousels__direction--left');
  owlLeft.owlCarousel({
    rtl: true,
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
    autoWidth: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    slideTransition: 'linear',
    smartSpeed: 5000,
    responsive: {
      0: {
        margin: 16,
      },
      720: {
        margin: 24,
      },
    },
  });
  setTimeout(() => {
    $('.owl-carousel.carousels__direction--left').trigger('next.owl.carousel');
  }, 500);

  $('.owl-carousel.investors-carousel').owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
    items: 1,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 5000,
    slideTransition: 'linear',
    smartSpeed: 5000,
    responsive: {
      0: {
        margin: 10,
      },
      720: {
        margin: 24,
      },
    },
  });
  setTimeout(() => {
    $('.owl-carousel.investors-carousel').trigger('next.owl.carousel');
  }, 500);
};
