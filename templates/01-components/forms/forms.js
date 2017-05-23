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





var pwd_fields = {
  timer: 4000,
  button_text: 'Toggle Password Visiblility',
  button_class: 'rc-input--password__toggle',
  button_span: 'screen-reader-text',

  /**
   * Initiate - Runs create_toggle method for each password input found
   * @param  {object} targets All password inputs found
   */
  init: function( targets ) {
    targets.forEach( function( target, i ) {
      pwd_fields.create_toggle( target, i );
    } );
  },

  /**
   * Create a button to allow password visibility toggling
   * @param  {object} target The input that the button should be attached to.
   */
  create_toggle: function( target, index ) {
    // The wrapping element
    var wrap = target.parentNode;

    // Get input from wrap
    var input = wrap.querySelector( 'input' );

    // Set an attribute on the input
    input.setAttribute( 'data-toggle', 'pwd-' + index );


    // Create button
    var btn = document.createElement( 'button' );
    
    // Add class to button
    if ( btn.classList ) {
      btn.classList.add( this.button_class );
    } else {
      btn.fill_class += ' ' + this.button_class;
    }

    // Set an attribute on the button that matches the input
    btn.setAttribute( 'id', 'pwd-' + index );

    // Create span for inside button
    var span = document.createElement( 'span' );
    
    // Add text to span
    span.innerText = this.button_text;
    
    // Add class to span
    if ( span.classList ) {
      span.classList.add( this.button_span );
    } else {
      span.fill_class += ' ' + this.button_span;
    }

    // Add span to button
    btn.appendChild( span );

    // Add button to wrapping element
    wrap.appendChild( btn );
    
    this.toggle_type( btn, wrap );
  },



  /**
   * Handles toggling input type
   * @param  {object} target The input that the button should be attached to.
   * @return {[type]} [description]
   */
  toggle_type: function( button, wrap ) {
    button.addEventListener( 'click', function( event ) {
      var btn_id = button.getAttribute( 'id' );
      var input_target = wrap.querySelector( '[data-toggle=' + btn_id + ']' );

      var is_text = input_target.type;
      console.log( is_text );

      if ( 'text' === is_text ) {
        input_target.type = 'password';
      } else {
        input_target.type = 'text';
      }
    } );
  },



  /**
   * Will obscure password if no user interaction after a given period
   * @param  {object} target The input that the button should be attached to.
   */
  timeout: function( target ) {

  }

}


var inputs = document.querySelectorAll( '.rc-input' );

var pwds = document.querySelectorAll( 'input[type="password"]' );

ready ( form_fields.init( inputs ) );
ready ( pwd_fields.init( pwds ) );


