'use strict';

// simple_toggler.js

function simple_toggler( trigger, target ) {

	// If either argument is undefined, end here.
  if ( trigger === undefined || target === undefined ) {
  	return false;
  }

  // Set up internal variables to contain arguments.
	var tr = document.querySelector( trigger ), 
			ta = document.querySelector( target ) ;


	// Event handlder
	tr.addEventListener( 'click', function() {

		// If the trigger has a class of triggered
		if ( tr.classList.contains( 'triggered' ) ) {

			// Remove that class
			this.classList.remove( 'triggered' );
			
			// Set the target height to 0
			ta.style.height = 0 + 'px';
			// Remove visible class
			ta.classList.remove( 'visible' );

		} else {

			// Add triggered class
			this.classList.add( 'triggered' );

			// Set the target height to it's scroll height
			ta.style.height = ta.scrollHeight + 'px';
			// Add visible class
			ta.classList.add( 'visible' );

		}
	});
}





// Scripts

simple_toggler( '#gs-nav-trigger', '.gs-nav__nav' );










	// var lis = document.querySelectorAll('.gs-nav li > a');

	// for (var i = 0; i < lis.length; i++) {


	// 		lis[i].addEventListener( 'click', function() {
	// 			this.parentElement.classList.toggle('active');
	// 		} );

	// }


