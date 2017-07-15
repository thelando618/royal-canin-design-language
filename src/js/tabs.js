RCWDL.features.Tabs = {
  init: function (target) {
    'use strict';

    var tabsets = document.getElementsByClassName(target);

    // Skip if no sets of tabs are found.
    if (tabsets.length > 0) {
      // Loop through all the returned results, these should be sets of tabs.
      Object.keys(tabsets).forEach(function (tabset) {
        RCWDL.features.Tabs.hideTabs(tabsets[tabset]);

        // fake a click on the first item.
        var defaultItem = tabsets[tabset].querySelectorAll('.rc-tabs__triggers > li:first-child a');
        defaultItem[0].click();
      });
    }
  },
  hideTabs: function (tabsets) {
    'use strict';

    var tabs = tabsets.getElementsByClassName('rc-tabs__controller');

    // Loop through the triggers adding event handlers.
    Object.keys(tabs).forEach(function (item) {
      var itemHref = tabs[item].getAttribute('href');

      // Add an event listener to each instance.
      tabs[item].addEventListener('click', RCWDL.features.Tabs.tabClick);

      // Find the target using the href attribute.
      var target = tabsets.querySelectorAll(itemHref);

      RCWDL.utilities.toggleClass(target[0], 'hidden', 'add');

      // Reset the ARIA attributes on the controller and target.
      tabs[item].setAttribute('aria-selected', 'false');
      target[0].setAttribute('aria-hidden', 'true');
    });
  },
  tabClick: function (e) {
    'use strict';

    e.preventDefault();
    // Get the target content container using the hash.
    var target = document.querySelectorAll(this.getAttribute('href'));

    RCWDL.features.Tabs.hideTabs(this.parentNode.parentNode.parentNode);
    RCWDL.utilities.toggleClass(target[0], 'hidden', 'remove');

    // Set the ARIA attributes on the controller and target.
    target[0].setAttribute('aria-hidden', 'false');
    this.setAttribute('aria-selected', 'true');
  }
};

RCWDL.ready(RCWDL.features.Tabs.init('rc-tabs'));
