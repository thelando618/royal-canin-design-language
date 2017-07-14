/**
 *
 * File Progress.js.
 *
 */

RCWDL.features.Progress = {
  init: function (targetClass) {
    var progElms = document.querySelectorAll(targetClass);
    var demo = document.querySelectorAll('[data-js-demo="update-progress-demo"]');

    if (typeof demo !== 'undefined') {
      console.log(demo[0]);
      RCWDL.features.Progress.demo(demo[0]);
    }

    progElms.forEach(function (el) {

      var val = el.getAttribute('value');
      var label = document.createElement("span");

      label.setAttribute('id',  el.getAttribute('id') + '--label')

      // Initial styles for label.
      label.innerHTML = val + '%';
      label.style.position = 'absolute';
      label.style.top = '0.75em';
      label.style.left = val + '%';
      label.style.marginLeft = '-3em';
      label.style.color = 'white';

      el.parentNode.appendChild(label);

      // Add observer to progress element to update the label on change.
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          var label = document.querySelectorAll('#' + mutation.target.id + '--label');

          if (mutation.target.attributes[1].value >= 101) {
            mutation.target.attributes[1].value = 100;
          }

          label[0].style.left = mutation.target.attributes[1].value + '%';
          label[0].innerHTML = mutation.target.attributes[1].value + '%';
        });
      });

      observer.observe(el, {
        attributes: true, childList: false, characterData: false
      });
    })
  },
  demo: function (demo) {
    demo.addEventListener('click', function (event) {
      var target = event.target.getAttribute('data-js-demo');
      var el = document.querySelectorAll('#' + target);
      var current = el[0].getAttribute('value');
      el[0].setAttribute('value', parseInt(current) + 10);
    });
  }
}

RCWDL.ready(RCWDL.features.Progress.init('progress'));
