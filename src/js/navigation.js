RCDL.navigation = {};

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
RCDL.navigation.changeNavigationOnScroll = function (headerNavSelector, mobileFooterNavSelector, mainNavSelector) {
  'use strict';

  var headerNav = document.querySelector(headerNavSelector);

  if (headerNav !== null) {
    window.addEventListener('scroll', function () {
      var headerNav = document.querySelector(headerNavSelector);

      if (RCDL.posTop() > 100) {
        RCDL.utilities.addClass(headerNav, 'scrolled');
      }
      else {
        RCDL.utilities.removeClass(headerNav, 'scrolled');
      }
    });
  }

  var footerNav = document.querySelector(mobileFooterNavSelector);
  var mainNav = document.querySelector(mainNavSelector);

  if (footerNav !== null) {
    var previous = RCDL.posTop();
    window.addEventListener('scroll', function () {

      if (RCDL.posTop() > previous) {
        if (!RCDL.utilities.hasClass(mainNav, 'open')) {
          RCDL.utilities.addClass(footerNav, 'scrolled');
        }
      }
      else {
        RCDL.utilities.removeClass(footerNav, 'scrolled');
      }
      previous = RCDL.posTop();
    });
  }
};

RCDL.ready(RCDL.navigation.changeNavigationOnScroll('.rc-header-navigation', '.rc-mobile-footer-navigation', '.rc-main-navigation'));


/**
 * Hides and shows the search bar and shade, closes nav and replaces with search bar if nav already open.
 *
 * @param {String} searchBarTriggerSelector Selector for the search bar trigger.
 * 
 * @param {String} mainNavSelector Selector for the main navigation wrapper.
 * 
 */
RCDL.navigation.searchBar = function (searchBarTriggerSelector, mainNavSelector) {
  'use strict';

  var searchBarTrigger = document.querySelector(searchBarTriggerSelector);
  var mainNav = document.querySelector(mainNavSelector);
  var mainNavToggler = document.querySelector('[data-js-animate-svg-target]');

  if (searchBarTrigger !== null) {
    searchBarTrigger.addEventListener('click', function () {
      if (mainNav != null) {
        if (RCDL.utilities.hasClass(mainNav, 'open')) {
          RCDL.utilities.removeClass(mainNav, 'open');
          document.body.style.overflow = ''; // Always allow page scrolling when search open

          if (mainNavToggler !== null) {
            var svg = mainNavToggler.contentDocument.querySelector('.svg-toggle');
            RCDL.utilities.removeClass(svg, 'active');
          }
        }
      }

      var siblings = RCDL.utilities.getSiblings(searchBarTrigger);

      siblings.forEach(function (sibling) {
        if (sibling !== searchBarTrigger) {
          RCDL.utilities.toggleClass(sibling, 'fade');
        }
        else {
          RCDL.utilities.toggleClass(searchBarTrigger, 'active');
        }
      });
    });
  }

  RCDL.ready(RCDL.utilities.triggerAndTargetClassModifier.init('click', searchBarTriggerSelector, '[data-js-trigger]', '.open', null));
};

if (window.innerWidth < 800) {
  RCDL.ready(RCDL.navigation.searchBar('[data-js-trigger="search-bar-mobile"]', '.rc-main-navigation__wrapper'));
}
else {
  RCDL.ready(RCDL.navigation.searchBar('[data-js-trigger="search-bar"]', '.rc-main-navigation__wrapper'));
}
