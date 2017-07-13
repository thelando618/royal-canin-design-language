/**
 *
 * Image Gallery javascript
 *
 */


RCWDL.features.ImageGallery = {
  init: function (targetClass, options) {

    var imageGalleries = document.querySelectorAll(targetClass);

    if (imageGalleries !== null) {
      if (imageGalleries.length > 1) {
        imageGalleries.forEach(function (imageGallery) {
          RCWDL.features.Carousel.create(imageGallery, options);
          RCWDL.features.ImageGallery.wrapAndRemoveDots(imageGallery.parentNode.parentNode);
        })
      }
      else {
        RCWDL.features.ImageGallery.create(imageGalleries[0], options);
        RCWDL.features.ImageGallery.wrapAndRemoveDots(imageGalleries[0]);
      }
    }
  },
  create: function (imageGallery, options) {

    var options = typeof options === 'object' ? options : {
        container: imageGallery,
        items: 1,
        slideBy: 'page',
        autoplay: true,
        controlsText: [
          '<span class="navigation--prev"><span class="screen-reader-text">Previous</span></span>',
          '<span class="navigation--next"><span class="screen-reader-text">Next</span></span>'
        ],
        touch: true,
        autoplayTimeout: 4000,
        speed: 500
      }

    tns(options);
  },
  wrapAndRemoveDots: function (item) {
    // Create an element to wrap the gallery with so we can easily target it later.
    // TNS wraps the markup so this is required to restrict the width etc.
    var wrapper = document.createElement('div');
    wrapper.classList.add('gallery-wrapper');
    RCWDL.utilities.wrap(item.parentNode.parentNode, wrapper);

    var pager = item.parentNode.parentNode.querySelectorAll('[aria-label="Carousel Pagination"]');
    pager[0].parentNode.removeChild(pager[0]);

    // Trigger resize to make sure the gallery adjusts to the correct size.
    RCWDL.utilities.triggerResize();
  }
}

RCWDL.ready(RCWDL.features.ImageGallery.init('.rc-carousel--gallery'));