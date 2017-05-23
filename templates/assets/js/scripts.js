/**
 *
 * File Tabs.js.
 *
 */


// Move this to Scripts
$(function () {


  // Carousel Settings
  var carousel_next_arrow = '<a href="#" class="interactive--navigation interactive--navigation--next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.5 64" aria-labelledby="svg-arrow-right" role="img"><title id="svg-arrow-right" lang="en">arrow-right</title><path d="M34.5 34.5L6 63c-.7.7-1.6 1-2.5 1s-1.8-.3-2.5-1c-1.4-1.4-1.4-3.6 0-5l26-26L1 6C-.4 4.6-.4 2.4 1 1S4.6-.4 6 1l28.5 28.5c1.4 1.4 1.4 3.6 0 5z"></path></svg><span class="screen-reader-text">Next Slide</span></a>',
      carousel_prev_arrow = '<a href="#" class="interactive--navigation interactive--navigation--prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.5 64" aria-labelledby="svg-arrow-left" role="img"><title id="svg-arrow-left" lang="en">arrow-left</title><path d="M1 29.5L29.5 1c1.4-1.4 3.6-1.4 5 0s1.4 3.6 0 5l-26 26 26 26c1.4 1.4 1.4 3.6 0 5-.7.7-1.6 1-2.5 1-.9 0-1.8-.3-2.5-1L1 34.5c-1.3-1.4-1.3-3.6 0-5z"></path></svg><span class="screen-reader-text">Previous Slide</span></a>';

  var carousel_default = {
    adaptiveHeight: true,
    dots: true,
    dotsClass: 'rc-carousel__dots list--blank list--align',
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: carousel_next_arrow,
    prevArrow: carousel_prev_arrow,
    speed: 400,
    customPaging: function( slider, i ) {
      var thumb = $( slider.$slides[i] ).data( 'thumb' );
      return '<a href="#" class="' + thumb + '"><span class="screen-reader-text">' + i + '</span></a>';
    }
  }

  // Carousel Caches
  var $slick_hero = $( '.rc-carousel--hero' );

  // Carousel Inits
  $slick_hero.slick( carousel_default );


});

/**
 *
 * File image-galleries.js.
 *
 */

$(function () {

  // Carousel Settings
  var carousel_next_arrow = '<a href="#" class="interactive--navigation interactive--navigation--next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.5 64" aria-labelledby="svg-arrow-right" role="img"><title id="svg-arrow-right" lang="en">arrow-right</title><path d="M34.5 34.5L6 63c-.7.7-1.6 1-2.5 1s-1.8-.3-2.5-1c-1.4-1.4-1.4-3.6 0-5l26-26L1 6C-.4 4.6-.4 2.4 1 1S4.6-.4 6 1l28.5 28.5c1.4 1.4 1.4 3.6 0 5z"></path></svg><span class="screen-reader-text">Next Slide</span></a>',
      carousel_prev_arrow = '<a href="#" class="interactive--navigation interactive--navigation--prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.5 64" aria-labelledby="svg-arrow-left" role="img"><title id="svg-arrow-left" lang="en">arrow-left</title><path d="M1 29.5L29.5 1c1.4-1.4 3.6-1.4 5 0s1.4 3.6 0 5l-26 26 26 26c1.4 1.4 1.4 3.6 0 5-.7.7-1.6 1-2.5 1-.9 0-1.8-.3-2.5-1L1 34.5c-1.3-1.4-1.3-3.6 0-5z"></path></svg><span class="screen-reader-text">Previous Slide</span></a>';

  var carousel_gallery_main = {
    adaptiveHeight: true,
    asNavFor: '.rc-carousel--gallery__thumbs',
    autoplay: true,
    nextArrow: carousel_next_arrow,
    prevArrow: carousel_prev_arrow,
    slidesToShow: 1
  }

  var carousel_gallery_thumbs = {
    adaptiveHeight: true,
    arrows: false,
    asNavFor: '.rc-carousel--gallery__main',
    focusOnSelect: true,
    mobileFirst: true,
    nextArrow: carousel_next_arrow,
    prevArrow: carousel_prev_arrow,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 5
        }
      }
    ]
  }

  // Carousel Caches
  var $slick_gallery = $( '.rc-carousel--gallery__main' );
  var $slick_thumbs = $( '.rc-carousel--gallery__thumbs' );

  // Carousel Inits
  $slick_gallery.slick( carousel_gallery_main );
  $slick_thumbs.slick( carousel_gallery_thumbs );

});

/**
 *
 * File maps.js.
 *
 */


/**
 * Custom Map icon SVG settings
 * @type {object}
 */
var icon = {
  path: 'M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm0 57C18.2 57 7 45.8 7 32S18.2 7 32 7s25 11.2 25 25-11.2 25-25 25zm11.5-25c0 6.4-5.1 11.5-11.5 11.5S20.5 38.4 20.5 32 25.6 20.5 32 20.5 43.5 25.6 43.5 32z',
  fillColor: '#E2001A',
  fillOpacity: .6,
  scale: .5,
  strokeWeight: 0
}

/**
 * Creates a Google Map
 * @param  {object} selector The DOM ID to set up the Map in
 * @param  {object} center   The desired center of the Map
 * @param  {number} zoom     The zoom level of the Map
 * @return {object}          The Map
 */
function create_map ( selector, center, zoom ) {
  /**
   * Sets default number for zoom
   * @type {number}
   */
  var zoom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 17;

  /**
   * Exit the function if any of the arguments passed are empty
   * @return {bool} false
   */
  if ( null === selector || typeof center === 'undefined' || typeof zoom === 'undefined' ) {
    return false;
  }

  /**
   * Creates the new map with arguments passed and some defaults
   * @type {google}
   */
  var new_map = new google.maps.Map( selector, {
    center: center,
    scrollwheel: false,
    zoom: zoom,
    // Apple Maps style
    styles: [
      {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
          {
            "color": "#faf5ed"
          },
          {
            "lightness": "0"
          },
          {
            "gamma": "1"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#bae5a6"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "weight": "1.00"
          },
          {
            "gamma": "1.8"
          },
          {
            "saturation": "0"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "hue": "#ffb200"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "lightness": "0"
          },
          {
            "gamma": "1"
          }
        ]
      },
      {
        "featureType": "transit.station.airport",
        "elementType": "all",
        "stylers": [
          {
            "hue": "#b000ff"
          },
          {
            "saturation": "23"
          },
          {
            "lightness": "-4"
          },
          {
            "gamma": "0.80"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#a0daf2"
          }
        ]
      }
    ]
  } );

  return new_map;
}

/**
 * Create a Google Maps Marker
 * @param  {object}   position  The desired position of the Marker
 * @param  {object}   map       The Map to apply the Marker to      
 * @return {object}             The Marker applied to the Map
 */
function create_marker ( position, map ) {
  /**
   * Exit the function if any of the arguments passed are empty
   * @return {bool} false
   */
  if ( typeof position === 'undefined' || typeof map === 'undefined', false === map ) {
    return false;
  }

  /**
   * Creates the new map marker with arguments passed
   * @type {google}
   */
  var map_marker = new google.maps.Marker({
    icon: icon,
    position: position,
    map: map
  });

  return map_marker;
}

/**
 * Create a Google Maps Marker
 * @param  {object} content The content for the InfoWindow
 * @param  {object} marker  The Marker to attach the InfoWindow to
 * @param  {object} map     The Map that the Marker is applied to
 * @return {object}         The InfoWindow applied to the Marker
 */
function create_infobox ( content, marker, map ) {
  /**
   * Exit the function if any of the arguments passed are empty
   * @return {bool} false
   */
  if ( typeof content === 'undefined' || typeof marker === 'undefined' || typeof map === 'undefined' ) {
    return false;
  }

  var new_infowindow = new google.maps.InfoWindow({
    content: content
  });

  marker.addListener( 'click', function() {    
    new_infowindow.open( map, marker );

    make_visible = 'rc-map__overlay--visible';

    // Add class
    if ( new_infowindow.content.classList )
      new_infowindow.content.classList.add( make_visible );
    else
      new_infowindow.content.make_visible += ' ' + make_visible;
  } );

  return new_infowindow;
}





// 
// Following would live in custom scripts file
// -------------------------------------------------------------------------------------------------------------------------------------------- //
// 

/**
 * Object containing lat/lng of key locations
 * @type {object}
 */
var key_locations = {
  royal_canin: {
    lat: 43.700753,
    lng: 4.187961
  },
  first_10: {
    lat: 53.790524,
    lng: -1.532349
  }
}


/**
 * Standard Google Maps init function. Generates Maps.
 */
function initMap() {
  // Royal Canin Map
  var map_royal_canin = create_map( document.getElementById( 'map_royal_canin' ), key_locations.royal_canin, 17 );
  
  // Royal Canin Map + Marker
  var map_royal_canin_marker = create_map( document.getElementById( 'map_royal_canin--marker' ), key_locations.royal_canin, 17 );
  var marker_royal_canin_marker = create_marker( key_locations.royal_canin, map_royal_canin_marker );

  // First 10 Map + Marker + Infobox
  var map_first_10 = create_map( document.getElementById( 'map_first_10' ), key_locations.first_10, 18 );
  var marker_first_10 = create_marker( key_locations.first_10, map_first_10 );
  var infobox_first_10 = create_infobox( document.getElementById( 'infobox_first_10' ), marker_first_10, map_first_10 );
}


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

function hasClass(el, className) {
  return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}

var form_fields = {
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
  the_timer: null,
  button_text: 'Toggle Password Visiblility',
  button_class: 'rc-input--password__toggle',
  button_span: 'screen-reader-text',

  /**
   * Initiate - Runs create_toggle method for each password input found
   * @param  {object} targets All password inputs found
   */
  init: function( targets ) {
    for ( var i = 0; i < targets.length; i++ ) {
      pwd_fields.create_toggle( targets[i], i );
    }
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
    
    // Toggle field type
    this.toggle_type( btn, wrap );

    // Listen for input blur
    this.input_blur( input );

    this.input_input( input );
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


  input_input: function( input ) {    
    input.addEventListener( 'keydown', function( event ) {
      clearTimeout( pwd_fields.the_timer );
    } );
  },


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





var inputs = document.querySelectorAll( '.rc-input' );

var pwds = document.querySelectorAll( 'input[type="password"]' );

ready ( form_fields.init( inputs ) );
ready ( pwd_fields.init( pwds ) );



/**
 *
 * File Progress.js.
 *
 */

;(function ( $, window, document, undefined ) {

	"use strict";

	var Progress = window.Progress || {};

  Progress = (function() {
  	function Progress( element, settings ) {

      // The element
  		this.progress = ( element );
  		// The Progress element
  		this.progressElem = $( this.progress ).children( 'progress' );
  		// The Fallback Span
  		this.progressFall = $( this.progress ).find( '.rc-progress--fallback__value' );

			// Setup Object to contain properties related to the value
			this.valueProps = {
				"class" : "rc-progress__value",
				"percent" : ""
			}

  		this.init();
  	}
  	return Progress;
  }());

  // Helper
  Progress.prototype.valueAsPercentage = function( number ) {
  	return number + '%';
  }

  // Add accessibility method to upate rc-progress--fallback__value Inner text

  Progress.prototype.init = function( element ) {
    // Ready
    $( this.progress ).addClass( 'rc-progress-init' );
    // Trigger method
    this.getValue();
  }

  Progress.prototype.getValue = function( element ) {
  	// Get the data attribute value
  	this.progressValue = $( this.progress ).data( 'value' );
  	
  	// Set property to vaue
  	this.valueProps.percent = this.valueAsPercentage( this.progressValue );

  	// Trigger method
  	this.prepareValue( this.progressValue );
  }

  Progress.prototype.updateValue = function( newValue ) {

  	this.valueProps.percent = this.valueAsPercentage( newValue );

  	if ( Modernizr.progressbar ) {
			this.progress.data( 'value', newValue );
			this.progress.attr( 'data-value', newValue );
			this.progressElem[0].value = newValue;
  	} else {
  		this.progressFall.css('width', this.valueAsPercentage( newValue ) );
			this.progressFall.text( 'Progress: ' + this.valueAsPercentage( newValue ) );
  	}

		$( this.progress ).children( '.rc-progress__value' ).remove();

		this.prepareValue( newValue );
  }

	Progress.prototype.prepareValue = function( prepValue ) {
		
		// If the number is less than 10, add another class to the class array
		if ( 10 > prepValue ) {
			this.valueProps.class = 'rc-progress__value rc-progress__value--outside';
		} else {
			this.valueProps.class = 'rc-progress__value';
		}

		this.displayValue();
	}

  Progress.prototype.displayValue = function( element ) {

  	this.valueContainer = '<div class="' + this.valueProps.class + '" style="left: ' + this.valueProps.percent + '">' + this.valueProps.percent + '</div>';
  	$( this.progress ).append( this.valueContainer );
  }

  // Initiate all Progress Elements.
	$.fn.Progress = function () {
		return this.each( function () {
			var progress = new Progress( this );
		});
	};

	// Invoke Update Progress Method
	$.fn.updateProgress = function( value ) {
		var progress = new Progress( this );
		progress.updateValue( value );
	};

})( jQuery, window, document );






// Move this to Scripts
$(function () {
	$('.rc-progress').Progress(); // Initiate all Progress elements
});





// Move this to GS scripts
$(function () {

	$( '.update-progress-demo').on('click', function( event ) {
		$('.rc-progress-demo').updateProgress( 50 );
	});


});
/*! rangeslider.js - v2.3.0 | (c) 2016 @andreruffert | MIT license | https://github.com/andreruffert/rangeslider.js */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";function b(){var a=document.createElement("input");return a.setAttribute("type","range"),"text"!==a.type}function c(a,b){var c=Array.prototype.slice.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)}function d(a,b){return b=b||100,function(){if(!a.debouncing){var c=Array.prototype.slice.apply(arguments);a.lastReturnVal=a.apply(window,c),a.debouncing=!0}return clearTimeout(a.debounceTimeout),a.debounceTimeout=setTimeout(function(){a.debouncing=!1},b),a.lastReturnVal}}function e(a){return a&&(0===a.offsetWidth||0===a.offsetHeight||a.open===!1)}function f(a){for(var b=[],c=a.parentNode;e(c);)b.push(c),c=c.parentNode;return b}function g(a,b){function c(a){"undefined"!=typeof a.open&&(a.open=!a.open)}var d=f(a),e=d.length,g=[],h=a[b];if(e){for(var i=0;i<e;i++)g[i]=d[i].style.cssText,d[i].style.setProperty?d[i].style.setProperty("display","block","important"):d[i].style.cssText+=";display: block !important",d[i].style.height="0",d[i].style.overflow="hidden",d[i].style.visibility="hidden",c(d[i]);h=a[b];for(var j=0;j<e;j++)d[j].style.cssText=g[j],c(d[j])}return h}function h(a,b){var c=parseFloat(a);return Number.isNaN(c)?b:c}function i(a){return a.charAt(0).toUpperCase()+a.substr(1)}function j(b,e){if(this.$window=a(window),this.$document=a(document),this.$element=a(b),this.options=a.extend({},n,e),this.polyfill=this.options.polyfill,this.orientation=this.$element[0].getAttribute("data-orientation")||this.options.orientation,this.onInit=this.options.onInit,this.onSlide=this.options.onSlide,this.onSlideEnd=this.options.onSlideEnd,this.DIMENSION=o.orientation[this.orientation].dimension,this.DIRECTION=o.orientation[this.orientation].direction,this.DIRECTION_STYLE=o.orientation[this.orientation].directionStyle,this.COORDINATE=o.orientation[this.orientation].coordinate,this.polyfill&&m)return!1;this.identifier="js-"+k+"-"+l++,this.startEvent=this.options.startEvent.join("."+this.identifier+" ")+"."+this.identifier,this.moveEvent=this.options.moveEvent.join("."+this.identifier+" ")+"."+this.identifier,this.endEvent=this.options.endEvent.join("."+this.identifier+" ")+"."+this.identifier,this.toFixed=(this.step+"").replace(".","").length-1,this.$fill=a('<div class="'+this.options.fillClass+'" />'),this.$handle=a('<div class="'+this.options.handleClass+'" />'),this.$range=a('<div class="'+this.options.rangeClass+" "+this.options[this.orientation+"Class"]+'" id="'+this.identifier+'" />').insertAfter(this.$element).prepend(this.$fill,this.$handle),this.$element.css({position:"absolute",width:"1px",height:"1px",overflow:"hidden",opacity:"0"}),this.handleDown=a.proxy(this.handleDown,this),this.handleMove=a.proxy(this.handleMove,this),this.handleEnd=a.proxy(this.handleEnd,this),this.init();var f=this;this.$window.on("resize."+this.identifier,d(function(){c(function(){f.update(!1,!1)},300)},20)),this.$document.on(this.startEvent,"#"+this.identifier+":not(."+this.options.disabledClass+")",this.handleDown),this.$element.on("change."+this.identifier,function(a,b){if(!b||b.origin!==f.identifier){var c=a.target.value,d=f.getPositionFromValue(c);f.setPosition(d)}})}Number.isNaN=Number.isNaN||function(a){return"number"==typeof a&&a!==a};var k="rangeslider",l=0,m=b(),n={polyfill:!0,orientation:"horizontal",rangeClass:"rangeslider",disabledClass:"rangeslider--disabled",activeClass:"rangeslider--active",horizontalClass:"rangeslider--horizontal",verticalClass:"rangeslider--vertical",fillClass:"rangeslider__fill",handleClass:"rangeslider__handle",startEvent:["mousedown","touchstart","pointerdown"],moveEvent:["mousemove","touchmove","pointermove"],endEvent:["mouseup","touchend","pointerup"]},o={orientation:{horizontal:{dimension:"width",direction:"left",directionStyle:"left",coordinate:"x"},vertical:{dimension:"height",direction:"top",directionStyle:"bottom",coordinate:"y"}}};return j.prototype.init=function(){this.update(!0,!1),this.onInit&&"function"==typeof this.onInit&&this.onInit()},j.prototype.update=function(a,b){a=a||!1,a&&(this.min=h(this.$element[0].getAttribute("min"),0),this.max=h(this.$element[0].getAttribute("max"),100),this.value=h(this.$element[0].value,Math.round(this.min+(this.max-this.min)/2)),this.step=h(this.$element[0].getAttribute("step"),1)),this.handleDimension=g(this.$handle[0],"offset"+i(this.DIMENSION)),this.rangeDimension=g(this.$range[0],"offset"+i(this.DIMENSION)),this.maxHandlePos=this.rangeDimension-this.handleDimension,this.grabPos=this.handleDimension/2,this.position=this.getPositionFromValue(this.value),this.$element[0].disabled?this.$range.addClass(this.options.disabledClass):this.$range.removeClass(this.options.disabledClass),this.setPosition(this.position,b)},j.prototype.handleDown=function(a){if(a.preventDefault(),this.$document.on(this.moveEvent,this.handleMove),this.$document.on(this.endEvent,this.handleEnd),this.$range.addClass(this.options.activeClass),!((" "+a.target.className+" ").replace(/[\n\t]/g," ").indexOf(this.options.handleClass)>-1)){var b=this.getRelativePosition(a),c=this.$range[0].getBoundingClientRect()[this.DIRECTION],d=this.getPositionFromNode(this.$handle[0])-c,e="vertical"===this.orientation?this.maxHandlePos-(b-this.grabPos):b-this.grabPos;this.setPosition(e),b>=d&&b<d+this.handleDimension&&(this.grabPos=b-d)}},j.prototype.handleMove=function(a){a.preventDefault();var b=this.getRelativePosition(a),c="vertical"===this.orientation?this.maxHandlePos-(b-this.grabPos):b-this.grabPos;this.setPosition(c)},j.prototype.handleEnd=function(a){a.preventDefault(),this.$document.off(this.moveEvent,this.handleMove),this.$document.off(this.endEvent,this.handleEnd),this.$range.removeClass(this.options.activeClass),this.$element.trigger("change",{origin:this.identifier}),this.onSlideEnd&&"function"==typeof this.onSlideEnd&&this.onSlideEnd(this.position,this.value)},j.prototype.cap=function(a,b,c){return a<b?b:a>c?c:a},j.prototype.setPosition=function(a,b){var c,d;void 0===b&&(b=!0),c=this.getValueFromPosition(this.cap(a,0,this.maxHandlePos)),d=this.getPositionFromValue(c),this.$fill[0].style[this.DIMENSION]=d+this.grabPos+"px",this.$handle[0].style[this.DIRECTION_STYLE]=d+"px",this.setValue(c),this.position=d,this.value=c,b&&this.onSlide&&"function"==typeof this.onSlide&&this.onSlide(d,c)},j.prototype.getPositionFromNode=function(a){for(var b=0;null!==a;)b+=a.offsetLeft,a=a.offsetParent;return b},j.prototype.getRelativePosition=function(a){var b=i(this.COORDINATE),c=this.$range[0].getBoundingClientRect()[this.DIRECTION],d=0;return"undefined"!=typeof a.originalEvent["client"+b]?d=a.originalEvent["client"+b]:a.originalEvent.touches&&a.originalEvent.touches[0]&&"undefined"!=typeof a.originalEvent.touches[0]["client"+b]?d=a.originalEvent.touches[0]["client"+b]:a.currentPoint&&"undefined"!=typeof a.currentPoint[this.COORDINATE]&&(d=a.currentPoint[this.COORDINATE]),d-c},j.prototype.getPositionFromValue=function(a){var b,c;return b=(a-this.min)/(this.max-this.min),c=Number.isNaN(b)?0:b*this.maxHandlePos},j.prototype.getValueFromPosition=function(a){var b,c;return b=a/(this.maxHandlePos||1),c=this.step*Math.round(b*(this.max-this.min)/this.step)+this.min,Number(c.toFixed(this.toFixed))},j.prototype.setValue=function(a){a===this.value&&""!==this.$element[0].value||this.$element.val(a).trigger("input",{origin:this.identifier})},j.prototype.destroy=function(){this.$document.off("."+this.identifier),this.$window.off("."+this.identifier),this.$element.off("."+this.identifier).removeAttr("style").removeData("plugin_"+k),this.$range&&this.$range.length&&this.$range[0].parentNode.removeChild(this.$range[0])},a.fn[k]=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),e=d.data("plugin_"+k);e||d.data("plugin_"+k,e=new j(this,b)),"string"==typeof b&&e[b].apply(e,c)})},"rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);"});




// Move this to Scripts
$(function () {

	var $r = $('input[type="range"]');
	var $ruler = $('<div class="rangeslider__ruler rangeslider__ruler--top" />');
	var $test = $('<div class="rangeslider__ruler rangeslider__ruler--bottom" />');

	// Initialize
	$r.rangeslider({
	  polyfill: false,

	  onInit: function() {
	    $ruler[0].innerHTML = getRulerRange( this.min, this.max, this.step, 5 );
	    $test[0].innerHTML = getRulerRange( this.min, this.max, this.step, 5 );
	    this.$range.prepend( $ruler );
	    this.$range.prepend( $test );
	  }
	});


	function getRulerRange( min, max, step, big ) {
	  var range = '';
	  var i = 1;
	  var percent = 100 / max;

	  while ( i <= max ) {

	  	if ( i == 1 || i % big == 1 ) {
	  		range += '<span class="big" style="width: ' + percent + '%;"></span>';
	  	} else {
	  		range += '<span style="width: ' + percent + '%;"></span>';
	  	}

	    if ( i == max || i == min ) {
	    	range += '<span class="big" width="0%"></span>';
	    }

	    i = i + step;
	  }
	  return range;
	}

});



/**
 *
 * File Tabs.js.
 *
 */

;(function ( $, window, document, undefined ) {

	"use strict";

	var Tabs = window.Tabs || {};

  Tabs = (function() {
  	function Tabs( element ) {
      // The element
  		this.tabs = ( element );

      // Settings
      this.settings = {
        "initClass"     : "rc-tabs-init",
        "triggerClass"  : ".rc-tabs__triggers__trigger",
        "contentClass"  : ".rc-tabs__content__single",
        "firstShowing"  : false
      }

      // Triggers
      this.triggers = $( this.tabs ).find( this.settings.triggerClass );

      // Content
      this.content = $( this.tabs ).find( this.settings.contentClass );

  		this.init();
  	}
  	return Tabs;
  }());


  Tabs.prototype.init = function( element ) {
    // Ready
    $( this.tabs ).addClass( this.settings.initClass );

    // Hide all Content
    this.content.hide();

    // Trigger count method
    this.count();

    // Trigger showFirst method
    this.showFirst();

    // Once showFirst method has completed and firstShowing property has been updated, invoke the triggerEvent method
    if ( true === this.settings.firstShowing ) {
      // Call triggerEvent method which has eventListeners in for future clicks
      this.triggerEvent();
    }
  }


  Tabs.prototype.count = function( element ) {
    // For each content block, if there is no accompanying trigger, remove it from the DOM.
    for ( var i = 0; i < this.content.length; i++ ) {
      if ( $( this.content[i] ).attr( 'id' ) !== $( this.triggers[i] ).data( 'tab' ) ) {
        $( this.content[i] ).remove();
      }
    }

    // For each trigger, if there is no accompanying content block, remove it from the DOM.
    for ( var i = 0; i < this.triggers.length; i++ ) {
      if ( $( this.content[i] ).attr( 'id' ) !== $( this.triggers[i] ).data( 'tab' ) ) {
        $( this.triggers[i] ).parent( 'li' ).remove();
      }
    }
  }


  Tabs.prototype.showFirst = function( element ) {
    // Get first trigger
    var firstTrigger = $( this.triggers.first() );
    // Set first trigger to active
    firstTrigger.addClass( 'active' );
    // Get data-tab attribute from first trigger
    var triggerData = firstTrigger.attr( 'data-tab' );
    // Call changeTab method with first trigger data attribute passed
    this.changeTab( triggerData );
  }


  Tabs.prototype.changeTab = function( tab ) {
    // Hide all content
    $( this.content ).hide();
    // Show content with ID matching argument
    $( this.settings.contentClass + "#" + tab ).show();

    // If this is the first time this method has been run, update a property
    // This will enable further methods to be able to be invoked
    if ( false === this.settings.firstShowing ) {
      this.settings.firstShowing = true;
    }
  }


  Tabs.prototype.triggerEvent = function( element ) {
    // This
    var th = this;

    $( this.triggers ).on('click', function( event ) {
      event.preventDefault();

      if ( $( this ).hasClass('active') ) {
        return false;
      } else {
        $( th.triggers ).removeClass( 'active' );
        $( this ).addClass( 'active' );

        var triggerData = $( this ).attr( 'data-tab' );
        th.changeTab( triggerData );

      }
    });
  }


  // Initiate all Tabs Elements.
	$.fn.Tabs = function () {
		return this.each( function () {
			var tabs = new Tabs( this );
		});
	};

})( jQuery, window, document );






// Move this to Scripts
$(function () {
	$('.rc-tabs').Tabs(); // Initiate all Tabs elements
});

/**
 *
 * File Tabs.js.
 *
 */

;(function ( $, window, document, undefined ) {

	"use strict";
	
	var Tooltips = window.Tooltips || {};

  Tooltips = (function() {
  	function Tooltips( element ) {
      // The element
  		this.tooltip = ( element );

  		this.init();
  	}
  	return Tooltips;
  }());


  Tooltips.prototype.init = function( element ) {
    // Ready
    $( this.tooltip ).addClass( 'rc-tooltip-init' );

    // Get the tooltip arrows
    this.arrow = $( '.rc-tooltip__arrow' );

    // Trigger method
    this.event();
  }


  Tooltips.prototype.event = function( element ) {
  	var th = this;

  	$( this.tooltip ).on( 'click', function( event ) {
  		event.preventDefault();
  	});

    $( this.tooltip ).on( 'mouseenter', function( event ) {
      var tooltip = $( this ).data( 'tooltip' );
      th.showTooltip( $( '#' + tooltip ), event );
    });

    $( this.tooltip ).on( 'mousemove', function( event, pos ) {
      var tooltip = $( this ).data( 'tooltip' );
    	var follow = $( '#' + tooltip ).data( 'tooltipFollow' );

    	if ( true === follow ) {
    		th.moveTooltip( $( '#' + tooltip ), event );
    	}
    });

    $( this.tooltip ).on( 'mouseout', function( event ) {
      var tooltip = $( this ).data( 'tooltip' );
			th.delay = setTimeout( function() {
				th.hideTooltip( $( '#' + tooltip ) );
    	}, 150);
    });


    $( '.rc-tooltip' ).hover(
      function( event ) {
    	 	clearTimeout( th.delay );
      }, function() {
		    var tooltip = $( this ).data( 'tooltip' );
      	th.hideTooltip( $( '.rc-tooltip' ) );
      }
    );
  }


  Tooltips.prototype.showTooltip = function( tooltip, event ) {
  	var border_top = $(window).scrollTop();
  	var border_right = $(window).width();
    var left_pos;
    var top_pos;
    var offset = 16;

		if( border_right - ( offset * 2 ) >= tooltip.outerWidth() + event.pageX ) {
			left_pos = event.pageX - offset * 0.25;
		} else {
			left_pos = border_right - tooltip.outerWidth() - offset * 2;
		}

		if( border_top + ( offset *2 ) >= event.pageY - tooltip.height() ) {
			this.arrow.addClass( 'rc-tooltip__arrow--top' );
			top_pos = event.pageY + offset;
		} else {
			this.arrow.removeClass( 'rc-tooltip__arrow--top' );
			top_pos = event.pageY - tooltip.height() - offset * 2;
		}

  	tooltip.css({
  		display: 'none',
  		right: 'auto', 
  		opacity: 1,
  		top: top_pos,
  		left: left_pos
  	}).stop( true, true ).fadeIn( 400 );
  }


  Tooltips.prototype.moveTooltip = function( tooltip, event ) {
  	var border_top = $(window).scrollTop();
  	var border_right = $(window).width();
    var left_pos;
    var top_pos;
    var offset = 16;

		if( border_right - ( offset * 2 ) >= tooltip.outerWidth() + event.pageX ) {
			left_pos = event.pageX - offset * 0.25;
		} else {
			left_pos = border_right - tooltip.outerWidth() - offset * 2;
		}

		if( border_top + ( offset *2 ) >= event.pageY - tooltip.height() ) {
			this.arrow.addClass( 'rc-tooltip__arrow--top' );
			top_pos = event.pageY + offset;
		} else {
			this.arrow.removeClass( 'rc-tooltip__arrow--top' );
			top_pos = event.pageY - tooltip.height() - offset * 2;
		}

  	tooltip.css({
  		top: top_pos,
  		left: left_pos
  	});
  }


  Tooltips.prototype.hideTooltip = function( tooltip ) {
  	tooltip.fadeOut(400);
  }


  // Initiate all Tooltip Elements.
	$.fn.Tooltips = function () {
		return this.each( function () {
			var tooltip = new Tooltips( this );
		});
	};

})( jQuery, window, document );



// Move this to Scripts
$(function () {
	$( '.rc-tooltip__trigger' ).Tooltips(); // Initiate all Tabs elements
});
