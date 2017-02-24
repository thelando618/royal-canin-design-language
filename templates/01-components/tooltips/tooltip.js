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

    this.event();
  }


  Tooltips.prototype.event = function( element ) {
  	var th = this;

    $( this.tooltip ).on( 'mouseenter focus', function( event ) {
      var tooltip = $( this ).data('tooltip' );
      th.showTooltip( $( '#' + tooltip ) );
    });

    $( this.tooltip ).on( 'mousemove', function( event, pos ) {
      var tooltip = $( this ).data('tooltip' );
      th.moveTooltip( $( '#' + tooltip ), event );
    });


    $( this.tooltip ).on( 'mouseout blur', function( event ) {
      var tooltip = $( this ).data('tooltip' );
      th.hideTooltip( $( '#' + tooltip ) );
    });
  }


  Tooltips.prototype.showTooltip = function( tooltip ) {
  	tooltip.css({
  		display: 'none',
  		right: 'auto', 
  		opacity: 1,
  		top:tooltip.pageY + 16,
  		left: tooltip.pageX - 32
  	}).fadeIn( 400 );
  }

  Tooltips.prototype.moveTooltip = function( tooltip, event ) {
  	tooltip.css({
  		top:event.pageY + 16,
  		left:event.pageX - 32
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
