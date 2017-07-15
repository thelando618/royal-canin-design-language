var RCWDL = {};
RCWDL.features = {};
RCWDL.utilities = {};

// Function to handle when DOM is ready.
RCWDL.ready = function (fn) {
  'use strict';
  if (document.readyState !== 'loading') {
    fn();
  }
  else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

RCWDL.utilities.toggleClass = function (target, className, addRemove) {
  'use strict';
  // IE 8+ support.
  if (target.classList) {
    target.classList[addRemove]('hidden');
  }
  else {
    if (addRemove === 'add') {
      target.className += ' hidden';
    }
    else {
      target.className = target.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }
};

RCWDL.utilities.wrap = function (el, wrapper) {
  'use strict';
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
};

RCWDL.utilities.triggerResize = function () {
  'use strict';
  var evt = document.createEvent('HTMLEvents');
  evt.initEvent('resize', true, false);
  window.dispatchEvent(evt);
};
