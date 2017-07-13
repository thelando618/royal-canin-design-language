/**
 *
 * Carousel javascript
 *
 */


RCWDL.features.Carousel = {
  init: function (targetClass) {

    var carousels = document.querySelectorAll(targetClass);

    if (carousels !== null) {
      if (carousels.length > 1) {
        carousels.forEach(function (carousel) {
          RCWDL.features.Carousel.create(carousel);
        })
      }
      else {
        RCWDL.features.Carousel.create(carousels[0]);
      }
    }
  },
  create: function (carousel) {
    tns({
      container: carousel,
      items: 1,
      slideBy: 'page',
      autoplay: false,
      controlsText: [
        '<span class="navigation--prev"><span class="screen-reader-text">Previous</span></span>',
        '<span class="navigation--next"><span class="screen-reader-text">Next</span></span>'
      ],
      touch: true
    });
  }
}

RCWDL.ready(RCWDL.features.Carousel.init('.rc-carousel'));