/**
 * Tool tip functionality added with tippy js library.
 *
 * @type {{init: RCDL.features.Tooltip.init}}
 */
RCDL.features.Tooltip = {

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
            offset: tooltips[tooltip].getAttribute('data-tooltip-direction') === 'top' ? 0 : 0,
            distance: tooltips[tooltip].getAttribute('data-tooltip-direction') === 'top' ? 100 : 50,
            arrow: true,
            arrowSize: 'big',
            position: tooltips[tooltip].getAttribute('data-tooltip-direction') || 'top',
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

RCDL.ready(RCDL.features.Tooltip.init('[data-tooltip]'));
