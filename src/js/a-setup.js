var RCWDL = {};
RCWDL.features = {};
RCWDL.utilities = {};

/**
 * This method take a function and executes it when the DOM is ready.
 * This is similar to $(document).ready() but does not require jQuery.
 *
 * @param {Object} fn
 * Function object to be executed when ready.
 *
 * @return {function}
 * Returns function result.
 */
RCWDL.ready = function (fn) {
  'use strict';

  var ready_event_fired = false;
  var ready_event_listener = function () {

    // Create an idempotent version of the 'fn' function
    var idempotent_fn = function () {
      if (ready_event_fired) {
        return;
      }
      ready_event_fired = true;
      return fn();
    };

    // The DOM ready check for Internet Explorer
    var do_scroll_check = function () {
      if (ready_event_fired) {
        return;
      }

      // If IE is used, use the trick by Diego Perini
      // http://javascript.nwbox.com/IEContentLoaded/
      try {
        document.documentElement.doScroll('left');
      }
      catch (e) {
        setTimeout(do_scroll_check, 1);
        return;
      }
      // Execute any waiting functions
      return idempotent_fn();
    };

    // If the browser ready event has already occured
    if (document.readyState === 'complete') {
      return idempotent_fn();
    }

    // Mozilla, Opera and webkit nightlies currently support this event
    if (document.addEventListener) {

      // Use the handy event callback
      document.addEventListener('DOMContentLoaded', idempotent_fn, false);

      // A fallback to window.onload, that will always work
      window.addEventListener('load', idempotent_fn, false);

      // If IE event model is used
    }
    else if (document.attachEvent) {

      // ensure firing before onload; maybe late but safe also for iframes
      document.attachEvent('onreadystatechange', idempotent_fn);

      // A fallback to window.onload, that will always work
      window.attachEvent('onload', idempotent_fn);

      // If IE and not a frame: continually check to see if the document is ready
      var toplevel = false;

      try {
        toplevel = window.frameElement === null;
      }
      catch (e) {
        // Fall through.
      }

      if (document.documentElement.doScroll && toplevel) {
        return do_scroll_check();
      }
    }
  };
  return ready_event_listener;
};

/**
 * This replaces the usual click method as IE doesn't follow every other browser that uses the MouseEvent class.
 *
 * @param {Node} htmlObject Item to trigger click event on.
 */
RCWDL.click = function click(htmlObject) {
  'use strict';
  (function (window) {
    try {
      new MouseEvent('test');
      return false; // No need to polyfill
    }
    catch (e) {
      // Need to polyfill - fall through
    }

    // Polyfills DOM4 MouseEvent

    var MouseEvent = function (eventType, params) {
      params = params || {bubbles: false, cancelable: false};
      var mouseEvent = document.createEvent('MouseEvent');
      mouseEvent.initMouseEvent(eventType, params.bubbles, params.cancelable, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

      return mouseEvent;
    };

    MouseEvent.prototype = Event.prototype;

    window.MouseEvent = MouseEvent;
  })(window);

  var event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });

  htmlObject.dispatchEvent(event);
};

/**
 * Cross browser position from top function.
 *
 * @return {Integer} Pixels from the top of the page.
 */
RCWDL.posTop = function () {
  'use strict';
  return typeof window.pageYOffset != 'undefined' ? window.pageYOffset: document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0;
};

/**
 * Used to add/remove classes on a target element.
 *
 * @param {Node} target
 * Targeted DOM node item.
 *
 * @param {String} className
 * Class name to be toggled.
 */
RCWDL.utilities.toggleClass = function (target, className) {
  'use strict';
  var hasClass = null;
  var addRemove = null;

  if (target.classList) {
    hasClass = target.classList.contains(className);
  }
  else {
    hasClass = new RegExp('(^| )' + className + '( |$)', 'gi').test(target.className);
  }

  switch (hasClass) {
    case true:
      addRemove = 'remove';
      break;

    case false:
      addRemove = 'add';
      break;

    default:
      throw new Error('Has Class option used with method RCWDL.utilities.toggleClass is invaild.');
  }

  // IE 8+ support.
  if (target.classList) {
    target.classList[addRemove](className);
  }
  else {
    if (addRemove === 'add') {
      target.className += className;
    }
    else {
      target.className = target.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }
};

/**
 * Takes two DOM nodes and wraps one around the other.
 *
 * @param {Node} el
 * The DOM node item to be wrapped.
 *
 * @param {Node} wrapper
 * The DOM node item to become the wrapper.
 */
RCWDL.utilities.wrap = function (el, wrapper) {
  'use strict';

  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
};

/**
 * Triggers a fake page resize. This is sometimes useful to force window redraws or recalculations if you're manipulation
 * elements in the DOM.
 */
RCWDL.utilities.triggerResize = function () {
  'use strict';

  var evt = document.createEvent('HTMLEvents');
  evt.initEvent('resize', true, false);
  window.dispatchEvent(evt);
};

/**
 * Checks if target DOM node has a class.
 *
 * @param {Node} el
 * DOM node element to check for class against.
 *
 * @param {String} className
 * CSS class name to look for.
 *
 * @return {boolean} Returns whether the nodeItem has the supplied class.
 */
RCWDL.utilities.hasClass = function (el, className) {
  'use strict';

  if (el.classList) {
    return el.classList.contains(className);
  }
  else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
};

RCWDL.utilities.triggerAndTargetClassModifier = {

  /**
   * Add event handler to elements with specified css selector, when specified event triggers,
   * toggle the the supplied class name on both the trigger and target element.
   *
   * @param {String} event
   * Event type to add handler to.
   *
   * @param {String} trigger
   * Element selector that will be used to toggle the modifier class.
   *
   * @param {String} target
   * Element selector that will be targeted when the event fires.
   *
   * @param {String} modifier
   * Class added to both the trigger and target elements.
   *
   * @param {Number} depth
   * Numeric value used to help toggles that climb the DOM to stop after a set amount of increments.
   *
   */
  init: function (event, trigger, target, modifier, depth) {
    'use strict';

    // Find the nodes we will use as triggers.
    if (typeof document.querySelector(trigger) === 'object' && document.querySelector(trigger) !== null) {
      this.attach(event, document.querySelectorAll(trigger), target, modifier, depth);
    }
  },
  attach: function (event, targetNodes, target, modifier, depth) {
    'use strict';

    // Loop through the list of nodes and attached events to each.
    if (event === 'load') {
      for (var i = 0; i < (targetNodes.length); i++) {
        this.action(targetNodes[i], target, modifier, depth);
      }
    }
    else {
      if (targetNodes.length > 0) {
        for (var b = 0; b < (targetNodes.length); b++) {
          targetNodes[b].addEventListener(event, function (event) { RCWDL.utilities.triggerAndTargetClassModifier.action(event.currentTarget, target, modifier, depth); });
        }
      }
      else {
        targetNodes.addEventListener(event, function (event) { RCWDL.utilities.triggerAndTargetClassModifier.action(event.currentTarget, target, modifier, depth); });
      }
    }
  },
  action: function (targetNode, target, modifier, depth) {
    'use strict';

    // Store the node in a temporary variable, which we will replace as we climb the DOM.
    var currentNode = targetNode;
    var classNoDot = modifier.replace(/^\./, '');

    if (depth > 0) {
      for (var i = 0; i < depth; i++) {
        currentNode = this.climbTreeAndToggle(currentNode, target, modifier, i);
      }
    }
    else if (/data-js-trigger/i.test(target)) {

      if (RCWDL.utilities.hasClass(targetNode)) {
        // Remove all the modifier classes from other toggle elements.
        var dataTargets = document.querySelectorAll('[data-js-target=' + targetNode.getAttribute('data-js-trigger') + ']');
        Object.keys(dataTargets).forEach(function (item) {
          RCWDL.utilities.triggerAndTargetClassModifier.removeModifier(dataTargets[item], classNoDot); 
        });
      }

      // Remove the modifier class from anything matching the data attribute selector.
      var targets = document.querySelectorAll(target);
      Object.keys(targets).forEach(function (item) {
        RCWDL.utilities.triggerAndTargetClassModifier.removeModifier(targets[item], classNoDot);
      });

      var childTarget = document.querySelector('[data-js-target="' + targetNode.getAttribute('data-js-trigger') + '"]');
      if (childTarget !== null) {
        RCWDL.utilities.toggleClass(childTarget, classNoDot);
      }
    }
    else {
      // Toggle the active class on the trigger.
      RCWDL.utilities.toggleClass(targetNode, classNoDot);
    }
  },
  removeModifier: function (item, modifier) {
    'use strict';

    if (item.classList) {
      item.classList.remove(modifier);
    }
    else {
      item.modifier = item.modifier.replace(new RegExp('(^|\\b)' + modifier.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  },
  climbTreeAndToggle: function (currentNode, target, modifier) {
    'use strict';

    while (!this.classCheck(currentNode, target.target) && currentNode !== null) {
      // Check the node for the target class and climb the DOM if not found.
      currentNode = currentNode.parentNode;
    }

    if (target.siblingCheck) {
      var childTarget = currentNode.querySelector(target.targetClass);
      RCWDL.utilities.toggleClass(childTarget, modifier.replace(/^\./, ''));
    }
    else {
      // Toggle the active class on the target.
      RCWDL.utilities.toggleClass(currentNode, modifier.replace(/^\./, ''));
    }
    return currentNode.parentNode;
  },
  classCheck: function classCheck(el, className) {
    'use strict';

    try {
      // Try and find the class with contains function, use RegEx for older browsers.
      if (el.classList) {
        return el.classList.contains(className.replace(/^\./, ''));
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
