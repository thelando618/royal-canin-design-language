/**
 *
 * File forms.js.
 *
 */

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

var form_fields = {
  init: function( targets ) {
    var that = this;

    var events = [
      'focus', 
      'blur'
    ]

    targets.forEach( function( target ) {
      var input = target.querySelector( 'input' ) || target.querySelector( 'textarea' );
      events.forEach( function( event ) {
        input.addEventListener( event, function(  ) {
          that.fill_check( target, input );  
        } );
      } );
    } );
  },

  fill_check: function( target, input ) {
    var is_filled = 0 < input.value.length;

    if ( true === is_filled ) {
      this.fill_class( target, input, 'rc-input--filled', 'add' );
    } else {
      this.fill_class( target, input, 'rc-input--filled', 'remove' );
    }
  },

  fill_class: function( target, input, fill_class, instruction ) {
    if ( 'add' === instruction ) {
      if ( target.classList ) {
        target.classList.add( fill_class );
      } else {
        target.fill_class += ' ' + fill_class;
      }
    } else if ( 'remove' === instruction ) {
      if ( target.classList ) {
        target.classList.remove( fill_class );
      } else {
        target.fill_class = target.fill_class.replace( new RegExp('(^|\\b)' + fill_class.split(' ').join('|') + '(\\b|$)', 'gi'), ' ' );
      }
    } else {
      console.error( 'Invalid instruction to fill_class method' );
      return false;
    }
  }
}

var inputs = document.querySelectorAll( '.rc-input' );

ready( form_fields.init( inputs ) );