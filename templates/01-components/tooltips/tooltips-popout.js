/**
 *
 * File tooltips-popout.js.
 *
 */


var tooltip_popout = {

  init: function( wrapper ) {

    console.log( wrapper );

  },

  positioning: function( test ) {
    
    console.log( test );

  },

  open_tooltip: function(  ) {

  },

  close_tooltip: function(  ) {

  },
}




function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}


ready( tooltip_popout.init( 'rc-tooltip--popout' ) );
