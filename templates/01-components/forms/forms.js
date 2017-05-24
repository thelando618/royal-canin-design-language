/**
 *
 * File forms.js.
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

/**
 * Checks whether a particular element has a class
 * @param  {Object}  el        The element to check
 * @param  {String}  className The class to test for
 * @return {Boolean}           true or false
 */
function hasClass(el, className) {
  return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}



/**
 * Applies JS behaviour to form input fields
 * @type {Object}
 */
var form_fields = {
  /**
   * Which fields to apply the behaviour to
   * @param  {NodeList} targets The fields passed to the Method as a NodeList
   */
  init: function( targets ) {
    var that = this;

    for ( var i = 0; i < targets.length; i++ ) {
      (function(i) {

        var span = targets[i];
        
        var input = span.querySelector( 'input' ) || span.querySelector( 'textarea' );

        input.addEventListener( 'focus', function( event ) {  
          that.fill_check( span, input );
        } );

        input.addEventListener( 'blur', function( event ) {
          that.fill_check( span, input );
        } );

      }(i));

    }
  },

  /**
   * Checks whether the input field is empty
   * @param  {Object} target The fields wrapping element
   * @param  {Object} input  The field to check
   */
  fill_check: function( target, input ) {
    var is_filled = 0 < input.value.length;

    if ( true === is_filled ) {
      this.fill_class( target, input, 'rc-input--filled', 'add' );
    } else {
      this.fill_class( target, input, 'rc-input--filled', 'remove' );
    }
  },

  /**
   * Controls the addition and removal of a class
   * @param  {Object} target      The fields wrapping element to apply the class to
   * @param  {Object} input       The input that is being tested @todo May not be needed in this method
   * @param  {String} fill_class  The class to be added / removed
   * @param  {String} instruction The instruction for whether to add or remove the class
   * @return {Boolean}            Return false if instruction is not valid
   */
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


/**
 * Applies JS behaviour to form password fields
 * @type {Object}
 */
var pwd_fields = {
  the_timer: null,
  button_text: 'Toggle Password Visiblility',
  button_class: 'rc-input--password__toggle',
  button_span: 'screen-reader-text',

  /**
   * Runs create_toggle method for each password input found
   * @param  {object} targets All password inputs found
   */
  init: function( targets ) {
    for ( var i = 0; i < targets.length; i++ ) {
      pwd_fields.create_toggle( targets[i], i );
    }
  },

  /**
   * Create a button to allow password visibility toggling
   * @param  {object} target The input that the button should be attached to
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
    
    // Toggle field type
    this.toggle_type( btn, wrap );

    // Listen for input blur
    this.input_blur( input );

    this.input_input( input );
  },


  /**
   * Handles toggling input type
   * @param  {object} target The input that the button should be attached to
   * @return {[type]} [description]
   */
  toggle_type: function( button, wrap ) {
    button.addEventListener( 'click', function( event ) {
      var btn_id = button.getAttribute( 'id' );
      var input_target = wrap.querySelector( '[data-toggle=' + btn_id + ']' );

      var className = 'rc-input--filled';
      
      if ( true === hasClass( wrap, className ) ) {
        if ( 'text' === input_target.type ) {
          input_target.type = 'password';
        } else {
          input_target.type = 'text';

          // Start timer
          pwd_fields.timeout( input_target, 3000 );
        }
      }
    } );
  },

  /**
   * Listen for keyboard events on input and stop clear timeout if detected
   * @param  {Object} input The input to attach the event listener to
   */
  input_input: function( input ) {    
    input.addEventListener( 'keydown', function( event ) {
      clearTimeout( pwd_fields.the_timer );
    } );
  },

  /**
   * Listen for the blur event and start a timeout when detected
   * @param  {Object} input The input to attach the event listener to
   */
  input_blur: function( input ) {
    input.addEventListener( 'blur', function( event ) {
      if ( 'text' === input.type ) {
        pwd_fields.timeout( input, 500 );
      }
    } );
  },

  /**
   * Will obscure password if no user interaction after a given period
   * @param  {object} target The input that the button should be attached to.
   */
  timeout: function( input, time ) {
    if ( 'text' === input.type ) {
      pwd_fields.the_timer = setTimeout( function( event ) {
        input.type = 'password';
      }, time );
    }
  }
}


/* @todo Would live in main scripts file along with ready function declaration */
var inputs = document.querySelectorAll( '.rc-input' );
var pwds = document.querySelectorAll( 'input[type="password"]' );

ready ( form_fields.init( inputs ) );
ready ( pwd_fields.init( pwds ) );
