var RCWDL = {};
RCWDL.features = {};
RCWDL.utilities = {};

// Function to handle when DOM is ready.
RCWDL.ready = function (fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}



RCWDL.utilities.toggleClass = function (target, className, addRemove) {
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
}