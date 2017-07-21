/**
 * Tool tip functionality added with tippy js library.
 *
 * @type {{init: RCWDL.features.Tooltip.init}}
 */
RCWDL.features.Tooltip = {

  /**
   * Initialise the tippy library against the targetting selector.
   *
   * @param {String} target
   * Css selector used for targeting.
   */
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
            trigger: 'click',
            popperOptions: {
              modifiers: {
                flip: {
                  behavior: ['right', 'bottom']
                }
              }
            }
          }
        );
      });
    }
  }
};

RCWDL.ready(RCWDL.features.Tooltip.init('[data-tooltip]'));
