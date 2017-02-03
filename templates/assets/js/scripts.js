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
			// ta.style.height = 0 + 'px';
			// Remove visible class
			ta.classList.remove( 'visible' );

		} else {

			// Add triggered class
			this.classList.add( 'triggered' );

			// Set the target height to it's scroll height
			// ta.style.height = ta.scrollHeight + 'px';
			// Add visible class
			ta.classList.add( 'visible' );

		}
	});
}




// nav_accordion.js

function nav_accordion( accordion, trigger ) {
	var a = document.querySelector( accordion );
	var ts =	document.querySelectorAll( trigger );


	ts.forEach( function( t ) {
		t.addEventListener( 'click', function() {

			var aH = a.scrollHeight;


			if ( t.classList.contains( 'triggered' ) ) {

				t.classList.remove( 'triggered' );
				t.parentNode.querySelector('ul').classList.remove( 'visible' );

			} else {

				t.classList.add( 'triggered' );
				t.parentNode.querySelector('ul').classList.add( 'visible' );
			}

			a.style.height = a.clientHeight;

		} );
	});

}





// Scripts

simple_toggler( '#gs-nav-trigger', '.gs-nav__nav' );

nav_accordion( '.gs-nav__nav', '.gs-nav__trigger');


