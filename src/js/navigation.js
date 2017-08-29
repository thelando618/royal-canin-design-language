RCWDL.navigation = {};

RCWDL.navigation.changeNavigationOnScroll = function () {
  var navigationBar = document.querySelector('.rc-navigation__bar');
  if (navigationBar !== null) {
    window.addEventListener('scroll', function () {
      var navigationBar = document.querySelector('.rc-navigation__bar');
      if (document.body.scrollTop > 100) {
        navigationBar.classList.add('scrolled');
      } else {
        navigationBar.classList.remove('scrolled');
      }
    });
  }
};

RCWDL.ready(RCWDL.navigation.changeNavigationOnScroll());

RCWDL.navigation.burgerToggle = function (triggerSelector, targetSelector) {

  var targets = document.querySelectorAll(triggerSelector);
  
  if (targets !== null) {
    targets.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.target
          .querySelector(targetSelector)
          .contentDocument
          .querySelector('.svg-toggle')
          .classList.toggle('active');
      });
    })
  }

};

RCWDL.ready(RCWDL.navigation.burgerToggle('[data-js-animate-svg]', '[data-js-animate-svg-target]'));