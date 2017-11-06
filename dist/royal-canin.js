/*! choices.js v2.8.10 | (c) 2017 Josh Johnson | https://github.com/jshjohnson/Choices#readme */ 
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Choices=t():e.Choices=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return e[n].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var i={};return t.m=e,t.c=i,t.p="/assets/scripts/dist/",t(0)}([function(e,t,i){e.exports=i(1)},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),c=i(2),l=n(c),u=i(3),h=n(u),d=i(4),f=n(d),p=i(30),v=i(31);i(32);var m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[data-choice]",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r(this,e),(0,v.isType)("String",t)){var n=document.querySelectorAll(t);if(n.length>1)for(var s=1;s<n.length;s++){var o=n[s];new e(o,i)}}var a={silent:!1,items:[],choices:[],maxItemCount:-1,addItems:!0,removeItems:!0,removeItemButton:!1,editItems:!1,duplicateItems:!0,delimiter:",",paste:!0,searchEnabled:!0,searchChoices:!0,searchFloor:1,searchResultLimit:4,searchFields:["label","value"],position:"auto",resetScrollPosition:!0,regexFilter:null,shouldSort:!0,shouldSortItems:!1,sortFilter:v.sortByAlpha,placeholder:!0,placeholderValue:null,prependValue:null,appendValue:null,renderSelectedChoices:"auto",loadingText:"Loading...",noResultsText:"No results found",noChoicesText:"No choices to choose from",itemSelectText:"Press to select",addItemText:function(e){return'Press Enter to add <b>"'+e+'"</b>'},maxItemText:function(e){return"Only "+e+" values can be added."},uniqueItemText:"Only unique values can be added.",classNames:{containerOuter:"choices",containerInner:"choices__inner",input:"choices__input",inputCloned:"choices__input--cloned",list:"choices__list",listItems:"choices__list--multiple",listSingle:"choices__list--single",listDropdown:"choices__list--dropdown",item:"choices__item",itemSelectable:"choices__item--selectable",itemDisabled:"choices__item--disabled",itemChoice:"choices__item--choice",placeholder:"choices__placeholder",group:"choices__group",groupHeading:"choices__heading",button:"choices__button",activeState:"is-active",focusState:"is-focused",openState:"is-open",disabledState:"is-disabled",highlightedState:"is-highlighted",hiddenState:"is-hidden",flippedState:"is-flipped",loadingState:"is-loading"},fuseOptions:{include:"score"},callbackOnInit:null,callbackOnCreateTemplates:null};if(this.idNames={itemChoice:"item-choice"},this.config=(0,v.extend)(a,i),"auto"!==this.config.renderSelectedChoices&&"always"!==this.config.renderSelectedChoices&&(this.config.silent||console.warn("renderSelectedChoices: Possible values are 'auto' and 'always'. Falling back to 'auto'."),this.config.renderSelectedChoices="auto"),this.store=new f.default(this.render),this.initialised=!1,this.currentState={},this.prevState={},this.currentValue="",this.element=t,this.passedElement=(0,v.isType)("String",t)?document.querySelector(t):t,this.isTextElement="text"===this.passedElement.type,this.isSelectOneElement="select-one"===this.passedElement.type,this.isSelectMultipleElement="select-multiple"===this.passedElement.type,this.isSelectElement=this.isSelectOneElement||this.isSelectMultipleElement,this.isValidElementType=this.isTextElement||this.isSelectElement,!this.passedElement)return void(this.config.silent||console.error("Passed element not found"));this.config.shouldSortItems===!0&&this.isSelectOneElement&&(this.config.silent||console.warn("shouldSortElements: Type of passed element is 'select-one', falling back to false.")),this.highlightPosition=0,this.canSearch=this.config.searchEnabled,this.presetChoices=this.config.choices,this.presetItems=this.config.items,this.passedElement.value&&(this.presetItems=this.presetItems.concat(this.passedElement.value.split(this.config.delimiter))),this.baseId=(0,v.generateId)(this.passedElement,"choices-"),this.render=this.render.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onClick=this._onClick.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onMouseOver=this._onMouseOver.bind(this),this._onPaste=this._onPaste.bind(this),this._onInput=this._onInput.bind(this),this.wasTap=!0;var c="classList"in document.documentElement;c||this.config.silent||console.error("Choices: Your browser doesn't support Choices");var l=(0,v.isElement)(this.passedElement)&&this.isValidElementType;if(l){if("active"===this.passedElement.getAttribute("data-choice"))return;this.init()}else this.config.silent||console.error("Incompatible input passed")}return a(e,[{key:"init",value:function(){if(this.initialised!==!0){var e=this.config.callbackOnInit;this.initialised=!0,this._createTemplates(),this._createInput(),this.store.subscribe(this.render),this.render(),this._addEventListeners(),e&&(0,v.isType)("Function",e)&&e.call(this)}}},{key:"destroy",value:function(){if(this.initialised!==!1){this._removeEventListeners(),this.passedElement.classList.remove(this.config.classNames.input,this.config.classNames.hiddenState),this.passedElement.removeAttribute("tabindex");var e=this.passedElement.getAttribute("data-choice-orig-style");Boolean(e)?(this.passedElement.removeAttribute("data-choice-orig-style"),this.passedElement.setAttribute("style",e)):this.passedElement.removeAttribute("style"),this.passedElement.removeAttribute("aria-hidden"),this.passedElement.removeAttribute("data-choice"),this.passedElement.value=this.passedElement.value,this.containerOuter.parentNode.insertBefore(this.passedElement,this.containerOuter),this.containerOuter.parentNode.removeChild(this.containerOuter),this.clearStore(),this.config.templates=null,this.initialised=!1}}},{key:"renderGroups",value:function(e,t,i){var n=this,s=i||document.createDocumentFragment(),o=this.config.sortFilter;return this.config.shouldSort&&e.sort(o),e.forEach(function(e){var i=t.filter(function(t){return n.isSelectOneElement?t.groupId===e.id:t.groupId===e.id&&!t.selected});if(i.length>=1){var o=n._getTemplate("choiceGroup",e);s.appendChild(o),n.renderChoices(i,s)}}),s}},{key:"renderChoices",value:function(e,t){var i=this,n=t||document.createDocumentFragment(),s=this.isSearching?v.sortByScore:this.config.sortFilter,o=this.config.renderSelectedChoices,r=function(e){var t="auto"!==o||(i.isSelectOneElement||!e.selected);if(t){var s=i._getTemplate("choice",e);n.appendChild(s)}};if((this.config.shouldSort||this.isSearching)&&e.sort(s),this.isSearching)for(var a=0;a<this.config.searchResultLimit;a++){var c=e[a];c&&r(c)}else e.forEach(function(e){return r(e)});return n}},{key:"renderItems",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=i||document.createDocumentFragment();if(this.config.shouldSortItems&&!this.isSelectOneElement&&e.sort(this.config.sortFilter),this.isTextElement){var s=this.store.getItemsReducedToValues(e),o=s.join(this.config.delimiter);this.passedElement.setAttribute("value",o),this.passedElement.value=o}else{var r=document.createDocumentFragment();e.forEach(function(e){var i=t._getTemplate("option",e);r.appendChild(i)}),this.passedElement.innerHTML="",this.passedElement.appendChild(r)}return e.forEach(function(e){var i=t._getTemplate("item",e);n.appendChild(i)}),n}},{key:"render",value:function(){if(this.currentState=this.store.getState(),this.currentState!==this.prevState){if((this.currentState.choices!==this.prevState.choices||this.currentState.groups!==this.prevState.groups)&&this.isSelectElement){var e=this.store.getGroupsFilteredByActive(),t=this.store.getChoicesFilteredByActive(),i=document.createDocumentFragment();this.choiceList.innerHTML="",this.config.resetScrollPosition&&(this.choiceList.scrollTop=0),e.length>=1&&this.isSearching!==!0?i=this.renderGroups(e,t,i):t.length>=1&&(i=this.renderChoices(t,i));var n=this.store.getItemsFilteredByActive(),s=this._canAddItem(n,this.input.value);if(i.childNodes&&i.childNodes.length>0)s.response?(this.choiceList.appendChild(i),this._highlightChoice()):this.choiceList.appendChild(this._getTemplate("notice",s.notice));else{var o=void 0,r=void 0;this.isSearching?(r=(0,v.isType)("Function",this.config.noResultsText)?this.config.noResultsText():this.config.noResultsText,o=this._getTemplate("notice",r)):(r=(0,v.isType)("Function",this.config.noChoicesText)?this.config.noChoicesText():this.config.noChoicesText,o=this._getTemplate("notice",r)),this.choiceList.appendChild(o)}}if(this.currentState.items!==this.prevState.items){var a=this.store.getItemsFilteredByActive();if(a){var c=this.renderItems(a);this.itemList.innerHTML="",c.childNodes&&this.itemList.appendChild(c)}}this.prevState=this.currentState}}},{key:"highlightItem",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e)return this;var i=e.id,n=e.groupId,s=n>=0?this.store.getGroupById(n):null;return this.store.dispatch((0,p.highlightItem)(i,!0)),t&&(s&&s.value?(0,v.triggerEvent)(this.passedElement,"highlightItem",{id:i,value:e.value,label:e.label,groupValue:s.value}):(0,v.triggerEvent)(this.passedElement,"highlightItem",{id:i,value:e.value,label:e.label})),this}},{key:"unhighlightItem",value:function(e){if(!e)return this;var t=e.id,i=e.groupId,n=i>=0?this.store.getGroupById(i):null;return this.store.dispatch((0,p.highlightItem)(t,!1)),n&&n.value?(0,v.triggerEvent)(this.passedElement,"unhighlightItem",{id:t,value:e.value,label:e.label,groupValue:n.value}):(0,v.triggerEvent)(this.passedElement,"unhighlightItem",{id:t,value:e.value,label:e.label}),this}},{key:"highlightAll",value:function(){var e=this,t=this.store.getItems();return t.forEach(function(t){e.highlightItem(t)}),this}},{key:"unhighlightAll",value:function(){var e=this,t=this.store.getItems();return t.forEach(function(t){e.unhighlightItem(t)}),this}},{key:"removeItemsByValue",value:function(e){var t=this;if(!e||!(0,v.isType)("String",e))return this;var i=this.store.getItemsFilteredByActive();return i.forEach(function(i){i.value===e&&t._removeItem(i)}),this}},{key:"removeActiveItems",value:function(e){var t=this,i=this.store.getItemsFilteredByActive();return i.forEach(function(i){i.active&&e!==i.id&&t._removeItem(i)}),this}},{key:"removeHighlightedItems",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.store.getItemsFilteredByActive();return i.forEach(function(i){i.highlighted&&i.active&&(e._removeItem(i),t&&e._triggerChange(i.value))}),this}},{key:"showDropdown",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=document.body,i=document.documentElement,n=Math.max(t.scrollHeight,t.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight);this.containerOuter.classList.add(this.config.classNames.openState),this.containerOuter.setAttribute("aria-expanded","true"),this.dropdown.classList.add(this.config.classNames.activeState),this.dropdown.setAttribute("aria-expanded","true");var s=this.dropdown.getBoundingClientRect(),o=Math.ceil(s.top+window.scrollY+this.dropdown.offsetHeight),r=!1;return"auto"===this.config.position?r=o>=n:"top"===this.config.position&&(r=!0),r&&this.containerOuter.classList.add(this.config.classNames.flippedState),e&&this.canSearch&&document.activeElement!==this.input&&this.input.focus(),(0,v.triggerEvent)(this.passedElement,"showDropdown",{}),this}},{key:"hideDropdown",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.containerOuter.classList.contains(this.config.classNames.flippedState);return this.containerOuter.classList.remove(this.config.classNames.openState),this.containerOuter.setAttribute("aria-expanded","false"),this.dropdown.classList.remove(this.config.classNames.activeState),this.dropdown.setAttribute("aria-expanded","false"),t&&this.containerOuter.classList.remove(this.config.classNames.flippedState),e&&this.canSearch&&document.activeElement===this.input&&this.input.blur(),(0,v.triggerEvent)(this.passedElement,"hideDropdown",{}),this}},{key:"toggleDropdown",value:function(){var e=this.dropdown.classList.contains(this.config.classNames.activeState);return e?this.hideDropdown():this.showDropdown(!0),this}},{key:"getValue",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.store.getItemsFilteredByActive(),n=[];return i.forEach(function(i){e.isTextElement?n.push(t?i.value:i):i.active&&n.push(t?i.value:i)}),this.isSelectOneElement?n[0]:n}},{key:"setValue",value:function(e){var t=this;if(this.initialised===!0){var i=[].concat(o(e)),n=function(e){var i=(0,v.getType)(e);if("Object"===i){if(!e.value)return;t.isTextElement?t._addItem(e.value,e.label,e.id,void 0,e.customProperties,null):t._addChoice(e.value,e.label,!0,!1,-1,e.customProperties,null)}else"String"===i&&(t.isTextElement?t._addItem(e):t._addChoice(e,e,!0,!1,-1,null))};i.length>1?i.forEach(function(e){n(e)}):n(i[0])}return this}},{key:"setValueByChoice",value:function(e){var t=this;if(!this.isTextElement){var i=this.store.getChoices(),n=(0,v.isType)("Array",e)?e:[e];n.forEach(function(e){var n=i.find(function(t){return t.value===e});n?n.selected?t.config.silent||console.warn("Attempting to select choice already selected"):t._addItem(n.value,n.label,n.id,n.groupId,n.customProperties,n.keyCode):t.config.silent||console.warn("Attempting to select choice that does not exist")})}return this}},{key:"setChoices",value:function(e,t,i){var n=this,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(this.initialised===!0&&this.isSelectElement){if(!(0,v.isType)("Array",e)||!t)return this;s&&this._clearChoices(),e&&e.length&&(this.containerOuter.classList.remove(this.config.classNames.loadingState),e.forEach(function(e){e.choices?n._addGroup(e,e.id||null,t,i):n._addChoice(e[t],e[i],e.selected,e.disabled,void 0,e.customProperties,null)}))}return this}},{key:"clearStore",value:function(){return this.store.dispatch((0,p.clearAll)()),this}},{key:"clearInput",value:function(){return this.input.value&&(this.input.value=""),this.isSelectOneElement||this._setInputWidth(),!this.isTextElement&&this.config.searchEnabled&&(this.isSearching=!1,this.store.dispatch((0,p.activateChoices)(!0))),this}},{key:"enable",value:function(){this.passedElement.disabled=!1;var e=this.containerOuter.classList.contains(this.config.classNames.disabledState);return this.initialised&&e&&(this._addEventListeners(),this.passedElement.removeAttribute("disabled"),this.input.removeAttribute("disabled"),this.containerOuter.classList.remove(this.config.classNames.disabledState),this.containerOuter.removeAttribute("aria-disabled"),this.isSelectOneElement&&this.containerOuter.setAttribute("tabindex","0")),this}},{key:"disable",value:function(){this.passedElement.disabled=!0;var e=!this.containerOuter.classList.contains(this.config.classNames.disabledState);return this.initialised&&e&&(this._removeEventListeners(),this.passedElement.setAttribute("disabled",""),this.input.setAttribute("disabled",""),this.containerOuter.classList.add(this.config.classNames.disabledState),this.containerOuter.setAttribute("aria-disabled","true"),this.isSelectOneElement&&this.containerOuter.setAttribute("tabindex","-1")),this}},{key:"ajax",value:function(e){var t=this;return this.initialised===!0&&this.isSelectElement&&(requestAnimationFrame(function(){t._handleLoadingState(!0)}),e(this._ajaxCallback())),this}},{key:"_triggerChange",value:function(e){e&&(0,v.triggerEvent)(this.passedElement,"change",{value:e})}},{key:"_handleButtonAction",value:function(e,t){if(e&&t&&this.config.removeItems&&this.config.removeItemButton){var i=t.parentNode.getAttribute("data-id"),n=e.find(function(e){return e.id===parseInt(i,10)});if(this._removeItem(n),this._triggerChange(n.value),this.isSelectOneElement){var s=!!this.config.placeholder&&(this.config.placeholderValue||this.passedElement.getAttribute("placeholder"));if(s){var o=this._getTemplate("placeholder",s);this.itemList.appendChild(o)}}}}},{key:"_handleItemAction",value:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e&&t&&this.config.removeItems&&!this.isSelectOneElement){var s=t.getAttribute("data-id");e.forEach(function(e){e.id!==parseInt(s,10)||e.highlighted?n||e.highlighted&&i.unhighlightItem(e):i.highlightItem(e)}),document.activeElement!==this.input&&this.input.focus()}}},{key:"_handleChoiceAction",value:function(e,t){if(e&&t){var i=t.getAttribute("data-id"),n=this.store.getChoiceById(i),s=e[0]&&e[0].keyCode?e[0].keyCode:null,o=this.dropdown.classList.contains(this.config.classNames.activeState);if(n.keyCode=s,(0,v.triggerEvent)(this.passedElement,"choice",{choice:n}),n&&!n.selected&&!n.disabled){var r=this._canAddItem(e,n.value);r.response&&(this._addItem(n.value,n.label,n.id,n.groupId,n.customProperties,n.keyCode),this._triggerChange(n.value))}this.clearInput(),o&&this.isSelectOneElement&&(this.hideDropdown(),this.containerOuter.focus())}}},{key:"_handleBackspace",value:function(e){if(this.config.removeItems&&e){var t=e[e.length-1],i=e.some(function(e){return e.highlighted});this.config.editItems&&!i&&t?(this.input.value=t.value,this._setInputWidth(),this._removeItem(t),this._triggerChange(t.value)):(i||this.highlightItem(t,!1),this.removeHighlightedItems(!0))}}},{key:"_canAddItem",value:function(e,t){var i=!0,n=(0,v.isType)("Function",this.config.addItemText)?this.config.addItemText(t):this.config.addItemText;(this.isSelectMultipleElement||this.isTextElement)&&this.config.maxItemCount>0&&this.config.maxItemCount<=e.length&&(i=!1,n=(0,v.isType)("Function",this.config.maxItemText)?this.config.maxItemText(this.config.maxItemCount):this.config.maxItemText),this.isTextElement&&this.config.addItems&&i&&this.config.regexFilter&&(i=this._regexFilter(t));var s=!e.some(function(e){return(0,v.isType)("String",t)?e.value===t.trim():e.value===t});return s||this.config.duplicateItems||this.isSelectOneElement||!i||(i=!1,n=(0,v.isType)("Function",this.config.uniqueItemText)?this.config.uniqueItemText(t):this.config.uniqueItemText),{response:i,notice:n}}},{key:"_handleLoadingState",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.itemList.querySelector("."+this.config.classNames.placeholder);if(e)this.containerOuter.classList.add(this.config.classNames.loadingState),this.containerOuter.setAttribute("aria-busy","true"),this.isSelectOneElement?t?t.innerHTML=this.config.loadingText:(t=this._getTemplate("placeholder",this.config.loadingText),this.itemList.appendChild(t)):this.input.placeholder=this.config.loadingText;else{this.containerOuter.classList.remove(this.config.classNames.loadingState);var i=!!this.config.placeholder&&(this.config.placeholderValue||this.passedElement.getAttribute("placeholder"));this.isSelectOneElement?t.innerHTML=i||"":this.input.placeholder=i||""}}},{key:"_ajaxCallback",value:function(){var e=this;return function(t,i,n){if(t&&i){var s=(0,v.isType)("Object",t)?[t]:t;s&&(0,v.isType)("Array",s)&&s.length?(e._handleLoadingState(!1),s.forEach(function(t){if(t.choices){var s=t.id||null;e._addGroup(t,s,i,n)}else e._addChoice(t[i],t[n],t.selected,t.disabled,void 0,t.customProperties,null)})):e._handleLoadingState(!1),e.containerOuter.removeAttribute("aria-busy")}}}},{key:"_searchChoices",value:function(e){var t=(0,v.isType)("String",e)?e.trim():e,i=(0,v.isType)("String",this.currentValue)?this.currentValue.trim():this.currentValue;if(t.length>=1&&t!==i+" "){var n=this.store.getChoicesFilteredBySelectable(),s=t,o=(0,v.isType)("Array",this.config.searchFields)?this.config.searchFields:[this.config.searchFields],r=Object.assign(this.config.fuseOptions,{keys:o}),a=new l.default(n,r),c=a.search(s);this.currentValue=t,this.highlightPosition=0,this.isSearching=!0,this.store.dispatch((0,p.filterChoices)(c))}}},{key:"_handleSearch",value:function(e){if(e){var t=this.store.getChoices(),i=t.some(function(e){return!e.active});this.input===document.activeElement&&(e&&e.length>=this.config.searchFloor?(this.config.searchChoices&&this._searchChoices(e),(0,v.triggerEvent)(this.passedElement,"search",{value:e})):i&&(this.isSearching=!1,this.store.dispatch((0,p.activateChoices)(!0))))}}},{key:"_addEventListeners",value:function(){document.addEventListener("keyup",this._onKeyUp),document.addEventListener("keydown",this._onKeyDown),document.addEventListener("click",this._onClick),document.addEventListener("touchmove",this._onTouchMove),document.addEventListener("touchend",this._onTouchEnd),document.addEventListener("mousedown",this._onMouseDown),document.addEventListener("mouseover",this._onMouseOver),this.isSelectOneElement&&(this.containerOuter.addEventListener("focus",this._onFocus),this.containerOuter.addEventListener("blur",this._onBlur)),this.input.addEventListener("input",this._onInput),this.input.addEventListener("paste",this._onPaste),this.input.addEventListener("focus",this._onFocus),this.input.addEventListener("blur",this._onBlur)}},{key:"_removeEventListeners",value:function(){document.removeEventListener("keyup",this._onKeyUp),document.removeEventListener("keydown",this._onKeyDown),document.removeEventListener("click",this._onClick),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),document.removeEventListener("mousedown",this._onMouseDown),document.removeEventListener("mouseover",this._onMouseOver),this.isSelectOneElement&&(this.containerOuter.removeEventListener("focus",this._onFocus),this.containerOuter.removeEventListener("blur",this._onBlur)),this.input.removeEventListener("input",this._onInput),this.input.removeEventListener("paste",this._onPaste),this.input.removeEventListener("focus",this._onFocus),this.input.removeEventListener("blur",this._onBlur)}},{key:"_setInputWidth",value:function(){if(this.config.placeholderValue||this.passedElement.getAttribute("placeholder")&&this.config.placeholder){var e=!!this.config.placeholder&&(this.config.placeholderValue||this.passedElement.getAttribute("placeholder"));this.input.value&&this.input.value.length>=e.length/1.25&&(this.input.style.width=(0,v.getWidthOfInput)(this.input))}else this.input.style.width=(0,v.getWidthOfInput)(this.input)}},{key:"_onKeyDown",value:function(e){var t,i=this;if(e.target===this.input||this.containerOuter.contains(e.target)){var n=e.target,o=this.store.getItemsFilteredByActive(),r=this.input===document.activeElement,a=this.dropdown.classList.contains(this.config.classNames.activeState),c=this.itemList&&this.itemList.children,l=String.fromCharCode(e.keyCode),u=46,h=8,d=13,f=65,p=27,m=38,g=40,y=33,b=34,E=e.ctrlKey||e.metaKey;this.isTextElement||!/[a-zA-Z0-9-_ ]/.test(l)||a||this.showDropdown(!0),this.canSearch=this.config.searchEnabled;var _=function(){E&&c&&(i.canSearch=!1,i.config.removeItems&&!i.input.value&&i.input===document.activeElement&&i.highlightAll())},S=function(){if(i.isTextElement&&n.value){var t=i.input.value,s=i._canAddItem(o,t);s.response&&(a&&i.hideDropdown(),i._addItem(t),i._triggerChange(t),i.clearInput())}if(n.hasAttribute("data-button")&&(i._handleButtonAction(o,n),e.preventDefault()),a){e.preventDefault();var r=i.dropdown.querySelector("."+i.config.classNames.highlightedState);r&&(o[0]&&(o[0].keyCode=d),i._handleChoiceAction(o,r))}else i.isSelectOneElement&&(a||(i.showDropdown(!0),e.preventDefault()))},I=function(){a&&(i.toggleDropdown(),i.containerOuter.focus())},w=function(){if(a||i.isSelectOneElement){a||i.showDropdown(!0),i.canSearch=!1;var t=e.keyCode===g||e.keyCode===b?1:-1,n=e.metaKey||e.keyCode===b||e.keyCode===y,s=void 0;if(n)s=t>0?Array.from(i.dropdown.querySelectorAll("[data-choice-selectable]")).pop():i.dropdown.querySelector("[data-choice-selectable]");else{var o=i.dropdown.querySelector("."+i.config.classNames.highlightedState);s=o?(0,v.getAdjacentEl)(o,"[data-choice-selectable]",t):i.dropdown.querySelector("[data-choice-selectable]")}s&&((0,v.isScrolledIntoView)(s,i.choiceList,t)||i._scrollToChoice(s,t),i._highlightChoice(s)),e.preventDefault()}},T=function(){!r||e.target.value||i.isSelectOneElement||(i._handleBackspace(o),e.preventDefault())},A=(t={},s(t,f,_),s(t,d,S),s(t,p,I),s(t,m,w),s(t,y,w),s(t,g,w),s(t,b,w),s(t,h,T),s(t,u,T),t);A[e.keyCode]&&A[e.keyCode]()}}},{key:"_onKeyUp",value:function(e){if(e.target===this.input){var t=this.input.value,i=this.store.getItemsFilteredByActive(),n=this._canAddItem(i,t);if(this.isTextElement){var s=this.dropdown.classList.contains(this.config.classNames.activeState);if(t){if(n.notice){var o=this._getTemplate("notice",n.notice);this.dropdown.innerHTML=o.outerHTML}n.response===!0?s||this.showDropdown():!n.notice&&s&&this.hideDropdown()}else s&&this.hideDropdown()}else{var r=46,a=8;e.keyCode!==r&&e.keyCode!==a||e.target.value?this.canSearch&&n.response&&this._handleSearch(this.input.value):!this.isTextElement&&this.isSearching&&(this.isSearching=!1,this.store.dispatch((0,p.activateChoices)(!0)))}this.canSearch=this.config.searchEnabled}}},{key:"_onInput",value:function(){this.isSelectOneElement||this._setInputWidth()}},{key:"_onTouchMove",value:function(){this.wasTap===!0&&(this.wasTap=!1)}},{key:"_onTouchEnd",value:function(e){var t=e.target||e.touches[0].target,i=this.dropdown.classList.contains(this.config.classNames.activeState);this.wasTap===!0&&this.containerOuter.contains(t)&&(t!==this.containerOuter&&t!==this.containerInner||this.isSelectOneElement||(this.isTextElement?document.activeElement!==this.input&&this.input.focus():i||this.showDropdown(!0)),e.stopPropagation()),this.wasTap=!0}},{key:"_onMouseDown",value:function(e){var t=e.target;if(this.containerOuter.contains(t)&&t!==this.input){var i=void 0,n=this.store.getItemsFilteredByActive(),s=e.shiftKey;(i=(0,v.findAncestorByAttrName)(t,"data-button"))?this._handleButtonAction(n,i):(i=(0,v.findAncestorByAttrName)(t,"data-item"))?this._handleItemAction(n,i,s):(i=(0,v.findAncestorByAttrName)(t,"data-choice"))&&this._handleChoiceAction(n,i),e.preventDefault()}}},{key:"_onClick",value:function(e){var t=e.target,i=this.dropdown.classList.contains(this.config.classNames.activeState),n=this.store.getItemsFilteredByActive();if(this.containerOuter.contains(t))t.hasAttribute("data-button")&&this._handleButtonAction(n,t),i?this.isSelectOneElement&&t!==this.input&&!this.dropdown.contains(t)&&this.hideDropdown(!0):this.isTextElement?document.activeElement!==this.input&&this.input.focus():this.canSearch?this.showDropdown(!0):(this.showDropdown(),this.containerOuter.focus());else{var s=n.some(function(e){return e.highlighted});s&&this.unhighlightAll(),this.containerOuter.classList.remove(this.config.classNames.focusState),i&&this.hideDropdown()}}},{key:"_onMouseOver",value:function(e){(e.target===this.dropdown||this.dropdown.contains(e.target))&&e.target.hasAttribute("data-choice")&&this._highlightChoice(e.target)}},{key:"_onPaste",value:function(e){e.target!==this.input||this.config.paste||e.preventDefault()}},{key:"_onFocus",value:function(e){var t=this,i=e.target;if(this.containerOuter.contains(i)){var n=this.dropdown.classList.contains(this.config.classNames.activeState),s={text:function(){i===t.input&&t.containerOuter.classList.add(t.config.classNames.focusState)},"select-one":function(){t.containerOuter.classList.add(t.config.classNames.focusState),i===t.input&&(n||t.showDropdown())},"select-multiple":function(){i===t.input&&(t.containerOuter.classList.add(t.config.classNames.focusState),n||t.showDropdown(!0))}};s[this.passedElement.type]()}}},{key:"_onBlur",value:function(e){var t=this,i=e.target;if(this.containerOuter.contains(i)){var n=this.store.getItemsFilteredByActive(),s=this.dropdown.classList.contains(this.config.classNames.activeState),o=n.some(function(e){return e.highlighted}),r={text:function(){i===t.input&&(t.containerOuter.classList.remove(t.config.classNames.focusState),o&&t.unhighlightAll(),s&&t.hideDropdown())},"select-one":function(){t.containerOuter.classList.remove(t.config.classNames.focusState),i===t.containerOuter&&s&&!t.canSearch&&t.hideDropdown(),i===t.input&&s&&t.hideDropdown()},"select-multiple":function(){i===t.input&&(t.containerOuter.classList.remove(t.config.classNames.focusState),s&&t.hideDropdown(),o&&t.unhighlightAll())}};r[this.passedElement.type]()}}},{key:"_regexFilter",value:function(e){if(!e)return!1;var t=this.config.regexFilter,i=new RegExp(t.source,"i");return i.test(e)}},{key:"_scrollToChoice",value:function(e,t){var i=this;if(e){var n=this.choiceList.offsetHeight,s=e.offsetHeight,o=e.offsetTop+s,r=this.choiceList.scrollTop+n,a=t>0?this.choiceList.scrollTop+o-r:e.offsetTop,c=function e(){var n=4,s=i.choiceList.scrollTop,o=!1,r=void 0,c=void 0;t>0?(r=(a-s)/n,c=r>1?r:1,i.choiceList.scrollTop=s+c,s<a&&(o=!0)):(r=(s-a)/n,c=r>1?r:1,i.choiceList.scrollTop=s-c,s>a&&(o=!0)),o&&requestAnimationFrame(function(i){e(i,a,t)})};requestAnimationFrame(function(e){c(e,a,t)})}}},{key:"_highlightChoice",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=Array.from(this.dropdown.querySelectorAll("[data-choice-selectable]")),n=t;if(i&&i.length){var s=Array.from(this.dropdown.querySelectorAll("."+this.config.classNames.highlightedState));s.forEach(function(t){t.classList.remove(e.config.classNames.highlightedState),t.setAttribute("aria-selected","false")}),n?this.highlightPosition=i.indexOf(n):(n=i.length>this.highlightPosition?i[this.highlightPosition]:i[i.length-1],n||(n=i[0])),n.classList.add(this.config.classNames.highlightedState),n.setAttribute("aria-selected","true"),this.containerOuter.setAttribute("aria-activedescendant",n.id),this.input.setAttribute("aria-activedescendant",n.id)}}},{key:"_addItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,r=(0,v.isType)("String",e)?e.trim():e,a=o,c=this.store.getItems(),l=t||r,u=parseInt(i,10)||-1,h=n>=0?this.store.getGroupById(n):null,d=c?c.length+1:1;return this.config.prependValue&&(r=this.config.prependValue+r.toString()),this.config.appendValue&&(r+=this.config.appendValue.toString()),this.store.dispatch((0,p.addItem)(r,l,d,u,n,s,a)),this.isSelectOneElement&&this.removeActiveItems(d),h&&h.value?(0,v.triggerEvent)(this.passedElement,"addItem",{id:d,value:r,label:l,groupValue:h.value,keyCode:a}):(0,v.triggerEvent)(this.passedElement,"addItem",{id:d,value:r,label:l,keyCode:a}),this}},{key:"_removeItem",value:function(e){if(!e||!(0,v.isType)("Object",e))return this;var t=e.id,i=e.value,n=e.label,s=e.choiceId,o=e.groupId,r=o>=0?this.store.getGroupById(o):null;return this.store.dispatch((0,p.removeItem)(t,s)),r&&r.value?(0,v.triggerEvent)(this.passedElement,"removeItem",{id:t,value:i,label:n,groupValue:r.value}):(0,v.triggerEvent)(this.passedElement,"removeItem",{id:t,value:i,label:n}),this}},{key:"_addChoice",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;
if("undefined"!=typeof e&&null!==e){var a=this.store.getChoices(),c=t||e,l=a?a.length+1:1,u=this.baseId+"-"+this.idNames.itemChoice+"-"+l;this.store.dispatch((0,p.addChoice)(e,c,l,s,n,u,o,r)),i&&this._addItem(e,c,l,void 0,o,r)}}},{key:"_clearChoices",value:function(){this.store.dispatch((0,p.clearChoices)())}},{key:"_addGroup",value:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"label",o=(0,v.isType)("Object",e)?e.choices:Array.from(e.getElementsByTagName("OPTION")),r=t?t:Math.floor((new Date).valueOf()*Math.random()),a=!!e.disabled&&e.disabled;o?(this.store.dispatch((0,p.addGroup)(e.label,r,!0,a)),o.forEach(function(e){var t=e.disabled||e.parentNode&&e.parentNode.disabled,o=(0,v.isType)("Object",e)?e[s]:e.innerHTML;i._addChoice(e[n],o,e.selected,t,r,e.customProperties)})):this.store.dispatch((0,p.addGroup)(e.label,e.id,!1,e.disabled))}},{key:"_getTemplate",value:function(e){if(!e)return null;for(var t=this.config.templates,i=arguments.length,n=Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];return t[e].apply(t,n)}},{key:"_createTemplates",value:function(){var e=this,t=this.config.classNames,i={containerOuter:function(i){return(0,v.strToEl)('\n          <div\n            class="'+t.containerOuter+'"\n            '+(e.isSelectElement?e.config.searchEnabled?'role="combobox" aria-autocomplete="list"':'role="listbox"':"")+'\n            data-type="'+e.passedElement.type+'"\n            '+(e.isSelectOneElement?'tabindex="0"':"")+'\n            aria-haspopup="true"\n            aria-expanded="false"\n            dir="'+i+'"\n            >\n          </div>\n        ')},containerInner:function(){return(0,v.strToEl)('\n          <div class="'+t.containerInner+'"></div>\n        ')},itemList:function(){var i,n=(0,h.default)(t.list,(i={},s(i,t.listSingle,e.isSelectOneElement),s(i,t.listItems,!e.isSelectOneElement),i));return(0,v.strToEl)('\n          <div class="'+n+'"></div>\n        ')},placeholder:function(e){return(0,v.strToEl)('\n          <div class="'+t.placeholder+'">\n            '+e+"\n          </div>\n        ")},item:function(i){var n,o=(0,h.default)(t.item,(n={},s(n,t.highlightedState,i.highlighted),s(n,t.itemSelectable,!i.highlighted),n));if(e.config.removeItemButton){var r;return o=(0,h.default)(t.item,(r={},s(r,t.highlightedState,i.highlighted),s(r,t.itemSelectable,!i.disabled),r)),(0,v.strToEl)('\n            <div\n              class="'+o+'"\n              data-item\n              data-id="'+i.id+'"\n              data-value="'+i.value+'"\n              data-deletable\n              '+(i.active?'aria-selected="true"':"")+"\n              "+(i.disabled?'aria-disabled="true"':"")+"\n              >\n              "+i.label+'<!--\n           --><button\n                type="button"\n                class="'+t.button+'"\n                data-button\n                aria-label="Remove item: \''+i.value+"'\"\n                >\n                Remove item\n              </button>\n            </div>\n          ")}return(0,v.strToEl)('\n          <div\n            class="'+o+'"\n            data-item\n            data-id="'+i.id+'"\n            data-value="'+i.value+'"\n            '+(i.active?'aria-selected="true"':"")+"\n            "+(i.disabled?'aria-disabled="true"':"")+"\n            >\n            "+i.label+"\n          </div>\n        ")},choiceList:function(){return(0,v.strToEl)('\n          <div\n            class="'+t.list+'"\n            dir="ltr"\n            role="listbox"\n            '+(e.isSelectOneElement?"":'aria-multiselectable="true"')+"\n            >\n          </div>\n        ")},choiceGroup:function(e){var i=(0,h.default)(t.group,s({},t.itemDisabled,e.disabled));return(0,v.strToEl)('\n          <div\n            class="'+i+'"\n            data-group\n            data-id="'+e.id+'"\n            data-value="'+e.value+'"\n            role="group"\n            '+(e.disabled?'aria-disabled="true"':"")+'\n            >\n            <div class="'+t.groupHeading+'">'+e.value+"</div>\n          </div>\n        ")},choice:function(i){var n,o=(0,h.default)(t.item,t.itemChoice,(n={},s(n,t.itemDisabled,i.disabled),s(n,t.itemSelectable,!i.disabled),n));return(0,v.strToEl)('\n          <div\n            class="'+o+'"\n            data-select-text="'+e.config.itemSelectText+'"\n            data-choice\n            data-id="'+i.id+'"\n            data-value="'+i.value+'"\n            '+(i.disabled?'data-choice-disabled aria-disabled="true"':"data-choice-selectable")+'\n            id="'+i.elementId+'"\n            '+(i.groupId>0?'role="treeitem"':'role="option"')+"\n            >\n            "+i.label+"\n          </div>\n        ")},input:function(){var e=(0,h.default)(t.input,t.inputCloned);return(0,v.strToEl)('\n          <input\n            type="text"\n            class="'+e+'"\n            autocomplete="off"\n            autocapitalize="off"\n            spellcheck="false"\n            role="textbox"\n            aria-autocomplete="list"\n            >\n        ')},dropdown:function(){var e=(0,h.default)(t.list,t.listDropdown);return(0,v.strToEl)('\n          <div\n            class="'+e+'"\n            aria-expanded="false"\n            >\n          </div>\n        ')},notice:function(e){var i=(0,h.default)(t.item,t.itemChoice);return(0,v.strToEl)('\n          <div class="'+i+'">\n            '+e+"\n          </div>\n        ")},option:function(e){return(0,v.strToEl)('\n          <option value="'+e.value+'" selected>'+e.label+"</option>\n        ")}},n=this.config.callbackOnCreateTemplates,o={};n&&(0,v.isType)("Function",n)&&(o=n.call(this,v.strToEl)),this.config.templates=(0,v.extend)(i,o)}},{key:"_createInput",value:function(){var e=this,t=this.passedElement.getAttribute("dir")||"ltr",i=this._getTemplate("containerOuter",t),n=this._getTemplate("containerInner"),s=this._getTemplate("itemList"),o=this._getTemplate("choiceList"),r=this._getTemplate("input"),a=this._getTemplate("dropdown"),c=!!this.config.placeholder&&(this.config.placeholderValue||this.passedElement.getAttribute("placeholder"));this.containerOuter=i,this.containerInner=n,this.input=r,this.choiceList=o,this.itemList=s,this.dropdown=a,this.passedElement.classList.add(this.config.classNames.input,this.config.classNames.hiddenState),this.passedElement.tabIndex="-1";var l=this.passedElement.getAttribute("style");if(Boolean(l)&&this.passedElement.setAttribute("data-choice-orig-style",l),this.passedElement.setAttribute("style","display:none;"),this.passedElement.setAttribute("aria-hidden","true"),this.passedElement.setAttribute("data-choice","active"),(0,v.wrap)(this.passedElement,n),(0,v.wrap)(n,i),c&&(r.placeholder=c,this.isSelectOneElement||(r.style.width=(0,v.getWidthOfInput)(r))),this.config.addItems||this.disable(),i.appendChild(n),i.appendChild(a),n.appendChild(s),this.isTextElement||a.appendChild(o),this.isSelectMultipleElement||this.isTextElement?n.appendChild(r):this.canSearch&&a.insertBefore(r,a.firstChild),this.isSelectElement){var u=Array.from(this.passedElement.getElementsByTagName("OPTGROUP"));if(this.highlightPosition=0,this.isSearching=!1,u&&u.length)u.forEach(function(t){e._addGroup(t,t.id||null)});else{var h=Array.from(this.passedElement.options),d=this.config.sortFilter,f=this.presetChoices;h.forEach(function(e){f.push({value:e.value,label:e.innerHTML,selected:e.selected,disabled:e.disabled||e.parentNode.disabled})}),this.config.shouldSort&&f.sort(d);var p=f.some(function(e){return e.selected});f.forEach(function(t,i){e.isSelectOneElement?p||!p&&i>0?e._addChoice(t.value,t.label,t.selected,t.disabled,void 0,t.customProperties):e._addChoice(t.value,t.label,!0,!1,void 0,t.customProperties):e._addChoice(t.value,t.label,t.selected,t.disabled,void 0,t.customProperties)})}}else this.isTextElement&&this.presetItems.forEach(function(t){var i=(0,v.getType)(t);if("Object"===i){if(!t.value)return;e._addItem(t.value,t.label,t.id,void 0,t.customProperties)}else"String"===i&&e._addItem(t)})}}]),e}();e.exports=m},function(e,t,i){!function(t){"use strict";function i(){console.log.apply(console,arguments)}function n(e,t){var i;this.list=e,this.options=t=t||{};for(i in a)a.hasOwnProperty(i)&&("boolean"==typeof a[i]?this.options[i]=i in t?t[i]:a[i]:this.options[i]=t[i]||a[i])}function s(e,t,i){var n,r,a,c,l,u;if(t){if(a=t.indexOf("."),a!==-1?(n=t.slice(0,a),r=t.slice(a+1)):n=t,c=e[n],null!==c&&void 0!==c)if(r||"string"!=typeof c&&"number"!=typeof c)if(o(c))for(l=0,u=c.length;l<u;l++)s(c[l],r,i);else r&&s(c,r,i);else i.push(c)}else i.push(e);return i}function o(e){return"[object Array]"===Object.prototype.toString.call(e)}function r(e,t){t=t||{},this.options=t,this.options.location=t.location||r.defaultOptions.location,this.options.distance="distance"in t?t.distance:r.defaultOptions.distance,this.options.threshold="threshold"in t?t.threshold:r.defaultOptions.threshold,this.options.maxPatternLength=t.maxPatternLength||r.defaultOptions.maxPatternLength,this.pattern=t.caseSensitive?e:e.toLowerCase(),this.patternLen=e.length,this.patternLen<=this.options.maxPatternLength&&(this.matchmask=1<<this.patternLen-1,this.patternAlphabet=this._calculatePatternAlphabet())}var a={id:null,caseSensitive:!1,include:[],shouldSort:!0,searchFn:r,sortFn:function(e,t){return e.score-t.score},getFn:s,keys:[],verbose:!1,tokenize:!1,matchAllTokens:!1,tokenSeparator:/ +/g,minMatchCharLength:1,findAllMatches:!1};n.VERSION="2.7.3",n.prototype.set=function(e){return this.list=e,e},n.prototype.search=function(e){this.options.verbose&&i("\nSearch term:",e,"\n"),this.pattern=e,this.results=[],this.resultMap={},this._keyMap=null,this._prepareSearchers(),this._startSearch(),this._computeScore(),this._sort();var t=this._format();return t},n.prototype._prepareSearchers=function(){var e=this.options,t=this.pattern,i=e.searchFn,n=t.split(e.tokenSeparator),s=0,o=n.length;if(this.options.tokenize)for(this.tokenSearchers=[];s<o;s++)this.tokenSearchers.push(new i(n[s],e));this.fullSeacher=new i(t,e)},n.prototype._startSearch=function(){var e,t,i,n,s=this.options,o=s.getFn,r=this.list,a=r.length,c=this.options.keys,l=c.length,u=null;if("string"==typeof r[0])for(i=0;i<a;i++)this._analyze("",r[i],i,i);else for(this._keyMap={},i=0;i<a;i++)for(u=r[i],n=0;n<l;n++){if(e=c[n],"string"!=typeof e){if(t=1-e.weight||1,this._keyMap[e.name]={weight:t},e.weight<=0||e.weight>1)throw new Error("Key weight has to be > 0 and <= 1");e=e.name}else this._keyMap[e]={weight:1};this._analyze(e,o(u,e,[]),u,i)}},n.prototype._analyze=function(e,t,n,s){var r,a,c,l,u,h,d,f,p,v,m,g,y,b,E,_=this.options,S=!1;if(void 0!==t&&null!==t){a=[];var I=0;if("string"==typeof t){if(r=t.split(_.tokenSeparator),_.verbose&&i("---------\nKey:",e),this.options.tokenize){for(b=0;b<this.tokenSearchers.length;b++){for(f=this.tokenSearchers[b],_.verbose&&i("Pattern:",f.pattern),p=[],g=!1,E=0;E<r.length;E++){v=r[E],m=f.search(v);var w={};m.isMatch?(w[v]=m.score,S=!0,g=!0,a.push(m.score)):(w[v]=1,this.options.matchAllTokens||a.push(1)),p.push(w)}g&&I++,_.verbose&&i("Token scores:",p)}for(l=a[0],h=a.length,b=1;b<h;b++)l+=a[b];l/=h,_.verbose&&i("Token score average:",l)}d=this.fullSeacher.search(t),_.verbose&&i("Full text score:",d.score),u=d.score,void 0!==l&&(u=(u+l)/2),_.verbose&&i("Score average:",u),y=!this.options.tokenize||!this.options.matchAllTokens||I>=this.tokenSearchers.length,_.verbose&&i("Check Matches",y),(S||d.isMatch)&&y&&(c=this.resultMap[s],c?c.output.push({key:e,score:u,matchedIndices:d.matchedIndices}):(this.resultMap[s]={item:n,output:[{key:e,score:u,matchedIndices:d.matchedIndices}]},this.results.push(this.resultMap[s])))}else if(o(t))for(b=0;b<t.length;b++)this._analyze(e,t[b],n,s)}},n.prototype._computeScore=function(){var e,t,n,s,o,r,a,c,l,u=this._keyMap,h=this.results;for(this.options.verbose&&i("\n\nComputing score:\n"),e=0;e<h.length;e++){for(n=0,s=h[e].output,o=s.length,c=1,t=0;t<o;t++)r=s[t].score,a=u?u[s[t].key].weight:1,l=r*a,1!==a?c=Math.min(c,l):(n+=l,s[t].nScore=l);1===c?h[e].score=n/o:h[e].score=c,this.options.verbose&&i(h[e])}},n.prototype._sort=function(){var e=this.options;e.shouldSort&&(e.verbose&&i("\n\nSorting...."),this.results.sort(e.sortFn))},n.prototype._format=function(){var e,t,n,s,o=this.options,r=o.getFn,a=[],c=this.results,l=o.include;for(o.verbose&&i("\n\nOutput:\n\n",c),n=o.id?function(e){c[e].item=r(c[e].item,o.id,[])[0]}:function(){},s=function(e){var t,i,n,s,o,r=c[e];if(l.length>0){if(t={item:r.item},l.indexOf("matches")!==-1)for(n=r.output,t.matches=[],i=0;i<n.length;i++)s=n[i],o={indices:s.matchedIndices},s.key&&(o.key=s.key),t.matches.push(o);l.indexOf("score")!==-1&&(t.score=c[e].score)}else t=r.item;return t},e=0,t=c.length;e<t;e++)n(e),a.push(s(e));return a},r.defaultOptions={location:0,distance:100,threshold:.6,maxPatternLength:32},r.prototype._calculatePatternAlphabet=function(){var e={},t=0;for(t=0;t<this.patternLen;t++)e[this.pattern.charAt(t)]=0;for(t=0;t<this.patternLen;t++)e[this.pattern.charAt(t)]|=1<<this.pattern.length-t-1;return e},r.prototype._bitapScore=function(e,t){var i=e/this.patternLen,n=Math.abs(this.options.location-t);return this.options.distance?i+n/this.options.distance:n?1:i},r.prototype.search=function(e){var t,i,n,s,o,r,a,c,l,u,h,d,f,p,v,m,g,y,b,E,_,S,I,w=this.options;if(e=w.caseSensitive?e:e.toLowerCase(),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};if(this.patternLen>w.maxPatternLength){if(y=e.match(new RegExp(this.pattern.replace(w.tokenSeparator,"|"))),b=!!y)for(_=[],t=0,S=y.length;t<S;t++)I=y[t],_.push([e.indexOf(I),I.length-1]);return{isMatch:b,score:b?.5:1,matchedIndices:_}}for(s=w.findAllMatches,o=w.location,n=e.length,r=w.threshold,a=e.indexOf(this.pattern,o),E=[],t=0;t<n;t++)E[t]=0;for(a!=-1&&(r=Math.min(this._bitapScore(0,a),r),a=e.lastIndexOf(this.pattern,o+this.patternLen),a!=-1&&(r=Math.min(this._bitapScore(0,a),r))),a=-1,m=1,g=[],u=this.patternLen+n,t=0;t<this.patternLen;t++){for(c=0,l=u;c<l;)this._bitapScore(t,o+l)<=r?c=l:u=l,l=Math.floor((u-c)/2+c);for(u=l,h=Math.max(1,o-l+1),d=s?n:Math.min(o+l,n)+this.patternLen,f=Array(d+2),f[d+1]=(1<<t)-1,i=d;i>=h;i--)if(v=this.patternAlphabet[e.charAt(i-1)],v&&(E[i-1]=1),f[i]=(f[i+1]<<1|1)&v,0!==t&&(f[i]|=(p[i+1]|p[i])<<1|1|p[i+1]),f[i]&this.matchmask&&(m=this._bitapScore(t,i-1),m<=r)){if(r=m,a=i-1,g.push(a),a<=o)break;h=Math.max(1,2*o-a)}if(this._bitapScore(t+1,o)>r)break;p=f}return _=this._getMatchedIndices(E),{isMatch:a>=0,score:0===m?.001:m,matchedIndices:_}},r.prototype._getMatchedIndices=function(e){for(var t,i=[],n=-1,s=-1,o=0,r=e.length;o<r;o++)t=e[o],t&&n===-1?n=o:t||n===-1||(s=o-1,s-n+1>=this.options.minMatchCharLength&&i.push([n,s]),n=-1);return e[o-1]&&o-1-n+1>=this.options.minMatchCharLength&&i.push([n,o-1]),i},e.exports=n}(this)},function(e,t,i){var n,s;!function(){"use strict";function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n))e.push(i.apply(null,n));else if("object"===s)for(var r in n)o.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}var o={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=i:(n=[],s=function(){return i}.apply(t,n),!(void 0!==s&&(e.exports=s)))}()},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=i(5),a=i(26),c=n(a),l=function(){function e(){s(this,e),this.store=(0,r.createStore)(c.default,window.devToolsExtension?window.devToolsExtension():void 0)}return o(e,[{key:"getState",value:function(){return this.store.getState()}},{key:"dispatch",value:function(e){this.store.dispatch(e)}},{key:"subscribe",value:function(e){this.store.subscribe(e)}},{key:"getItems",value:function(){var e=this.store.getState();return e.items}},{key:"getItemsFilteredByActive",value:function(){var e=this.getItems(),t=e.filter(function(e){return e.active===!0},[]);return t}},{key:"getItemsReducedToValues",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getItems(),t=e.reduce(function(e,t){return e.push(t.value),e},[]);return t}},{key:"getChoices",value:function(){var e=this.store.getState();return e.choices}},{key:"getChoicesFilteredByActive",value:function(){var e=this.getChoices(),t=e.filter(function(e){return e.active===!0},[]);return t}},{key:"getChoicesFilteredBySelectable",value:function(){var e=this.getChoices(),t=e.filter(function(e){return e.disabled!==!0},[]);return t}},{key:"getChoiceById",value:function(e){if(e){var t=this.getChoicesFilteredByActive(),i=t.find(function(t){return t.id===parseInt(e,10)});return i}return!1}},{key:"getGroups",value:function(){var e=this.store.getState();return e.groups}},{key:"getGroupsFilteredByActive",value:function(){var e=this.getGroups(),t=this.getChoices(),i=e.filter(function(e){var i=e.active===!0&&e.disabled===!1,n=t.some(function(e){return e.active===!0&&e.disabled===!1});return i&&n},[]);return i}},{key:"getGroupById",value:function(e){var t=this.getGroups(),i=t.find(function(t){return t.id===e});return i}}]),e}();t.default=l,e.exports=l},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.compose=t.applyMiddleware=t.bindActionCreators=t.combineReducers=t.createStore=void 0;var s=i(6),o=n(s),r=i(21),a=n(r),c=i(23),l=n(c),u=i(24),h=n(u),d=i(25),f=n(d),p=i(22);n(p);t.createStore=o.default,t.combineReducers=a.default,t.bindActionCreators=l.default,t.applyMiddleware=h.default,t.compose=f.default},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t,i){function n(){g===m&&(g=m.slice())}function o(){return v}function a(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return n(),g.push(e),function(){if(t){t=!1,n();var i=g.indexOf(e);g.splice(i,1)}}}function u(e){if(!(0,r.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(y)throw new Error("Reducers may not dispatch actions.");try{y=!0,v=p(v,e)}finally{y=!1}for(var t=m=g,i=0;i<t.length;i++)t[i]();return e}function h(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");p=e,u({type:l.INIT})}function d(){var e,t=a;return e={subscribe:function(e){function i(){e.next&&e.next(o())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");i();var n=t(i);return{unsubscribe:n}}},e[c.default]=function(){return this},e}var f;if("function"==typeof t&&"undefined"==typeof i&&(i=t,t=void 0),"undefined"!=typeof i){if("function"!=typeof i)throw new Error("Expected the enhancer to be a function.");return i(s)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var p=e,v=t,m=[],g=m,y=!1;return u({type:l.INIT}),f={dispatch:u,subscribe:a,getState:o,replaceReducer:h},f[c.default]=d,f}t.__esModule=!0,t.ActionTypes=void 0,t.default=s;var o=i(7),r=n(o),a=i(17),c=n(a),l=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t,i){function n(e){if(!r(e)||s(e)!=a)return!1;var t=o(e);if(null===t)return!0;var i=h.call(t,"constructor")&&t.constructor;return"function"==typeof i&&i instanceof i&&u.call(i)==d}var s=i(8),o=i(14),r=i(16),a="[object Object]",c=Function.prototype,l=Object.prototype,u=c.toString,h=l.hasOwnProperty,d=u.call(Object);e.exports=n},function(e,t,i){function n(e){return null==e?void 0===e?c:a:l&&l in Object(e)?o(e):r(e)}var s=i(9),o=i(12),r=i(13),a="[object Null]",c="[object Undefined]",l=s?s.toStringTag:void 0;e.exports=n},function(e,t,i){var n=i(10),s=n.Symbol;e.exports=s},function(e,t,i){var n=i(11),s="object"==typeof self&&self&&self.Object===Object&&self,o=n||s||Function("return this")();e.exports=o},function(e,t){(function(t){var i="object"==typeof t&&t&&t.Object===Object&&t;e.exports=i}).call(t,function(){return this}())},function(e,t,i){function n(e){var t=r.call(e,c),i=e[c];try{e[c]=void 0;var n=!0}catch(e){}var s=a.call(e);return n&&(t?e[c]=i:delete e[c]),s}var s=i(9),o=Object.prototype,r=o.hasOwnProperty,a=o.toString,c=s?s.toStringTag:void 0;e.exports=n},function(e,t){function i(e){return s.call(e)}var n=Object.prototype,s=n.toString;e.exports=i},function(e,t,i){var n=i(15),s=n(Object.getPrototypeOf,Object);e.exports=s},function(e,t){function i(e,t){return function(i){return e(t(i))}}e.exports=i},function(e,t){function i(e){return null!=e&&"object"==typeof e}e.exports=i},function(e,t,i){e.exports=i(18)},function(e,t,i){(function(e,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,r=i(20),a=s(r);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof e?e:n;var c=(0,a.default)(o);t.default=c}).call(t,function(){return this}(),i(19)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t){"use strict";function i(e){var t,i=e.Symbol;return"function"==typeof i?i.observable?t=i.observable:(t=i("observable"),i.observable=t):t="@@observable",t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var i=t&&t.type,n=i&&'"'+i.toString()+'"'||"an action";return"Given action "+n+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function o(e){Object.keys(e).forEach(function(t){var i=e[t],n=i(void 0,{type:a.ActionTypes.INIT});if("undefined"==typeof n)throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var s="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof i(void 0,{type:s}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+a.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function r(e){for(var t=Object.keys(e),i={},n=0;n<t.length;n++){var r=t[n];"function"==typeof e[r]&&(i[r]=e[r])}var a,c=Object.keys(i);try{o(i)}catch(e){a=e}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];if(a)throw a;for(var n=!1,o={},r=0;r<c.length;r++){var l=c[r],u=i[l],h=e[l],d=u(h,t);if("undefined"==typeof d){var f=s(l,t);throw new Error(f)}o[l]=d,n=n||d!==h}return n?o:e}}t.__esModule=!0,t.default=r;var a=i(6),c=i(7),l=(n(c),i(22));n(l)},function(e,t){"use strict";function i(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}t.__esModule=!0,t.default=i},function(e,t){"use strict";function i(e,t){return function(){return t(e.apply(void 0,arguments))}}function n(e,t){if("function"==typeof e)return i(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),s={},o=0;o<n.length;o++){var r=n[o],a=e[r];"function"==typeof a&&(s[r]=i(a,t))}return s}t.__esModule=!0,t.default=n},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return function(i,n,s){var r=e(i,n,s),c=r.dispatch,l=[],u={getState:r.getState,dispatch:function(e){return c(e)}};return l=t.map(function(e){return e(u)}),c=a.default.apply(void 0,l)(r.dispatch),o({},r,{dispatch:c})}}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=s;var r=i(25),a=n(r)},function(e,t){"use strict";function i(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];var n=t[t.length-1],s=t.slice(0,-1);return function(){return s.reduceRight(function(e,t){return t(e)},n.apply(void 0,arguments))}}t.__esModule=!0,t.default=i},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(5),o=i(27),r=n(o),a=i(28),c=n(a),l=i(29),u=n(l),h=(0,s.combineReducers)({items:r.default,groups:c.default,choices:u.default}),d=function(e,t){var i=e;return"CLEAR_ALL"===t.type&&(i=void 0),h(i,t)};t.default=d},function(e,t){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"ADD_ITEM":var n=[].concat(i(e),[{id:t.id,choiceId:t.choiceId,groupId:t.groupId,value:t.value,label:t.label,active:!0,highlighted:!1,customProperties:t.customProperties,keyCode:null}]);return n.map(function(e){return e.highlighted&&(e.highlighted=!1),e});case"REMOVE_ITEM":return e.map(function(e){return e.id===t.id&&(e.active=!1),e});case"HIGHLIGHT_ITEM":return e.map(function(e){return e.id===t.id&&(e.highlighted=t.highlighted),e});default:return e}};t.default=n},function(e,t){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"ADD_GROUP":return[].concat(i(e),[{id:t.id,value:t.value,active:t.active,disabled:t.disabled}]);case"CLEAR_CHOICES":return e.groups=[];default:return e}};t.default=n},function(e,t){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"ADD_CHOICE":return[].concat(i(e),[{id:t.id,elementId:t.elementId,groupId:t.groupId,value:t.value,label:t.label||t.value,disabled:t.disabled||!1,selected:!1,active:!0,score:9999,customProperties:t.customProperties,keyCode:null}]);case"ADD_ITEM":var n=e;return t.activateOptions&&(n=e.map(function(e){return e.active=t.active,e})),t.choiceId>-1&&(n=e.map(function(e){return e.id===parseInt(t.choiceId,10)&&(e.selected=!0),e})),n;case"REMOVE_ITEM":return t.choiceId>-1?e.map(function(e){return e.id===parseInt(t.choiceId,10)&&(e.selected=!1),e}):e;case"FILTER_CHOICES":var s=t.results,o=e.map(function(e){return e.active=s.some(function(t){return t.item.id===e.id&&(e.score=t.score,!0)}),e});return o;case"ACTIVATE_CHOICES":return e.map(function(e){return e.active=t.active,e});case"CLEAR_CHOICES":return e.choices=[];default:return e}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addItem=function(e,t,i,n,s,o,r){return{type:"ADD_ITEM",value:e,label:t,id:i,choiceId:n,groupId:s,customProperties:o,keyCode:r}},t.removeItem=function(e,t){return{type:"REMOVE_ITEM",id:e,choiceId:t}},t.highlightItem=function(e,t){return{type:"HIGHLIGHT_ITEM",id:e,highlighted:t}},t.addChoice=function(e,t,i,n,s,o,r,a){return{type:"ADD_CHOICE",value:e,label:t,id:i,groupId:n,disabled:s,elementId:o,customProperties:r,keyCode:a}},t.filterChoices=function(e){return{type:"FILTER_CHOICES",results:e}},t.activateChoices=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{type:"ACTIVATE_CHOICES",active:e}},t.clearChoices=function(){return{type:"CLEAR_CHOICES"}},t.addGroup=function(e,t,i,n){return{type:"ADD_GROUP",value:e,id:t,active:i,disabled:n}},t.clearAll=function(){return{type:"CLEAR_ALL"}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=(t.capitalise=function(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})},t.generateChars=function(e){for(var t="",i=0;i<e;i++){var n=a(0,36);t+=n.toString(36)}return t}),s=(t.generateId=function(e,t){var i=e.id||e.name&&e.name+"-"+n(2)||n(4);return i=i.replace(/(:|\.|\[|\]|,)/g,""),i=t+i},t.getType=function(e){return Object.prototype.toString.call(e).slice(8,-1)}),o=t.isType=function(e,t){var i=s(t);return void 0!==t&&null!==t&&i===e},r=(t.isNode=function(e){return"object"===("undefined"==typeof Node?"undefined":i(Node))?e instanceof Node:e&&"object"===("undefined"==typeof e?"undefined":i(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},t.isElement=function(e){return"object"===("undefined"==typeof HTMLElement?"undefined":i(HTMLElement))?e instanceof HTMLElement:e&&"object"===("undefined"==typeof e?"undefined":i(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName},t.extend=function e(){for(var t={},i=arguments.length,n=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o("Object",i[n])?t[n]=e(!0,t[n],i[n]):t[n]=i[n])},s=0;s<i;s++){var r=arguments[s];o("Object",r)&&n(r)}return t},t.whichTransitionEvent=function(){var e,t=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==t.style[e])return i[e]},t.whichAnimationEvent=function(){var e,t=document.createElement("fakeelement"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}),a=(t.getParentsUntil=function(e,t,i){for(var n=[];e&&e!==document;e=e.parentNode){if(t){var s=t.charAt(0);if("."===s&&e.classList.contains(t.substr(1)))break;if("#"===s&&e.id===t.substr(1))break;if("["===s&&e.hasAttribute(t.substr(1,t.length-1)))break;if(e.tagName.toLowerCase()===t)break}if(i){var o=i.charAt(0);"."===o&&e.classList.contains(i.substr(1))&&n.push(e),"#"===o&&e.id===i.substr(1)&&n.push(e),"["===o&&e.hasAttribute(i.substr(1,i.length-1))&&n.push(e),e.tagName.toLowerCase()===i&&n.push(e)}else n.push(e)}return 0===n.length?null:n},t.wrap=function(e,t){return t=t||document.createElement("div"),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t.appendChild(e)},t.getSiblings=function(e){for(var t=[],i=e.parentNode.firstChild;i;i=i.nextSibling)1===i.nodeType&&i!==e&&t.push(i);return t},t.findAncestor=function(e,t){for(;(e=e.parentElement)&&!e.classList.contains(t););return e},t.findAncestorByAttrName=function(e,t){for(var i=e;i;){if(i.hasAttribute(t))return i;i=i.parentElement}return null},t.debounce=function(e,t,i){var n;return function(){var s=this,o=arguments,r=function(){n=null,i||e.apply(s,o)},a=i&&!n;clearTimeout(n),n=setTimeout(r,t),a&&e.apply(s,o)}},t.getElemDistance=function(e){var t=0;if(e.offsetParent)do t+=e.offsetTop,e=e.offsetParent;while(e);return t>=0?t:0},t.getElementOffset=function(e,t){var i=t;return i>1&&(i=1),
i>0&&(i=0),Math.max(e.offsetHeight*i)},t.getAdjacentEl=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e&&t){var n=e.parentNode.parentNode,s=Array.from(n.querySelectorAll(t)),o=s.indexOf(e),r=i>0?1:-1;return s[o+r]}},t.getScrollPosition=function(e){return"bottom"===e?Math.max((window.scrollY||window.pageYOffset)+(window.innerHeight||document.documentElement.clientHeight)):window.scrollY||window.pageYOffset},t.isInView=function(e,t,i){return this.getScrollPosition(t)>this.getElemDistance(e)+this.getElementOffset(e,i)},t.isScrolledIntoView=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e){var n=void 0;return n=i>0?t.scrollTop+t.offsetHeight>=e.offsetTop+e.offsetHeight:e.offsetTop>=t.scrollTop}},t.stripHTML=function(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""},t.addAnimation=function(e,t){var i=r(),n=function n(){e.classList.remove(t),e.removeEventListener(i,n,!1)};e.classList.add(t),e.addEventListener(i,n,!1)},t.getRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e)+e)}),c=t.strToEl=function(){var e=document.createElement("div");return function(t){var i=t.trim(),n=void 0;for(e.innerHTML=i,n=e.children[0];e.firstChild;)e.removeChild(e.firstChild);return n}}();t.getWidthOfInput=function(e){var t=e.value||e.placeholder,i=e.offsetWidth;if(t){var n=c("<span>"+t+"</span>");n.style.position="absolute",n.style.padding="0",n.style.top="-9999px",n.style.left="-9999px",n.style.width="auto",n.style.whiteSpace="pre",document.body.appendChild(n),t&&n.offsetWidth!==e.offsetWidth&&(i=n.offsetWidth+4),document.body.removeChild(n)}return i+"px"},t.sortByAlpha=function(e,t){var i=(e.label||e.value).toLowerCase(),n=(t.label||t.value).toLowerCase();return i<n?-1:i>n?1:0},t.sortByScore=function(e,t){return e.score-t.score},t.triggerEvent=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0});return e.dispatchEvent(n)}},function(e,t){"use strict";!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i}Array.from||(Array.from=function(){var e=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===e.call(t)},i=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},n=Math.pow(2,53)-1,s=function(e){var t=i(e);return Math.min(Math.max(t,0),n)};return function(e){var i=this,n=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var o,r=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof r){if(!t(r))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(o=arguments[2])}for(var a,c=s(n.length),l=t(i)?Object(new i(c)):new Array(c),u=0;u<c;)a=n[u],r?l[u]="undefined"==typeof o?r(a,u):r.call(o,a,u):l[u]=a,u+=1;return l.length=c,l}}()),Array.prototype.find||(Array.prototype.find=function(e){if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,i=Object(this),n=i.length>>>0,s=arguments[1],o=0;o<n;o++)if(t=i[o],e.call(s,t,o,i))return t}),e.prototype=window.Event.prototype,window.CustomEvent=e}()}])});
//# sourceMappingURL=choices.min.js.map
/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */

(function (root, factory)
{
    'use strict';

    var moment;
    if (typeof exports === 'object') {
        // CommonJS module
        // Load moment.js as an optional dependency
        try { moment = require('moment'); } catch (e) {}
        module.exports = factory(moment);
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(function (req)
        {
            // Load moment.js as an optional dependency
            var id = 'moment';
            try { moment = req(id); } catch (e) {}
            return factory(moment);
        });
    } else {
        root.Pikaday = factory(root.moment);
    }
}(this, function (moment)
{
    'use strict';

    /**
     * feature detection and helper functions
     */
    var hasMoment = typeof moment === 'function',

    hasEventListeners = !!window.addEventListener,

    document = window.document,

    sto = window.setTimeout,

    addEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.addEventListener(e, callback, !!capture);
        } else {
            el.attachEvent('on' + e, callback);
        }
    },

    removeEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.removeEventListener(e, callback, !!capture);
        } else {
            el.detachEvent('on' + e, callback);
        }
    },

    trim = function(str)
    {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g,'');
    },

    hasClass = function(el, cn)
    {
        return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
    },

    addClass = function(el, cn)
    {
        if (!hasClass(el, cn)) {
            el.className = (el.className === '') ? cn : el.className + ' ' + cn;
        }
    },

    removeClass = function(el, cn)
    {
        el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    },

    isArray = function(obj)
    {
        return (/Array/).test(Object.prototype.toString.call(obj));
    },

    isDate = function(obj)
    {
        return (/Date/).test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime());
    },

    isWeekend = function(date)
    {
        var day = date.getDay();
        return day === 0 || day === 6;
    },

    isLeapYear = function(year)
    {
        // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },

    getDaysInMonth = function(year, month)
    {
        return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    },

    setToStartOfDay = function(date)
    {
        if (isDate(date)) date.setHours(0,0,0,0);
    },

    compareDates = function(a,b)
    {
        // weak date comparison (use setToStartOfDay(date) to ensure correct result)
        return a.getTime() === b.getTime();
    },

    extend = function(to, from, overwrite)
    {
        var prop, hasProp;
        for (prop in from) {
            hasProp = to[prop] !== undefined;
            if (hasProp && typeof from[prop] === 'object' && from[prop] !== null && from[prop].nodeName === undefined) {
                if (isDate(from[prop])) {
                    if (overwrite) {
                        to[prop] = new Date(from[prop].getTime());
                    }
                }
                else if (isArray(from[prop])) {
                    if (overwrite) {
                        to[prop] = from[prop].slice(0);
                    }
                } else {
                    to[prop] = extend({}, from[prop], overwrite);
                }
            } else if (overwrite || !hasProp) {
                to[prop] = from[prop];
            }
        }
        return to;
    },

    fireEvent = function(el, eventName, data)
    {
        var ev;

        if (document.createEvent) {
            ev = document.createEvent('HTMLEvents');
            ev.initEvent(eventName, true, false);
            ev = extend(ev, data);
            el.dispatchEvent(ev);
        } else if (document.createEventObject) {
            ev = document.createEventObject();
            ev = extend(ev, data);
            el.fireEvent('on' + eventName, ev);
        }
    },

    adjustCalendar = function(calendar) {
        if (calendar.month < 0) {
            calendar.year -= Math.ceil(Math.abs(calendar.month)/12);
            calendar.month += 12;
        }
        if (calendar.month > 11) {
            calendar.year += Math.floor(Math.abs(calendar.month)/12);
            calendar.month -= 12;
        }
        return calendar;
    },

    /**
     * defaults and localisation
     */
    defaults = {

        // bind the picker to a form field
        field: null,

        // automatically show/hide the picker on `field` focus (default `true` if `field` is set)
        bound: undefined,

        // position of the datepicker, relative to the field (default to bottom & left)
        // ('bottom' & 'left' keywords are not used, 'top' & 'right' are modifier on the bottom/left position)
        position: 'bottom left',

        // automatically fit in the viewport even if it means repositioning from the position option
        reposition: true,

        // the default output format for `.toString()` and `field` value
        format: 'YYYY-MM-DD',

        // the toString function which gets passed a current date object and format
        // and returns a string
        toString: null,

        // used to create date object from current input string
        parse: null,

        // the initial date to view when first opened
        defaultDate: null,

        // make the `defaultDate` the initial selected value
        setDefaultDate: false,

        // first day of week (0: Sunday, 1: Monday etc)
        firstDay: 0,

        // the default flag for moment's strict date parsing
        formatStrict: false,

        // the minimum/earliest date that can be selected
        minDate: null,
        // the maximum/latest date that can be selected
        maxDate: null,

        // number of years either side, or array of upper/lower range
        yearRange: 10,

        // show week numbers at head of row
        showWeekNumber: false,

        // Week picker mode
        pickWholeWeek: false,

        // used internally (don't config outside)
        minYear: 0,
        maxYear: 9999,
        minMonth: undefined,
        maxMonth: undefined,

        startRange: null,
        endRange: null,

        isRTL: false,

        // Additional text to append to the year in the calendar title
        yearSuffix: '',

        // Render the month after year in the calendar title
        showMonthAfterYear: false,

        // Render days of the calendar grid that fall in the next or previous month
        showDaysInNextAndPreviousMonths: false,

        // Allows user to select days that fall in the next or previous month
        enableSelectionDaysInNextAndPreviousMonths: false,

        // how many months are visible
        numberOfMonths: 1,

        // when numberOfMonths is used, this will help you to choose where the main calendar will be (default `left`, can be set to `right`)
        // only used for the first display or when a selected date is not visible
        mainCalendar: 'left',

        // Specify a DOM element to render the calendar in
        container: undefined,

        // Blur field when date is selected
        blurFieldOnSelect : true,

        // internationalization
        i18n: {
            previousMonth : 'Previous Month',
            nextMonth     : 'Next Month',
            months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
            weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            weekdaysShort : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        },

        // Theme Classname
        theme: null,

        // events array
        events: [],

        // callback function
        onSelect: null,
        onOpen: null,
        onClose: null,
        onDraw: null
    },


    /**
     * templating functions to abstract HTML rendering
     */
    renderDayName = function(opts, day, abbr)
    {
        day += opts.firstDay;
        while (day >= 7) {
            day -= 7;
        }
        return abbr ? opts.i18n.weekdaysShort[day] : opts.i18n.weekdays[day];
    },

    renderDay = function(opts)
    {
        var arr = [];
        var ariaSelected = 'false';
        if (opts.isEmpty) {
            if (opts.showDaysInNextAndPreviousMonths) {
                arr.push('is-outside-current-month');

                if(!opts.enableSelectionDaysInNextAndPreviousMonths) {
                    arr.push('is-selection-disabled');
                }

            } else {
                return '<td class="is-empty"></td>';
            }
        }
        if (opts.isDisabled) {
            arr.push('is-disabled');
        }
        if (opts.isToday) {
            arr.push('is-today');
        }
        if (opts.isSelected) {
            arr.push('is-selected');
            ariaSelected = 'true';
        }
        if (opts.hasEvent) {
            arr.push('has-event');
        }
        if (opts.isInRange) {
            arr.push('is-inrange');
        }
        if (opts.isStartRange) {
            arr.push('is-startrange');
        }
        if (opts.isEndRange) {
            arr.push('is-endrange');
        }
        return '<td data-day="' + opts.day + '" class="' + arr.join(' ') + '" aria-selected="' + ariaSelected + '">' +
                 '<button class="pika-button pika-day" type="button" ' +
                    'data-pika-year="' + opts.year + '" data-pika-month="' + opts.month + '" data-pika-day="' + opts.day + '">' +
                        opts.day +
                 '</button>' +
               '</td>';
    },

    renderWeek = function (d, m, y) {
        // Lifted from http://javascript.about.com/library/blweekyear.htm, lightly modified.
        var onejan = new Date(y, 0, 1),
            weekNum = Math.ceil((((new Date(y, m, d) - onejan) / 86400000) + onejan.getDay()+1)/7);
        return '<td class="pika-week">' + weekNum + '</td>';
    },

    renderRow = function(days, isRTL, pickWholeWeek, isRowSelected)
    {
        return '<tr class="pika-row' + (pickWholeWeek ? ' pick-whole-week' : '') + (isRowSelected ? ' is-selected' : '') + '">' + (isRTL ? days.reverse() : days).join('') + '</tr>';
    },

    renderBody = function(rows)
    {
        return '<tbody>' + rows.join('') + '</tbody>';
    },

    renderHead = function(opts)
    {
        var i, arr = [];
        if (opts.showWeekNumber) {
            arr.push('<th></th>');
        }
        for (i = 0; i < 7; i++) {
            arr.push('<th scope="col"><abbr title="' + renderDayName(opts, i) + '">' + renderDayName(opts, i, true) + '</abbr></th>');
        }
        return '<thead><tr>' + (opts.isRTL ? arr.reverse() : arr).join('') + '</tr></thead>';
    },

    renderTitle = function(instance, c, year, month, refYear, randId)
    {
        var i, j, arr,
            opts = instance._o,
            isMinYear = year === opts.minYear,
            isMaxYear = year === opts.maxYear,
            html = '<div id="' + randId + '" class="pika-title" role="heading" aria-live="assertive">',
            monthHtml,
            yearHtml,
            prev = true,
            next = true;

        for (arr = [], i = 0; i < 12; i++) {
            arr.push('<option value="' + (year === refYear ? i - c : 12 + i - c) + '"' +
                (i === month ? ' selected="selected"': '') +
                ((isMinYear && i < opts.minMonth) || (isMaxYear && i > opts.maxMonth) ? 'disabled="disabled"' : '') + '>' +
                opts.i18n.months[i] + '</option>');
        }

        monthHtml = '<div class="pika-label">' + opts.i18n.months[month] + '<select class="pika-select pika-select-month" tabindex="-1">' + arr.join('') + '</select></div>';

        if (isArray(opts.yearRange)) {
            i = opts.yearRange[0];
            j = opts.yearRange[1] + 1;
        } else {
            i = year - opts.yearRange;
            j = 1 + year + opts.yearRange;
        }

        for (arr = []; i < j && i <= opts.maxYear; i++) {
            if (i >= opts.minYear) {
                arr.push('<option value="' + i + '"' + (i === year ? ' selected="selected"': '') + '>' + (i) + '</option>');
            }
        }
        yearHtml = '<div class="pika-label">' + year + opts.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + arr.join('') + '</select></div>';

        if (opts.showMonthAfterYear) {
            html += yearHtml + monthHtml;
        } else {
            html += monthHtml + yearHtml;
        }

        if (isMinYear && (month === 0 || opts.minMonth >= month)) {
            prev = false;
        }

        if (isMaxYear && (month === 11 || opts.maxMonth <= month)) {
            next = false;
        }

        if (c === 0) {
            html += '<button class="pika-prev' + (prev ? '' : ' is-disabled') + '" type="button">' + opts.i18n.previousMonth + '</button>';
        }
        if (c === (instance._o.numberOfMonths - 1) ) {
            html += '<button class="pika-next' + (next ? '' : ' is-disabled') + '" type="button">' + opts.i18n.nextMonth + '</button>';
        }

        return html += '</div>';
    },

    renderTable = function(opts, data, randId)
    {
        return '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' + randId + '">' + renderHead(opts) + renderBody(data) + '</table>';
    },


    /**
     * Pikaday constructor
     */
    Pikaday = function(options)
    {
        var self = this,
            opts = self.config(options);

        self._onMouseDown = function(e)
        {
            if (!self._v) {
                return;
            }
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }

            if (!hasClass(target, 'is-disabled')) {
                if (hasClass(target, 'pika-button') && !hasClass(target, 'is-empty') && !hasClass(target.parentNode, 'is-disabled')) {
                    self.setDate(new Date(target.getAttribute('data-pika-year'), target.getAttribute('data-pika-month'), target.getAttribute('data-pika-day')));
                    if (opts.bound) {
                        sto(function() {
                            self.hide();
                            if (opts.blurFieldOnSelect && opts.field) {
                                opts.field.blur();
                            }
                        }, 100);
                    }
                }
                else if (hasClass(target, 'pika-prev')) {
                    self.prevMonth();
                }
                else if (hasClass(target, 'pika-next')) {
                    self.nextMonth();
                }
            }
            if (!hasClass(target, 'pika-select')) {
                // if this is touch event prevent mouse events emulation
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                    return false;
                }
            } else {
                self._c = true;
            }
        };

        self._onChange = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }
            if (hasClass(target, 'pika-select-month')) {
                self.gotoMonth(target.value);
            }
            else if (hasClass(target, 'pika-select-year')) {
                self.gotoYear(target.value);
            }
        };

        self._onKeyChange = function(e)
        {
            e = e || window.event;

            if (self.isVisible()) {

                switch(e.keyCode){
                    case 13:
                    case 27:
                        if (opts.field) {
                            opts.field.blur();
                        }
                        break;
                    case 37:
                        e.preventDefault();
                        self.adjustDate('subtract', 1);
                        break;
                    case 38:
                        self.adjustDate('subtract', 7);
                        break;
                    case 39:
                        self.adjustDate('add', 1);
                        break;
                    case 40:
                        self.adjustDate('add', 7);
                        break;
                }
            }
        };

        self._onInputChange = function(e)
        {
            var date;

            if (e.firedBy === self) {
                return;
            }
            if (opts.parse) {
                date = opts.parse(opts.field.value, opts.format);
            } else if (hasMoment) {
                date = moment(opts.field.value, opts.format, opts.formatStrict);
                date = (date && date.isValid()) ? date.toDate() : null;
            }
            else {
                date = new Date(Date.parse(opts.field.value));
            }
            if (isDate(date)) {
              self.setDate(date);
            }
            if (!self._v) {
                self.show();
            }
        };

        self._onInputFocus = function()
        {
            self.show();
        };

        self._onInputClick = function()
        {
            self.show();
        };

        self._onInputBlur = function()
        {
            // IE allows pika div to gain focus; catch blur the input field
            var pEl = document.activeElement;
            do {
                if (hasClass(pEl, 'pika-single')) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));

            if (!self._c) {
                self._b = sto(function() {
                    self.hide();
                }, 50);
            }
            self._c = false;
        };

        self._onClick = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement,
                pEl = target;
            if (!target) {
                return;
            }
            if (!hasEventListeners && hasClass(target, 'pika-select')) {
                if (!target.onchange) {
                    target.setAttribute('onchange', 'return;');
                    addEvent(target, 'change', self._onChange);
                }
            }
            do {
                if (hasClass(pEl, 'pika-single') || pEl === opts.trigger) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));
            if (self._v && target !== opts.trigger && pEl !== opts.trigger) {
                self.hide();
            }
        };

        self.el = document.createElement('div');
        self.el.className = 'pika-single' + (opts.isRTL ? ' is-rtl' : '') + (opts.theme ? ' ' + opts.theme : '');

        addEvent(self.el, 'mousedown', self._onMouseDown, true);
        addEvent(self.el, 'touchend', self._onMouseDown, true);
        addEvent(self.el, 'change', self._onChange);
        addEvent(document, 'keydown', self._onKeyChange);

        if (opts.field) {
            if (opts.container) {
                opts.container.appendChild(self.el);
            } else if (opts.bound) {
                document.body.appendChild(self.el);
            } else {
                opts.field.parentNode.insertBefore(self.el, opts.field.nextSibling);
            }
            addEvent(opts.field, 'change', self._onInputChange);

            if (!opts.defaultDate) {
                if (hasMoment && opts.field.value) {
                    opts.defaultDate = moment(opts.field.value, opts.format).toDate();
                } else {
                    opts.defaultDate = new Date(Date.parse(opts.field.value));
                }
                opts.setDefaultDate = true;
            }
        }

        var defDate = opts.defaultDate;

        if (isDate(defDate)) {
            if (opts.setDefaultDate) {
                self.setDate(defDate, true);
            } else {
                self.gotoDate(defDate);
            }
        } else {
            self.gotoDate(new Date());
        }

        if (opts.bound) {
            this.hide();
            self.el.className += ' is-bound';
            addEvent(opts.trigger, 'click', self._onInputClick);
            addEvent(opts.trigger, 'focus', self._onInputFocus);
            addEvent(opts.trigger, 'blur', self._onInputBlur);
        } else {
            this.show();
        }
    };


    /**
     * public Pikaday API
     */
    Pikaday.prototype = {


        /**
         * configure functionality
         */
        config: function(options)
        {
            if (!this._o) {
                this._o = extend({}, defaults, true);
            }

            var opts = extend(this._o, options, true);

            opts.isRTL = !!opts.isRTL;

            opts.field = (opts.field && opts.field.nodeName) ? opts.field : null;

            opts.theme = (typeof opts.theme) === 'string' && opts.theme ? opts.theme : null;

            opts.bound = !!(opts.bound !== undefined ? opts.field && opts.bound : opts.field);

            opts.trigger = (opts.trigger && opts.trigger.nodeName) ? opts.trigger : opts.field;

            opts.disableWeekends = !!opts.disableWeekends;

            opts.disableDayFn = (typeof opts.disableDayFn) === 'function' ? opts.disableDayFn : null;

            var nom = parseInt(opts.numberOfMonths, 10) || 1;
            opts.numberOfMonths = nom > 4 ? 4 : nom;

            if (!isDate(opts.minDate)) {
                opts.minDate = false;
            }
            if (!isDate(opts.maxDate)) {
                opts.maxDate = false;
            }
            if ((opts.minDate && opts.maxDate) && opts.maxDate < opts.minDate) {
                opts.maxDate = opts.minDate = false;
            }
            if (opts.minDate) {
                this.setMinDate(opts.minDate);
            }
            if (opts.maxDate) {
                this.setMaxDate(opts.maxDate);
            }

            if (isArray(opts.yearRange)) {
                var fallback = new Date().getFullYear() - 10;
                opts.yearRange[0] = parseInt(opts.yearRange[0], 10) || fallback;
                opts.yearRange[1] = parseInt(opts.yearRange[1], 10) || fallback;
            } else {
                opts.yearRange = Math.abs(parseInt(opts.yearRange, 10)) || defaults.yearRange;
                if (opts.yearRange > 100) {
                    opts.yearRange = 100;
                }
            }

            return opts;
        },

        /**
         * return a formatted string of the current selection (using Moment.js if available)
         */
        toString: function(format)
        {
            format = format || this._o.format;
            if (!isDate(this._d)) {
                return '';
            }
            if (this._o.toString) {
              return this._o.toString(this._d, format);
            }
            if (hasMoment) {
              return moment(this._d).format(format);
            }
            return this._d.toDateString();
        },

        /**
         * return a Moment.js object of the current selection (if available)
         */
        getMoment: function()
        {
            return hasMoment ? moment(this._d) : null;
        },

        /**
         * set the current selection from a Moment.js object (if available)
         */
        setMoment: function(date, preventOnSelect)
        {
            if (hasMoment && moment.isMoment(date)) {
                this.setDate(date.toDate(), preventOnSelect);
            }
        },

        /**
         * return a Date object of the current selection
         */
        getDate: function()
        {
            return isDate(this._d) ? new Date(this._d.getTime()) : null;
        },

        /**
         * set the current selection
         */
        setDate: function(date, preventOnSelect)
        {
            if (!date) {
                this._d = null;

                if (this._o.field) {
                    this._o.field.value = '';
                    fireEvent(this._o.field, 'change', { firedBy: this });
                }

                return this.draw();
            }
            if (typeof date === 'string') {
                date = new Date(Date.parse(date));
            }
            if (!isDate(date)) {
                return;
            }

            var min = this._o.minDate,
                max = this._o.maxDate;

            if (isDate(min) && date < min) {
                date = min;
            } else if (isDate(max) && date > max) {
                date = max;
            }

            this._d = new Date(date.getTime());
            setToStartOfDay(this._d);
            this.gotoDate(this._d);

            if (this._o.field) {
                this._o.field.value = this.toString();
                fireEvent(this._o.field, 'change', { firedBy: this });
            }
            if (!preventOnSelect && typeof this._o.onSelect === 'function') {
                this._o.onSelect.call(this, this.getDate());
            }
        },

        /**
         * change view to a specific date
         */
        gotoDate: function(date)
        {
            var newCalendar = true;

            if (!isDate(date)) {
                return;
            }

            if (this.calendars) {
                var firstVisibleDate = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                    lastVisibleDate = new Date(this.calendars[this.calendars.length-1].year, this.calendars[this.calendars.length-1].month, 1),
                    visibleDate = date.getTime();
                // get the end of the month
                lastVisibleDate.setMonth(lastVisibleDate.getMonth()+1);
                lastVisibleDate.setDate(lastVisibleDate.getDate()-1);
                newCalendar = (visibleDate < firstVisibleDate.getTime() || lastVisibleDate.getTime() < visibleDate);
            }

            if (newCalendar) {
                this.calendars = [{
                    month: date.getMonth(),
                    year: date.getFullYear()
                }];
                if (this._o.mainCalendar === 'right') {
                    this.calendars[0].month += 1 - this._o.numberOfMonths;
                }
            }

            this.adjustCalendars();
        },

        adjustDate: function(sign, days) {

            var day = this.getDate() || new Date();
            var difference = parseInt(days)*24*60*60*1000;

            var newDay;

            if (sign === 'add') {
                newDay = new Date(day.valueOf() + difference);
            } else if (sign === 'subtract') {
                newDay = new Date(day.valueOf() - difference);
            }

            this.setDate(newDay);
        },

        adjustCalendars: function() {
            this.calendars[0] = adjustCalendar(this.calendars[0]);
            for (var c = 1; c < this._o.numberOfMonths; c++) {
                this.calendars[c] = adjustCalendar({
                    month: this.calendars[0].month + c,
                    year: this.calendars[0].year
                });
            }
            this.draw();
        },

        gotoToday: function()
        {
            this.gotoDate(new Date());
        },

        /**
         * change view to a specific month (zero-index, e.g. 0: January)
         */
        gotoMonth: function(month)
        {
            if (!isNaN(month)) {
                this.calendars[0].month = parseInt(month, 10);
                this.adjustCalendars();
            }
        },

        nextMonth: function()
        {
            this.calendars[0].month++;
            this.adjustCalendars();
        },

        prevMonth: function()
        {
            this.calendars[0].month--;
            this.adjustCalendars();
        },

        /**
         * change view to a specific full year (e.g. "2012")
         */
        gotoYear: function(year)
        {
            if (!isNaN(year)) {
                this.calendars[0].year = parseInt(year, 10);
                this.adjustCalendars();
            }
        },

        /**
         * change the minDate
         */
        setMinDate: function(value)
        {
            if(value instanceof Date) {
                setToStartOfDay(value);
                this._o.minDate = value;
                this._o.minYear  = value.getFullYear();
                this._o.minMonth = value.getMonth();
            } else {
                this._o.minDate = defaults.minDate;
                this._o.minYear  = defaults.minYear;
                this._o.minMonth = defaults.minMonth;
                this._o.startRange = defaults.startRange;
            }

            this.draw();
        },

        /**
         * change the maxDate
         */
        setMaxDate: function(value)
        {
            if(value instanceof Date) {
                setToStartOfDay(value);
                this._o.maxDate = value;
                this._o.maxYear = value.getFullYear();
                this._o.maxMonth = value.getMonth();
            } else {
                this._o.maxDate = defaults.maxDate;
                this._o.maxYear = defaults.maxYear;
                this._o.maxMonth = defaults.maxMonth;
                this._o.endRange = defaults.endRange;
            }

            this.draw();
        },

        setStartRange: function(value)
        {
            this._o.startRange = value;
        },

        setEndRange: function(value)
        {
            this._o.endRange = value;
        },

        /**
         * refresh the HTML
         */
        draw: function(force)
        {
            if (!this._v && !force) {
                return;
            }
            var opts = this._o,
                minYear = opts.minYear,
                maxYear = opts.maxYear,
                minMonth = opts.minMonth,
                maxMonth = opts.maxMonth,
                html = '',
                randId;

            if (this._y <= minYear) {
                this._y = minYear;
                if (!isNaN(minMonth) && this._m < minMonth) {
                    this._m = minMonth;
                }
            }
            if (this._y >= maxYear) {
                this._y = maxYear;
                if (!isNaN(maxMonth) && this._m > maxMonth) {
                    this._m = maxMonth;
                }
            }

            randId = 'pika-title-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2);

            for (var c = 0; c < opts.numberOfMonths; c++) {
                html += '<div class="pika-lendar">' + renderTitle(this, c, this.calendars[c].year, this.calendars[c].month, this.calendars[0].year, randId) + this.render(this.calendars[c].year, this.calendars[c].month, randId) + '</div>';
            }

            this.el.innerHTML = html;

            if (opts.bound) {
                if(opts.field.type !== 'hidden') {
                    sto(function() {
                        opts.trigger.focus();
                    }, 1);
                }
            }

            if (typeof this._o.onDraw === 'function') {
                this._o.onDraw(this);
            }

            if (opts.bound) {
                // let the screen reader user know to use arrow keys
                opts.field.setAttribute('aria-label', 'Use the arrow keys to pick a date');
            }
        },

        adjustPosition: function()
        {
            var field, pEl, width, height, viewportWidth, viewportHeight, scrollTop, left, top, clientRect;

            if (this._o.container) return;

            this.el.style.position = 'absolute';

            field = this._o.trigger;
            pEl = field;
            width = this.el.offsetWidth;
            height = this.el.offsetHeight;
            viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

            if (typeof field.getBoundingClientRect === 'function') {
                clientRect = field.getBoundingClientRect();
                left = clientRect.left + window.pageXOffset;
                top = clientRect.bottom + window.pageYOffset;
            } else {
                left = pEl.offsetLeft;
                top  = pEl.offsetTop + pEl.offsetHeight;
                while((pEl = pEl.offsetParent)) {
                    left += pEl.offsetLeft;
                    top  += pEl.offsetTop;
                }
            }

            // default position is bottom & left
            if ((this._o.reposition && left + width > viewportWidth) ||
                (
                    this._o.position.indexOf('right') > -1 &&
                    left - width + field.offsetWidth > 0
                )
            ) {
                left = left - width + field.offsetWidth;
            }
            if ((this._o.reposition && top + height > viewportHeight + scrollTop) ||
                (
                    this._o.position.indexOf('top') > -1 &&
                    top - height - field.offsetHeight > 0
                )
            ) {
                top = top - height - field.offsetHeight;
            }

            this.el.style.left = left + 'px';
            this.el.style.top = top + 'px';
        },

        /**
         * render HTML for a particular month
         */
        render: function(year, month, randId)
        {
            var opts   = this._o,
                now    = new Date(),
                days   = getDaysInMonth(year, month),
                before = new Date(year, month, 1).getDay(),
                data   = [],
                row    = [];
            setToStartOfDay(now);
            if (opts.firstDay > 0) {
                before -= opts.firstDay;
                if (before < 0) {
                    before += 7;
                }
            }
            var previousMonth = month === 0 ? 11 : month - 1,
                nextMonth = month === 11 ? 0 : month + 1,
                yearOfPreviousMonth = month === 0 ? year - 1 : year,
                yearOfNextMonth = month === 11 ? year + 1 : year,
                daysInPreviousMonth = getDaysInMonth(yearOfPreviousMonth, previousMonth);
            var cells = days + before,
                after = cells;
            while(after > 7) {
                after -= 7;
            }
            cells += 7 - after;
            var isWeekSelected = false;
            for (var i = 0, r = 0; i < cells; i++)
            {
                var day = new Date(year, month, 1 + (i - before)),
                    isSelected = isDate(this._d) ? compareDates(day, this._d) : false,
                    isToday = compareDates(day, now),
                    hasEvent = opts.events.indexOf(day.toDateString()) !== -1 ? true : false,
                    isEmpty = i < before || i >= (days + before),
                    dayNumber = 1 + (i - before),
                    monthNumber = month,
                    yearNumber = year,
                    isStartRange = opts.startRange && compareDates(opts.startRange, day),
                    isEndRange = opts.endRange && compareDates(opts.endRange, day),
                    isInRange = opts.startRange && opts.endRange && opts.startRange < day && day < opts.endRange,
                    isDisabled = (opts.minDate && day < opts.minDate) ||
                                 (opts.maxDate && day > opts.maxDate) ||
                                 (opts.disableWeekends && isWeekend(day)) ||
                                 (opts.disableDayFn && opts.disableDayFn(day));

                if (isEmpty) {
                    if (i < before) {
                        dayNumber = daysInPreviousMonth + dayNumber;
                        monthNumber = previousMonth;
                        yearNumber = yearOfPreviousMonth;
                    } else {
                        dayNumber = dayNumber - days;
                        monthNumber = nextMonth;
                        yearNumber = yearOfNextMonth;
                    }
                }

                var dayConfig = {
                        day: dayNumber,
                        month: monthNumber,
                        year: yearNumber,
                        hasEvent: hasEvent,
                        isSelected: isSelected,
                        isToday: isToday,
                        isDisabled: isDisabled,
                        isEmpty: isEmpty,
                        isStartRange: isStartRange,
                        isEndRange: isEndRange,
                        isInRange: isInRange,
                        showDaysInNextAndPreviousMonths: opts.showDaysInNextAndPreviousMonths,
                        enableSelectionDaysInNextAndPreviousMonths: opts.enableSelectionDaysInNextAndPreviousMonths
                    };

                if (opts.pickWholeWeek && isSelected) {
                    isWeekSelected = true;
                }

                row.push(renderDay(dayConfig));

                if (++r === 7) {
                    if (opts.showWeekNumber) {
                        row.unshift(renderWeek(i - before, month, year));
                    }
                    data.push(renderRow(row, opts.isRTL, opts.pickWholeWeek, isWeekSelected));
                    row = [];
                    r = 0;
                    isWeekSelected = false;
                }
            }
            return renderTable(opts, data, randId);
        },

        isVisible: function()
        {
            return this._v;
        },

        show: function()
        {
            if (!this.isVisible()) {
                this._v = true;
                this.draw();
                removeClass(this.el, 'is-hidden');
                if (this._o.bound) {
                    addEvent(document, 'click', this._onClick);
                    this.adjustPosition();
                }
                if (typeof this._o.onOpen === 'function') {
                    this._o.onOpen.call(this);
                }
            }
        },

        hide: function()
        {
            var v = this._v;
            if (v !== false) {
                if (this._o.bound) {
                    removeEvent(document, 'click', this._onClick);
                }
                this.el.style.position = 'static'; // reset
                this.el.style.left = 'auto';
                this.el.style.top = 'auto';
                addClass(this.el, 'is-hidden');
                this._v = false;
                if (v !== undefined && typeof this._o.onClose === 'function') {
                    this._o.onClose.call(this);
                }
            }
        },

        /**
         * GAME OVER
         */
        destroy: function()
        {
            this.hide();
            removeEvent(this.el, 'mousedown', this._onMouseDown, true);
            removeEvent(this.el, 'touchend', this._onMouseDown, true);
            removeEvent(this.el, 'change', this._onChange);
            removeEvent(document, 'keydown', this._onKeyChange);
            if (this._o.field) {
                removeEvent(this._o.field, 'change', this._onInputChange);
                if (this._o.bound) {
                    removeEvent(this._o.trigger, 'click', this._onInputClick);
                    removeEvent(this._o.trigger, 'focus', this._onInputFocus);
                    removeEvent(this._o.trigger, 'blur', this._onInputBlur);
                }
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
        }

    };

    return Pikaday;

}));

var tns = (function (){
// ChildNode.remove
(function () {
  "use strict";

  if(!("remove" in Element.prototype)){
    Element.prototype.remove = function(){
      if(this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }
})();

// Adapted from https://gist.github.com/paulirish/1579671 which derived from 
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller.
// Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavič, Darius Bacon

// MIT license

if (!Date.now)
    Date.now = function() { return new Date().getTime(); };

(function() {
    'use strict';
    
    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
                                   || window[vp+'CancelRequestAnimationFrame']);
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
        || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function(callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function() { callback(lastTime = nextTime); },
                              nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
}());

/** DOMTokenList polyfill */
(function(){
	"use strict";
	
	/*<*/
	var UNDEF,
	WIN   = window,
	DOC   = document,
	OBJ   = Object,
	NULL  = null,
	TRUE  = true,
	FALSE = false,
	/*>*/
	
	/** Munge the hell out of our string literals. Saves a tonne of space after compression. */
	SPACE           = " ",
	ELEMENT         = "Element",
	CREATE_ELEMENT  = "create"+ELEMENT,
	DOM_TOKEN_LIST  = "DOMTokenList",
	DEFINE_GETTER   = "__defineGetter__",
	DEFINE_PROPERTY = "defineProperty",
	CLASS_          = "class",
	LIST            = "List",
	CLASS_LIST      = CLASS_+LIST,
	REL             = "rel",
	REL_LIST        = REL+LIST,
	DIV             = "div",
	LENGTH          = "length",
	CONTAINS        = "contains",
	APPLY           = "apply",
	HTML_           = "HTML",
	METHODS         = ("item "+CONTAINS+" add remove toggle toString toLocaleString").split(SPACE),
	ADD             = METHODS[2],
	REMOVE          = METHODS[3],
	TOGGLE          = METHODS[4],
	PROTOTYPE       = "prototype",
	
	
	
	/** Ascertain browser support for Object.defineProperty */
	dpSupport       = DEFINE_PROPERTY in OBJ || DEFINE_GETTER in OBJ[ PROTOTYPE ] || NULL,
	
	
	/** Wrapper for Object.defineProperty that falls back to using the legacy __defineGetter__ method if available. */
	defineGetter    = function(object, name, fn, configurable){
		if(OBJ[ DEFINE_PROPERTY ])
			OBJ[ DEFINE_PROPERTY ](object, name, {
				configurable: FALSE === dpSupport ? TRUE : !!configurable,
				get:          fn
			});
		
		else object[ DEFINE_GETTER ](name, fn);
	},
	
	
	
	
	/** DOMTokenList interface replacement */
	DOMTokenList = function(el, prop){
		var THIS    = this,
		
		/** Private variables */
		tokens      = [],
		tokenMap    = {},
		length      = 0,
		maxLength   = 0,
		
		
		reindex     = function(){
			
			/** Define getter functions for array-like access to the tokenList's contents. */
			if(length >= maxLength)
				for(; maxLength < length; ++maxLength) (function(i){
					
					defineGetter(THIS, i, function(){
						preop();
						return tokens[i];
					}, FALSE);
					
				})(maxLength);
		},
		
		
		
		/** Helper function called at the start of each class method. Internal use only. */
		preop = function(){
			var error, i,
			args    = arguments,
			rSpace  = /\s+/;
			
			/** Validate the token/s passed to an instance method, if any. */
			if(args[ LENGTH ])
				for(i = 0; i < args[ LENGTH ]; ++i)
					if(rSpace.test(args[i])){
						error       = new SyntaxError('String "' + args[i] + '" ' + CONTAINS + ' an invalid character');
						error.code  = 5;
						error.name  = "InvalidCharacterError";
						throw error;
					}
			
			
			/** Split the new value apart by whitespace*/
			tokens = ("" + el[prop]).replace(/^\s+|\s+$/g, "").split(rSpace);
			
			/** Avoid treating blank strings as single-item token lists */
			if("" === tokens[0]) tokens = [];
			
			/** Repopulate the internal token lists */
			tokenMap = {};
			for(i = 0; i < tokens[ LENGTH ]; ++i)
				tokenMap[tokens[i]] = TRUE;
			length = tokens[ LENGTH ];
			reindex();
		};
		
		
		
		/** Populate our internal token list if the targeted attribute of the subject element isn't empty. */
		preop();
		
		
		
		/** Return the number of tokens in the underlying string. Read-only. */
		defineGetter(THIS, LENGTH, function(){
			preop();
			return length;
		});
		
		
		/** Override the default toString/toLocaleString methods to return a space-delimited list of tokens when typecast. */
		THIS[ METHODS[6] /** toLocaleString */ ] =
		THIS[ METHODS[5] /** toString       */ ] = function(){
			preop();
			return tokens.join(SPACE);
		};
		
		
		
		/** Return an item in the list by its index (or undefined if the number is greater than or equal to the length of the list) */
		THIS.item = function(idx){
			preop();
			return tokens[idx];
		};
		
		
		/** Return TRUE if the underlying string contains `token`; otherwise, FALSE. */
		THIS[ CONTAINS ] = function(token){
			preop();
			return !!tokenMap[token];
		};
		
		
		
		/** Add one or more tokens to the underlying string. */
		THIS[ADD] = function(){
			preop[APPLY](THIS, args = arguments);

			for(var args, token, i = 0, l = args[ LENGTH ]; i < l; ++i){
				token = args[i];
				if(!tokenMap[token]){
					tokens.push(token);
					tokenMap[token] = TRUE;
				}
			}
			
			/** Update the targeted attribute of the attached element if the token list's changed. */
			if(length  !== tokens[ LENGTH ]){
				length   = tokens[ LENGTH ] >>> 0;
				el[prop] = tokens.join(SPACE);
				reindex();
			}
		};
		
		
		
		/** Remove one or more tokens from the underlying string. */
		THIS[ REMOVE ] = function(){
			preop[APPLY](THIS, args = arguments);
			
			/** Build a hash of token names to compare against when recollecting our token list. */
			for(var args, ignore = {}, i = 0, t = []; i < args[ LENGTH ]; ++i){
				ignore[args[i]] = TRUE;
				delete tokenMap[args[i]];
			}
			
			/** Run through our tokens list and reassign only those that aren't defined in the hash declared above. */
			for(i = 0; i < tokens[ LENGTH ]; ++i)
				if(!ignore[tokens[i]]) t.push(tokens[i]);
			
			tokens   = t;
			length   = t[ LENGTH ] >>> 0;
			
			/** Update the targeted attribute of the attached element. */
			el[prop] = tokens.join(SPACE);
			reindex();
		};
		
		
		
		/** Add or remove a token depending on whether it's already contained within the token list. */
		THIS[TOGGLE] = function(token, force){
			preop[APPLY](THIS, [token]);
			
			/** Token state's being forced. */
			if(UNDEF !== force){
				if(force) { THIS[ADD](token);     return TRUE;  }
				else      { THIS[REMOVE](token);  return FALSE; }
			}
			
			/** Token already exists in tokenList. Remove it, and return FALSE. */
			if(tokenMap[token]){
				THIS[ REMOVE ](token);
				return FALSE;
			}
			
			/** Otherwise, add the token and return TRUE. */
			THIS[ADD](token);
			return TRUE;
		};
		
		
		/** Mark our newly-assigned methods as non-enumerable. */
		(function(o, defineProperty){
			if(defineProperty)
				for(var i = 0; i < 7; ++i)
					defineProperty(o, METHODS[i], {enumerable: FALSE});
		}(THIS, OBJ[ DEFINE_PROPERTY ]));
		
		return THIS;
	},
	
	
	
	/** Polyfills a property with a DOMTokenList */
	addProp = function(o, name, attr){
		
		defineGetter(o[PROTOTYPE], name, function(){
			var tokenList,
			THIS = this,
			
			/** Prevent this from firing twice for some reason. What the hell, IE. */
			gibberishProperty           = DEFINE_GETTER + DEFINE_PROPERTY + name;
			if(THIS[gibberishProperty]) return tokenList;
			THIS[gibberishProperty]     = TRUE;
			
			
			/**
			 * IE8 can't define properties on native JavaScript objects, so we'll use a dumb hack instead.
			 *
			 * What this is doing is creating a dummy element ("reflection") inside a detached phantom node ("mirror")
			 * that serves as the target of Object.defineProperty instead. While we could simply use the subject HTML
			 * element instead, this would conflict with element types which use indexed properties (such as forms and
			 * select lists).
			 */
			if(FALSE === dpSupport){
				
				var visage,
				mirror      = addProp.mirror = addProp.mirror || DOC[ CREATE_ELEMENT ](DIV),
				reflections = mirror.childNodes,
				
				/** Iterator variables */
				l = reflections[ LENGTH ],
				i = 0;
				
				for(; i < l; ++i)
					if(reflections[i]._R === THIS){
						visage = reflections[i];
						break;
					}
				
				/** Couldn't find an element's reflection inside the mirror. Materialise one. */
				visage || (visage = mirror.appendChild(DOC[ CREATE_ELEMENT ](DIV)));
				
				tokenList = DOMTokenList.call(visage, THIS, attr);
			}
			
			else tokenList = new DOMTokenList(THIS, attr);
			
			
			defineGetter(THIS, name, function(){ return tokenList; });
			delete THIS[gibberishProperty];
			
			return tokenList;
		}, TRUE);
	},

	/** Variables used for patching native methods that're partially implemented (IE doesn't support adding/removing multiple tokens, for instance). */
	testList,
	nativeAdd,
	nativeRemove;
	
	
	
	
	/** No discernible DOMTokenList support whatsoever. Time to remedy that. */
	if(!WIN[ DOM_TOKEN_LIST ]){
		
		/** Ensure the browser allows Object.defineProperty to be used on native JavaScript objects. */
		if(dpSupport)
			try{ defineGetter({}, "support"); }
			catch(e){ dpSupport = FALSE; }
		
		
		DOMTokenList.polyfill   = TRUE;
		WIN[ DOM_TOKEN_LIST ]   = DOMTokenList;
		
		addProp( WIN[ ELEMENT ], CLASS_LIST, CLASS_ + "Name");      /* Element.classList */
		addProp( WIN[ HTML_+ "Link"   + ELEMENT ], REL_LIST, REL);  /* HTMLLinkElement.relList */
		addProp( WIN[ HTML_+ "Anchor" + ELEMENT ], REL_LIST, REL);  /* HTMLAnchorElement.relList */
		addProp( WIN[ HTML_+ "Area"   + ELEMENT ], REL_LIST, REL);  /* HTMLAreaElement.relList */
	}
	
	
	/**
	 * Possible support, but let's check for bugs.
	 *
	 * Where arbitrary values are needed for performing a test, previous variables
	 * are recycled to save space in the minified file.
	 */
	else{
		testList = DOC[ CREATE_ELEMENT ](DIV)[CLASS_LIST];
		
		/** We'll replace a "string constant" to hold a reference to DOMTokenList.prototype (filesize optimisation, yaddah-yaddah...) */
		PROTOTYPE = WIN[DOM_TOKEN_LIST][PROTOTYPE];
		
		
		/** Check if we can pass multiple arguments to add/remove. To save space, we'll just recycle a previous array of strings. */
		testList[ADD][APPLY](testList, METHODS);
		if(2 > testList[LENGTH]){
			nativeAdd      = PROTOTYPE[ADD];
			nativeRemove   = PROTOTYPE[REMOVE];
			
			PROTOTYPE[ADD] = function(){
				for(var i = 0, args = arguments; i < args[LENGTH]; ++i)
					nativeAdd.call(this, args[i]);
			};
			
			PROTOTYPE[REMOVE] = function(){
				for(var i = 0, args = arguments; i < args[LENGTH]; ++i)
					nativeRemove.call(this, args[i]);
			};
		}
		
		
		/** Check if the "force" option of .toggle is supported. */
		if(testList[TOGGLE](LIST, FALSE))
			PROTOTYPE[TOGGLE] = function(token, force){
				var THIS = this;
				THIS[(force = UNDEF === force ? !THIS[CONTAINS](token) : force) ? ADD : REMOVE](token);
				return !!force;
			};
	}
}());

function extend() {
  var obj, name, copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;

  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];

        if (target === copy) {
          continue;
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}

function indexOf(array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === item) { return i; }
  }
  return -1;
}

function getSupportedProp(proparray){
  var root = document.documentElement;
  for (var i=0; i<proparray.length; i++){
    if (proparray[i] in root.style){
      return proparray[i];
    }
  }
}

// var getTD = gn.getSupportedProp(['transitionDuration', 'WebkitTransitionDuration', 'MozTransitionDuration', 'OTransitionDuration']),
// getTransform = gn.getSupportedProp(['transform', 'WebkitTransform', 'MozTransform', 'OTransform']);

function isNodeList(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined"; 
}

function append(els, data) {
  var els_new = (isNodeList(els)) ? els : [els], i;

  if (typeof data.nodeType !== "undefined" && data.nodeType === 1) {
    for (i = els_new.length; i--;) {
      els_new[i].appendChild(data);
    }
  } else if (typeof data === "string") {
    for (i = els_new.length; i--;) {
      els_new[i].insertAdjacentHTML("beforeend", data);
    }
  } else if (isNodeList(data)) {
    var fragment = document.createDocumentFragment();
    for (i = data.length; i--;) {
      fragment.insertBefore(data[i], fragment.firstChild);
    }
    for (var j = els_new.length; j--;) {
      els_new[j].appendChild(fragment);
    }
  }
}

function wrap(els, obj) {
  var elsNew = (isNodeList(els)) ? els : [els];
  // Loops backwards to prevent having to clone the wrapper on the
  // first element (see `wrapper` below).
  for (var i = elsNew.length; i--;) {
    var wrapper = (i > 0) ? obj.cloneNode(true) : obj,
      el = elsNew[i];

    // Cache the current parent and sibling.
    var parent = el.parentNode,
      sibling = el.nextSibling;

    // Wrap the element (is automatically removed from its current parent).
    wrapper.appendChild(el);

    // If the element had a sibling, insert the wrapper before
    // the sibling to maintain the HTML structure; otherwise, just
    // append it to the parent.
    if (sibling) {
      parent.insertBefore(wrapper, sibling);
    } else {
      parent.appendChild(wrapper);
    }
  }
}

function unwrap(els) {
  var elsNew = (isNodeList(els)) ? els : [els];
  for (var i = elsNew.length; i--;) {
    var el = elsNew[i];

    // get the element's parent node
    var parent = el.parentNode;
    
    // move all children out of the element
    while (el.firstChild) { 
      parent.insertBefore(el.firstChild, el); 
    }
    
    // remove the empty element
    parent.removeChild(el);
  }
}

function getSlideId() {
  if (window.tnsId === undefined) {
    window.tnsId = 1;
  } else {
    window.tnsId++;
  }
  return 'tns' + window.tnsId;
}

function toDegree (y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

function getTouchDirection(angle, range) {
  if ( Math.abs(90 - Math.abs(angle)) >= (90 - range) ) {
    return 'horizontal';
  } else if ( Math.abs(90 - Math.abs(angle)) <= range ) {
    return 'vertical';
  } else {
    return false;
  }
}

function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}

function getAttr(el, attr) {
  return el.getAttribute(attr);
}

function isNodeList$1(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined"; 
}

function setAttrs(els, attrs) {
  els = (isNodeList$1(els) || els instanceof Array) ? els : [els];
  if (Object.prototype.toString.call(attrs) !== '[object Object]') { return; }

  for (var i = els.length; i--;) {
    for(var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}

function removeAttrs(els, attrs) {
  els = (isNodeList$1(els) || els instanceof Array) ? els : [els];
  attrs = (attrs instanceof Array) ? attrs : [attrs];

  var attrLength = attrs.length;
  for (var i = els.length; i--;) {
    for (var j = attrLength; j--;) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}

function removeEventsByClone(el) {
  var elClone = el.cloneNode(true), parent = el.parentNode;
  parent.insertBefore(elClone, el);
  el.remove();
  el = null;
}

function hideElement(el) {
  if (!hasAttr(el, 'hidden')) {
    setAttrs(el, {'hidden': ''});
  }
}

function showElement(el) {
  if (hasAttr(el, 'hidden')) {
    removeAttrs(el, 'hidden');
  }
}

// check if an image is loaded
// 1. See if "naturalWidth" and "naturalHeight" properties are available.
// 2. See if "complete" property is available.

function imageLoaded(img) {
  if (typeof img.complete === 'boolean') {
    return img.complete;
  } else if (typeof img.naturalWidth === 'number') {
    return img.naturalWidth !== 0;
  }
}

function whichProperty(obj){
  var t, el = document.createElement('fakeelement');
  for(t in obj){
    if( el.style[t] !== undefined ){
      return [t, obj[t][0], obj[t][1]];
    }
  }

  return false; // explicit for ie9-
}

// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}
var passiveOption = supportsPassive ? { passive: true } : false;

function addEvents(el, obj) {
  for (var prop in obj) {
    var option = (prop === 'touchstart' || prop === 'touchmove') ? passiveOption : false;
    el.addEventListener(prop, obj[prop], option);
  }
}

function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = (prop === 'touchstart' || prop === 'touchmove') ? passiveOption : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}

function Events() {
  return {
    topics: {},
    on: function (eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function (eventName, data) {
      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function(fn) {
          fn(data);
        });
      }
    }
  };
}

function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10),
      from = Number(element.style[attr].slice(prefix.length, - (postfix.length + 2))),
      positionTick = (to - from) / duration * tick,
      running;

  setTimeout(moveElement, tick);
  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + 'px' + postfix;
    if (duration > 0) { 
      setTimeout(moveElement, tick); 
    } else {
      callback();
    }
  }
}

// PRODUCTION

// from go-native
// helper functions
var TRANSFORM = getSupportedProp([
      'transform', 
      'WebkitTransform', 
      'MozTransform', 
      'msTransform',
      'OTransform'
    ]);
var transitions = {
      'transitionDuration': ['transitionDelay', 'transitionend'],
      'WebkitTransitionDuration': ['WebkitTransitionDelay', 'webkitTransitionEnd'],
      'MozTransitionDuration': ['MozTransitionDelay', 'transitionend'],
      'OTransitionDuration': ['OTransitionDelay', 'oTransitionEnd']
    };
var animations = {
      'animationDuration': ['animationDelay', 'animationend'],
      'WebkitAnimationDuration': ['WebkitAnimationDelay', 'webkitAnimationEnd'],
      'MozAnimationDuration': ['MozAnimationDelay', 'animationend'],
      'OAnimationDuration': ['OAnimationDelay', 'oAnimationEnd']
    };
var TRANSITIONDURATION = whichProperty(transitions)[0];
var TRANSITIONDELAY = whichProperty(transitions)[1];
var TRANSITIONEND = whichProperty(transitions)[2];
var ANIMATIONDURATION = whichProperty(animations)[0];
var ANIMATIONDELAY = whichProperty(animations)[1];
var ANIMATIONEND = whichProperty(animations)[2];
var KEY = {
      ENTER: 13,
      SPACE: 32,
      PAGEUP: 33,
      PAGEDOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    };

var tns = function(options) {
  options = extend({
    container: document.querySelector('.slider'),
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    slideBy: 1,
    controls: true,
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    nav: true,
    navContainer: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayResetOnVisibility: true,
    animateIn: 'tns-fadeIn',
    animateOut: 'tns-fadeOut',
    animateNormal: 'tns-normal',
    animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    touch: true,
    mouseDrag: false,
    nested: false,
    onInit: false
  }, options || {});
  // make sure slide container exists
  if (typeof options.container !== 'object' || options.container === null) { return; }

  // === define and set variables ===
  var mode = options.mode,
      axis = options.axis,
      wrapper = document.createElement('div'),
      contentWrapper = document.createElement('div'),
      container = options.container,
      slideItems = container.children,
      slideCount = slideItems.length,
      items = options.items,
      slideBy = getSlideBy(),
      nested = options.nested,
      gutter = options.gutter,
      edgePadding = (mode === 'gallery') ? false : options.edgePadding,
      fixedWidth = options.fixedWidth,
      arrowKeys = options.arrowKeys,
      speed = options.speed,
      rewind = options.rewind,
      loop = (mode === 'gallery')? true: (options.rewind)? false : options.loop,
      autoHeight = (mode === 'gallery') ? true : options.autoHeight,
      responsive = (fixedWidth) ? false : options.responsive,
      lazyload = options.lazyload,
      slideId = container.id || getSlideId(),
      slideWidth = (fixedWidth)? fixedWidth + gutter : 0,
      slideEdges, // collection of slide edges
      slideItemsOut = [],
      cloneCount = (loop) ? slideCount * 2 : (edgePadding) ? 1 : 0,
      slideCountNew = (mode === 'gallery') ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = (fixedWidth && !loop && !edgePadding)? true : false,
      checkIndexBeforeTransform = (mode === 'gallery' || !loop)? true : false,
      // transform
      transformDir = (axis === 'horizontal')? 'X' : 'Y',
      transformAttrLegacy = (axis === 'horizontal')? 'left' : 'top', 
      transformAttr = transformAttrLegacy,
      transformType = 'translate',
      transformPrefix = '',
      transformPostfix = '',
      // controls
      controls = options.controls,
      controlsText = options.controlsText,
      controlsContainer = (!options.controlsContainer) ? false : options.controlsContainer,
      prevButton,
      nextButton,
      // nav
      nav = options.nav,
      navContainer = options.navContainer || false,
      navItems,
      navCountVisible,
      navCountVisibleCached = slideCount,
      visibleNavIndexes = [],
      visibleNavIndexesCached = visibleNavIndexes,
      navClicked = -1,
      navCurrent = 0,
      navCurrentCached = 0,
      // index
      index = (mode === 'gallery') ? 0 : cloneCount,
      indexCached = index,
      indexAdjust = (edgePadding) ? 1 : 0,
      indexMin = indexAdjust,
      indexMax,
      vw,
      // autoplay
      autoplay = options.autoplay,
      autoplayTimeout = options.autoplayTimeout,
      autoplayDirection = (options.autoplayDirection === 'forward') ? 1 : -1,
      autoplayText = options.autoplayText,
      autoplayHoverPause = options.autoplayHoverPause,
      autoplayTimer,
      autoplayButton = options.autoplayButton,
      animating = false,
      autoplayHoverStopped = false,
      autoplayHtmlString = '<span hidden>Stop Animation</span>',
      autoplayResetOnVisibility = options.autoplayResetOnVisibility,
      autoplayResetVisibilityState = false,
      // touch
      touch = options.touch,
      startX = null,
      startY = null,
      translateInit,
      disX,
      disY,
      touchedOrDraged,
      //mouse
      mouseDrag = options.mouseDrag,
      mousePressed = false,
      isDragEvent = false,
      // gallery
      animateIn = (ANIMATIONDURATION) ? options.animateIn : 'tns-fadeIn',
      animateOut = (ANIMATIONDURATION) ? options.animateOut : 'tns-fadeOut',
      animateNormal = (ANIMATIONDURATION) ? options.animateNormal : 'tns-normal',
      animateDelay = (ANIMATIONDURATION) ? options.animateDelay : false,
      // resize and scroll
      resizeTimer,
      ticking = false,
      onInit = options.onInit,
      events = new Events();

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = transformType + transformDir + '(';
    transformPostfix = ')';
  }

  // === COMMON FUNCTIONS === //
  function getSlideBy () {
    return (mode === 'gallery' || options.slideBy === 'page') ? items : options.slideBy;
  }

  var getItems = (function () {
    if (!fixedWidth) {
      return function () {
        var itemsTem = options.items,
            // ww = document.documentElement.clientWidth,
            bpKeys = (typeof responsive === 'object') ? Object.keys(responsive) : false;

        if (bpKeys) {
          bpKeys.forEach(function (key) {
            if (vw >= key) { itemsTem = responsive[key]; }
          });
        }
        return Math.max(1, Math.min(slideCount, itemsTem));
      };

    } else {
      return function () { return Math.max(1, Math.min(slideCount, Math.floor(vw / fixedWidth))); };
    }
  })();

  function getSlideWidth() {
    return (vw + gutter) / items;
  }

  var getVisibleNavCount = (function () {
    if (options.navContainer) {
      return function () { return slideCount; };
    } else {
      return function () { return Math.ceil(slideCount / items); };
    }
  })();

  var getViewWidth = (function () {
    // horizontal carousel: fluid width && edge padding
    //  => inner wrapper view width
    if (axis === 'horizontal' && !fixedWidth && edgePadding) { 
      return function () { return wrapper.clientWidth - (edgePadding + gutter) * 2; };
    // horizontal carousel: fixed width || fluid width but no edge padding
    // vertical carousel
    //  => wrapper view width
    } else {
      return function () { return wrapper.clientWidth; };
    }
  })();

  // compare slide count & items
  // (items) => nav, controls, autoplay
  function checkSlideCount() {
    // a. slide count < items
    //  => disable nav, controls, autoplay
    if (slideCount <= items) { 
      arrowKeys = false;

      var indexTem;
      index = (mode === 'gallery') ? 0 : cloneCount;
      if (index !== indexTem) { events.emit('indexChanged', info()); }

      if (navContainer) { hideElement(navContainer); }
      if (controlsContainer) { hideElement(controlsContainer); }
      if (autoplayButton) { hideElement(autoplayButton); }
    // b. slide count > items
    //  => enable nav, controls, autoplay
    } else {
      arrowKeys = options.arrowKeys;
      if (nav) { showElement(navContainer); }
      if (controls) { showElement(controlsContainer); }
      if (autoplay) { showElement(autoplayButton); }
    }
  }

  // === INITIALIZATION FUNCTIONS === //
  function wrapperInit() {
    setAttrs(wrapper, {'data-tns-role': 'wrapper'});
    setAttrs(contentWrapper, {'data-tns-role': 'content-wrapper'});
    if (axis === 'vertical') { 
      setAttrs(contentWrapper, {'data-tns-hidden': 'y'}); 
    } else {
      setAttrs(wrapper, {'data-tns-hidden': 'x'}); 
    }

    if (mode === 'carousel') {
      var gap = (fixedWidth && edgePadding) ? getFixedWidthEdgePadding() : (edgePadding) ? edgePadding + gutter : 0;
      contentWrapper.style.cssText = (axis === 'horizontal') ? 'margin: 0 ' + gap + 'px;' : 'padding: ' + gap + 'px 0 ' + edgePadding + 'px; height: ' + getVerticalWrapperHeight() + 'px;'; 
    }
  }

  // vw => items => indexMax, slideWidth, navCountVisible, slideBy
  function getVariables() {
    vw = getViewWidth();
    items = getItems();
    indexMax = slideCountNew - items - indexAdjust;

    if (axis === 'horizontal' && !fixedWidth) { slideWidth = getSlideWidth(); }
    navCountVisible = getVisibleNavCount();
    slideBy = getSlideBy();
  }

  function containerInit() {
    // add id
    if (container.id === '') { container.id = slideId; }
    // add attributes
    setAttrs(container, {
      'data-tns-role': 'content', 
      'data-tns-mode': mode, 
      'data-tns-axis': axis
    });

    if (axis === 'horizontal') {
      container.style.width = (slideWidth + 1) * slideCountNew + 'px';
    }
  }

  function containerInitStyle() {
    // init width & transform
    if (mode === 'carousel') {
      if (autoHeight) { setAttrs(container, {'data-tns-hidden': 'y'}); }
      container.style[transformAttr] = transformPrefix + Math.round(-slideEdges[index]) + 'px' + transformPostfix;
    }
  }

  // for IE10
  function msInit() {
    if (navigator.msMaxTouchPoints) {
      wrapper.classList.add('ms-touch');
      addEvents(wrapper, {'scroll': ie10Scroll});
    }
  }

  function slideItemsInit() {
    for (var x = 0; x < slideCount; x++) {
      var item = slideItems[x];

      // add slide id
      item.id = slideId + '-item' + x;

      // add class
      if (mode === 'gallery' && animateNormal) { item.classList.add(animateNormal); }

      // add aria-hidden attribute
      setAttrs(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });

      // set slide width & gutter
      var gutterPosition = (axis === 'horizontal') ? 'right' : 'bottom', 
          styles = '';
      if (mode === 'carousel') { styles = 'margin-' + gutterPosition + ': ' + gutter + 'px;'; }
      if (axis === 'horizontal') { styles = 'width: ' + (slideWidth - gutter) + 'px; ' + styles; }
      item.style.cssText += styles;
    }

    // clone slides
    if (loop || edgePadding) {
      var fragmentBefore = document.createDocumentFragment(), 
          fragmentAfter = document.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j%slideCount,
            cloneFirst = slideItems[num].cloneNode(true);
        removeAttrs(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (mode === 'carousel') {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          removeAttrs(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }
  }

  function controlsInit() {
    if (controls) {
      if (options.controlsContainer) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
        setAttrs(controlsContainer, {
          'aria-label': 'Carousel Navigation',
          'tabindex': '0'
        });
        setAttrs(prevButton, {'data-controls' : 'prev'});
        setAttrs(nextButton, {'data-controls' : 'next'});
        setAttrs(controlsContainer.children, {
          'aria-controls': slideId,
          'tabindex': '-1',
        });
      } else {
        append(wrapper, '<div data-tns-role="controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + slideId +'" type="button">' + controlsText[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + slideId +'" type="button">' + controlsText[1] + '</button></div>');

        [].forEach.call(wrapper.children, function (el) {
          if (el.getAttribute('data-tns-role') === 'controls') { controlsContainer = el; }
        });
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }
    }
  }

  function navInit() {
    if (nav) {
      // customized nav
      // will not hide the navs in case they're thumbnails
      if (options.navContainer) {
        setAttrs(navContainer, {'aria-label': 'Carousel Pagination'});
        navItems = navContainer.children;
        [].forEach.call(navItems, function (item, index) {
          setAttrs(item, {
            'data-nav': index,
            'tabindex': '-1',
            'aria-selected': 'false',
            'aria-controls': slideId + '-item' + index,
          });
        });

      // generated nav 
      } else {
        var navHtml = '';
        for (var i = 0; i < slideCount; i++) {
          // hide nav items by default
          navHtml += '<button data-nav="' + i +'" tabindex="-1" aria-selected="false" aria-controls="' + slideId + '-item' + i +'" hidden type="button"></button>';
        }
        navHtml = '<div data-tns-role="nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        append(wrapper, navHtml);

        [].forEach.call(wrapper.children, function (el) {
          if (el.getAttribute('data-tns-role') === 'nav') { navContainer = el; }
        });
        navItems = navContainer.children;

        updateNavVisibility();
      }
    }
  }

  function autoplayInit() {
    if (autoplay) {
      if (autoplayButton) {
        setAttrs(autoplayButton, {'data-action': 'stop'});
      } else {
        if (!navContainer) {
          append(wrapper, '<div data-tns-role="nav" aria-label="Carousel Pagination"></div>');
          navContainer = wrapper.querySelector('[data-tns-role="nav"]');
        }

        append(navContainer, '<button data-action="stop" type="button">' + autoplayHtmlString + autoplayText[0] + '</button>');
        autoplayButton = navContainer.querySelector('[data-action]');
      }

      // start autoplay
      startAction();
    }
  }

  function activateSlider() {
    for (var i = index; i < index + items; i++) {
      var item = slideItems[i];
      setAttrs(item, {'aria-hidden': 'false'});
      removeAttrs(item, ['tabindex']);
      if (mode === 'gallery') { 
        item.style.left = slideWidth * (i - index) + 'px'; 
        item.classList.remove(animateNormal);
        item.classList.add(animateIn);
      }
    }
    if (controls) {
      // setAttrs(nextButton, {'tabindex': '0'});
      if (index === indexMin && !loop || rewind) {
        prevButton.disabled = true;
      }
    }
    if (nav) {
      setAttrs(navItems[0], {'tabindex': '0', 'aria-selected': 'true'});
    }
  }

  function addSliderEvents() {
    if (mode === 'carousel') {
      if (TRANSITIONEND) {
        var eve = {};
        eve[TRANSITIONEND] = onTransitionEnd;
        addEvents(container, eve);
      }
      if (touch) {
        addEvents(container, {
          'touchstart': onTouchOrMouseStart,
          'touchmove': onTouchOrMouseMove,
          'touchend': onTouchOrMouseEnd,
          'touchcancel': onTouchOrMouseEnd
        });
      }
      if (mouseDrag) {
        addEvents(container, {
          'mousedown': onTouchOrMouseStart,
          'mousemove': onTouchOrMouseMove,
          'mouseup': onTouchOrMouseEnd,
          'mouseleave': onTouchOrMouseEnd
        });
      }
    }

    if (nav) {
      for (var y = 0; y < slideCount; y++) {
        addEvents(navItems[y],{
          'click': onClickNav,
          'keydown': onKeydownNav
        });
      }
    }

    if (controls) {
      addEvents(controlsContainer, {'keydown': onKeydownControl});
      addEvents(prevButton,{'click': onClickPrev});
      addEvents(nextButton,{'click': onClickNext});
    }

    if (autoplay) {
      addEvents(autoplayButton, {'click': toggleAnimation});
      if (autoplayHoverPause) {
        addEvents(container, {'mouseover': function () {
          if (animating) { 
            stopAction(); 
            autoplayHoverStopped = true;
          }
        }});
        addEvents(container, {'mouseout': function () {
          if (!animating && autoplayHoverStopped) { 
            startAction(); 
            autoplayHoverStopped = false;
          }
        }});
      }

      if (autoplayResetOnVisibility) {
        addEvents(document, {'visibilitychange': onVisibilityChange});
      }
    }

    if (arrowKeys) {
      addEvents(document, {'keydown': onKeydownDocument});
    }

    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else {
      addEvents(window, {'resize': onResize});
      if (nested === 'outer') {
        events.on('innerLoaded', runAutoHeight);
      }
    }
  }

  // lazyload
  function lazyLoad() {
    if (lazyload) {
      var i = index, 
          len = index + items;
          
      if (edgePadding) {
        i -=1;
        len +=1;
      }

      for(; i < len; i++) {
        [].forEach.call(slideItems[i].querySelectorAll('[data-tns-role="lazy-img"]'), function (img) {
          // stop propagationl transitionend event to container
          var eve = {};
          eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };
          addEvents(img, eve);

          if (!img.classList.contains('loaded')) {
            img.src = getAttr(img, 'data-src');
            img.classList.add('loaded');
          }
        });
      }
    }
  }

  // check if all visible images are loaded
  // and update container height if it's done
  function runAutoHeight() {
    if (autoHeight) {
      // get all images inside visible slide items
      var images = [];

      for (var i = index; i < index + items; i++) {
        [].forEach.call(slideItems[i].querySelectorAll('img'), function (img) {
          images.push(img);
        });
      }

      if (images.length === 0) {
        updateContainerHeight(); 
      } else {
        checkImagesLoaded(images);
      }
    }
  }

  function checkImagesLoaded(images) {
    images.forEach(function (img, index) {
      if (imageLoaded(img)) { images.splice(index, 1); }
    });

    if (images.length === 0) {
      updateContainerHeight();
    } else {
      setTimeout(function () { 
        checkImagesLoaded(images); 
      }, 16);
    }
  } 

  function sliderInit() {
    // First thing first, wrap container with "wrapper > contentWrapper",
    // to get the correct view width
    wrap(container, contentWrapper);
    wrap(contentWrapper, wrapper);

    getVariables();
    containerInit();
    slideItemsInit();
    getSlideEdges();

    wrapperInit();
    containerInitStyle();
    msInit();
    controlsInit();
    navInit();
    autoplayInit();

    activateSlider();
    addSliderEvents();
    checkSlideCount();

    lazyLoad();
    runAutoHeight();

    if (typeof onInit === 'function') {
      onInit(info());
    }

    if (nested === 'inner') { 
      events.emit('innerLoaded', info()); 
    }
  }
  sliderInit();

  // (vw) => edgePadding
  function getFixedWidthEdgePadding() {
    return (vw%slideWidth + gutter) / 2;
  }

  // update container height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update container height to max-height
  // 4. set transitionDuration to 0s after transition done
  function updateContainerHeight() {
    var heights = [], maxHeight;
    for (var i = index; i < index + items; i++) {
      heights.push(slideItems[i].offsetHeight);
    }
    maxHeight = Math.max.apply(null, heights);

    if (container.style.height !== maxHeight) {
      if (TRANSITIONDURATION) { setDurations(speed); }
      container.style.height = maxHeight + 'px';
    }
  }

  // get the distance from the top edge of the first slide to each slide
  // (init) => slideEdges
  function getSlideEdges() {
    slideEdges = [0];
    var topFirst = slideItems[0].getBoundingClientRect()[transformAttrLegacy], attr;
    for (var i = 1; i < slideCountNew; i++) {
      attr = slideItems[i].getBoundingClientRect()[transformAttrLegacy];
      slideEdges.push(attr - topFirst);
    }
  }

  // get wrapper height
  // (slideEdges, index, items) => vertical_conentWrapper.height
  function getVerticalWrapperHeight() {
    return slideEdges[index + items] - slideEdges[index];
  }

  // set snapInterval (for IE10)
  function setSnapInterval() {
    wrapper.style.msScrollSnapPointsX = 'snapInterval(0%, ' + slideWidth + ')';
  }

  // update slide
  function updateSlideStatus() {
    var h1, h2, v1, v2;
    if (index !== indexCached) {
      if (index > indexCached) {
        h1 = indexCached;
        h2 = Math.min(indexCached + items, index);
        v1 = Math.max(indexCached + items, index);
        v2 = index + items;
      } else {
        h1 = Math.max(index + items, indexCached);
        h2 = indexCached + items;
        v1 = index;
        v2 = Math.min(index + items, indexCached);
      }
    }

    if (slideBy%1 !== 0) {
      h1 = Math.round(h1);
      h2 = Math.round(h2);
      v1 = Math.round(v1);
      v2 = Math.round(v2);
    }

    for (var i = h1; i < h2; i++) {
      setAttrs(slideItems[i], {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    }
    for (var j = v1; j < v2; j++) {
      setAttrs(slideItems[j], {'aria-hidden': 'false'});
      removeAttrs(slideItems[j], ['tabindex']);
    }
  }

  // set tabindex & aria-selected on Nav
  function updateNavStatus() {
    // get current nav
    if (nav) {
      navCurrent = (navClicked !== -1) ? navClicked : index%slideCount;
      navClicked = -1;

      if (navCurrent !== navCurrentCached) {
        setAttrs(navItems[navCurrentCached], {
          'tabindex': '-1',
          'aria-selected': 'false'
        });

        setAttrs(navItems[navCurrent], {
          'tabindex': '0',
          'aria-selected': 'true'
        });
        navCurrentCached = navCurrent;
      }
    }
  }

  // set 'disabled' to true on controls when reach the edge
  function updateControlsStatus() {
    if (controls && !loop) {
      var disable = [], active = [];
      if (index === indexMin) {
        disable.push(prevButton);
        active.push(nextButton);
        changeFocus(prevButton, nextButton);
      } else if (!rewind && index === indexMax) {
        disable.push(nextButton);
        active.push(prevButton);
        changeFocus(nextButton, prevButton);
      } else {
        active.push(prevButton, nextButton);
      }

      if (disable.length > 0) {
        disable.forEach(function (button) {
          if (!button.disabled) {
            button.disabled = true;
            // setAttrs(button, {'tabindex': '-1'});
          }
        });
      }

      if (active.length > 0) {
        active.forEach(function (button) {
          if (button.disabled) {
            button.disabled = false;
            // setAttrs(button, {'tabindex': '0'});
          }
        });
      }
    }
  }

  // set duration
  function setDurations (duration, target) {
    duration = (!duration)? '' : duration / 1000 + 's';
    target = target || container;
    target.style[TRANSITIONDURATION] = duration;

    if (mode === 'gallery') {
      target.style[ANIMATIONDURATION] = duration;
    }
    if (axis === 'vertical') {
      contentWrapper.style[TRANSITIONDURATION] = duration;
    }
  }

  // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers
  var transformCore = (function () {
    if (mode === 'carousel') {
      return function (duration, distance) {
        if (!distance) { distance = -slideEdges[index]; }
        // constrain the distance when non-loop no-edgePadding fixedWidth reaches the right edge
        if (hasRightDeadZone && index === indexMax) {
          distance = Math.max(distance, -slideCountNew * slideWidth + vw + gutter);
        }

        if (TRANSITIONDURATION || !duration) {
          container.style[transformAttr] = transformPrefix + Math.round(distance) + 'px' + transformPostfix;
        } else {
          jsTransform(container, transformAttr, transformPrefix, transformPostfix, distance, speed, onTransitionEnd);
        }

        if (axis === 'vertical') { contentWrapper.style.height = getVerticalWrapperHeight() + 'px'; }
      };
    } else {
      return function () {
        slideItemsOut = [];

        var eve = {};
        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
        removeEvents(slideItems[indexCached], eve);
        addEvents(slideItems[index], eve);

        (function () {
          for (var i = indexCached, l = indexCached + items; i < l; i++) {
            var item = slideItems[i];
            if (TRANSITIONDURATION) { setDurations(speed, item); }
            if (animateDelay && TRANSITIONDELAY) {
              var d = animateDelay * (i - indexCached) / 1000; 
              item.style[TRANSITIONDELAY] = d + 's'; 
              item.style[ANIMATIONDELAY] = d + 's'; 
            }
            item.classList.remove(animateIn);
            item.classList.add(animateOut);
            slideItemsOut.push(item);
          }
        })();

        (function () {
          for (var i = index, l = index + items; i < l; i++) {
            var item = slideItems[i];
            if (TRANSITIONDURATION) { setDurations(speed, item); }
            if (animateDelay && TRANSITIONDELAY) {
              var d = animateDelay * (i - index) / 1000; 
              item.style[TRANSITIONDELAY] = d + 's'; 
              item.style[ANIMATIONDELAY] = d + 's'; 
            }
            item.classList.remove(animateNormal);
            item.classList.add(animateIn);
            if (i > index) { item.style.left = (i - index) * slideWidth + 'px'; }
          }
        })();

        if (!TRANSITIONEND) {
          setTimeout(onTransitionEnd, speed);
        }
      };
    }
  })();

  function doTransform (duration, distance) {
    if (duration === undefined) { duration = speed; }
    if (TRANSITIONDURATION) { setDurations(duration); }
    transformCore(duration, distance);
  }

  // (slideBy, indexMin, indexMax) => index
  var checkIndex = (function () {
    if (loop) {
      return function () {
        var leftEdge = (mode === 'carousel')? slideBy + indexMin : indexMin, 
            rightEdge = (mode === 'carousel')? indexMax - slideBy : indexMax;

        if (fixedWidth && vw%slideWidth !== 0) { rightEdge -= 1; }

        if (index > rightEdge) {
          while(index >= leftEdge + slideCount) { index -= slideCount; }
        } else if(index < leftEdge) {
          while(index <= rightEdge - slideCount) { index += slideCount; }
        }
      };
    } else {
      return function () {
        index = Math.max(indexMin, Math.min(indexMax, index));
      };
    }
  })();

  function render() {
    setAttrs(container, {'aria-busy': 'true'});
    if (checkIndexBeforeTransform) { checkIndex(); }

    // events
    if (index%slideCount !== indexCached%slideCount) { events.emit('indexChanged', info()); }
    events.emit('transitionStart', info());

    doTransform();
  }

  // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height
  function onTransitionEnd(event) {
    events.emit('transitionEnd', info(event));

    if (mode === 'gallery' && slideItemsOut.length > 0) {
      for (var i = 0; i < items; i++) {
        var item = slideItemsOut[i];
        if (TRANSITIONDURATION) { setDurations(0, item); }
        if (animateDelay && TRANSITIONDELAY) { 
          item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = '';
        }
        item.classList.remove(animateOut);
        item.classList.add(animateNormal);
        item.style.left = '';
      }
    }

    /*
     * Transfer prefixed properties to the same format
     * CSS: -Webkit-Transform => webkittransform
     * JS: WebkitTransform => webkittransform
     * @param {string} str - property
     *
     */
    function strTrans(str) {
      return str.toLowerCase().replace(/-/g, '');
    }

    /*
     * update slides, nav, controls after checking ...
     *
     * => legacy browsers who don't support 'event' 
     *    have to check event first, otherwise event.target will cause an error 
     * 
     * => or 'gallery' mode: 
     *   + event target is slide item
     *
     * => or 'carousel' mode: 
     *   + event target is container, 
     *   + event.property is the same with transform attribute
     *
     */
    if (!event || 
        mode === 'gallery' && event.target.parentNode === container || 
        event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {

      if (!checkIndexBeforeTransform) { 
        var indexTem = index;
        checkIndex();
        if (index !== indexTem) { 
          doTransform(0); 
          events.emit('indexChanged', info());
        }
      } 

      updateSlideStatus();

      // update nav visibility when 
      // visibleNavIndexes doesn't contain current index
      if (visibleNavIndexes.indexOf(index%slideCount) === -1) { 
        updateNavVisibility(); 
      }
      updateNavStatus();
      updateControlsStatus();
      lazyLoad();
      runAutoHeight();

      if (nested === 'inner') { 
        events.emit('innerLoaded', info()); 
      } 
      removeAttrs(container, 'aria-busy');
      updateIndexCache();
    }

  }

  function updateIndexCache() {
    indexCached = index;
  }

  // # ACTIONS
  // on controls click
  function onClickControl(dir) {
    if (getAttr(container, 'aria-busy') !== 'true') {
      index = index + dir * slideBy;

      render();
    }
  }

  function onClickPrev() {
    onClickControl(-1);
  }

  function onClickNext() {
    if(rewind && index === indexMax){
      onClickControl(-(indexMax - indexMin) / slideBy);
    }else{
      onClickControl(1);
    }
  }

  // on doc click
  function onClickNav(e) {
    if (getAttr(container, 'aria-busy') !== 'true') {
      var clickTarget = e.target || e.srcElement,
          navIndex,
          indexAdjust,
          targetIndex;

      // find the clicked nav item
      while (indexOf(navItems, clickTarget) === -1) {
        clickTarget = clickTarget.parentNode;
      }

      navIndex = navClicked = indexOf(navItems, clickTarget);
      indexAdjust = (mode === 'gallery')? 0 : cloneCount;
      targetIndex = navIndex + indexAdjust;

      goTo(targetIndex);
    }
  }

  function startAction() {
    resetActionTimer();
    setAttrs(autoplayButton, {'data-action': 'stop'});
    autoplayButton.innerHTML = autoplayHtmlString + autoplayText[1];

    animating = true;
  }

  function stopAction() {
    pauseActionTimer();
    setAttrs(autoplayButton, {'data-action': 'start'});
    autoplayButton.innerHTML = autoplayHtmlString.replace('Stop', 'Start') + autoplayText[0];

    animating = false;
  }

  function pauseActionTimer() {
    animating = 'paused';
    clearInterval(autoplayTimer);
  }

  function resetActionTimer() {
    if (animating === true) { return; }
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(function () {
      onClickControl(autoplayDirection);
    }, autoplayTimeout);
  }

  function toggleAnimation() {
    if (animating) {
      stopAction();
    } else {
      startAction();
    }
  }

  function onVisibilityChange() {
    if (autoplayResetVisibilityState != document.hidden && animating !== false) {
      document.hidden ? pauseActionTimer() : resetActionTimer();
    }
    autoplayResetVisibilityState = document.hidden;
  }

  // 
  function onKeydownDocument(e) {
    e = e || window.event;
    switch(e.keyCode) {
      case KEY.LEFT:
        onClickPrev();
        break;
      case KEY.RIGHT:
        onClickNext();
    }
  }

  // change focus
  function changeFocus(blur, focus) {
    if (typeof blur === 'object' && 
        typeof focus === 'object' && 
        blur === document.activeElement) {
      blur.blur();
      focus.focus();
    }
  }

  // on key control
  function onKeydownControl(e) {
    e = e || window.event;
    var code = e.keyCode,
        curElement = document.activeElement;

    switch (code) {
      case KEY.LEFT:
      case KEY.UP:
      case KEY.PAGEUP:
          if (!prevButton.disabled) {
            onClickPrev();
          }
          break;
      case KEY.RIGHT:
      case KEY.DOWN:
      case KEY.PAGEDOWN:
          if (!nextButton.disabled) {
            onClickNext();
          }
          break;
      case KEY.HOME:
        goTo(0);
        break;
      case KEY.END:
        goTo(slideCount - 1);
        break;
    }
  }

  // on key nav
  function onKeydownNav(e) {
    e = e || window.event;
    var code = e.keyCode,
        curElement = document.activeElement,
        dataSlide = getAttr(curElement, 'data-nav');

    switch(code) {
      case KEY.LEFT:
      case KEY.PAGEUP:
        if (dataSlide > 0) { changeFocus(curElement, curElement.previousElementSibling); }
        break;
      case KEY.UP:
      case KEY.HOME:
        if (dataSlide !== 0) { changeFocus(curElement, navItems[0]); }
        break;
      case KEY.RIGHT:
      case KEY.PAGEDOWN:
        if (dataSlide < navCountVisible - 1) { changeFocus(curElement, curElement.nextElementSibling); }
        break;
      case KEY.DOWN:
      case KEY.END:
        if (dataSlide < navCountVisible - 1) { changeFocus(curElement, navItems[navCountVisible - 1]); }
        break;
      case KEY.ENTER:
      case KEY.SPACE:
        onClickNav(e);
        break;
    }
  }

  // IE10 scroll function
  function ie10Scroll() {
    doTransform(0, container.scrollLeft());
    updateIndexCache();
  }

  function getTarget(e) {
    return e.target || e.srcElement;
  }

  function isLinkElement(el) {
    return el.tagName.toLowerCase() === 'a';
  }

  function preventDefaultBehavior(e) {
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
  }

  function onTouchOrMouseStart(e) {
    e = e || window.event;
    if (isLinkElement(getTarget(e)) && e.type !== 'touchstart') { preventDefaultBehavior(e); }

    var ev = (e.type === 'touchstart') ? e.changedTouches[0] : e;
    startX = parseInt(ev.clientX);
    startY = parseInt(ev.clientY);
    var slices = (TRANSFORM)? [11, -3] : [0, -2];
    translateInit = Number(container.style[transformAttr].slice(slices[0], slices[1]));

    if (e.type === 'touchstart') {
      events.emit('touchStart', info(e));
    } else {
      events.emit('dragStart', info(e));
      mousePressed = true;
    }
  }

  function onTouchOrMouseMove(e) {
    e = e || window.event;

    // "mousemove" event after "mousedown" indecate it's "drag", not "click"
    // set isDragEvent to true
    if (mousePressed && e.type === 'mousemove' && !isDragEvent) {
      isDragEvent = true;
    }
    
    // console.log(e.type, mousePressed, isDragEvent, e.clientX);
    // make sure touch started or mouse draged
    if (startX !== null) {
      if (isLinkElement(getTarget(e)) && e.type !== 'touchmove') { preventDefaultBehavior(e); }

      var ev = (e.type === 'touchmove') ? e.changedTouches[0] : e;
      disX = parseInt(ev.clientX) - startX;
      disY = parseInt(ev.clientY) - startY;

      if (getTouchDirection(toDegree(disY, disX), 15) === axis) { 
        touchedOrDraged = true;

        if (e.type === 'touchmove') {
          events.emit('touchMove', info(e));
        } else {
          events.emit('dragMove', info(e));
        }

        var x = (axis === 'horizontal')? (translateInit + disX) : (translateInit + disY);
            x += 'px';

        if (TRANSFORM) {
          x = 'translate' + transformDir + '(' + x + ')';
          setDurations(0);
        }
        container.style[transformAttr] = x;
      }
    }
  }

  function onTouchOrMouseEnd(e) {
    e = e || window.event;

    // reset mousePressed
    if (mousePressed) { mousePressed = false; }

    if (touchedOrDraged) {
      touchedOrDraged = false;

      var ev = (e.type.indexOf('touch') === 0) ? e.changedTouches[0] : e;
      disX = parseInt(ev.clientX) - startX;
      disY = parseInt(ev.clientY) - startY;

      // reset startX, startY
      startX = startY = null;

      if (axis === 'horizontal') {
        index = - (translateInit + disX) / slideWidth;
        index = (disX > 0) ? Math.floor(index) : Math.ceil(index);
      } else {
        var moved = - (translateInit + disY);
        if (moved <= 0) {
          index = indexMin;
        } else if (moved >= slideEdges[slideEdges.length - 1]) {
          index = indexMax;
        } else {
          var i = 0;
          do {
            i++;
            index = (disY < 0) ? i + 1 : i;
          } while (i < slideCountNew && moved >= Math.round(slideEdges[i + 1]));
        }
      }
      
      if (e.type.indexOf('touch') === 0) {
        events.emit('touchEnd', info(e));
      } else {
        events.emit('dragEnd', info(e));
      }

      render();
    }

    // drag vs click?
    if (isDragEvent) { 
      // reset isDragEvent
      isDragEvent = false;

      // prevent "click"
      var target = getTarget(e);
      if (isLinkElement(target)) {
        addEvents(target, {'click': function preventClick(e) {
          preventDefaultBehavior(e);
          removeEvents(target, {'click': preventClick});
        }}); 
      }
    } 
  }

  // === RESIZE FUNCTIONS === //
  // (slideWidth) => container.width, slide.width
  function updateSlideWidth() {
    container.style.width = (slideWidth + 1) * slideCountNew + 'px'; // + 1 => fix half-pixel issue
    for (var i = slideCountNew; i--;) {
      slideItems[i].style.width = (slideWidth - gutter) + 'px';
    }
  }

  // (slideWidth, index, items) => gallery_visible_slide.left
  function updateSlidePosition() {
    for (var i = index + 1, len = index + items; i < len; i++) {
      slideItems[i].style.left = slideWidth * (i - index) + 'px';
    }
  }

  // (vw) => fixedWidth_contentWrapper.edgePadding
  function updateFixedWidthEdgePadding() {
    contentWrapper.style.cssText = 'margin: 0px ' + getFixedWidthEdgePadding() + 'px';
  }

  // (slideEdges, index, items) => vertical_conentWrapper.height
  function updateContentWrapperHeight() {
    contentWrapper.style.height = getVerticalWrapperHeight() + 'px';
  }

  /*
   * get nav item indexes per items
   * add 1 more if the nav items cann't cover all slides
   * [0, 1, 2, 3, 4] / 3 => [0, 3]
   */
  function getVisibleNavIndex() {
    // reset visibleNavIndexes
    visibleNavIndexes = [];

    var absIndexMin = index%slideCount%items;
    while (absIndexMin < slideCount) {
      visibleNavIndexes.push(absIndexMin);
      absIndexMin = absIndexMin + items;
    }

    // nav count * items < slide count means
    // some slides can not be displayed only by nav clicking
    if (slideCount > items * visibleNavIndexes.length) {
      visibleNavIndexes.unshift(0);
    }
  }
  
  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */
  function updateNavVisibility() {
    if (nav && !options.navContainer) {
      // update visible nav indexes
      getVisibleNavIndex();

      // add 'hidden' attribute to previous visible navs
      if (visibleNavIndexesCached.length > 0) {
        visibleNavIndexesCached.forEach(function (ind) {
          setAttrs(navItems[ind], {'hidden': ''});
        });
      }

      // remove 'hidden' attribute from visible navs
      if (visibleNavIndexes.length > 0) {
        visibleNavIndexes.forEach(function (ind) {
          removeAttrs(navItems[ind], 'hidden');
        });
      }

      // cache visible nav indexes
      visibleNavIndexesCached = visibleNavIndexes;
    }
  }

  function info(e) {
    return {
      container: container,
      slideItems: slideItems,
      navItems: navItems,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      index: index,
      indexCached: indexCached,
      navCurrent: navCurrent,
      navCurrentCached: navCurrentCached,
      slideCount: slideCount,
      cloneCount: cloneCount,
      slideCountNew: slideCountNew,
      event: e || {},
    };
  }

  function goTo (targetIndex) {
    var absIndex = index%slideCount, 
        indexGap;

    if (absIndex < 0) { absIndex += slideCount; }

    switch(targetIndex) {
      case 'next':
        indexGap = 1;
        break;
      case 'prev':
      case 'previous':
        indexGap = -1;
        break;
      case 'first':
        indexGap = - absIndex;
        break;
      case 'last':
        indexGap = (slideCount - 1) - absIndex;
        break;
      default:
        if (typeof targetIndex === 'number') {
          var absTargetIndex = targetIndex%slideCount;
          if (absTargetIndex < 0) { absTargetIndex += slideCount; }
          indexGap = absTargetIndex - absIndex;
        }
    }

    index += indexGap;

    // if index is changed, check it and render
    if (index%slideCount !== indexCached%slideCount) {
      checkIndex();
      render();
    }

  }

  function resizeTasks() {
    var indexTem = index,
        itemsTem = items;
    getVariables();
    checkSlideCount();
    checkIndex();

    if (axis === 'horizontal') {
      if (fixedWidth && edgePadding) {
        updateFixedWidthEdgePadding();
      } else {
        updateSlideWidth();

        if (mode === 'gallery') {
          updateSlidePosition(); 
        }
      }
      getSlideEdges();
    } else {
      getSlideEdges();
      updateContentWrapperHeight();
    }

    if (index !== indexTem || mode === 'carousel' && !fixedWidth) {
      doTransform(0); 
    }
    
    if (index !== indexTem || items !== itemsTem) {
      lazyLoad(); 
    }

    runAutoHeight(); 

    if (index !== indexTem) { 
      events.emit('indexChanged', info());
      updateSlideStatus();
      updateControlsStatus();
      updateNavVisibility();
      updateNavStatus();
    }


    if (navigator.msMaxTouchPoints) { setSnapInterval(); }
  }

  function onResize(e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (vw !== getViewWidth()) {
        resizeTasks();
        if (nested === 'outer') { 
          events.emit('outerResized', info(e)); 
        }
      }
    }, 100); // update after stop resizing for 100 ms
  }

  return {
    getInfo: info,
    events: events,
    goTo: goTo,

    destroy: function () {
      // wrapper
      unwrap(wrapper);
      unwrap(contentWrapper);
      wrapper = contentWrapper = null;

      // container
      removeAttrs(container, ['id', 'style', 'data-tns-role', 'data-tns-features']);

      // cloned items
      if (loop) {
        for (var j = cloneCount; j--;) {
          slideItems[0].remove();
          slideItems[slideItems.length - 1].remove();
        }
      }

      // Slide Items
      removeAttrs(slideItems, ['id', 'style', 'aria-hidden', 'tabindex']);
      slideId = slideCount = null;

      // controls
      if (controls) {
        if (options.controlsContainer) {
          removeAttrs(controlsContainer, ['aria-label', 'tabindex']);
          removeAttrs(controlsContainer.children, ['aria-controls', 'tabindex']);
          removeEventsByClone(controlsContainer);
        } else {
          controlsContainer.remove();
          controlsContainer = prevButton = nextButton = null;
        }
      }

      // nav
      if (nav) {
        if (!options.navContainer) {
          navContainer.remove();
          navContainer = null;
        } else {
          removeAttrs(navContainer, ['aria-label']);
          removeAttrs(navItems, ['aria-selected', 'aria-controls', 'tabindex']);
          removeEventsByClone(navContainer);
        }
        navItems = null;
      }

      // auto
      if (autoplay) {
        if (!options.navContainer && navContainer !== null) {
          navContainer.remove();
          navContainer = null;
        } else {
          removeEventsByClone(autoplayButton);
        }
        removeEvents(document, {'visibilitychange': onVisibilityChange});
      }

      // remove slider container events at the end
      // because this will make container = null
      removeEventsByClone(container);

      // remove arrowKeys eventlistener
      if (arrowKeys) {
        removeEvents(document, {'keydown': onKeydownDocument});
      }

      // remove window event listeners
      removeEvents(window, {'resize': onResize});
    },

    // $ Private methods, for test only
    // hasAttr: hasAttr, 
    // getAttr: getAttr, 
    // setAttrs: setAttrs, 
    // removeAttrs: removeAttrs, 
    // removeEventsByClone: removeEventsByClone, 
    // getSlideId: getSlideId, 
    // toDegree: toDegree, 
    // getTouchDirection: getTouchDirection, 
    // hideElement: hideElement, 
    // showElement: showElement,
  };
};

return tns;
})();
/*! nouislider - 10.0.0 - 2017-05-28 14:52:49 */

!function(a){"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?module.exports=a():window.noUiSlider=a()}(function(){"use strict";function a(a){return"object"==typeof a&&"function"==typeof a.to&&"function"==typeof a.from}function b(a){a.parentElement.removeChild(a)}function c(a){a.preventDefault()}function d(a){return a.filter(function(a){return this[a]?!1:this[a]=!0},{})}function e(a,b){return Math.round(a/b)*b}function f(a,b){var c=a.getBoundingClientRect(),d=a.ownerDocument,e=d.documentElement,f=o(d);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(f.x=0),b?c.top+f.y-e.clientTop:c.left+f.x-e.clientLeft}function g(a){return"number"==typeof a&&!isNaN(a)&&isFinite(a)}function h(a,b,c){c>0&&(l(a,b),setTimeout(function(){m(a,b)},c))}function i(a){return Math.max(Math.min(a,100),0)}function j(a){return Array.isArray(a)?a:[a]}function k(a){a=String(a);var b=a.split(".");return b.length>1?b[1].length:0}function l(a,b){a.classList?a.classList.add(b):a.className+=" "+b}function m(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," ")}function n(a,b){return a.classList?a.classList.contains(b):new RegExp("\\b"+b+"\\b").test(a.className)}function o(a){var b=void 0!==window.pageXOffset,c="CSS1Compat"===(a.compatMode||""),d=b?window.pageXOffset:c?a.documentElement.scrollLeft:a.body.scrollLeft,e=b?window.pageYOffset:c?a.documentElement.scrollTop:a.body.scrollTop;return{x:d,y:e}}function p(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function q(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,b)}catch(c){}return a}function r(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function s(a,b){return 100/(b-a)}function t(a,b){return 100*b/(a[1]-a[0])}function u(a,b){return t(a,a[0]<0?b+Math.abs(a[0]):b-a[0])}function v(a,b){return b*(a[1]-a[0])/100+a[0]}function w(a,b){for(var c=1;a>=b[c];)c+=1;return c}function x(a,b,c){if(c>=a.slice(-1)[0])return 100;var d,e,f,g,h=w(c,a);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],f+u([d,e],c)/s(f,g)}function y(a,b,c){if(c>=100)return a.slice(-1)[0];var d,e,f,g,h=w(c,b);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],v([d,e],(c-f)*s(f,g))}function z(a,b,c,d){if(100===d)return d;var f,g,h=w(d,a);return c?(f=a[h-1],g=a[h],d-f>(g-f)/2?g:f):b[h-1]?a[h-1]+e(d-a[h-1],b[h-1]):d}function A(a,b,c){var d;if("number"==typeof b&&(b=[b]),"[object Array]"!==Object.prototype.toString.call(b))throw new Error("noUiSlider ("+$+"): 'range' contains invalid value.");if(d="min"===a?0:"max"===a?100:parseFloat(a),!g(d)||!g(b[0]))throw new Error("noUiSlider ("+$+"): 'range' value isn't numeric.");c.xPct.push(d),c.xVal.push(b[0]),d?c.xSteps.push(isNaN(b[1])?!1:b[1]):isNaN(b[1])||(c.xSteps[0]=b[1]),c.xHighestCompleteStep.push(0)}function B(a,b,c){if(!b)return!0;c.xSteps[a]=t([c.xVal[a],c.xVal[a+1]],b)/s(c.xPct[a],c.xPct[a+1]);var d=(c.xVal[a+1]-c.xVal[a])/c.xNumSteps[a],e=Math.ceil(Number(d.toFixed(3))-1),f=c.xVal[a]+c.xNumSteps[a]*e;c.xHighestCompleteStep[a]=f}function C(a,b,c){this.xPct=[],this.xVal=[],this.xSteps=[c||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=b;var d,e=[];for(d in a)a.hasOwnProperty(d)&&e.push([a[d],d]);for(e.sort(e.length&&"object"==typeof e[0][0]?function(a,b){return a[0][0]-b[0][0]}:function(a,b){return a[0]-b[0]}),d=0;d<e.length;d++)A(e[d][1],e[d][0],this);for(this.xNumSteps=this.xSteps.slice(0),d=0;d<this.xNumSteps.length;d++)B(d,this.xNumSteps[d],this)}function D(b){if(a(b))return!0;throw new Error("noUiSlider ("+$+"): 'format' requires 'to' and 'from' methods.")}function E(a,b){if(!g(b))throw new Error("noUiSlider ("+$+"): 'step' is not numeric.");a.singleStep=b}function F(a,b){if("object"!=typeof b||Array.isArray(b))throw new Error("noUiSlider ("+$+"): 'range' is not an object.");if(void 0===b.min||void 0===b.max)throw new Error("noUiSlider ("+$+"): Missing 'min' or 'max' in 'range'.");if(b.min===b.max)throw new Error("noUiSlider ("+$+"): 'range' 'min' and 'max' cannot be equal.");a.spectrum=new C(b,a.snap,a.singleStep)}function G(a,b){if(b=j(b),!Array.isArray(b)||!b.length)throw new Error("noUiSlider ("+$+"): 'start' option is incorrect.");a.handles=b.length,a.start=b}function H(a,b){if(a.snap=b,"boolean"!=typeof b)throw new Error("noUiSlider ("+$+"): 'snap' option must be a boolean.")}function I(a,b){if(a.animate=b,"boolean"!=typeof b)throw new Error("noUiSlider ("+$+"): 'animate' option must be a boolean.")}function J(a,b){if(a.animationDuration=b,"number"!=typeof b)throw new Error("noUiSlider ("+$+"): 'animationDuration' option must be a number.")}function K(a,b){var c,d=[!1];if("lower"===b?b=[!0,!1]:"upper"===b&&(b=[!1,!0]),b===!0||b===!1){for(c=1;c<a.handles;c++)d.push(b);d.push(!1)}else{if(!Array.isArray(b)||!b.length||b.length!==a.handles+1)throw new Error("noUiSlider ("+$+"): 'connect' option doesn't match handle count.");d=b}a.connect=d}function L(a,b){switch(b){case"horizontal":a.ort=0;break;case"vertical":a.ort=1;break;default:throw new Error("noUiSlider ("+$+"): 'orientation' option is invalid.")}}function M(a,b){if(!g(b))throw new Error("noUiSlider ("+$+"): 'margin' option must be numeric.");if(0!==b&&(a.margin=a.spectrum.getMargin(b),!a.margin))throw new Error("noUiSlider ("+$+"): 'margin' option is only supported on linear sliders.")}function N(a,b){if(!g(b))throw new Error("noUiSlider ("+$+"): 'limit' option must be numeric.");if(a.limit=a.spectrum.getMargin(b),!a.limit||a.handles<2)throw new Error("noUiSlider ("+$+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function O(a,b){if(!g(b))throw new Error("noUiSlider ("+$+"): 'padding' option must be numeric.");if(0!==b){if(a.padding=a.spectrum.getMargin(b),!a.padding)throw new Error("noUiSlider ("+$+"): 'padding' option is only supported on linear sliders.");if(a.padding<0)throw new Error("noUiSlider ("+$+"): 'padding' option must be a positive number.");if(a.padding>=50)throw new Error("noUiSlider ("+$+"): 'padding' option must be less than half the range.")}}function P(a,b){switch(b){case"ltr":a.dir=0;break;case"rtl":a.dir=1;break;default:throw new Error("noUiSlider ("+$+"): 'direction' option was not recognized.")}}function Q(a,b){if("string"!=typeof b)throw new Error("noUiSlider ("+$+"): 'behaviour' must be a string containing options.");var c=b.indexOf("tap")>=0,d=b.indexOf("drag")>=0,e=b.indexOf("fixed")>=0,f=b.indexOf("snap")>=0,g=b.indexOf("hover")>=0;if(e){if(2!==a.handles)throw new Error("noUiSlider ("+$+"): 'fixed' behaviour must be used with 2 handles");M(a,a.start[1]-a.start[0])}a.events={tap:c||f,drag:d,fixed:e,snap:f,hover:g}}function R(a,b){if(b!==!1)if(b===!0){a.tooltips=[];for(var c=0;c<a.handles;c++)a.tooltips.push(!0)}else{if(a.tooltips=j(b),a.tooltips.length!==a.handles)throw new Error("noUiSlider ("+$+"): must pass a formatter for all handles.");a.tooltips.forEach(function(a){if("boolean"!=typeof a&&("object"!=typeof a||"function"!=typeof a.to))throw new Error("noUiSlider ("+$+"): 'tooltips' must be passed a formatter or 'false'.")})}}function S(a,b){a.ariaFormat=b,D(b)}function T(a,b){a.format=b,D(b)}function U(a,b){if(void 0!==b&&"string"!=typeof b&&b!==!1)throw new Error("noUiSlider ("+$+"): 'cssPrefix' must be a string or `false`.");a.cssPrefix=b}function V(a,b){if(void 0!==b&&"object"!=typeof b)throw new Error("noUiSlider ("+$+"): 'cssClasses' must be an object.");if("string"==typeof a.cssPrefix){a.cssClasses={};for(var c in b)b.hasOwnProperty(c)&&(a.cssClasses[c]=a.cssPrefix+b[c])}else a.cssClasses=b}function W(a,b){if(b!==!0&&b!==!1)throw new Error("noUiSlider ("+$+"): 'useRequestAnimationFrame' option should be true (default) or false.");a.useRequestAnimationFrame=b}function X(a){var b={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:_,format:_},c={step:{r:!1,t:E},start:{r:!0,t:G},connect:{r:!0,t:K},direction:{r:!0,t:P},snap:{r:!1,t:H},animate:{r:!1,t:I},animationDuration:{r:!1,t:J},range:{r:!0,t:F},orientation:{r:!1,t:L},margin:{r:!1,t:M},limit:{r:!1,t:N},padding:{r:!1,t:O},behaviour:{r:!0,t:Q},ariaFormat:{r:!1,t:S},format:{r:!1,t:T},tooltips:{r:!1,t:R},cssPrefix:{r:!1,t:U},cssClasses:{r:!1,t:V},useRequestAnimationFrame:{r:!1,t:W}},d={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},useRequestAnimationFrame:!0};a.format&&!a.ariaFormat&&(a.ariaFormat=a.format),Object.keys(c).forEach(function(e){if(void 0===a[e]&&void 0===d[e]){if(c[e].r)throw new Error("noUiSlider ("+$+"): '"+e+"' is required.");return!0}c[e].t(b,void 0===a[e]?d[e]:a[e])}),b.pips=a.pips;var e=[["left","top"],["right","bottom"]];return b.style=e[b.dir][b.ort],b.styleOposite=e[b.dir?0:1][b.ort],b}function Y(a,e,g){function k(a,b){var c=xa.createElement("div");return b&&l(c,b),a.appendChild(c),c}function s(a,b){var c=k(a,e.cssClasses.origin),d=k(c,e.cssClasses.handle);return d.setAttribute("data-handle",b),d.setAttribute("tabindex","0"),d.setAttribute("role","slider"),d.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),0===b?l(d,e.cssClasses.handleLower):b===e.handles-1&&l(d,e.cssClasses.handleUpper),c}function t(a,b){return b?k(a,e.cssClasses.connect):!1}function u(a,b){ia=[],ja=[],ja.push(t(b,a[0]));for(var c=0;c<e.handles;c++)ia.push(s(b,c)),ra[c]=c,ja.push(t(b,a[c+1]))}function v(a){l(a,e.cssClasses.target),0===e.dir?l(a,e.cssClasses.ltr):l(a,e.cssClasses.rtl),0===e.ort?l(a,e.cssClasses.horizontal):l(a,e.cssClasses.vertical),ha=k(a,e.cssClasses.base)}function w(a,b){return e.tooltips[b]?k(a.firstChild,e.cssClasses.tooltip):!1}function x(){var a=ia.map(w);ea("update",function(b,c,d){if(a[c]){var f=b[c];e.tooltips[c]!==!0&&(f=e.tooltips[c].to(d[c])),a[c].innerHTML=f}})}function y(){ea("update",function(a,b,c,d,f){ra.forEach(function(a){var b=ia[a],d=S(qa,a,0,!0,!0,!0),g=S(qa,a,100,!0,!0,!0),h=f[a],i=e.ariaFormat.to(c[a]);b.children[0].setAttribute("aria-valuemin",d.toFixed(1)),b.children[0].setAttribute("aria-valuemax",g.toFixed(1)),b.children[0].setAttribute("aria-valuenow",h.toFixed(1)),b.children[0].setAttribute("aria-valuetext",i)})})}function z(a,b,c){if("range"===a||"steps"===a)return ta.xVal;if("count"===a){if(!b)throw new Error("noUiSlider ("+$+"): 'values' required for mode 'count'.");var d,e=100/(b-1),f=0;for(b=[];(d=f++*e)<=100;)b.push(d);a="positions"}return"positions"===a?b.map(function(a){return ta.fromStepping(c?ta.getStep(a):a)}):"values"===a?c?b.map(function(a){return ta.fromStepping(ta.getStep(ta.toStepping(a)))}):b:void 0}function A(a,b,c){function e(a,b){return(a+b).toFixed(7)/1}var f={},g=ta.xVal[0],h=ta.xVal[ta.xVal.length-1],i=!1,j=!1,k=0;return c=d(c.slice().sort(function(a,b){return a-b})),c[0]!==g&&(c.unshift(g),i=!0),c[c.length-1]!==h&&(c.push(h),j=!0),c.forEach(function(d,g){var h,l,m,n,o,p,q,r,s,t,u=d,v=c[g+1];if("steps"===b&&(h=ta.xNumSteps[g]),h||(h=v-u),u!==!1&&void 0!==v)for(h=Math.max(h,1e-7),l=u;v>=l;l=e(l,h)){for(n=ta.toStepping(l),o=n-k,r=o/a,s=Math.round(r),t=o/s,m=1;s>=m;m+=1)p=k+m*t,f[p.toFixed(5)]=["x",0];q=c.indexOf(l)>-1?1:"steps"===b?2:0,!g&&i&&(q=0),l===v&&j||(f[n.toFixed(5)]=[l,q]),k=n}}),f}function B(a,b,c){function d(a,b){var c=b===e.cssClasses.value,d=c?j:m,f=c?h:i;return b+" "+d[e.ort]+" "+f[a]}function f(a,f){f[1]=f[1]&&b?b(f[0],f[1]):f[1];var h=k(g,!1);h.className=d(f[1],e.cssClasses.marker),h.style[e.style]=a+"%",f[1]&&(h=k(g,!1),h.className=d(f[1],e.cssClasses.value),h.style[e.style]=a+"%",h.innerText=c.to(f[0]))}var g=xa.createElement("div"),h=[e.cssClasses.valueNormal,e.cssClasses.valueLarge,e.cssClasses.valueSub],i=[e.cssClasses.markerNormal,e.cssClasses.markerLarge,e.cssClasses.markerSub],j=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],m=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];return l(g,e.cssClasses.pips),l(g,0===e.ort?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical),Object.keys(a).forEach(function(b){f(b,a[b])}),g}function C(){la&&(b(la),la=null)}function D(a){C();var b=a.mode,c=a.density||1,d=a.filter||!1,e=a.values||!1,f=a.stepped||!1,g=z(b,e,f),h=A(c,b,g),i=a.format||{to:Math.round};return la=pa.appendChild(B(h,d,i))}function E(){var a=ha.getBoundingClientRect(),b="offset"+["Width","Height"][e.ort];return 0===e.ort?a.width||ha[b]:a.height||ha[b]}function F(a,b,c,d){var f=function(b){return pa.hasAttribute("disabled")?!1:n(pa,e.cssClasses.tap)?!1:(b=G(b,d.pageOffset))?a===ma.start&&void 0!==b.buttons&&b.buttons>1?!1:d.hover&&b.buttons?!1:(oa||b.preventDefault(),b.calcPoint=b.points[e.ort],void c(b,d)):!1},g=[];return a.split(" ").forEach(function(a){b.addEventListener(a,f,oa?{passive:!0}:!1),g.push([a,f])}),g}function G(a,b){var c,d,e=0===a.type.indexOf("touch"),f=0===a.type.indexOf("mouse"),g=0===a.type.indexOf("pointer");if(0===a.type.indexOf("MSPointer")&&(g=!0),e){if(a.touches.length>1)return!1;c=a.changedTouches[0].pageX,d=a.changedTouches[0].pageY}return b=b||o(xa),(f||g)&&(c=a.clientX+b.x,d=a.clientY+b.y),a.pageOffset=b,a.points=[c,d],a.cursor=f||g,a}function H(a){var b=a-f(ha,e.ort),c=100*b/E();return e.dir?100-c:c}function I(a){var b=100,c=!1;return ia.forEach(function(d,e){if(!d.hasAttribute("disabled")){var f=Math.abs(qa[e]-a);b>f&&(c=e,b=f)}}),c}function J(a,b,c,d){var e=c.slice(),f=[!a,a],g=[a,!a];d=d.slice(),a&&d.reverse(),d.length>1?d.forEach(function(a,c){var d=S(e,a,e[a]+b,f[c],g[c],!1);d===!1?b=0:(b=d-e[a],e[a]=d)}):f=g=[!0];var h=!1;d.forEach(function(a,d){h=W(a,c[a]+b,f[d],g[d])||h}),h&&d.forEach(function(a){K("update",a),K("slide",a)})}function K(a,b,c){Object.keys(va).forEach(function(d){var f=d.split(".")[0];a===f&&va[d].forEach(function(a){a.call(ka,ua.map(e.format.to),b,ua.slice(),c||!1,qa.slice())})})}function L(a,b){"mouseout"===a.type&&"HTML"===a.target.nodeName&&null===a.relatedTarget&&N(a,b)}function M(a,b){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===a.buttons&&0!==b.buttonsProperty)return N(a,b);var c=(e.dir?-1:1)*(a.calcPoint-b.startCalcPoint),d=100*c/b.baseSize;J(c>0,d,b.locations,b.handleNumbers)}function N(a,b){sa&&(m(sa,e.cssClasses.active),sa=!1),a.cursor&&(za.style.cursor="",za.removeEventListener("selectstart",c)),wa.forEach(function(a){ya.removeEventListener(a[0],a[1])}),m(pa,e.cssClasses.drag),V(),b.handleNumbers.forEach(function(a){K("change",a),K("set",a),K("end",a)})}function O(a,b){if(1===b.handleNumbers.length){var d=ia[b.handleNumbers[0]];if(d.hasAttribute("disabled"))return!1;sa=d.children[0],l(sa,e.cssClasses.active)}a.stopPropagation();var f=F(ma.move,ya,M,{startCalcPoint:a.calcPoint,baseSize:E(),pageOffset:a.pageOffset,handleNumbers:b.handleNumbers,buttonsProperty:a.buttons,locations:qa.slice()}),g=F(ma.end,ya,N,{handleNumbers:b.handleNumbers}),h=F("mouseout",ya,L,{handleNumbers:b.handleNumbers});wa=f.concat(g,h),a.cursor&&(za.style.cursor=getComputedStyle(a.target).cursor,ia.length>1&&l(pa,e.cssClasses.drag),za.addEventListener("selectstart",c,!1)),b.handleNumbers.forEach(function(a){K("start",a)})}function P(a){a.stopPropagation();var b=H(a.calcPoint),c=I(b);return c===!1?!1:(e.events.snap||h(pa,e.cssClasses.tap,e.animationDuration),W(c,b,!0,!0),V(),K("slide",c,!0),K("update",c,!0),K("change",c,!0),K("set",c,!0),void(e.events.snap&&O(a,{handleNumbers:[c]})))}function Q(a){var b=H(a.calcPoint),c=ta.getStep(b),d=ta.fromStepping(c);Object.keys(va).forEach(function(a){"hover"===a.split(".")[0]&&va[a].forEach(function(a){a.call(ka,d)})})}function R(a){a.fixed||ia.forEach(function(a,b){F(ma.start,a.children[0],O,{handleNumbers:[b]})}),a.tap&&F(ma.start,ha,P,{}),a.hover&&F(ma.move,ha,Q,{hover:!0}),a.drag&&ja.forEach(function(b,c){if(b!==!1&&0!==c&&c!==ja.length-1){var d=ia[c-1],f=ia[c],g=[b];l(b,e.cssClasses.draggable),a.fixed&&(g.push(d.children[0]),g.push(f.children[0])),g.forEach(function(a){F(ma.start,a,O,{handles:[d,f],handleNumbers:[c-1,c]})})}})}function S(a,b,c,d,f,g){return ia.length>1&&(d&&b>0&&(c=Math.max(c,a[b-1]+e.margin)),f&&b<ia.length-1&&(c=Math.min(c,a[b+1]-e.margin))),ia.length>1&&e.limit&&(d&&b>0&&(c=Math.min(c,a[b-1]+e.limit)),f&&b<ia.length-1&&(c=Math.max(c,a[b+1]-e.limit))),e.padding&&(0===b&&(c=Math.max(c,e.padding)),b===ia.length-1&&(c=Math.min(c,100-e.padding))),c=ta.getStep(c),c=i(c),c!==a[b]||g?c:!1}function T(a){return a+"%"}function U(a,b){qa[a]=b,ua[a]=ta.fromStepping(b);var c=function(){ia[a].style[e.style]=T(b),Y(a),Y(a+1)};window.requestAnimationFrame&&e.useRequestAnimationFrame?window.requestAnimationFrame(c):c()}function V(){ra.forEach(function(a){var b=qa[a]>50?-1:1,c=3+(ia.length+b*a);ia[a].childNodes[0].style.zIndex=c})}function W(a,b,c,d){return b=S(qa,a,b,c,d,!1),b===!1?!1:(U(a,b),!0)}function Y(a){if(ja[a]){var b=0,c=100;0!==a&&(b=qa[a-1]),a!==ja.length-1&&(c=qa[a]),ja[a].style[e.style]=T(b),ja[a].style[e.styleOposite]=T(100-c)}}function Z(a,b){null!==a&&a!==!1&&("number"==typeof a&&(a=String(a)),a=e.format.from(a),a===!1||isNaN(a)||W(b,ta.toStepping(a),!1,!1))}function _(a,b){var c=j(a),d=void 0===qa[0];b=void 0===b?!0:!!b,c.forEach(Z),e.animate&&!d&&h(pa,e.cssClasses.tap,e.animationDuration),ra.forEach(function(a){W(a,qa[a],!0,!1)}),V(),ra.forEach(function(a){K("update",a),null!==c[a]&&b&&K("set",a)})}function aa(a){_(e.start,a)}function ba(){var a=ua.map(e.format.to);return 1===a.length?a[0]:a}function ca(){for(var a in e.cssClasses)e.cssClasses.hasOwnProperty(a)&&m(pa,e.cssClasses[a]);for(;pa.firstChild;)pa.removeChild(pa.firstChild);delete pa.noUiSlider}function da(){return qa.map(function(a,b){var c=ta.getNearbySteps(a),d=ua[b],e=c.thisStep.step,f=null;e!==!1&&d+e>c.stepAfter.startValue&&(e=c.stepAfter.startValue-d),f=d>c.thisStep.startValue?c.thisStep.step:c.stepBefore.step===!1?!1:d-c.stepBefore.highestStep,100===a?e=null:0===a&&(f=null);var g=ta.countStepDecimals();return null!==e&&e!==!1&&(e=Number(e.toFixed(g))),null!==f&&f!==!1&&(f=Number(f.toFixed(g))),[f,e]})}function ea(a,b){va[a]=va[a]||[],va[a].push(b),"update"===a.split(".")[0]&&ia.forEach(function(a,b){K("update",b)})}function fa(a){var b=a&&a.split(".")[0],c=b&&a.substring(b.length);Object.keys(va).forEach(function(a){var d=a.split(".")[0],e=a.substring(d.length);b&&b!==d||c&&c!==e||delete va[a]})}function ga(a,b){var c=ba(),d=["margin","limit","padding","range","animate","snap","step","format"];d.forEach(function(b){void 0!==a[b]&&(g[b]=a[b])});var f=X(g);d.forEach(function(b){void 0!==a[b]&&(e[b]=f[b])}),ta=f.spectrum,e.margin=f.margin,e.limit=f.limit,e.padding=f.padding,e.pips&&D(e.pips),qa=[],_(a.start||c,b)}var ha,ia,ja,ka,la,ma=p(),na=r(),oa=na&&q(),pa=a,qa=[],ra=[],sa=!1,ta=e.spectrum,ua=[],va={},wa=null,xa=a.ownerDocument,ya=xa.documentElement,za=xa.body;if(pa.noUiSlider)throw new Error("noUiSlider ("+$+"): Slider was already initialized.");return v(pa),u(e.connect,ha),ka={destroy:ca,steps:da,on:ea,off:fa,get:ba,set:_,reset:aa,__moveHandles:function(a,b,c){J(a,b,qa,c)},options:g,updateOptions:ga,target:pa,removePips:C,pips:D},R(e.events),_(e.start),e.pips&&D(e.pips),e.tooltips&&x(),y(),ka}function Z(a,b){if(!a||!a.nodeName)throw new Error("noUiSlider ("+$+"): create requires a single element, got: "+a);var c=X(b,a),d=Y(a,c,b);return a.noUiSlider=d,d}var $="10.0.0";C.prototype.getMargin=function(a){var b=this.xNumSteps[0];if(b&&a/b%1!==0)throw new Error("noUiSlider ("+$+"): 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length?t(this.xVal,a):!1},C.prototype.toStepping=function(a){return a=x(this.xVal,this.xPct,a)},C.prototype.fromStepping=function(a){return y(this.xVal,this.xPct,a)},C.prototype.getStep=function(a){return a=z(this.xPct,this.xSteps,this.snap,a)},C.prototype.getNearbySteps=function(a){var b=w(a,this.xPct);return{stepBefore:{startValue:this.xVal[b-2],step:this.xNumSteps[b-2],highestStep:this.xHighestCompleteStep[b-2]},thisStep:{startValue:this.xVal[b-1],step:this.xNumSteps[b-1],highestStep:this.xHighestCompleteStep[b-1]},stepAfter:{startValue:this.xVal[b-0],step:this.xNumSteps[b-0],highestStep:this.xHighestCompleteStep[b-0]}}},C.prototype.countStepDecimals=function(){var a=this.xNumSteps.map(k);return Math.max.apply(null,a)},C.prototype.convert=function(a){return this.getStep(this.toStepping(a))};var _={to:function(a){return void 0!==a&&a.toFixed(2)},from:Number};return{version:$,create:Z}});
(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.tippy=t()})(this,function(){'use strict';function t(e){Ce.forEach(function(t){var o=t.popper,i=t.tippyInstance,n=t.settings,r=n.appendTo,s=n.hideOnClick,a=n.trigger;if(r.contains(o)){var p=!0===s||-1!==a.indexOf('focus'),l=!e||o!==e.popper;p&&l&&i.hide(o)}})}function o(t,o){var i=Element.prototype.closest||function(t){for(var o=this;o;){if(e.call(o,t))return o;o=o.parentElement}};return i.call(t,o)}function n(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function r(){var i=function(){Pe.touch=!0,Pe.iOS()&&document.body.classList.add('tippy-touch'),Pe.dynamicInputDetection&&window.performance&&document.addEventListener('mousemove',r)},r=function(){var e;return function(){var t=performance.now();20>t-e&&(Pe.touch=!1,document.removeEventListener('mousemove',r),!Pe.iOS()&&document.body.classList.remove('tippy-touch')),e=t}}();document.addEventListener('click',function(e){if(!(e.target instanceof Element))return t();var i=o(e.target,De.TOOLTIPPED_EL),r=o(e.target,De.POPPER);if(r){var s=n(Ce,function(e){return e.popper===r}),a=s.settings.interactive;if(a)return}if(i){var p=n(Ce,function(e){return e.el===i}),l=p.settings,d=l.hideOnClick,c=l.multiple,f=l.trigger;if(!c&&Pe.touch||!c&&-1!==f.indexOf('click'))return t(p);if(!0!==d||-1!==f.indexOf('click'))return}o(e.target,De.CONTROLLER)||!document.querySelector(De.POPPER)||t()}),document.addEventListener('touchstart',i),window.addEventListener('blur',function(){var t=document,o=t.activeElement;o&&o.blur&&e.call(o,De.TOOLTIPPED_EL)&&o.blur()}),!Pe.SUPPORTS_TOUCH&&(0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints)&&document.addEventListener('pointerdown',i)}function s(){return!s.done&&(s.done=!0,r(),!0)}function a(e){window.requestAnimationFrame(function(){setTimeout(e,0)})}function p(e){for(var t=[!1,'webkit'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function l(e,t){return Array.prototype.findIndex?e.findIndex(t):e.indexOf(n(e,t))}function d(e){var t=e.getAttribute('title');t&&e.setAttribute('data-original-title',t),e.removeAttribute('title')}function c(e){var t=e.getBoundingClientRect();return 0<=t.top&&0<=t.left&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function f(e,t){t?window.getComputedStyle(t)[p('transform')]:window.getComputedStyle(e).opacity}function m(e,t){e.forEach(function(e){e&&t(e.classList)})}function h(e){return{tooltip:e.querySelector(De.TOOLTIP),circle:e.querySelector(De.CIRCLE),content:e.querySelector(De.CONTENT)}}function u(t,o){t.forEach(function(t){if(t){var i=e.call(t,De.CONTENT),n=i?ke(o/1.3):o;t.style[p('transitionDuration')]=n+'ms'}})}function g(e){return'visible'===e.style.visibility}function b(){}function v(e){return e.replace(/-.+/,'')}function y(t){var e,o,i=this,r=n(Ce,function(e){return e.el===i}),s=r.popper,a=r.settings.offset,l=v(s.getAttribute('x-placement')),d=ke(s.offsetWidth/2),c=ke(s.offsetHeight/2),f=5,m=document.documentElement.offsetWidth||document.body.offsetWidth,h=t.pageX,u=t.pageY;'top'===l?(e=h-d+a,o=u-2.25*c):'left'===l?(e=h-2*d-10,o=u-c+a):'right'===l?(e=h+c,o=u-c+a):'bottom'===l?(e=h-d+a,o=u+c/1.5):void 0;('top'===l||'bottom'===l)&&(h+f+d+a>m&&(e=m-f-2*d),0>h-f-d+a&&(e=f)),s.style[p('transform')]='translate3d('+e+'px, '+o+'px, 0)'}function E(e){return e instanceof Element?[e]:Array.isArray(e)?e:'NodeList'===e.constructor.name?[].slice.call(e):[].slice.call(document.querySelectorAll(e))}function w(e,t,o){if(!t)return o();var i=h(e.popper),n=i.tooltip,r=!1,s=function(t){t.target!==n||r||(r=!0,o())};n.addEventListener('webkitTransitionEnd',s),n.addEventListener('transitionend',s),clearTimeout(e._transitionendTimeout),e._transitionendTimeout=setTimeout(function(){r||o()},t)}function O(e){return e&&'[object Function]'==={}.toString.call(e)}function L(e,t){if(1!==e.nodeType)return[];var o=window.getComputedStyle(e,null);return t?o[t]:o}function T(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function x(e){if(!e||-1!==['HTML','BODY','#document'].indexOf(e.nodeName))return window.document.body;var t=L(e),o=t.overflow,i=t.overflowX,n=t.overflowY;return /(auto|scroll)/.test(o+n+i)?e:x(T(e))}function S(e){var t=e&&e.offsetParent,o=t&&t.nodeName;return o&&'BODY'!==o&&'HTML'!==o?-1!==['TD','TABLE'].indexOf(t.nodeName)&&'static'===L(t,'position')?S(t):t:window.document.documentElement}function A(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||S(e.firstElementChild)===e)}function k(e){return null===e.parentNode?e:k(e.parentNode)}function P(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return window.document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,r=document.createRange();r.setStart(i,0),r.setEnd(n,0);var s=r.commonAncestorContainer;if(e!==s&&t!==s||i.contains(n))return A(s)?s:S(s);var a=k(e);return a.host?P(a.host,t):P(e,k(t).host)}function C(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=window.document.documentElement,r=window.document.scrollingElement||n;return r[o]}return e[o]}function D(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=C(t,'top'),n=C(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function I(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return+e['border'+o+'Width'].split('px')[0]+ +e['border'+i+'Width'].split('px')[0]}function H(e,t,o,i,n){return Ae(t['offset'+e],n?t['scroll'+e]:0,o['client'+e],o['offset'+e],n?o['scroll'+e]:0,Ye()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function R(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:!0,t=window.document.body,o=window.document.documentElement,i=Ye()&&window.getComputedStyle(o);return{height:H('Height',t,o,i,e),width:H('Width',t,o,i,e)}}function N(e){return Xe({},e,{right:e.left+e.width,bottom:e.top+e.height})}function M(e){var t={};if(Ye())try{t=e.getBoundingClientRect();var o=C(e,'top'),i=C(e,'left');t.top+=o,t.left+=i,t.bottom+=o,t.right+=i}catch(e){}else t=e.getBoundingClientRect();var n={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},r='HTML'===e.nodeName?R():{},s=r.width||e.clientWidth||n.right-n.left,a=r.height||e.clientHeight||n.bottom-n.top,p=e.offsetWidth-s,l=e.offsetHeight-a;if(p||l){var d=L(e);p-=I(d,'x'),l-=I(d,'y'),n.width-=p,n.height-=l}return N(n)}function B(e,t){var o=Ye(),i='HTML'===t.nodeName,n=M(e),r=M(t),s=x(e),a=L(t),p=+a.borderTopWidth.split('px')[0],l=+a.borderLeftWidth.split('px')[0],d=N({top:n.top-r.top-p,left:n.left-r.left-l,width:n.width,height:n.height});if(d.marginTop=0,d.marginLeft=0,!o&&i){var c=+a.marginTop.split('px')[0],f=+a.marginLeft.split('px')[0];d.top-=p-c,d.bottom-=p-c,d.left-=l-f,d.right-=l-f,d.marginTop=c,d.marginLeft=f}return(o?t.contains(s):t===s&&'BODY'!==s.nodeName)&&(d=D(d,t)),d}function W(e){var t=window.document.documentElement,o=B(e,t),i=Ae(t.clientWidth,window.innerWidth||0),n=Ae(t.clientHeight,window.innerHeight||0),r=C(t),s=C(t,'left'),a={top:r-o.top+o.marginTop,left:s-o.left+o.marginLeft,width:i,height:n};return N(a)}function U(e){var t=e.nodeName;return'BODY'===t||'HTML'===t?!1:'fixed'===L(e,'position')||U(T(e))}function _(e,t,o,i){var n={top:0,left:0},r=P(e,t);if('viewport'===i)n=W(r);else{var s;'scrollParent'===i?(s=x(T(e)),'BODY'===s.nodeName&&(s=window.document.documentElement)):'window'===i?s=window.document.documentElement:s=i;var a=B(s,r);if('HTML'===s.nodeName&&!U(r)){var p=R(!1),l=p.height,d=p.width;n.top+=a.top-a.marginTop,n.bottom=l+a.top,n.left+=a.left-a.marginLeft,n.right=d+a.left}else n=a}return n.left+=o,n.top+=o,n.right-=o,n.bottom-=o,n}function F(e){var t=e.width,o=e.height;return t*o}function q(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var s=_(o,i,r,n),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},p=Object.keys(a).map(function(e){return Xe({key:e},a[e],{area:F(a[e])})}).sort(function(e,t){return t.area-e.area}),l=p.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),d=0<l.length?l[0].key:p[0].key,c=e.split('-')[1];return d+(c?'-'+c:'')}function z(e,t,o){var i=P(t,o);return B(o,i)}function Y(e){var t=window.getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function j(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function K(e,t,o){o=o.split('-')[0];var i=Y(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),s=r?'top':'left',a=r?'left':'top',p=r?'height':'width',l=r?'width':'height';return n[s]=t[s]+t[p]/2-i[p]/2,n[a]=o===a?t[a]-i[l]:t[j(a)],n}function G(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function X(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=G(e,function(e){return e[t]===o});return e.indexOf(i)}function V(e,t,o){var i=void 0===o?e:e.slice(0,X(e,'name',o));return i.forEach(function(e){e.function&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var o=e.function||e.fn;e.enabled&&O(o)&&(t.offsets.popper=N(t.offsets.popper),t.offsets.reference=N(t.offsets.reference),t=o(t,e))}),t}function Q(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=z(this.state,this.popper,this.reference),e.placement=q(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=K(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=V(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function J(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function Z(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function $(){return this.state.isDestroyed=!0,J(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[Z('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function ee(e,t,o,i){var n='BODY'===e.nodeName,r=n?window:e;r.addEventListener(t,o,{passive:!0}),n||ee(x(r.parentNode),t,o,i),i.push(r)}function te(e,t,o,i){o.updateBound=i,window.addEventListener('resize',o.updateBound,{passive:!0});var n=x(e);return ee(n,'scroll',o.updateBound,o.scrollParents),o.scrollElement=n,o.eventsEnabled=!0,o}function oe(){this.state.eventsEnabled||(this.state=te(this.reference,this.options,this.state,this.scheduleUpdate))}function ie(e,t){return window.removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function ne(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=ie(this.reference,this.state))}function re(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function se(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&re(t[o])&&(i='px'),e.style[o]=t[o]+i})}function ae(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function pe(e,t,o){var i=G(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function le(e){return'end'===e?'start':'start'===e?'end':e}function de(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=Qe.indexOf(e),i=Qe.slice(o+1).concat(Qe.slice(0,o));return t?i.reverse():i}function ce(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],s=n[2];if(!r)return e;if(0===s.indexOf('%')){var a;switch(s){case'%p':a=o;break;case'%':case'%r':default:a=i;}var p=N(a);return p[t]/100*r}if('vh'===s||'vw'===s){var l;return l='vh'===s?Ae(document.documentElement.clientHeight,window.innerHeight||0):Ae(document.documentElement.clientWidth,window.innerWidth||0),l/100*r}return r}function fe(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),s=e.split(/(\+|\-)/).map(function(e){return e.trim()}),a=s.indexOf(G(s,function(e){return-1!==e.search(/,|\s/)}));s[a]&&-1===s[a].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var p=/\s*,\s*|\s+/,l=-1===a?[s]:[s.slice(0,a).concat([s[a].split(p)[0]]),[s[a].split(p)[1],s.slice(a+1)]];return l=l.map(function(e,i){var n=(1===i?!r:r)?'height':'width',s=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,s=!0,e):s?(e[e.length-1]+=t,s=!1,e):e.concat(t)},[]).map(function(e){return ce(e,n,t,o)})}),l.forEach(function(e,t){e.forEach(function(o,i){re(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}function me(e){return-(e-Ie.distance)+'px'}function he(e){var t=e.el,o=e.popper,i=e.settings,n=i.position,r=i.popperOptions,s=i.offset,l=i.distance,d=i.flipDuration,c=h(o),f=c.tooltip,m=tt({placement:n},r||{},{modifiers:tt({},r?r.modifiers:{},{flip:tt({padding:l+5},r&&r.modifiers?r.modifiers.flip:{}),offset:tt({offset:s},r&&r.modifiers?r.modifiers.offset:{})}),onUpdate:function(){var e=f.style;e.top='',e.bottom='',e.left='',e.right='',e[v(o.getAttribute('x-placement'))]=me(l)}});if(window.MutationObserver){var u=o.style,g=new MutationObserver(function(){u[p('transitionDuration')]='0ms',e.popperInstance.update(),a(function(){u[p('transitionDuration')]=d+'ms'})});g.observe(o,{childList:!0,subtree:!0,characterData:!0}),e._mutationObservers.push(g)}return new Ze(t,o,m)}function ue(e){var t=e.el,o=e.popper,i=e.settings,n=i.appendTo,r=i.followCursor;n.contains(o)||(n.appendChild(o),e.popperInstance?(e.popperInstance.update(),(!r||Pe.touch)&&e.popperInstance.enableEventListeners()):e.popperInstance=he(e),r&&!Pe.touch&&(t.addEventListener('mousemove',y),e.popperInstance.disableEventListeners()))}function ge(e){var t=e.popper,o=e.popperInstance,i=e.settings.stickyDuration,n=function(){return t.style[p('transitionDuration')]=i+'ms'},r=function(){return t.style[p('transitionDuration')]=''};a(function e(){o&&o.scheduleUpdate(),n(),g(t)?window.requestAnimationFrame(e):r()})}function be(e,t){var o=He.reduce(function(o,i){var n=e.getAttribute('data-'+i.toLowerCase())||t[i];return'false'===n&&(n=!1),'true'===n&&(n=!0),isFinite(n)&&!isNaN(parseFloat(n))&&(n=parseFloat(n)),'string'==typeof n&&'['===n.trim().charAt(0)&&(n=JSON.parse(n)),o[i]=n,o},{});return tt({},t,o)}function ye(e,t,o){var i=o.position,n=o.distance,r=o.arrow,s=o.animateFill,a=o.inertia,p=o.animation,l=o.arrowSize,d=o.size,c=o.theme,f=o.html,m=o.zIndex,h=o.interactive,u=document.createElement('div');u.setAttribute('class','tippy-popper'),u.setAttribute('role','tooltip'),u.setAttribute('aria-hidden','true'),u.setAttribute('id','tippy-tooltip-'+e),u.style.zIndex=m;var g=document.createElement('div');if(g.setAttribute('class','tippy-tooltip tippy-tooltip--'+d+' leave'),g.setAttribute('data-animation',p),c.split(' ').forEach(function(e){g.classList.add(e+'-theme')}),r){var b=document.createElement('div');b.setAttribute('class','arrow-'+l),b.setAttribute('x-arrow',''),g.appendChild(b)}if(s){g.setAttribute('data-animatefill','');var y=document.createElement('div');y.setAttribute('class','leave'),y.setAttribute('x-circle',''),g.appendChild(y)}a&&g.setAttribute('data-inertia',''),h&&g.setAttribute('data-interactive','');var E=document.createElement('div');if(E.setAttribute('class','tippy-tooltip-content'),f){var w;f instanceof Element?(E.appendChild(f),w='#'+f.id||'tippy-html-template'):(E.innerHTML=document.getElementById(f.replace('#','')).innerHTML,w=f),u.classList.add('html-template'),h&&u.setAttribute('tabindex','-1'),g.setAttribute('data-template-id',w)}else E.innerHTML=t;return g.style[v(i)]=me(n),g.appendChild(E),u.appendChild(g),u}function ve(e,t,o,i){var n=[];return'manual'===e?n:(t.addEventListener(e,o.handleTrigger),n.push({event:e,handler:o.handleTrigger}),'mouseenter'===e&&(Pe.SUPPORTS_TOUCH&&i&&(t.addEventListener('touchstart',o.handleTrigger),n.push({event:'touchstart',handler:o.handleTrigger}),t.addEventListener('touchend',o.handleMouseleave),n.push({event:'touchend',handler:o.handleMouseleave})),t.addEventListener('mouseleave',o.handleMouseleave),n.push({event:'mouseleave',handler:o.handleMouseleave})),'focus'===e&&(t.addEventListener('blur',o.handleBlur),n.push({event:'blur',handler:o.handleBlur})),n)}function Ee(e,t,o){if(!t.getAttribute('x-placement'))return!0;var i=e.clientX,n=e.clientY,r=o.interactiveBorder,s=o.distance,a=t.getBoundingClientRect(),p=v(t.getAttribute('x-placement')),l=r+s,d={top:a.top-n>r,bottom:n-a.bottom>r,left:a.left-i>r,right:i-a.right>r};return'top'===p?d.top=a.top-n>l:'bottom'===p?d.bottom=n-a.bottom>l:'left'===p?d.left=a.left-i>l:'right'===p?d.right=i-a.right>l:void 0,d.top||d.bottom||d.left||d.right}function we(e,t,i){var n,r,s=this,a=i.position,p=i.delay,l=i.duration,d=i.interactive,c=i.interactiveBorder,f=i.distance,m=i.hideOnClick,h=i.trigger,u=i.touchHold,b=i.touchWait,y=function(){clearTimeout(n),clearTimeout(r)},v=function(){if(y(),!g(t)){var e=Array.isArray(p)?p[0]:p;p?n=setTimeout(function(){return s.show(t)},e):s.show(t)}},E=function(e){return s.callbacks.wait?s.callbacks.wait.call(t,v,e):v()},w=function(){y();var e=Array.isArray(p)?p[1]:p;p?r=setTimeout(function(){return s.hide(t)},e):s.hide(t)};return{handleTrigger:function(o){var i='mouseenter'===o.type&&Pe.SUPPORTS_TOUCH&&Pe.touch;if(!(i&&u)){var n='click'===o.type;n&&g(t)&&'persistent'!==m?w():E(o),i&&Pe.iOS()&&e.click&&e.click()}},handleMouseleave:function(n){if(!('mouseleave'===n.type&&Pe.SUPPORTS_TOUCH&&Pe.touch&&u)){if(d){var r=function n(r){var s=function(){document.body.removeEventListener('mouseleave',w),document.removeEventListener('mousemove',n),w()},a=o(r.target,De.TOOLTIPPED_EL),p=o(r.target,De.POPPER)===t,l=-1!==h.indexOf('click');return a&&a!==e?s():void(p||a===e||l||Ee(r,t,i)&&s())};return document.body.addEventListener('mouseleave',w),void document.addEventListener('mousemove',r)}w()}},handleBlur:function(e){!e.relatedTarget||Pe.touch||o(e.relatedTarget,De.POPPER)||w()}}}function Oe(e){return e.arrow&&(e.animateFill=!1),e.appendTo&&'function'==typeof e.appendTo&&(e.appendTo=e.appendTo()),e}function Le(e){var t=this;return e.reduce(function(e,o){var i=ot,n=tt({},Oe(t.settings.performance?t.settings:be(o,t.settings)));'function'==typeof n.html&&(n.html=n.html(o));var r=n.html,s=n.trigger,a=n.touchHold,p=n.dynamicTitle,l=o.getAttribute('title');if(!l&&!r)return e;o.setAttribute('data-tooltipped',''),o.setAttribute('aria-describedby','tippy-tooltip-'+i),d(o);var c=ye(i,l,n),f=we.call(t,o,c,n),m=[];s.trim().split(' ').forEach(function(e){return m=m.concat(ve(e,o,f,a))});var u;if(p&&window.MutationObserver){var g=h(c),b=g.content;u=new MutationObserver(function(){var e=o.getAttribute('title');e&&(b.innerHTML=e,d(o))}),u.observe(o,{attributes:!0})}return e.push({id:i,el:o,popper:c,settings:n,listeners:m,tippyInstance:t,_mutationObservers:[u]}),ot++,e},[])}function Te(e,t){return new it(e,t)}var xe=Math.min,Se=Math.floor,Ae=Math.max,ke=Math.round,Pe={};'undefined'!=typeof window&&(Pe.SUPPORTED='requestAnimationFrame'in window,Pe.SUPPORTS_TOUCH='ontouchstart'in window,Pe.touch=!1,Pe.dynamicInputDetection=!0,Pe.iOS=function(){return /iPhone|iPad|iPod/.test(navigator.userAgent)&&!window.MSStream});var Ce=[],De={POPPER:'.tippy-popper',TOOLTIP:'.tippy-tooltip',CONTENT:'.tippy-tooltip-content',CIRCLE:'[x-circle]',ARROW:'[x-arrow]',TOOLTIPPED_EL:'[data-tooltipped]',CONTROLLER:'[data-tippy-controller]'},Ie={html:!1,position:'top',animation:'shift',animateFill:!0,arrow:!1,arrowSize:'regular',delay:0,trigger:'mouseenter focus',duration:350,interactive:!1,interactiveBorder:2,theme:'dark',size:'regular',distance:10,offset:0,hideOnClick:!0,multiple:!1,followCursor:!1,inertia:!1,flipDuration:350,sticky:!1,stickyDuration:200,appendTo:function(){return document.body},zIndex:9999,touchHold:!1,performance:!1,dynamicTitle:!1,popperOptions:{}},He=Pe.SUPPORTED&&Object.keys(Ie),Re={};if('undefined'!=typeof Element){var Ne=Element.prototype;Re=Ne.matches||Ne.matchesSelector||Ne.webkitMatchesSelector||Ne.mozMatchesSelector||Ne.msMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),o=t.length;0<=--o&&t.item(o)!==this;);return-1<o}}for(var e=Re,Me=['native code','[object MutationObserverConstructor]'],Be=function(e){return Me.some(function(t){return-1<(e||'').toString().indexOf(t)})},We='undefined'!=typeof window,Ue=['Edge','Trident','Firefox'],_e=0,Fe=0;Fe<Ue.length;Fe+=1)if(We&&0<=navigator.userAgent.indexOf(Ue[Fe])){_e=1;break}var i,qe=We&&Be(window.MutationObserver),ze=qe?function(e){var t=!1,o=0,i=document.createElement('span'),n=new MutationObserver(function(){e(),t=!1});return n.observe(i,{attributes:!0}),function(){t||(t=!0,i.setAttribute('x-index',o),++o)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},_e))}},Ye=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},je=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},Ke=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),Ge=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},Xe=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Ve=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],Qe=Ve.slice(3),Je={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},Ze=function(){function e(t,o){var i=this,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};je(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ze(this.update.bind(this)),this.options=Xe({},e.Defaults,n),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t.jquery?t[0]:t,this.popper=o.jquery?o[0]:o,this.options.modifiers={},Object.keys(Xe({},e.Defaults.modifiers,n.modifiers)).forEach(function(t){i.options.modifiers[t]=Xe({},e.Defaults.modifiers[t]||{},n.modifiers?n.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return Xe({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&O(e.onLoad)&&e.onLoad(i.reference,i.popper,i.options,e,i.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return Ke(e,[{key:'update',value:function(){return Q.call(this)}},{key:'destroy',value:function(){return $.call(this)}},{key:'enableEventListeners',value:function(){return oe.call(this)}},{key:'disableEventListeners',value:function(){return ne.call(this)}}]),e}();Ze.Utils=('undefined'==typeof window?global:window).PopperUtils,Ze.placements=Ve,Ze.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,s=n.popper,a=-1!==['bottom','top'].indexOf(o),p=a?'left':'top',l=a?'width':'height',d={start:Ge({},p,r[p]),end:Ge({},p,r[p]+r[l]-s[l])};e.offsets.popper=Xe({},s,d[i])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,s=r.popper,a=r.reference,p=n.split('-')[0];return o=re(+i)?[+i,0]:fe(i,s,a,p),'left'===p?(s.top+=o[0],s.left-=o[1]):'right'===p?(s.top+=o[0],s.left+=o[1]):'top'===p?(s.left+=o[0],s.top-=o[1]):'bottom'===p&&(s.left+=o[0],s.top+=o[1]),e.popper=s,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||S(e.instance.popper);e.instance.reference===o&&(o=S(o));var i=_(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,r=e.offsets.popper,s={primary:function(e){var o=r[e];return r[e]<i[e]&&!t.escapeWithReference&&(o=Ae(r[e],i[e])),Ge({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=r[o];return r[e]>i[e]&&!t.escapeWithReference&&(n=xe(r[o],i[e]-('right'===e?r.width:r.height))),Ge({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';r=Xe({},r,s[t](e))}),e.offsets.popper=r,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=Se,s=-1!==['top','bottom'].indexOf(n),a=s?'right':'bottom',p=s?'left':'top',l=s?'width':'height';return o[a]<r(i[p])&&(e.offsets.popper[p]=r(i[p])-o[l]),o[p]>r(i[a])&&(e.offsets.popper[p]=r(i[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){if(!pe(e.instance.modifiers,'arrow','keepTogether'))return e;var o=t.element;if('string'==typeof o){if(o=e.instance.popper.querySelector(o),!o)return e;}else if(!e.instance.popper.contains(o))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var i=e.placement.split('-')[0],n=e.offsets,r=n.popper,s=n.reference,a=-1!==['left','right'].indexOf(i),p=a?'height':'width',l=a?'Top':'Left',d=l.toLowerCase(),c=a?'left':'top',f=a?'bottom':'right',m=Y(o)[p];s[f]-m<r[d]&&(e.offsets.popper[d]-=r[d]-(s[f]-m)),s[d]+m>r[f]&&(e.offsets.popper[d]+=s[d]+m-r[f]);var h=s[d]+s[p]/2-m/2,u=L(e.instance.popper,'margin'+l).replace('px',''),g=h-N(e.offsets.popper)[d]-u;return g=Ae(xe(r[p]-m,g),0),e.arrowElement=o,e.offsets.arrow={},e.offsets.arrow[d]=ke(g),e.offsets.arrow[c]='',e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(J(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=_(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=j(i),r=e.placement.split('-')[1]||'',s=[];switch(t.behavior){case Je.FLIP:s=[i,n];break;case Je.CLOCKWISE:s=de(i);break;case Je.COUNTERCLOCKWISE:s=de(i,!0);break;default:s=t.behavior;}return s.forEach(function(a,p){if(i!==a||s.length===p+1)return e;i=e.placement.split('-')[0],n=j(i);var l=e.offsets.popper,d=e.offsets.reference,c=Se,f='left'===i&&c(l.right)>c(d.left)||'right'===i&&c(l.left)<c(d.right)||'top'===i&&c(l.bottom)>c(d.top)||'bottom'===i&&c(l.top)<c(d.bottom),m=c(l.left)<c(o.left),h=c(l.right)>c(o.right),u=c(l.top)<c(o.top),g=c(l.bottom)>c(o.bottom),b='left'===i&&m||'right'===i&&h||'top'===i&&u||'bottom'===i&&g,y=-1!==['top','bottom'].indexOf(i),v=!!t.flipVariations&&(y&&'start'===r&&m||y&&'end'===r&&h||!y&&'start'===r&&u||!y&&'end'===r&&g);(f||b||v)&&(e.flipped=!0,(f||b)&&(i=s[p+1]),v&&(r=le(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=Xe({},e.offsets.popper,K(e.instance.popper,e.offsets.reference,e.placement)),e=V(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,s=-1!==['left','right'].indexOf(o),a=-1===['top','left'].indexOf(o);return n[s?'left':'top']=r[o]-(a?n[s?'width':'height']:0),e.placement=j(t),e.offsets.popper=N(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!pe(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=G(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,r=G(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,a,p=void 0===r?t.gpuAcceleration:r,l=S(e.instance.popper),d=M(l),c={position:n.position},f={left:Se(n.left),top:Se(n.top),bottom:Se(n.bottom),right:Se(n.right)},m='bottom'===o?'top':'bottom',h='right'===i?'left':'right',u=Z('transform');if(a='bottom'==m?-d.height+f.bottom:f.top,s='right'==h?-d.width+f.right:f.left,p&&u)c[u]='translate3d('+s+'px, '+a+'px, 0)',c[m]=0,c[h]=0,c.willChange='transform';else{var g='bottom'==m?-1:1,b='right'==h?-1:1;c[m]=a*g,c[h]=s*b,c.willChange=m+', '+h}var y={"x-placement":e.placement};return e.attributes=Xe({},y,e.attributes),e.styles=Xe({},c,e.styles),e.arrowStyles=Xe({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return se(e.instance.popper,e.styles),ae(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&se(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=z(n,t,e),s=q(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',s),se(t,{position:'absolute'}),o},gpuAcceleration:void 0}}};var $e=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},et=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),tt=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ot=1,it=function(){function e(t){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};$e(this,e),Pe.SUPPORTED&&(s(),this.state={destroyed:!1},this.selector=t,this.settings=tt({},Ie,o),(o.show||o.shown||o.hide||o.hidden)&&console.warn('Callbacks without the `on` prefix are deprecated (with the exception of `wait`). Use onShow, onShown, onHide, and onHidden instead.'),this.callbacks={wait:o.wait,show:o.onShow||o.show||b,shown:o.onShown||o.shown||b,hide:o.onHide||o.hide||b,hidden:o.onHidden||o.hidden||b},this.store=Le.call(this,E(t)),Ce.push.apply(Ce,this.store))}return et(e,[{key:'getPopperElement',value:function(e){try{return n(this.store,function(t){return t.el===e}).popper}catch(t){console.error('[getPopperElement]: Element passed as the argument does not exist in the instance')}}},{key:'getReferenceElement',value:function(e){try{return n(this.store,function(t){return t.popper===e}).el}catch(t){console.error('[getReferenceElement]: Popper passed as the argument does not exist in the instance')}}},{key:'getReferenceData',value:function(e){return n(this.store,function(t){return t.el===e||t.popper===e})}},{key:'show',value:function(e,t){var o=this;if(!this.state.destroyed){var i=n(this.store,function(t){return t.popper===e}),r=h(e),s=r.tooltip,p=r.circle,l=r.content;if(!document.body.contains(i.el))return void this.destroy(e);this.callbacks.show.call(e);var d=i.el,c=i.settings,b=c.appendTo,y=c.sticky,v=c.interactive,E=c.followCursor,O=c.flipDuration,L=c.duration,T=void 0===t?Array.isArray(L)?L[0]:L:t;u([e,s,p],0),ue(i),e.style.visibility='visible',e.setAttribute('aria-hidden','false'),a(function(){g(e)&&((!E||Pe.touch)&&(i.popperInstance.update(),u([e],O)),u([s,p],T),p&&(l.style.opacity=1),v&&d.classList.add('active'),y&&ge(i),f(s,p),m([s,p],function(e){e.contains('tippy-notransition')&&e.remove('tippy-notransition'),e.remove('leave'),e.add('enter')}),w(i,T,function(){!g(e)||i._onShownFired||(v&&e.focus(),s.classList.add('tippy-notransition'),i._onShownFired=!0,o.callbacks.shown.call(e))}))})}}},{key:'hide',value:function(e,t){var o=this;if(!this.state.destroyed){this.callbacks.hide.call(e);var i=n(this.store,function(t){return t.popper===e}),r=h(e),s=r.tooltip,a=r.circle,p=r.content,l=i.el,d=i.settings,f=d.appendTo,b=d.sticky,v=d.interactive,E=d.followCursor,O=d.html,L=d.trigger,T=d.duration,x=void 0===t?Array.isArray(T)?T[1]:T:t;i._onShownFired=!1,v&&l.classList.remove('active'),e.style.visibility='hidden',e.setAttribute('aria-hidden','true'),u([s,a,a?p:null],x),a&&(p.style.opacity=0),m([s,a],function(e){e.contains('tippy-tooltip')&&e.remove('tippy-notransition'),e.remove('enter'),e.add('leave')}),O&&-1!==L.indexOf('click')&&c(l)&&l.focus(),w(i,x,function(){g(e)||!f.contains(e)||'1'===getComputedStyle(s).opacity||(l.removeEventListener('mousemove',y),i.popperInstance.disableEventListeners(),f.removeChild(e),o.callbacks.hidden.call(e))})}}},{key:'update',value:function(e){if(!this.state.destroyed){var t=n(this.store,function(t){return t.popper===e}),o=h(e),i=o.content,r=t.el,s=t.settings.html;return s instanceof Element?void console.warn('Aborted: update() should not be used if `html` is a DOM element'):void(i.innerHTML=s?document.getElementById(s.replace('#','')).innerHTML:r.getAttribute('title')||r.getAttribute('data-original-title'),!s&&d(r))}}},{key:'destroy',value:function(e,t){var o=this;if(!this.state.destroyed){var i=n(this.store,function(t){return t.popper===e}),r=i.el,s=i.popperInstance,a=i.listeners,p=i._mutationObservers;g(e)&&this.hide(e,0),a.forEach(function(e){return r.removeEventListener(e.event,e.handler)}),r.setAttribute('title',r.getAttribute('data-original-title')),r.removeAttribute('data-original-title'),r.removeAttribute('data-tooltipped'),r.removeAttribute('aria-describedby'),s&&s.destroy(),p.forEach(function(e){e&&e.disconnect()}),Ce.splice(l(Ce,function(t){return t.popper===e}),1),(void 0===t||t)&&(this.store=Ce.filter(function(e){return e.tippyInstance===o}))}}},{key:'destroyAll',value:function(){var e=this;if(!this.state.destroyed){var t=this.store.length;this.store.forEach(function(o,i){var n=o.popper;e.destroy(n,i===t-1)}),this.store=null,this.state.destroyed=!0}}}]),e}();return Te.Browser=Pe,Te.Defaults=Ie,Te.disableDynamicInputDetection=function(){return Pe.dynamicInputDetection=!1},Te.enableDynamicInputDetection=function(){return Pe.dynamicInputDetection=!0},Te});

var RCDL = {};
RCDL.features = {};
RCDL.utilities = {};

/**
 * This method take a function and executes it when the DOM is ready.
 * This is similar to $(document).ready() but does not require jQuery.
 *
 * @param {Object} fn
 * Function object to be executed when ready.
 *
 * @return {function}
 * Returns function result.
 */
RCDL.ready = function (fn) {
  'use strict';

  var ready_event_fired = false;
  var ready_event_listener = function () {

    // Create an idempotent version of the 'fn' function
    var idempotent_fn = function () {
      if (ready_event_fired) {
        return;
      }
      ready_event_fired = true;
      return fn();
    };

    // The DOM ready check for Internet Explorer
    var do_scroll_check = function () {
      if (ready_event_fired) {
        return;
      }

      // If IE is used, use the trick by Diego Perini
      // http://javascript.nwbox.com/IEContentLoaded/
      try {
        document.documentElement.doScroll('left');
      }
      catch (e) {
        setTimeout(do_scroll_check, 1);
        return;
      }
      // Execute any waiting functions
      return idempotent_fn();
    };

    // If the browser ready event has already occured
    if (document.readyState === 'complete') {
      return idempotent_fn();
    }

    // Mozilla, Opera and webkit nightlies currently support this event
    if (document.addEventListener) {

      // Use the handy event callback
      document.addEventListener('DOMContentLoaded', idempotent_fn, false);

      // A fallback to window.onload, that will always work
      window.addEventListener('load', idempotent_fn, false);

      // If IE event model is used
    }
    else if (document.attachEvent) {

      // ensure firing before onload; maybe late but safe also for iframes
      document.attachEvent('onreadystatechange', idempotent_fn);

      // A fallback to window.onload, that will always work
      window.attachEvent('onload', idempotent_fn);

      // If IE and not a frame: continually check to see if the document is ready
      var toplevel = false;

      try {
        toplevel = window.frameElement === null;
      }
      catch (e) {
        // Fall through.
      }

      if (document.documentElement.doScroll && toplevel) {
        return do_scroll_check();
      }
    }
  };
  return ready_event_listener;
};

/**
 * This replaces the usual click method as IE doesn't follow every other browser that uses the MouseEvent class.
 *
 * @param {Node} htmlObject Item to trigger click event on.
 */
RCDL.click = function click(htmlObject) {
  'use strict';
  (function (window) {
    try {
      new MouseEvent('test');
      return false; // No need to polyfill
    }
    catch (e) {
      // Need to polyfill - fall through
    }

    // Polyfills DOM4 MouseEvent

    var MouseEvent = function (eventType, params) {
      params = params || {bubbles: false, cancelable: false};
      var mouseEvent = document.createEvent('MouseEvent');
      mouseEvent.initMouseEvent(eventType, params.bubbles, params.cancelable, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

      return mouseEvent;
    };

    MouseEvent.prototype = Event.prototype;

    window.MouseEvent = MouseEvent;
  })(window);

  var event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });

  htmlObject.dispatchEvent(event);
};

/**
 * Cross browser position from top function.
 *
 * @return {Integer} Pixels from the top of the page.
 */
RCDL.posTop = function () {
  'use strict';
  return typeof window.pageYOffset != 'undefined' ? window.pageYOffset: document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0;
};

/**
 * Get all siblings of an element.
 *
 * @param {Node} el
 * Target DOM node item.
 * 
 * @return {Node}
 * Returns siblings.
 */
RCDL.utilities.getSiblings = function (el) {
  'use strict';

  var siblings = [];
  el = el.parentNode.children[0];
  do {
    siblings.push(el);
  } while (el = el.nextElementSibling);
  return siblings;
};

/**
 * Used to add/remove classes on a target element.
 *
 * @param {String} type
 * Modify class type, accepts toggle, add or remove.
 * 
 * @param {Node} target
 * Targeted DOM node item.
 *
 * @param {String} className
 * Class name to be toggled.
 */
RCDL.utilities.modifyClass = function (type, target, className) {
  'use strict';

  if (type === 'toggle') {
    var hasClass = null;
    var addRemove = null;

    if (target.classList) {
      hasClass = target.classList.contains(className);
    }
    else {
      hasClass = new RegExp('(^| )' + className + '( |$)', 'gi').test(target.className);
    }

    switch (hasClass) {
      case true:
        addRemove = 'remove';
        break;

      case false:
        addRemove = 'add';
        break;

      default:
        throw new Error('Has Class option used with method RCDL.utilities.toggleClass is invaild.');
    }

    // IE 8+ support.
    if (target.classList) {
      target.classList[addRemove](className);
    }
    else {
      if (addRemove === 'add') {
        target.className += className;
      }
      else {
        target.className = target.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    }
  }

  else if (type === 'add') {
    if (target.classList) {
      target.classList.add(className);
    }
    // IE 8+ support.
    else {
      target.className += ' ' + className;
    }
  }

  else if (type === 'remove') {
    if (target.classList) {
      target.classList.remove(className);
    }
    // IE 8+ support.
    else {
      target.className = target.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

  else {
    throw new Error('Class modifier is invalid. Accepts toggle, add or remove');
  }
};

/**
 * Takes two DOM nodes and wraps one around the other.
 *
 * @param {Node} el
 * The DOM node item to be wrapped.
 *
 * @param {Node} wrapper
 * The DOM node item to become the wrapper.
 */
RCDL.utilities.wrap = function (el, wrapper) {
  'use strict';

  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
};

/**
 * Triggers a fake page resize. This is sometimes useful to force window redraws or recalculations if you're manipulation
 * elements in the DOM.
 */
RCDL.utilities.triggerResize = function () {
  'use strict';

  var evt = document.createEvent('HTMLEvents');
  evt.initEvent('resize', true, false);
  window.dispatchEvent(evt);
};

/**
 * Checks if target DOM node has a class.
 *
 * @param {Node} el
 * DOM node element to check for class against.
 *
 * @param {String} className
 * CSS class name to look for.
 *
 * @return {boolean} Returns whether the nodeItem has the supplied class.
 */
RCDL.utilities.hasClass = function (el, className) {
  'use strict';

  if (el.classList) {
    return el.classList.contains(className);
  }
  else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
};

RCDL.utilities.triggerAndTargetClassModifier = {

  /**
   * Add event handler to elements with specified css selector, when specified event triggers,
   * toggle the the supplied class name on both the trigger and target element.
   *
   * @param {String} event
   * Event type to add handler to.
   *
   * @param {String} trigger
   * Element selector that will be used to toggle the modifier class.
   *
   * @param {String} target
   * Element selector that will be targeted when the event fires.
   *
   * @param {String} modifier
   * Class added to both the trigger and target elements.
   *
   * @param {Number} depth
   * Numeric value used to help toggles that climb the DOM to stop after a set amount of increments.
   *
   */
  init: function (event, trigger, target, modifier, depth) {
    'use strict';

    // Find the nodes we will use as triggers.
    if (typeof document.querySelector(trigger) === 'object' && document.querySelector(trigger) !== null) {
      this.attach(event, document.querySelectorAll(trigger), target, modifier, depth);
    }
  },
  attach: function (event, targetNodes, target, modifier, depth) {
    'use strict';

    // Loop through the list of nodes and attached events to each.
    if (event === 'load') {
      for (var i = 0; i < (targetNodes.length); i++) {
        this.action(targetNodes[i], target, modifier, depth);
      }
    }
    else {
      if (targetNodes.length > 0) {
        for (var b = 0; b < (targetNodes.length); b++) {
          targetNodes[b].addEventListener(event, function (event) { RCDL.utilities.triggerAndTargetClassModifier.action(event.currentTarget, target, modifier, depth); });
        }
      }
      else {
        targetNodes.addEventListener(event, function (event) { RCDL.utilities.triggerAndTargetClassModifier.action(event.currentTarget, target, modifier, depth); });
      }
    }
  },
  action: function (targetNode, target, modifier, depth) {
    'use strict';

    // Store the node in a temporary variable, which we will replace as we climb the DOM.
    var currentNode = targetNode;
    var classNoDot = modifier.replace(/^\./, '');

    if (depth > 0) {
      for (var i = 0; i < depth; i++) {
        currentNode = this.climbTreeAndToggle(currentNode, target, modifier, i);
      }
    }
    else if (/data-js-trigger/i.test(target)) {

      if (RCDL.utilities.hasClass(targetNode)) {
        // Remove all the modifier classes from other toggle elements.
        var dataTargets = document.querySelectorAll('[data-js-target=' + targetNode.getAttribute('data-js-trigger') + ']');
        Object.keys(dataTargets).forEach(function (item) {
          RCDL.utilities.triggerAndTargetClassModifier.removeModifier(dataTargets[item], classNoDot);
        });
      }

      // Remove the modifier class from anything matching the data attribute selector.
      var targets = document.querySelectorAll(target);
      Object.keys(targets).forEach(function (item) {
        RCDL.utilities.triggerAndTargetClassModifier.removeModifier(targets[item], classNoDot);
      });

      var childTarget = document.querySelector('[data-js-target="' + targetNode.getAttribute('data-js-trigger') + '"]');
      if (childTarget !== null) {
        RCDL.utilities.modifyClass('toggle', childTarget, classNoDot);
      }
    }
    else {
      // Toggle the active class on the trigger.
      RCDL.utilities.modifyClass('toggle', targetNode, classNoDot);
    }
  },
  removeModifier: function (item, modifier) {
    'use strict';

    if (item.classList) {
      item.classList.remove(modifier);
    }
    else {
      item.modifier = item.modifier.replace(new RegExp('(^|\\b)' + modifier.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  },
  climbTreeAndToggle: function (currentNode, target, modifier) {
    'use strict';

    while (!this.classCheck(currentNode, target.target) && currentNode !== null) {
      // Check the node for the target class and climb the DOM if not found.
      currentNode = currentNode.parentNode;
    }

    if (target.siblingCheck) {
      var childTarget = currentNode.querySelector(target.targetClass);
      RCDL.utilities.modifyClass('toggle', childTarget, modifier.replace(/^\./, ''));
    }
    else {
      // Toggle the active class on the target.
      RCDL.utilities.modifyClass('toggle', currentNode, modifier.replace(/^\./, ''));
    }
    return currentNode.parentNode;
  },
  classCheck: function classCheck(el, className) {
    'use strict';

    try {
      // Try and find the class with contains function, use RegEx for older browsers.
      if (el.classList) {
        return el.classList.contains(className.replace(/^\./, ''));
      }
      else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
      }
    }
    catch (e) {
      throw new Error('Css Selector: "' + className + '" doesn\'t appear to be in the DOM');
    }
  }
};



/**
 * Looks for objects tagged with the data-js-import-interactive-svg attribute then write them into the DOM.
 *
 * @param {String} interactiveSvg
 * Css selector used to target objects containing svgs.
 **
 */
RCDL.utilities.svgAnimation = function (interactiveSvg) {
  'use strict';

  function fetchXML  (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function (evt) {
      //Do not explicitly handle errors, those should be
      //visible via console output in the browser.
      if (xhr.readyState === 4) {
        callback(xhr.responseXML);
      }
    };
    xhr.send(null);
  }

  var svgs = document.querySelectorAll(interactiveSvg);

  if (svgs !== null) {
    // Import the svgs from the data url.
    Object.keys(svgs).forEach(function (svg) {

      var dataUrl = svgs[svg].getAttribute('data');
      var classes = svgs[svg].getAttribute('class');
      var dataTarget = svgs[svg].getAttribute('data-js-import-interactive-svg');

      fetchXML(dataUrl, function (newSVGDoc) {
        // Import it into the current DOM.
        var importedSvg = document.importNode(newSVGDoc.documentElement, true);

        classes.split(' ').forEach(function (singleClass) {
          RCDL.utilities.modifyClass('add', importedSvg, singleClass);
        });

        importedSvg.setAttribute('data-js-import-interactive-svg', dataTarget);

        svgs[svg].parentNode.replaceChild(importedSvg, svgs[svg]);

        // Attach the class modifier action after the item has been added to the DOM.
        RCDL.utilities.triggerAndTargetClassModifier.init('click', '[data-js-import-interactive-svg-trigger="' + dataTarget + '"]', '[data-js-import-interactive-svg="' + dataTarget + '"]', '.svg-active', null);

      });
    });
  }
};

RCDL.ready(RCDL.utilities.svgAnimation('[data-js-import-interactive-svg]'));

RCDL.features.alerts = {
  /**
   * Add the default functionality for alerts. Remove alert if close button clicked.
   * Store this decision in the local session and hide the alerts if they've already been closed.
   *
   * @param {String|Array} selectors
   * Either a css selector or an array or selectors.
   */
  init: function (selectors) {

    if (typeof selectors === 'string') {
      selectors = [selectors];
    }

    selectors.forEach(function (selector) {
      var alerts = document.querySelectorAll(selector);

      alerts.forEach(function (alert) {

        if (sessionStorage.getItem(String(alert.innerHTML)) !== null) {
          alert.remove();
        }

        alert.querySelector('.alert__close').addEventListener('click', function (event) {
          sessionStorage.setItem(String(event.currentTarget.parentNode.innerHTML), String(event.currentTarget.parentNode.innerHTML));
          event.currentTarget.parentNode.remove();
        });
      });
    });
  }
};

RCDL.ready(RCDL.features.alerts.init(['[role="alert"]']));
/**
 * Takes a selector and converts into a carousel using the tiny-slider library.
 * @type {{init: RCDL.features.Carousel.init, create: RCDL.features.Carousel.create}}
 */
RCDL.features.Carousel = {

  /**
   * Find all the elements with the supplied selector.
   *
   * @param {String} targetClass
   * Css selector to target.
   */
  init: function (targetClass) {
    'use strict';

    var carousels = document.querySelectorAll(targetClass);

    if (carousels !== null && carousels.length > 0) {
      if (carousels.length > 1) {
        Object.keys(carousels).forEach(function (carousel) {
          RCDL.features.Carousel.create(carousels[carousel]);
        });
      }
      else {
        RCDL.features.Carousel.create(carousels[0]);
      }
    }
  },

  /**
   * Create a carousel from the supplied node item.
   *
   * @param {Node} carousel
   * Node item.
   */
  create: function (carousel) {
    'use strict';
    tns({
      container: carousel,
      items: 1,
      slideBy: 'page',
      mouseDrag: true,
      autoplay: false,
      controlsText: [
        '<span class="navigation--prev"><span class="screen-reader-text">Previous</span></span>',
        '<span class="navigation--next"><span class="screen-reader-text">Next</span></span>'
      ],
      touch: true
    });
  }
};

RCDL.ready(RCDL.features.Carousel.init('[data-js-carousel]'));

/**
 * Function factory object for adding features to form elements.
 *
 * @type {{labels: RCDL.features.FormElements.labels, passwordField: RCDL.features.FormElements.passwordField}}
 */
RCDL.features.FormElements = {

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
      eye.classList.add('input__password__toggle');

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

RCDL.ready(RCDL.features.FormElements.labels('.input'));
RCDL.ready(RCDL.features.FormElements.passwordField('[type="password"]'));

/**
 * Converts selector element into Choices.js selectors with improved accessibility and styling.
 *
 * @param {String} selector
 * CSS selector for targeting select elements. Default: [data-js-select]
 * @constructor
 */
RCDL.features.Selects = function (selector) {
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
          removeItemButton: true,
          shouldSort: false,
          // Check if different colour scheme has been applied
          classNames: {
            containerOuter: RCDL.utilities.hasClass(select, 'input--white') ? 'choices choices--white' : 'choices'
          }
        }
      );
    });
  }
};

RCDL.ready(RCDL.features.Selects());

/**
 * Function generate fallback datepicker calendars when the element type date isn't supported.
 *
 * @type {{init: RCDL.features.Datepickers.init, createDatePicker: RCDL.features.Datepickers.createDatePicker}}
 */

RCDL.features.Datepickers = {

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
            RCDL.features.Datepickers.createDatePicker(picker);
          });
        }
        else {
          RCDL.features.Datepickers.createDatePicker(datepickers);
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

RCDL.ready(RCDL.features.Datepickers.init());

/**
 * Variant on the carousel function. Creates very simple carousels used for small image galleries.
 *
 * @type {{init: RCDL.features.ImageGallery.init, create: RCDL.features.ImageGallery.create, wrapAndRemoveDots: RCDL.features.ImageGallery.wrapAndRemoveDots}}
 */
RCDL.features.ImageGallery = {
  init: function (targetClass, options) {
    'use strict';

    var imageGalleries = document.querySelectorAll(targetClass);

    if (imageGalleries !== null && Object.keys(imageGalleries).length > 0) {
      if (Object.keys(imageGalleries).length > 1) {
        Object.keys(imageGalleries).forEach(function (imageGallery) {
          RCDL.features.Carousel.create(imageGalleries[imageGallery], options);
          RCDL.features.ImageGallery.wrapAndRemoveDots(imageGalleries[imageGallery].parentNode.parentNode);
        });
      }
      else {
        RCDL.features.ImageGallery.create(imageGalleries[0], options);
        RCDL.features.ImageGallery.wrapAndRemoveDots(imageGalleries[0]);
      }
    }
  },

  /**
   * Create an image gallery carousel from the supplied node item.
   *
   * @param {Node} imageGallery
   * Node item for converting.
   *
   * @param {Object} options
   * Object with options for tiny slider library.
   */
  create: function (imageGallery, options) {
    'use strict';

    options = typeof options === 'object' ? options : {
      container: imageGallery,
      items: 1,
      slideBy: 'page',
      autoplay: true,
      controlsText: [
        '<span class="navigation--prev"><span class="screen-reader-text">Previous</span></span>',
        '<span class="navigation--next"><span class="screen-reader-text">Next</span></span>'
      ],
      touch: true,
      autoplayTimeout: 4000,
      speed: 500
    };

    tns(options);
  },

  /**
   * With the lack of programmatic enable/disable of UI dots we have to remove these manually.
   *
   * @param {Node} item
   * Node item to have dots removed.
   */
  wrapAndRemoveDots: function (item) {
    'use strict';
    // Create an element to wrap the gallery with so we can easily target it later.
    // TNS wraps the markup so this is required to restrict the width etc.
    var wrapper = document.createElement('div');
    wrapper.classList.add('gallery-wrapper');
    RCDL.utilities.wrap(item.parentNode.parentNode, wrapper);

    var pager = item.parentNode.parentNode.querySelectorAll('[aria-label="Carousel Pagination"]');
    pager[0].parentNode.removeChild(pager[0]);

    // Trigger resize to make sure the gallery adjusts to the correct size.
    RCDL.utilities.triggerResize();
  }
};

RCDL.ready(RCDL.features.ImageGallery.init('.rc-carousel--gallery'));

/**
 *
 * File maps.js.
 *
 */


/**
 * Custom Map icon SVG settings
 * @type {object}
 */
var icon = {
  path: 'M16,32a2.79,2.79,0,0,1-2.26-1.14C11.22,27.47,4,16.61,4,11.39,4,5.11,9.38,0,16,0S28,5.11,28,11.39c0,5.23-7.22,16.08-9.74,19.47A2.79,2.79,0,0,1,16,32ZM16,2C10.49,2,6,6.21,6,11.39c0,4.06,6.09,13.9,9.35,18.27a.8.8,0,0,0,1.31,0C19.91,25.29,26,15.44,26,11.39,26,6.21,21.51,2,16,2Z M16,17a6,6,0,1,1,6-6A6,6,0,0,1,16,17ZM16,7a4,4,0,1,0,4,4A4,4,0,0,0,16,7Z',
  fillColor: '#E2001A',
  fillOpacity: .6,
  scale: 1,
  strokeWeight: 0
}

/**
 * Creates a Google Map
 * @param  {object} selector The DOM ID to set up the Map in
 * @param  {object} center   The desired center of the Map
 * @param  {number} zoom     The zoom level of the Map
 * @return {object}          The Map
 */
function create_map (selector, center, zoom) {
  /**
   * Sets default number for zoom
   * @type {number}
   */
  var zoom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 17;

  /**
   * Exit the function if any of the arguments passed are empty
   * @return {bool} false
   */
  if (null === selector || typeof center === 'undefined' || typeof zoom === 'undefined') {
    return false;
  }

  /**
   * Creates the new map with arguments passed and some defaults
   * @type {google}
   */
  var new_map = new google.maps.Map(selector, {
    center: center,
    scrollwheel: false,
    zoom: zoom,
    // Apple Maps style
    styles: [
      {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
          {
            "color": "#faf5ed"
          },
          {
            "lightness": "0"
          },
          {
            "gamma": "1"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#bae5a6"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "weight": "1.00"
          },
          {
            "gamma": "1.8"
          },
          {
            "saturation": "0"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "hue": "#ffb200"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "lightness": "0"
          },
          {
            "gamma": "1"
          }
        ]
      },
      {
        "featureType": "transit.station.airport",
        "elementType": "all",
        "stylers": [
          {
            "hue": "#b000ff"
          },
          {
            "saturation": "23"
          },
          {
            "lightness": "-4"
          },
          {
            "gamma": "0.80"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#a0daf2"
          }
        ]
      }
    ]
  });

  return new_map;
}

/**
 * Create a Google Maps Marker
 * @param  {object}   position  The desired position of the Marker
 * @param  {object}   map       The Map to apply the Marker to
 * @return {object}             The Marker applied to the Map
 */
function create_marker (position, map) {
  /**
   * Exit the function if any of the arguments passed are empty
   * @return {bool} false
   */
  if (typeof position === 'undefined' || typeof map === 'undefined', false === map) {
    return false;
  }

  /**
   * Creates the new map marker with arguments passed
   * @type {google}
   */
  var map_marker = new google.maps.Marker({
    icon: icon,
    position: position,
    map: map
  });

  return map_marker;
}

/**
 * Create a Google Maps Marker
 * @param  {object} content The content for the InfoWindow
 * @param  {object} marker  The Marker to attach the InfoWindow to
 * @param  {object} map     The Map that the Marker is applied to
 * @return {object}         The InfoWindow applied to the Marker
 */
function create_infobox (content, marker, map) {
  /**
   * Exit the function if any of the arguments passed are empty
   * @return {bool} false
   */
  if (typeof content === 'undefined' || typeof marker === 'undefined' || typeof map === 'undefined') {
    return false;
  }

  var new_infowindow = new google.maps.InfoWindow({
    content: content
  });

  marker.addListener('click', function() {
    new_infowindow.open(map, marker);

    make_visible = 'rc-map__overlay--visible';

    // Add class
    if (new_infowindow.content.classList)
      new_infowindow.content.classList.add(make_visible);
    else
      new_infowindow.content.make_visible += ' ' + make_visible;
  });

  return new_infowindow;
}





//
// Following would live in custom scripts file
// -------------------------------------------------------------------------------------------------------------------------------------------- //
//

/**
 * Object containing lat/lng of key locations
 * @type {object}
 */
var key_locations = {
  royal_canin: {
    lat: 43.700753,
    lng: 4.187961
  },
  first_10: {
    lat: 53.790524,
    lng: -1.532349
  }
}


/**
 * Standard Google Maps init function. Generates Maps.
 */
function initMap() {

  if (document.getElementById('map_royal_canin') !== null) {
    // Royal Canin Map
    var map_royal_canin = create_map(document.getElementById('map_royal_canin'), key_locations.royal_canin, 17);

    // Royal Canin Map + Marker
    var map_royal_canin_marker = create_map(document.getElementById('map_royal_canin--marker'), key_locations.royal_canin, 17);
    var marker_royal_canin_marker = create_marker(key_locations.royal_canin, map_royal_canin_marker);

    // First 10 Map + Marker + Infobox
    var map_first_10 = create_map(document.getElementById('map_first_10'), key_locations.first_10, 18);
    var marker_first_10 = create_marker(key_locations.first_10, map_first_10);
    var infobox_first_10 = create_infobox(document.getElementById('infobox_first_10'), marker_first_10, map_first_10);
  }
}


RCDL.navigation = {};

/**
 * Changes all navigation bars on scroll
 *
 * @param {String} headerNavSelector Selector for the header navigation div 
 * 
 * @param {String} mobileFooterNavSelector Selector for the mobile footer navigation div
 * 
 * @param {String} mainNavSelector Selector for the main navigation div
 * 
 */
RCDL.navigation.changeNavigationOnScroll = function (headerNavSelector, mobileFooterNavSelector, mainNavSelector) {
  'use strict';

  var headerNav = document.querySelector(headerNavSelector);

  if (headerNav !== null) {
    window.addEventListener('scroll', function () {
      var headerNav = document.querySelector(headerNavSelector);

      if (RCDL.posTop() > 100) {
        RCDL.utilities.modifyClass('add', headerNav, 'scrolled');
      }
      else {
        RCDL.utilities.modifyClass('remove', headerNav, 'scrolled');
      }
    });
  }

  var footerNav = document.querySelector(mobileFooterNavSelector);
  var mainNav = document.querySelector(mainNavSelector);

  if (footerNav !== null) {
    var previous = RCDL.posTop();
    window.addEventListener('scroll', function () {

      if (RCDL.posTop() > previous) {
        if (!RCDL.utilities.hasClass(mainNav, 'open')) {
          RCDL.utilities.modifyClass('add', footerNav, 'scrolled');
        }
      }
      else {
        RCDL.utilities.modifyClass('remove', footerNav, 'scrolled');
      }
      previous = RCDL.posTop();
    });
  }
};

RCDL.ready(RCDL.navigation.changeNavigationOnScroll('.rc-header-navigation', '.rc-mobile-footer-navigation', '.rc-main-navigation'));


/**
 * Hides and shows the search bar and shade, closes nav and replaces with search bar if nav already open.
 *
 * @param {String} searchBarTriggerSelector Selector for the search bar trigger.
 * 
 * @param {String} mainNavSelector Selector for the main navigation wrapper.
 * 
 */
RCDL.navigation.searchBar = function (searchBarTriggerSelector, mainNavSelector) {
  'use strict';

  var searchBarTrigger = document.querySelector(searchBarTriggerSelector);
  var mainNav = document.querySelector(mainNavSelector);
  var mainNavToggler = document.querySelector('[data-js-animate-svg-target]');

  if (searchBarTrigger !== null) {
    searchBarTrigger.addEventListener('click', function () {
      if (mainNav != null) {
        if (RCDL.utilities.hasClass(mainNav, 'open')) {
          RCDL.utilities.modifyClass('remove', mainNav, 'open');
          document.body.style.overflow = ''; // Always allow page scrolling when search open

          if (mainNavToggler !== null) {
            var svg = mainNavToggler.contentDocument.querySelector('.svg-toggle');
            RCDL.utilities.modifyClass('remove', svg, 'active');
          }
        }
      }

      var siblings = RCDL.utilities.getSiblings(searchBarTrigger);

      siblings.forEach(function (sibling) {
        if (sibling !== searchBarTrigger) {
          RCDL.utilities.modifyClass('toggle', sibling, 'fade');
        }
        else {
          RCDL.utilities.modifyClass('toggle', searchBarTrigger, 'active');
        }
      });
    });
  }

  RCDL.ready(RCDL.utilities.triggerAndTargetClassModifier.init('click', searchBarTriggerSelector, '[data-js-trigger]', '.open', null));
};

if (window.innerWidth < 800) {
  RCDL.ready(RCDL.navigation.searchBar('[data-js-trigger="search-bar-mobile"]', '.rc-main-navigation__wrapper'));
}
else {
  RCDL.ready(RCDL.navigation.searchBar('[data-js-trigger="search-bar"]', '.rc-main-navigation__wrapper'));
}

/**
 * Extension of the HTML element progress.
 * @type {{init: RCDL.features.Progress.init, demo: RCDL.features.Progress.demo}}
 */
RCDL.features.Progress = {

  /**
   * Setup the progress element with a label to reflect the current
   * value and a mutation observer to update this on changes.
   *
   * @param {String} targetClass
   * Css selector.
   */
  init: function (targetClass) {
    'use strict';

    var progElms = document.querySelectorAll(targetClass);

    // Look for the demo element.
    var demo = document.querySelectorAll('[data-js-demo="update-progress-demo"]');

    if (typeof demo !== 'undefined' && demo.length > 0) {
      RCDL.features.Progress.demo(demo[0]);
    }

    Object.keys(progElms).forEach(function (el) {

      var val = progElms[el].getAttribute('value');
      var label = document.createElement('span');

      label.setAttribute('id', progElms[el].getAttribute('id') + '--label');

      // Initial styles for label.
      label.innerHTML = val + '%';
      label.style.position = 'absolute';
      label.style.top = '0.75em';
      label.style.left = val + '%';
      label.style.marginLeft = '-3em';
      label.style.color = 'white';

      el.parentNode.appendChild(label);

      // Add observer to progress element to update the label on change.
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
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
    });
  },

  /**
   * Demo function purely here to drive the demo on the portal. Simply attaches an
   * event to a button to update the progress bar.
   *
   * @param {Node} demo Node item to add event listener to.
   */
  demo: function (demo) {
    'use strict';

    demo.addEventListener('click', function (event) {
      var target = event.target.getAttribute('data-js-demo');
      var el = document.querySelectorAll('#' + target);
      var current = el[0].getAttribute('value');
      el[0].setAttribute('value', parseInt(current) + 10);
    });
  }
};

RCDL.ready(RCDL.features.Progress.init('progress'));

/**
 * Adds an interactive UI slider where you can set the min/max and steps, inputs are then reflected in the nested input element.
 *
 * @type {{init: RCDL.features.Slider.init, create: RCDL.features.Slider.create, setupKeyboard: RCDL.features.Slider.setupKeyboard, updateInput: RCDL.features.Slider.updateInput}}
 */
RCDL.features.Slider = {

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

        Object.keys(range).forEach(function (item) {
          // Create Slider
          RCDL.features.Slider.create(range[item]);
        });
      }
      else {
        RCDL.features.Slider.create(range[0]);
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
    var step = parseInt(item.getAttribute('data-js-step')) || max / 50;

    var sliderInput = item.getElementsByTagName('input');
    sliderInput[0].value = start;
    sliderInput[0].style.display = 'none';

    function filterVal(value) {
      return value % 10 ? 0 : 1;
    }

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
        density: step,
        filter: filterVal
      }
    });

    RCDL.features.Slider.setupKeyboard(item);
    RCDL.features.Slider.updateInput(item);
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

RCDL.ready(RCDL.features.Slider.init('[data-js-slider]'));

/**
 * Enables the ability to create interactive tabbed navigation for stacked content.
 *
 * @type {{init: RCDL.features.Tabs.init, hideTabs: RCDL.features.Tabs.hideTabs, tabClick: RCDL.features.Tabs.tabClick}}
 */
RCDL.features.Tabs = {

  /**
   * Initialise the interaction on target selector.
   *
   * @param {String} target
   * Css selector.
   */
  init: function (target) {
    'use strict';

    var tabsets = document.querySelectorAll(target);

    if (typeof tabsets[0] !== 'undefined') {
      // Skip if no sets of tabs are found.
      if (tabsets.length > 0) {
        // Loop through all the returned results, these should be sets of tabs.
        Object.keys(tabsets).forEach(function (tabset) {
          RCDL.features.Tabs.hideTabs(tabsets[tabset]);

          // fake a click on the first item.
          var defaultItem = tabsets[tabset].querySelectorAll('.rc-tabs__triggers > li:first-child a');
          RCDL.click(defaultItem[0]);
        });
      }
      else {
        RCDL.features.Tabs.hideTabs(tabsets[0]);

        // fake a click on the first item.
        var defaultItem = tabsets[0].querySelectorAll('.rc-tabs__triggers > li:first-child a');
        RCDL.click(defaultItem[0]);
      }
    }
  },

  /**
   * Hide all the tabs for a given tab set.
   *
   * @param {Node} tabsets
   * Wrapper containing a set of tabs and controller (rc-tabs__controller).
   */
  hideTabs: function (tabsets) {
    'use strict';

    var tabs = tabsets.getElementsByClassName('rc-tabs__controller');

    // Loop through the triggers adding event handlers.
    Object.keys(tabs).forEach(function (item) {
      var itemHref = tabs[item].getAttribute('href');

      // Add an event listener to each instance.
      tabs[item].addEventListener('click', RCDL.features.Tabs.tabClick);

      // Find the target using the href attribute.
      var target = tabsets.querySelectorAll(itemHref);

      RCDL.utilities.modifyClass('toggle', target[0], 'hidden');

      // Reset the ARIA attributes on the controller and target.
      tabs[item].setAttribute('aria-selected', 'false');
      target[0].setAttribute('aria-hidden', 'true');
    });
  },

  /**
   * Event bound to tab controllers click events.
   *
   * @param {Object} event
   * Event object.
   */
  tabClick: function (event) {
    'use strict';

    event.preventDefault();
    // Get the target content container using the hash.
    var target = document.querySelectorAll(this.getAttribute('href'));

    RCDL.features.Tabs.hideTabs(this.parentNode.parentNode.parentNode);

    // Set the ARIA attributes on the controller and target.
    target[0].setAttribute('aria-hidden', 'false');
    this.setAttribute('aria-selected', 'true');
  }
};

RCDL.ready(RCDL.features.Tabs.init('[data-js-rc-tabs]'));

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
            arrow: true,
            arrowSize: 'big',
            interactive: true,
            dynamicTitle: true,
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

RCDL.ready(RCDL.features.Tooltip.init('[data-tooltip]'));
