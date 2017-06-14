'use strict';


function getAllIndexes(arr, val) {
  var indexes = [], i;
  for(i = 0; i < arr.length; i++)
    if (arr[i] === val)
      indexes.push(i);
  return indexes;
};

/**
 * Get all siblings of an element
 * @param  {Node}  elem The element
 * @return {Array}      The siblings
 */
var getSiblings = function ( elem ) {
  var siblings = [];
  var sibling = elem.parentNode.firstChild;
  for ( ; sibling; sibling = sibling.nextSibling ) {
    if ( sibling.nodeType === 1 && sibling !== elem ) {
      siblings.push( sibling );
    }
  }
  return siblings;
};

// simple_toggler.js

function simple_toggler( trigger, target ) {

	// If either argument is undefined, end here.
  if ( trigger === undefined || target === undefined ) {
  	return false;
  }

  // Set up internal variables to contain arguments.
	var tr = document.querySelector( trigger ), 
			ta = document.querySelector( target ) ;


	// Event handlder
	tr.addEventListener( 'click', function() {

		// If the trigger has a class of triggered
		if ( tr.classList.contains( 'triggered' ) ) {

			// Remove that class
			this.classList.remove( 'triggered' );
			
			// Set the target height to 0
			// ta.style.height = 0 + 'px';
			// Remove visible class
			ta.classList.remove( 'visible' );

		} else {

			// Add triggered class
			this.classList.add( 'triggered' );

			// Set the target height to it's scroll height
			// ta.style.height = ta.scrollHeight + 'px';
			// Add visible class
			ta.classList.add( 'visible' );

		}
	});
}




// nav_accordion.js

function nav_accordion( accordion, trigger ) {
	var a = document.querySelector( accordion );
	var ts =	document.querySelectorAll( trigger );

	for ( var i = 0; i < ts.length; i++ ) {
    (function(i) {

			ts[i].addEventListener( 'mousedown', function( event ) {
				event.preventDefault();

				if ( ts[i].classList.contains( 'triggered' ) ) {

					ts[i].classList.remove( 'triggered' );
					ts[i].parentNode.querySelector('ul').classList.remove( 'visible' );

				} else {

					ts[i].classList.add( 'triggered' );
					ts[i].parentNode.querySelector('ul').classList.add( 'visible' );
				}

			} );

			ts[i].addEventListener( 'focus', function( event ) {
				event.preventDefault();

				if ( ts[i].classList.contains( 'triggered' ) ) {

					ts[i].classList.remove( 'triggered' );
					ts[i].parentNode.querySelector('ul').classList.remove( 'visible' );

				} else {

					ts[i].classList.add( 'triggered' );
					//ts[i].parentNode.querySelector('ul').classList.add( 'visible' );
				}

			} );

		}(i));
	}

}




// Convert HTML Tags to Entities
function htmlEntities(str) {
	return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}



/**
 * Take in a block of code and convert it to a string
 * @param  [string] code_block	Element that contains code	
 * @return [string]							String with HTML tags replaced and tabs stripped out
 */
function syntax( code_block ) {
	// if argument is undefined end here
  if ( undefined === code_block ) {
  	return false;
  }

  // get all the instances of code blocks
	var the_codes = document.querySelectorAll( code_block );

	// for each of them
	for ( var i = 0; i < the_codes.length; i++ ) {
		// (backwards)
		// Remove all tabs in the HTML
		// Pass that new string to a function that replaces HTML tags with Entities
		// Set the innerHTML of the instance of the class with this new string.
		the_codes[i].innerHTML = htmlEntities( the_codes[i].innerHTML.trim() );
	}

}




// Scripts

simple_toggler( '#gs-nav-trigger', '.gs-nav__nav' );

nav_accordion( '.gs-nav__nav', '.gs-nav__trigger');

syntax( '.gs-code ');

const triggerAndTargetClassModifier = {

  /**
   * Add event handler to elements with specified css selector, when specified event triggers,
   * toggle the the supplied class name on both the trigger and target element.
   *
   * @param {string} event
   * Event type to add handler to.
   *
   * @param {string} trigger
   * Element selector that will be used to toggle the modifier class.
   *
   * @param {string} target
   * Element selector that will be targeted when the event fires.
   *
   * @param {string} modifier
   * Class added to both the trigger and target elements.
   *
   */
  init: function init(event, trigger, target, modifier, depth) {
    // Find the nodes we will use as triggers.
    if (typeof document.querySelector(trigger) === 'object')   {
      this.attach(event, document.querySelectorAll(trigger), target, modifier, depth);
    }
  },
  attach: function attach(event, targetNodes, target, modifier, depth) {
    // Loop through the list of nodes and attached events to each.
    if (event === 'load') {
      for (var i = 0; i < targetNodes.length; i++) {
        this.action(targetNodes[i], target, modifier, depth);
      }
    }
    else {
      for (var b = 0; b < targetNodes.length; b++) {
        targetNodes[b].addEventListener(event, function () {
          this.action(targetNodes[b], target, modifier, depth);
        });
      }
    }
  },
  action: function action(targetNode, target, modifier, depth) {
    // Toggle the active class on the target.
    targetNode.classList.toggle(modifier);

    // Store the node in a temporary variable, which we will replace as we climb the DOM.
    var currentNode = targetNode;

    for (var i = 0; i < depth; i++) {
      currentNode = this.climbTreeAndToggle(currentNode, target, modifier, i);
    }

  },
  climbTreeAndToggle: function (currentNode, target, modifier) {
  while (!this.classCheck(currentNode, target.target) && currentNode !== null) {
    // Check the node for the target class and climb the DOM if not found.
    currentNode = currentNode.parentNode;
  }

  if (target.siblingCheck) {
    var childTarget = currentNode.querySelector(target.targetClass);
    childTarget.classList.toggle(modifier);
  }
  else {
    // Toggle the active class on the target.
    currentNode.classList.toggle(modifier);
  }
  return currentNode.parentNode;
},
  classCheck: function classCheck(el, className) {
    try {
      // Try and find the class with contains function, use RegEx for older browsers.
      if (el.classList) {
        return el.classList.contains(className);
      }
      else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
      }
    }
    catch (e) {
      throw new Error('Css Selector: "' + className + '" doesn\'t appear to be in the DOM');
    }
  }
};

function activeTrail (target) {
  // Count the / symbols in the location path to get the page depth, remove the first slash as that's root.
  var depth = getAllIndexes(window.location.pathname, '/').length - 1;

  if (document.querySelector('[href="' + window.location.pathname + '"]').classList.contains('single-level')) {
    // If the target link is a single level link, remove 1 from the depth.
    depth = depth - 1;
  }

  triggerAndTargetClassModifier.init('load', '[href="' + window.location.pathname + '"]', target, 'triggered', depth);
}

activeTrail(
  {
    target: 'gs-nav__section',
    siblingCheck: true,
    targetClass: '.gs-nav__trigger'
  }
);

/**
 * Takes two selectors: 1) The menu selector to help encapsulate the behaviours 2) The target selector for toggling
 *
 * @param {string} menuSelector
 * Css selector.
 *
 * @param triggerSelector
 * Css selector.
 */
function resetMenuItems (menuSelector, triggerSelector) {
  var menu = document.querySelector(menuSelector);
  var menuTriggers = menu.querySelectorAll(triggerSelector);

  menuTriggers.forEach(function (menuTrigger) {
    menuTrigger.addEventListener('click', function () {

      var currentNode = this;

      while (!currentNode.classList.contains('toplevel')) {
        // Check the node for the target class and climb the DOM if not found.
        currentNode = currentNode.parentNode;
      }

      var nodeSiblings = getSiblings(currentNode);

      nodeSiblings.forEach(function (sibling) {
        var menuItemsTriggered = sibling.querySelectorAll('.gs-nav__trigger.triggered');

        menuItemsTriggered.forEach(function (item) {
          item.classList.remove('triggered');
        })
      })
    });
  });
}

resetMenuItems ('.gs-nav__nav', '.gs-nav__trigger');