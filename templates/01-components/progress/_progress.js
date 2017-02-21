/**
 *
 * File Progress.js.
 *
 */

$(function () {
	"use strict";

  // @todo 1 add wrappers property to all dropdowns after ready class is added
  // This will aid in hiding all dropdowns when a new one is hovered on
  // DO THE SAME FOR TRIGGERS

  // @todo update hideDropdown method to accept more targeted arguments (hide single or hide all)

  // @todo [method] add option to decide if dropdown overlays or pushes content down

  // @todo add option to hover or click

  // @todo Don't really need settings.wrapper (SINGULAR) because this is the element. Maybe this can be passed to methods that need it?

	var Progress = window.Progress || {};

  Progress = (function() {
  	function Progress( element, settings ) {

      // The element
  		this.progress = ( element );
  		// The Progress element
  		this.progressElem = $( element ).children( 'progress' );
  		// The Fallback Span
  		this.progressFall = $( '.rc-progress--fallback__value' );

			// Setup Object to contain properties related to the value
			this.valueProps = {
				"class" : "rc-progress__value",
				"percent" : ""
			}

  		this.init();
  	}
  	return Progress;
  }());


  Progress.prototype.valueAsPercentage = function( number ) {
  	return number + '%';
  }

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
		this.progress.data( 'value', newValue );
		this.progress.attr( 'data-value', newValue );
		this.progressElem[0].value = newValue;
		this.progressFall.css('width', this.valueAsPercentage( newValue ) );

		$( '.rc-progress__value' ).remove();

		this.prepareValue( newValue );
  }



	Progress.prototype.prepareValue = function( prepValue ) {
		
		// If the number is less than 10, add another class to the class array
		if ( 10 > prepValue ) {
			this.valueProps.class = 'rc-progress__value rc-progress__value--outside';
		} else {
			this.valueProps.class = 'rc-progress__value';
		}
		console.log(this.valueProps);

		this.displayValue();
	}



  Progress.prototype.displayValue = function( element ) {

  	this.valueContainer = '<div class="' + this.valueProps.class + '" style="left: ' + this.valueProps.percent + '">' + this.valueProps.percent + '</div>';
  	$( this.progress ).append( this.valueContainer );
  }



  // jQuery Prototpe Function
	$.fn.Progress = function() {
		var progress = new Progress( this );
		
		this.updateProgress = function( newValue ){
			progress.updateValue( newValue );
		};

		return this;
	};


	var prog = $('.rc-progress');

	// Selector
	prog.Progress();



	// Update value test
  $( '.gs-stage__content h1').on('click', function( event ) {
  	// Update Value
  	prog.updateProgress( 50 );
  });

});
