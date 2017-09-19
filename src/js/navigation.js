RCWDL.navigation = {};

/**
 * Adds class to body if the navigation bar is in use.
 */
RCWDL.navigation.changeNavigationOnScroll = function () {
  'use strict';
  var navigationBar = document.querySelector('.rc-navigation__bar');
  if (navigationBar !== null) {
    window.addEventListener('scroll', function () {
      var navigationBar = document.querySelector('.rc-navigation__bar');
      if (RCWDL.posTop() > 100) {
        navigationBar.classList.add('scrolled');
      }
      else {
        navigationBar.classList.remove('scrolled');
      }
    });
  }
};

RCWDL.ready(RCWDL.navigation.changeNavigationOnScroll());

/**
 * Hides and shows the search bar and shade, prevents duplicate shades showing.
 *
 * @param {String} searchBarTriggerSelector Selector for the search bar trigger.
 * 
 */

RCWDL.navigation.searchBar = function (searchBarTriggerSelector, mainNavSelector) {
  'use strict';

  var searchBarTrigger = document.querySelector(searchBarTriggerSelector);
  var mainNav = document.querySelector(mainNavSelector);
  var shade = document.querySelector('.shade');

  searchBarTrigger.addEventListener('click', function(){
      if (RCWDL.utilities.hasClass(mainNav, 'open')) {
        shade.style.visibility = 'hidden';
      }
      else {
        shade.removeAttribute('style');
      }
  });

  RCWDL.ready(RCWDL.utilities.triggerAndTargetClassModifier.init('click', searchBarTriggerSelector, '[data-js-trigger]', '.open', null));
};

RCWDL.ready(RCWDL.navigation.searchBar('[data-js-trigger="search-bar"]', '.rc-main-navigation__wrapper'));


/**
 * Added toggle to svgs to target their internal svg/paths to trigger animations.
 *
 * @param {String} triggerSelector Css selector supplied for targeting the trigger elements.
 * @param {String} targetSelector Css selector supplied for targeting the target elements.
 */

RCWDL.navigation.burgerToggle = function (triggerSelector, targetSelector) {
  'use strict';

  var targets = document.querySelectorAll(triggerSelector);
  if (targets !== null) {
    Object.keys(targets).forEach(function (item) {
      targets[item].addEventListener('click', function (e) {
        e.target
          .querySelector(targetSelector)
          .contentDocument
          .querySelector('.svg-toggle')
          .classList.toggle('active');
      });
    });
  }
};

RCWDL.ready(RCWDL.navigation.burgerToggle('[data-js-animate-svg]', '[data-js-animate-svg-target]'));
