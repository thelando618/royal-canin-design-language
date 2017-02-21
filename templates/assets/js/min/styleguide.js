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

syntax( '.gs-code ');