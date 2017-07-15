RCWDL.features.Tooltip = {
  init: function (target) {
    'use strict';

    var tooltips = document.querySelectorAll(target);

    if (typeof tooltips === 'object') {
      tooltips.forEach(function (tooltip) {

        tippy(tooltip,
          {
            html: document.getElementById(tooltip.getAttribute('data-tooltip')),
            offset: tooltip.getAttribute('data-tooltip-direction') === 'top' ? 0 : 0,
            distance: tooltip.getAttribute('data-tooltip-direction') === 'top' ? 100 : 50,
            arrow: true,
            arrowSize: 'big',
            position: tooltip.getAttribute('data-tooltip-direction') || 'top',
            interactive: true,
            trigger: 'click'
          }
        );
      });
    }
  }
};

RCWDL.ready(RCWDL.features.Tooltip.init('[data-tooltip]'));
