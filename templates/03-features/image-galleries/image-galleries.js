/**
 *
 * File image-galleries.js.
 *
 */

$(function () {

  // Carousel Settings
  var carousel_next_arrow = '<a href="#" class="interactive--navigation interactive--navigation--next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.5 64" aria-labelledby="svg-arrow-right" role="img"><title id="svg-arrow-right" lang="en">arrow-right</title><path d="M34.5 34.5L6 63c-.7.7-1.6 1-2.5 1s-1.8-.3-2.5-1c-1.4-1.4-1.4-3.6 0-5l26-26L1 6C-.4 4.6-.4 2.4 1 1S4.6-.4 6 1l28.5 28.5c1.4 1.4 1.4 3.6 0 5z"></path></svg><span class="screen-reader-text">Next Slide</span></a>',
      carousel_prev_arrow = '<a href="#" class="interactive--navigation interactive--navigation--prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.5 64" aria-labelledby="svg-arrow-left" role="img"><title id="svg-arrow-left" lang="en">arrow-left</title><path d="M1 29.5L29.5 1c1.4-1.4 3.6-1.4 5 0s1.4 3.6 0 5l-26 26 26 26c1.4 1.4 1.4 3.6 0 5-.7.7-1.6 1-2.5 1-.9 0-1.8-.3-2.5-1L1 34.5c-1.3-1.4-1.3-3.6 0-5z"></path></svg><span class="screen-reader-text">Previous Slide</span></a>';

  var carousel_gallery_main = {
    adaptiveHeight: false,
    autoplay: true,
    nextArrow: carousel_next_arrow,
    prevArrow: carousel_prev_arrow,
    slidesToShow: 1
  }

  // Carousel Caches
  var $slick_gallery = $( '.rc-carousel--gallery__main' );

  // Carousel Inits
  $slick_gallery.slick( carousel_gallery_main );

});