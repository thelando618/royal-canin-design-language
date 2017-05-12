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

  /**
   * Initiate - Runs create_toggle method for each password input found
   * @param  {object} targets All password inputs found
   */
  init: function( targets ) {
    targets.forEach( function( target ) {
      pwd_fields.create_toggle( target );
    } );
  },

  /**
   * Create a button to allow password visibility toggling
   * @param  {object} target The input that the button should be attached to.
   */
  create_toggle: function( target ) {
    var wrap = target.parentNode;

    var classes = {
      btn: 'rc-input--password__toggle',
      span: 'screen-reader-text'
    }

    var btn = document.createElement( 'button' );
    
    if ( btn.classList ) {
      btn.classList.add( classes.btn );
    } else {
      btn.fill_class += ' ' + classes.btn;
    }

    var span = document.createElement( 'span' );
    
    span.innerText = this.button_text;
    
    if ( span.classList ) {
      span.classList.add( classes.span );
    } else {
      span.fill_class += ' ' + classes.span;
    }

    btn.appendChild( span );
    wrap.appendChild( btn );

    this.create_attrs( target );
  },









  /**
   * Creates data attribute and ID to connect toggle button to input field - MIGHT NOT BE NEEDED IF SIBLINGS WORK
   * @param  {object} target The input that the button should be attached to.
   * @return {[type]} [description]
   */
  create_attrs: function( target ) {
    console.log( target );
  },


  /**
   * Handles toggling input type
   * @param  {object} target The input that the button should be attached to.
   * @return {[type]} [description]
   */
  toggle_type: function( event ) {
    var field = event.target;    


    if ( true === is_text ) {
      console.log( 'is text' );

    } else {
      console.log( 'is not text' );
    }
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


