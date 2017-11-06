/**
 * Enables the ability to create interactive tabbed navigation for stacked content.
 *
 * @type {{init: RCDL.features.Tabs.init, hideTabs: RCDL.features.Tabs.hideTabs, tabClick: RCDL.features.Tabs.tabClick}}
 */
RCDL.features.Tabs = {

  /**
   * Initialise the interaction on target selector.
   *
   * @param {String} target
   * Css selector.
   */
  init: function (target) {
    'use strict';

    var tabsets = document.querySelectorAll(target);

    if (typeof tabsets[0] !== 'undefined') {
      // Skip if no sets of tabs are found.
      if (tabsets.length > 0) {
        // Loop through all the returned results, these should be sets of tabs.
        Object.keys(tabsets).forEach(function (tabset) {
          RCDL.features.Tabs.hideTabs(tabsets[tabset]);

          // fake a click on the first item.
          var defaultItem = tabsets[tabset].querySelectorAll('.rc-tabs__triggers > li:first-child a');
          RCDL.click(defaultItem[0]);
        });
      }
      else {
        RCDL.features.Tabs.hideTabs(tabsets[0]);

        // fake a click on the first item.
        var defaultItem = tabsets[0].querySelectorAll('.rc-tabs__triggers > li:first-child a');
        RCDL.click(defaultItem[0]);
      }
    }
  },

  /**
   * Hide all the tabs for a given tab set.
   *
   * @param {Node} tabsets
   * Wrapper containing a set of tabs and controller (rc-tabs__controller).
   */
  hideTabs: function (tabsets) {
    'use strict';

    var tabs = tabsets.getElementsByClassName('rc-tabs__controller');

    // Loop through the triggers adding event handlers.
    Object.keys(tabs).forEach(function (item) {
      var itemHref = tabs[item].getAttribute('href');

      // Add an event listener to each instance.
      tabs[item].addEventListener('click', RCDL.features.Tabs.tabClick);

      // Find the target using the href attribute.
      var target = tabsets.querySelectorAll(itemHref);

      RCDL.utilities.modifyClass('toggle', target[0], 'hidden');

      // Reset the ARIA attributes on the controller and target.
      tabs[item].setAttribute('aria-selected', 'false');
      target[0].setAttribute('aria-hidden', 'true');
    });
  },

  /**
   * Event bound to tab controllers click events.
   *
   * @param {Object} event
   * Event object.
   */
  tabClick: function (event) {
    'use strict';

    event.preventDefault();
    // Get the target content container using the hash.
    var target = document.querySelectorAll(this.getAttribute('href'));

    RCDL.features.Tabs.hideTabs(this.parentNode.parentNode.parentNode);

    // Set the ARIA attributes on the controller and target.
    target[0].setAttribute('aria-hidden', 'false');
    this.setAttribute('aria-selected', 'true');
  }
};

RCDL.ready(RCDL.features.Tabs.init('[data-js-rc-tabs]'));
