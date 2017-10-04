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

  if (searchBarTrigger !== null) {
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
  }

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

/** 
 * Open and close main navigation
 * 
 * @param {String} mainNavSelector Css selector for targeting the main navigation.
 *
 * @param {String} mainNavTogglerSelector Css selector for targeting the toggler.
 */
RCWDL.navigation.toggleNavigation = function (mainNavSelector, mainNavTogglerSelector) {
  'use strict';

  RCWDL.ready(RCWDL.utilities.triggerAndTargetClassModifier.init('click', mainNavTogglerSelector, '[data-js-trigger]', '.open', null));

  var mainNavWrapper = document.querySelector(mainNavSelector).parentNode;
  var mainNavTogglers = document.querySelectorAll(mainNavTogglerSelector);

  mainNavTogglers.forEach(function (mainNavToggler) {
    mainNavToggler.addEventListener('click', function () {
      RCWDL.utilities.toggleClass(mainNavToggler.parentNode, 'active');

      /**
       * Prevent page scroll when nav is open
       */
      if (mainNavWrapper !== null) {
        if (RCWDL.utilities.hasClass(mainNavWrapper, 'open')) {
          document.body.style.overflow = 'hidden';
        }
        else {
          document.body.style.overflow = '';
        }
      }
    });
  });
};

RCWDL.ready(RCWDL.navigation.toggleNavigation('.rc-main-navigation', '[data-js-trigger="main-nav"]'));

/** 
 * Open and close navigation sub items
 * 
 * Takes two selectors: 1) The main navigation div 2) The main navigation item selector
 *
 * @param {String} mainNavSelector
 * Css selector.
 *
 * @param {String} mainNavItemSelector
 * Css selector.
 */
RCWDL.navigation.openCloseItems = function (mainNavSelector, mainNavItemSelector) {
  'use strict';

  var mainNav = document.querySelector(mainNavSelector);
  var mainNavItems = mainNav.querySelectorAll(mainNavItemSelector);
  var triggerType = window.innerWidth > 800 ? 'mouseover' : 'click';

  mainNavItems.forEach(function (mainNavItem) {
    mainNavItem.addEventListener(triggerType, function () {

      var nodeSiblings = RCWDL.utilities.getSiblings(mainNavItem.parentNode);

      nodeSiblings.forEach(function (sibling) {
        if (sibling !== mainNavItem.parentNode) {
          RCWDL.utilities.removeClass(sibling, 'open');
          RCWDL.utilities.removeClass(sibling, 'open--desktop');
        }
        else {
          RCWDL.utilities.addClass(sibling, 'open');
        }
      });

    });
  });
};

RCWDL.ready(RCWDL.navigation.openCloseItems('.rc-main-navigation', '.rc-main-navigation__item-text'));

/**
 * Creates a dynamic breadcrumb within the mobile navigation
 *
 * @param {String} mainNavSelector Css selector for targeting the main navigation.
 * 
 * @param {String} mainNavBreadcrumbSelector Css selector for targeting the breadcrumb div.
 * 
 * @param {Array} mainNavBreadcrumbLevels The level descriptions for the breadcrumb e.g primary, secondary.
 */
RCWDL.navigation.breadcrumbs = function (mainNavSelector, mainNavBreadcrumbSelector, mainNavBreadcrumbLevels) {
  'use strict';

  var mainNavBreadcrumbs = document.querySelector(mainNavBreadcrumbSelector);
  var mainNav = document.querySelector(mainNavSelector);
  var mainNavItems = mainNav.querySelectorAll(mainNavSelector + '__item-text');

  var levels = mainNavBreadcrumbLevels;

  mainNavItems.forEach(function (mainNavItem) {
    mainNavItem.addEventListener('click', function () {
      var breadcrumb = mainNavItem.cloneNode(true);
      var breadcrumbClass = '';

      levels.forEach(function (level) {
        var currentLevel = level;
        if (RCWDL.utilities.hasClass(mainNavItem.parentNode.parentNode, 'rc-main-navigation__' + currentLevel)) {
          breadcrumbClass = currentLevel;
        }
      });

      mainNavBreadcrumbs.innerHTML += '<li class="rc-main-navigation__breadcrumb-item ' + breadcrumbClass + '">' + breadcrumb.innerText + '</li>';

    });
  });

  mainNavBreadcrumbs.addEventListener('click', function (e) {

    levels.forEach(function (level) {
      var currentLevel = level;

      if (e.target.nodeName === 'LI' && RCWDL.utilities.hasClass(e.target, currentLevel)) {

        var allNodes = mainNavBreadcrumbs.querySelectorAll('li');
        var currentNode = e.currentTarget.querySelector('.' + currentLevel);
        var currentNav = mainNav.querySelectorAll(mainNavSelector + '__' + currentLevel);

        currentNav.forEach(function (currentNavItem) {
          var currentNavChildren = currentNavItem.querySelectorAll('.haschild');

          currentNavChildren.forEach(function (currentNavChild) {
            if (RCWDL.utilities.hasClass(currentNavChild, 'open')) {
              RCWDL.utilities.removeClass(currentNavChild, 'open');
            }
          });
        });

        if (currentLevel === 'primary') {
          allNodes.forEach(function (node) {
            node.remove();
          });
        }
        else {
          currentNode.remove();
        }
      }
    });
  });
};

if (window.innerWidth < 800) {
  RCWDL.ready(RCWDL.navigation.breadcrumbs('.rc-main-navigation', '.rc-main-navigation__breadcrumb-list', ['primary', 'secondary']));
}

/**
 * Opens/closes extra content in navigation and smooth scrolls to it
 *
 * @param {String} buttonSelector Css selector for the trigger button.
 * 
 * @param {String} buttonTargetSelector Css selector for the target div.
 * 
 * @param {String} mainNavSelector Css selector for the main navigation.
 */
RCWDL.navigation.expandAndScrollTo = function (buttonSelector, buttonTargetSelector, mainNavSelector) {
  'use strict';

  var buttonTrigger = document.querySelector(buttonSelector);

  buttonTrigger.addEventListener('click', function () {
    var buttonTarget = document.querySelector(buttonTargetSelector);
    var mainNavWrapper = document.querySelector(mainNavSelector).parentNode;

    RCWDL.utilities.toggleClass(buttonTarget, 'open');
    RCWDL.utilities.toggleClass(this, 'open');

    function scrollTo(element, to, duration) {

      Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) {
          return c / 2 * t * t + b;
        }
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      var start = element.scrollTop;
      var change = to - start;
      var currentTime = 0;
      var increment = 20;

      var animateScroll = function () {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };
      animateScroll();
    }

    if (RCWDL.utilities.hasClass(this, 'open')) {
      scrollTo(mainNavWrapper, mainNavWrapper.scrollHeight, 500);
      this.querySelector('[data-js-text]').innerText = 'Less Information';
    }
    else {
      scrollTo(mainNavWrapper, mainNavWrapper.top, 500);
      this.querySelector('[data-js-text]').innerText = 'More Information';
    }
  });
};

if (window.innerWidth < 800) {
  RCWDL.ready(RCWDL.navigation.expandAndScrollTo('[data-js-trigger="more-info"]', '[data-js-target="more-info"]', '.rc-main-navigation'));
}