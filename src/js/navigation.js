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
