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
