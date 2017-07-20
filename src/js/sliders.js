/**
 * Adds an interactive UI slider where you can set the min/max and steps, inputs are then reflected in the nested input element.
 *
 * @type {{init: RCWDL.features.Slider.init, create: RCWDL.features.Slider.create, setupKeyboard: RCWDL.features.Slider.setupKeyboard, updateInput: RCWDL.features.Slider.updateInput}}
 */
RCWDL.features.Slider = {

  /**
   * Receives a css selector and transforms the target wrapper div and input into a slider.
   *
   * @param {String} selector
   * Css selector for finding targets for conversion.
   */
  init: function (selector) {
    'use strict';
    var range = document.querySelectorAll(selector);

    if (typeof range[0] !== 'undefined') {
      if (range.length > 0) {

        range.forEach(function (item) {
          // Create Slider
          RCWDL.features.Slider.create(item);
        });
      }
      else {
        RCWDL.features.Slider.create(range[0]);
      }
    }
  },

  /**
   * Create the slider using the found node items.
   *
   * @param {Node} item
   * Node item to be converted.
   */
  create: function (item) {
    'use strict';

    // Setup initial values for the slider and input.
    var min = parseInt(item.getAttribute('data-js-min')) || 0;
    var max = parseInt(item.getAttribute('data-js-max')) || 100;
    var start = parseInt(item.getAttribute('data-js-start')) || min;
    var step = parseInt(item.getAttribute('data-js-step')) || max / 10;

    var sliderInput = item.getElementsByTagName('input');
    sliderInput[0].value = start;
    sliderInput[0].style.display = 'none';

    noUiSlider.create(item, {
      start: [start],
      connect: [true, false],
      behaviour: 'tap-drag',
      step: step,
      range: {
        min: min,
        max: max
      },
      pips: {
        mode: 'steps',
        stepped: true,
        density: 2
      }
    });

    RCWDL.features.Slider.setupKeyboard(item);
    RCWDL.features.Slider.updateInput(item);
  },

  /**
   *	Extended the functionality/accessibility of noUiSlider by adding keyboard control.
   *
   *	@param {Node} slider
   *  DOM node item for manipulation.
   */
  setupKeyboard: function (slider) {
    'use strict';

    // handles keyboard updates
    // see http://refreshless.com/nouislider/examples/#section-keypress
    slider.addEventListener('keydown', function (event) {
      var value = Number(this.noUiSlider.get());
      var step = this.noUiSlider.steps()[0][1];
      var handleSteps = step / event.target.getAttribute('aria-valuemax');

      switch (event.which) {
        case 40: // down
        case 37: // left
          // decrements value by a single step
          this.noUiSlider.set(value - step);
          break;

        case 38: // up
        case 39: // right
          // increments value by a single step
          this.noUiSlider.set(value + step);
          break;

        case 34: // page down
          // decrements value by 10 steps
          this.noUiSlider.set(value - (step * 3));
          break;

        case 33: // page up
          // increments value by 10 steps
          this.noUiSlider.set(value + (step * 3));
          break;

        case 36: // home
          this.noUiSlider.set(0);
          break;

        case 35: // end
          this.noUiSlider.set(handleSteps * step);
          break;

        default:
          return;
      }

      event.preventDefault();
    });
  },

  /**
   * Whenever the slider is updated/set also update the nested input.
   *
   * @param {Node} slider
   * DOM node item for manipulation.
   */
  updateInput: function (slider) {
    'use strict';

    slider.noUiSlider.on('set', function (event, targetClass) {
      var thisInput = document.querySelector('#' + this.target.attributes['data-js-slider'].value);
      thisInput.value = arguments[0];
    });
  }
};

RCWDL.ready(RCWDL.features.Slider.init('[data-js-slider]'));
