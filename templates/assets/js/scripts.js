/* Progress JS */
var test = 1;
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
		t.addEventListener( 'mousedown', function( event ) {
			event.preventDefault();

			if ( t.classList.contains( 'triggered' ) ) {

				t.classList.remove( 'triggered' );
				t.parentNode.querySelector('ul').classList.remove( 'visible' );

			} else {

				t.classList.add( 'triggered' );
				t.parentNode.querySelector('ul').classList.add( 'visible' );
			}

		} );

		t.addEventListener( 'focus', function( event ) {
			event.preventDefault();

			if ( t.classList.contains( 'triggered' ) ) {

				t.classList.remove( 'triggered' );
				t.parentNode.querySelector('ul').classList.remove( 'visible' );

			} else {

				t.classList.add( 'triggered' );
				t.parentNode.querySelector('ul').classList.add( 'visible' );
			}

		} );

	});

}



// code_to_text.html

// function htmlEntities(str) {
// 	return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// }

// var the_codes = document.querySelectorAll('.gs-code');

// the_codes.forEach( function( code ) {


// 	// var test = code.innerHTML.trim();

// 	var html = code.innerHTML.trim();
// 	html = html.replace(/\s/g, '\n');
// 	html = html.replace(/\n/g, '\n');


// 	code.innerHTML = htmlEntities( html );
// } );




// Convert HTML Tags to Entities
function htmlEntities(str) {
	return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}



/**
 * Take in a block of code and convert it to a string
 * @param  [string] code_block	Element that contains code	
 * @return [string]							String with HTML tags replaced and tabs stripped out
 */
function syntax( code_block ) {
	// if argument is undefined end here
  if ( undefined === code_block ) {
  	return false;
  }

  // get all the instances of code blocks
	var the_codes = document.querySelectorAll( code_block );

	// for each of them
	the_codes.forEach( function( the_code ) {
		
		// (backwards)
		// Remove all tabs in the HTML
		// Pass that new string to a function that replaces HTML tags with Entities
		// Set the innerHTML of the instance of the class with this new string.
		the_code.innerHTML = htmlEntities( the_code.innerHTML.trim() );
	} );
}













// var the_codes = document.querySelectorAll('.gs-code');

// the_codes.forEach( function( the_code ) {

// 	var inside = the_code.innerHTML.replace(/\t/g, '');
// 	console.log( inside );
// 	the_code.innerHTML = htmlEntities( inside );

// 	//the_code.innerHTML = the_codes = the_codes.replace(/\t/g, '');

// } );

// the_codes = the_codes.replace(/\t/g, '');
// console.log( the_codes );




// Scripts

simple_toggler( '#gs-nav-trigger', '.gs-nav__nav' );

nav_accordion( '.gs-nav__nav', '.gs-nav__trigger');

syntax( '.gs-code ');
