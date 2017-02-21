/**
 *
 * File Progress.js.
 *
 */

$(function () {
	"use strict";

	var Progress = window.Progress || {};

  Progress = (function() {
  	function Progress( element, settings ) {

      // The element
  		this.progress = ( element );
  		// The Progress element
  		this.progressElem = $( this.progress ).children( 'progress' );
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
		this.progress.data( 'value', newValue );
		this.progress.attr( 'data-value', newValue );
		this.progressElem[0].value = newValue;
		this.progressFall.css('width', this.valueAsPercentage( newValue ) );

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

  // jQuery Prototpe Function
	$.fn.Progress = function() {
		var progress = new Progress( this );
		
		this.updateProgress = function( newValue ){
			progress.updateValue( newValue );
		};

		return this;
	};

	var prog = $('.rc-progress1');
	var prog2 = $('.rc-progress2');

	// Selector
	prog.Progress();
	prog2.Progress();







	// Move this to GS scripts
	// Update value test
  $( '.update-progress1').on('click', function( event ) {
  	// Update Value
  	prog.updateProgress( 50 );
  	
  	// Disable button after click
  	$( this ).attr('disabled', true);
  });

  $( '.update-progress2').on('click', function( event ) {
  	// Update Value
  	prog2.updateProgress( 8 );
  	
  	// Disable button after click
  	$( this ).attr('disabled', true);
  });

});
