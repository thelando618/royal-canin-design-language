RCWDL.navigation = {};

/**
 * Changes all navigation bars on scroll
 *
 * @param {String} headerNavSelector Selector for the header navigation div 
 * 
 * @param {String} mobileFooterNavSelector Selector for the mobile footer navigation div
 * 
 * @param {String} mainNavSelector Selector for the main navigation div
 * 
 */
RCWDL.navigation.changeNavigationOnScroll = function (headerNavSelector, mobileFooterNavSelector, mainNavSelector) {
  'use strict';

  var headerNav = document.querySelector(headerNavSelector);

  if (headerNav !== null) {
    window.addEventListener('scroll', function () {
      var headerNav = document.querySelector(headerNavSelector);

      if (RCWDL.posTop() > 100) {
        RCWDL.utilities.addClass(headerNav, 'scrolled');
      }
      else {
        RCWDL.utilities.removeClass(headerNav, 'scrolled');
      }
    });
  }

  var footerNav = document.querySelector(mobileFooterNavSelector);
  var mainNav = document.querySelector(mainNavSelector);

  if (footerNav !== null) {
    var previous = RCWDL.posTop();
    window.addEventListener('scroll', function () {

      if (RCWDL.posTop() > previous) {
        if (!RCWDL.utilities.hasClass(mainNav, 'open')) {
          RCWDL.utilities.addClass(footerNav, 'scrolled');
        }
      }
      else {
        RCWDL.utilities.removeClass(footerNav, 'scrolled');
      }
      previous = RCWDL.posTop();
    });
  }
};

RCWDL.ready(RCWDL.navigation.changeNavigationOnScroll('.rc-header-navigation', '.rc-mobile-footer-navigation', '.rc-main-navigation'));


/**
 * Hides and shows the search bar and shade, closes nav and replaces with search bar if nav already open.
 *
 * @param {String} searchBarTriggerSelector Selector for the search bar trigger.
 * 
 * @param {String} mainNavSelector Selector for the main navigation wrapper.
 * 
 */
RCWDL.navigation.searchBar = function (searchBarTriggerSelector, mainNavSelector) {
  'use strict';

  var searchBarTrigger = document.querySelector(searchBarTriggerSelector);
  var mainNav = document.querySelector(mainNavSelector);
  var mainNavToggler = document.querySelector('[data-js-animate-svg-target]');

  searchBarTrigger.addEventListener('click', function () {
    if (mainNav != null) {
      if (RCWDL.utilities.hasClass(mainNav, 'open')) {
        RCWDL.utilities.removeClass(mainNav, 'open');
        document.body.style.overflow = ''; // Always allow page scrolling when search open

        if (mainNavToggler !== null) {
          var svg = mainNavToggler.contentDocument.querySelector('.svg-toggle');
          RCWDL.utilities.removeClass(svg, 'active');
        }
      }
    }

    var siblings = RCWDL.utilities.getSiblings(searchBarTrigger);

    siblings.forEach(function (sibling) {
      if (sibling !== searchBarTrigger) {
        RCWDL.utilities.toggleClass(sibling, 'fade');
      }
      else {
        RCWDL.utilities.toggleClass(searchBarTrigger, 'active');
      }
    });

  });

  RCWDL.ready(RCWDL.utilities.triggerAndTargetClassModifier.init('click', searchBarTriggerSelector, '[data-js-trigger]', '.open', null));
};

if (window.innerWidth < 800) {
  RCWDL.ready(RCWDL.navigation.searchBar('[data-js-trigger="search-bar-mobile"]', '.rc-main-navigation__wrapper'));
}
else {
  RCWDL.ready(RCWDL.navigation.searchBar('[data-js-trigger="search-bar"]', '.rc-main-navigation__wrapper'));
}


/**
 * Added toggle to svgs to target their internal svg/paths to trigger animations.
 *
 * @param {String} triggerSelector Css selector supplied for targeting the trigger elements.
 * 
 * @param {String} targetSelector Css selector supplied for targeting the target elements.
 * 
 */
RCWDL.navigation.burgerToggle = function (triggerSelector, targetSelector) {
  'use strict';

  var targets = document.querySelectorAll(triggerSelector);

  if (targets !== null) {
    Object.keys(targets).forEach(function (item) {
      targets[item].addEventListener('click', function (e) {
        var listNode = e.target.parentNode.parentNode;
        var svg = e.target.querySelector(targetSelector).contentDocument.querySelector('.svg-toggle');
        var siblings = RCWDL.utilities.getSiblings(listNode);

        RCWDL.utilities.toggleClass(svg, 'active');

        siblings.forEach(function (sibling) {
          if (sibling !== listNode) {
            RCWDL.utilities.toggleClass(sibling, 'fade');
          }
        });
      });
    });
  }
};

RCWDL.ready(RCWDL.navigation.burgerToggle('[data-js-animate-svg]', '[data-js-animate-svg-target]'));
