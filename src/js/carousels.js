/**
 * Takes a selector and converts into a carousel using the tiny-slider library.
 * @type {{init: RCWDL.features.Carousel.init, create: RCWDL.features.Carousel.create}}
 */
RCWDL.features.Carousel = {

  /**
   * Find all the elements with the supplied selector.
   *
   * @param {String} targetClass
   * Css selector to target.
   */
  init: function (targetClass) {
    'use strict';

    var carousels = document.querySelectorAll(targetClass);

    if (carousels !== null && carousels.length > 0) {
      if (carousels.length > 1) {
        Object.keys(carousels).forEach(function (carousel) {
          RCWDL.features.Carousel.create(carousels[carousel]);
        });
      }
      else {
        RCWDL.features.Carousel.create(carousels[0]);
      }
    }
  },

  /**
   * Create a carousel from the supplied node item.
   *
   * @param {Node} carousel
   * Node item.
   */
  create: function (carousel) {
    'use strict';
    tns({
      container: carousel,
      items: 1,
      slideBy: 'page',
      mouseDrag: true,
      autoplay: false,
      controlsText: [
        '<span class="navigation--prev"><span class="screen-reader-text">Previous</span></span>',
        '<span class="navigation--next"><span class="screen-reader-text">Next</span></span>'
      ],
      touch: true
    });
  }
};

RCWDL.ready(RCWDL.features.Carousel.init('[data-js-carousel]'));
