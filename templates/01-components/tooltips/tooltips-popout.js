/**
 *
 * File tooltips-popout.js.
 *
 */


var tooltip_popout = {
  init: function(  ) {

  },

  positioning: function(  ) {
    
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


ready( tooltip_popout.init( ) );
