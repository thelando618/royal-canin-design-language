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









/* @todo Would live in main scripts file */
var inputs = document.querySelectorAll( '.rc-input' );
var pwds = document.querySelectorAll( 'input[type="password"]' );


// Native document ready
ready( function(  ) {
  form_fields.init( inputs );
  pwd_fields.init( pwds );
} );

// jQuery document ready
$(function() {
  var datepicker_ddmmyyyy = {
    format: 'dd-mm-yyyy',
    template: '<div class="datepicker-container rc-datepicker"><div class="datepicker-panel" data-view="years picker"><ul class="datepicker-header"><li data-view="years prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.5 64" aria-labelledby="svg-arrow-left" role="img"><title id="svg-arrow-left" lang="en">arrow-left</title><path d="M1 29.5L29.5 1c1.4-1.4 3.6-1.4 5 0s1.4 3.6 0 5l-26 26 26 26c1.4 1.4 1.4 3.6 0 5-.7.7-1.6 1-2.5 1-.9 0-1.8-.3-2.5-1L1 34.5c-1.3-1.4-1.3-3.6 0-5z"></path></svg></li><li data-view="years current"></li><li data-view="years next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.5 64" aria-labelledby="svg-arrow-right" role="img"><title id="svg-arrow-right" lang="en">arrow-right</title><path d="M34.5 34.5L6 63c-.7.7-1.6 1-2.5 1s-1.8-.3-2.5-1c-1.4-1.4-1.4-3.6 0-5l26-26L1 6C-.4 4.6-.4 2.4 1 1S4.6-.4 6 1l28.5 28.5c1.4 1.4 1.4 3.6 0 5z"></path></svg></li></ul><ul data-view="years"></ul></div><div class="datepicker-panel" data-view="months picker"><ul class="datepicker-header"><li data-view="year prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.5 64" aria-labelledby="svg-arrow-left" role="img"><title id="svg-arrow-left" lang="en">arrow-left</title><path d="M1 29.5L29.5 1c1.4-1.4 3.6-1.4 5 0s1.4 3.6 0 5l-26 26 26 26c1.4 1.4 1.4 3.6 0 5-.7.7-1.6 1-2.5 1-.9 0-1.8-.3-2.5-1L1 34.5c-1.3-1.4-1.3-3.6 0-5z"></path></svg></li><li data-view="year current"></li><li data-view="year next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.5 64" aria-labelledby="svg-arrow-right" role="img"><title id="svg-arrow-right" lang="en">arrow-right</title><path d="M34.5 34.5L6 63c-.7.7-1.6 1-2.5 1s-1.8-.3-2.5-1c-1.4-1.4-1.4-3.6 0-5l26-26L1 6C-.4 4.6-.4 2.4 1 1S4.6-.4 6 1l28.5 28.5c1.4 1.4 1.4 3.6 0 5z"></path></svg></li></ul><ul data-view="months"></ul></div><div class="datepicker-panel" data-view="days picker"><ul class="datepicker-header"><li data-view="month prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.5 64" aria-labelledby="svg-arrow-left" role="img"><title id="svg-arrow-left" lang="en">arrow-left</title><path d="M1 29.5L29.5 1c1.4-1.4 3.6-1.4 5 0s1.4 3.6 0 5l-26 26 26 26c1.4 1.4 1.4 3.6 0 5-.7.7-1.6 1-2.5 1-.9 0-1.8-.3-2.5-1L1 34.5c-1.3-1.4-1.3-3.6 0-5z"></path></svg></li><li data-view="month current"></li><li data-view="month next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.5 64" aria-labelledby="svg-arrow-right" role="img"><title id="svg-arrow-right" lang="en">arrow-right</title><path d="M34.5 34.5L6 63c-.7.7-1.6 1-2.5 1s-1.8-.3-2.5-1c-1.4-1.4-1.4-3.6 0-5l26-26L1 6C-.4 4.6-.4 2.4 1 1S4.6-.4 6 1l28.5 28.5c1.4 1.4 1.4 3.6 0 5z"></path></svg></li></ul><ul data-view="week"></ul><ul data-view="days"></ul></div><a href="#" class="rc-datepicker__clear">Clear <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="svg-cross" role="img"><title id="svg-cross" lang="en">cross</title><path d="M44.6 32l16.8-16.8c3.5-3.5 3.5-9.1 0-12.6s-9.1-3.5-12.6 0L32 19.4 15.2 2.6C11.7-.9 6.1-.9 2.6 2.6s-3.5 9.1 0 12.6L19.4 32 2.6 48.8c-3.5 3.5-3.5 9.1 0 12.6 1.7 1.7 4 2.6 6.3 2.6s4.5-.9 6.3-2.6L32 44.6l16.8 16.8c1.7 1.7 4 2.6 6.3 2.6s4.5-.9 6.3-2.6c3.5-3.5 3.5-9.1 0-12.6L44.6 32z"></path></svg></a></div>',
    weekStart: 1,
    yearFirst: true,
  }

  var datepicker_yyyymm = {
    format: 'yyyy-mm',
    template: '<div class="datepicker-container rc-datepicker"><div class="datepicker-panel" data-view="years picker"><ul class="datepicker-header"><li data-view="years prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.5 64" aria-labelledby="svg-arrow-left" role="img"><title id="svg-arrow-left" lang="en">arrow-left</title><path d="M1 29.5L29.5 1c1.4-1.4 3.6-1.4 5 0s1.4 3.6 0 5l-26 26 26 26c1.4 1.4 1.4 3.6 0 5-.7.7-1.6 1-2.5 1-.9 0-1.8-.3-2.5-1L1 34.5c-1.3-1.4-1.3-3.6 0-5z"></path></svg></li><li data-view="years current"></li><li data-view="years next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.5 64" aria-labelledby="svg-arrow-right" role="img"><title id="svg-arrow-right" lang="en">arrow-right</title><path d="M34.5 34.5L6 63c-.7.7-1.6 1-2.5 1s-1.8-.3-2.5-1c-1.4-1.4-1.4-3.6 0-5l26-26L1 6C-.4 4.6-.4 2.4 1 1S4.6-.4 6 1l28.5 28.5c1.4 1.4 1.4 3.6 0 5z"></path></svg></li></ul><ul data-view="years"></ul></div><div class="datepicker-panel" data-view="months picker"><ul class="datepicker-header"><li data-view="year prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.5 64" aria-labelledby="svg-arrow-left" role="img"><title id="svg-arrow-left" lang="en">arrow-left</title><path d="M1 29.5L29.5 1c1.4-1.4 3.6-1.4 5 0s1.4 3.6 0 5l-26 26 26 26c1.4 1.4 1.4 3.6 0 5-.7.7-1.6 1-2.5 1-.9 0-1.8-.3-2.5-1L1 34.5c-1.3-1.4-1.3-3.6 0-5z"></path></svg></li><li data-view="year current"></li><li data-view="year next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.5 64" aria-labelledby="svg-arrow-right" role="img"><title id="svg-arrow-right" lang="en">arrow-right</title><path d="M34.5 34.5L6 63c-.7.7-1.6 1-2.5 1s-1.8-.3-2.5-1c-1.4-1.4-1.4-3.6 0-5l26-26L1 6C-.4 4.6-.4 2.4 1 1S4.6-.4 6 1l28.5 28.5c1.4 1.4 1.4 3.6 0 5z"></path></svg></li></ul><ul data-view="months"></ul></div><a href="#" class="rc-datepicker__clear">Clear <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="svg-cross" role="img"><title id="svg-cross" lang="en">cross</title><path d="M44.6 32l16.8-16.8c3.5-3.5 3.5-9.1 0-12.6s-9.1-3.5-12.6 0L32 19.4 15.2 2.6C11.7-.9 6.1-.9 2.6 2.6s-3.5 9.1 0 12.6L19.4 32 2.6 48.8c-3.5 3.5-3.5 9.1 0 12.6 1.7 1.7 4 2.6 6.3 2.6s4.5-.9 6.3-2.6L32 44.6l16.8 16.8c1.7 1.7 4 2.6 6.3 2.6s4.5-.9 6.3-2.6c3.5-3.5 3.5-9.1 0-12.6L44.6 32z"></path></svg></a></div>',
    yearFirst: true,
  }

  $( '[data-toggle="datepicker-ddmmyyyy"]' ).datepicker( datepicker_ddmmyyyy );
  $( '[data-toggle="datepicker-yyyymm"]' ).datepicker( datepicker_yyyymm );

  $( '[data-toggle^="datepicker"]' ).on( "click", function( event ) {
    var that = null;
    that = $( this );

    $( '.rc-datepicker__clear' ).unbind( 'click' ).on( 'click', function ( event ) {
      event.preventDefault(  );
      $( that ).datepicker( 'reset' );
    });
  });



  /**
   * Initialise JS Select menus
   * @type {Object} Configuration options
   */
  $('select').select2({
    placeholder: 'Select an option',
    minimumResultsForSearch: Infinity,
  });
});
