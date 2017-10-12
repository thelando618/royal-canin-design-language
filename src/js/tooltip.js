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
      Object.keys(tooltips).forEach(function (tooltip) {

        tippy(tooltips[tooltip],
          {
            html: document.getElementById(tooltips[tooltip].getAttribute('data-tooltip')),
            arrow: true,
            arrowSize: 'big',
            interactive: true,
            position: tooltips[tooltip].getAttribute('data-tooltip-direction') || 'top',
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
