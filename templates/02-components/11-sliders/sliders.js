/**
 *
 * File sliders.js.
 *
 */


/**
 * Checks if document is ready
 * @param  {Function} fn Whatever is passed in the ready function 
 */
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}






// @todo - Will live in scripts file
// Native document ready
ready( function(  ) {

	// Get element
	var range = document.getElementById( 'rc-slider-demo' );

	// Create Slider
	noUiSlider.create( range, {
		start: [ 0 ],
		connect: [true, false],
		behaviour: 'tap-drag', 
		step: 10,
		tooltips: true,
		range: {
			'min': 0,
			'max': 100
		},
		pips: { 
			mode: 'steps',
			stepped: true,
			density: 2
		}
	});


} );