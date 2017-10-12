/**
 * Function factory object for adding features to form elements.
 *
 * @type {{labels: RCWDL.features.FormElements.labels, passwordField: RCWDL.features.FormElements.passwordField}}
 */
RCWDL.features.FormElements = {

  /**
   * To enhance the label behaviour (Moving the label out of the input when in use), we also want to keep the label out
   * after the focus ends on the input. To keep this as light as possible, we just improve the DOM behaviour by
   * keeping the value attribute up to date. With this we can then target the state with css.
   *
   * @param {String} target
   * Css selector.
   */
  labels: function (target) {
    'use strict';
    var inputs = document.querySelectorAll(target);
    var targets = [];

    Object.keys(inputs).forEach(function (inputList) {
      var items = inputs[inputList].querySelectorAll(
        '[type="text"], ' +
        '[type="textbox"], ' +
        '[type="password"], ' +
        '[type="email"], ' +
        '[type="number"], ' +
        '[type="tel"], ' +
        'textarea, ' +
        '[type="url"], ' +
        '[type="search"]');
      // Make sure the wrapper we're targeting actually has inputs inside.
      if (items.length > 0) {
        targets.push(inputs[inputList]);
      }
    });

    targets.forEach(function (input) {
      // Make sure all the elements have been setup correctly and add value attributes if they're missing.
      if (input.getElementsByTagName('textarea').length > 0 &&
          input.getElementsByTagName('textarea')[0].getAttribute('value') === null) {
        input.getElementsByTagName('textarea')[0].setAttribute('value', '');
      }
      else if (input.getElementsByTagName('input')[0].getAttribute('value') === null) {
        input.getElementsByTagName('input')[0].setAttribute('value', '');
      }

      // Attach an event handler to each input and trigger when a value is input.
      input.addEventListener('input', function (event) {
        // Update the attribute to match the DOM state.
        event.target.setAttribute('value', event.target.value);
      });
    });
  },

  /**
   * Adds show/hide toggle to password inputs.
   * @param {String} target
   * Css selector for targeting.
   */
  passwordField: function (target) {
    'use strict';
    var inputs = document.querySelectorAll(target);

    Object.keys(inputs).forEach(function (input) {
      var eye = document.createElement('button');

      // Initial styles and screen reader text for label.
      eye.innerHTML = '<span class="screen-reader-text">Toggle password visibility</span>';
      eye.classList.add('rc-input--password__toggle');

      inputs[input].parentNode.appendChild(eye);

      eye.addEventListener('click', function (event) {
        var input = event.target.parentNode.querySelector('input');

        // Toggle between types.
        switch (input.getAttribute('type')) {
          case 'password':
            input.setAttribute('type', 'text');
            break;
          case 'text':
            input.setAttribute('type', 'password');
            break;
        }
      });
    });
  }
};

RCWDL.ready(RCWDL.features.FormElements.labels('.rc-input'));
RCWDL.ready(RCWDL.features.FormElements.passwordField('[type="password"]'));

/**
 * Converts selector element into Choices.js selectors with improved accessibility and styling.
 *
 * @param {String} selector
 * CSS selector for targeting select elements. Default: [data-js-select]
 * @constructor
 */
RCWDL.features.Selects = function (selector) {
  'use strict';
  selector = selector || '[data-js-select]';
  var selects = document.querySelectorAll(selector);

  // Check if we actually have any selects on the page.
  if (selects !== null && selects.length > 0) {
    selects.forEach(function (select) {
      new Choices(select,
        {
          placeholder: true,
          placeholderValue: 'Select an option',
          searchEnabled: false,
          shouldSort: false,
          // Check if different colour scheme has been applied
          classNames: {
            containerOuter: RCWDL.utilities.hasClass(select, 'rc-input--white') ? 'choices choices--white' : 'choices'
          }
        }
      );
    });
  }
};

RCWDL.ready(RCWDL.features.Selects());

/**
 * Function generate fallback datepicker calendars when the element type date isn't supported.
 *
 * @type {{init: RCWDL.features.Datepickers.init, createDatePicker: RCWDL.features.Datepickers.createDatePicker}}
 */

RCWDL.features.Datepickers = {

  /**
   * Initialisation function to check for and cycle through target elements.
   * @param {String} selector
   * Css selector. Default: [type="date"]
   */
  init: function (selector) {
    'use strict';
    selector = selector || '[type="date"]';
    var datepickers = document.querySelector(selector);

    // Check if we actually have any datepickers on the page.
    if (datepickers !== null) {
      // Check if this browser supports the type date.
      if (Modernizr.inputtypes.date === false) {

        if (Array.isArray(datepickers)) {
          datepickers.forEach(function (picker) {
            RCWDL.features.Datepickers.createDatePicker(picker);
          });
        }
        else {
          RCWDL.features.Datepickers.createDatePicker(datepickers);
        }
      }
    }
  },

  /**
   * Receives node objects for processing into date pickers.
   * @param {Node} picker
   * Single Node to be process into date picker.
   */
  createDatePicker: function (picker) {
    'use strict';
    picker.setAttribute('type', 'text');
    picker.setAttribute('placeholder', 'Select a date');

    new Pikaday(
      {
        field: picker,
        format: picker.getAttribute('data-js-dateformat')
      }
    );
  }
};

RCWDL.ready(RCWDL.features.Datepickers.init());
