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

RCWDL.navigation.burgerToggle = function () {
  var toggle = document.getElementById('menu-toggle');
  if (toggle !== null) {
    toggle.addEventListener('click', function () {
      var a = document.getElementById('menu-toggle-svg');
      var svgContent = a.contentDocument;
      var target = svgContent.querySelector('.svg-menu-toggle');

      target.classList.toggle('active');
    });
  }
};

RCWDL.ready(RCWDL.navigation.burgerToggle());