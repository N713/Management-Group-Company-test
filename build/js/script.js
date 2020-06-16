/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/components/backend.js":
/*!*****************************************!*\
  !*** ./source/js/components/backend.js ***!
  \*****************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load\", function() { return load; });\n\n\nvar URL = \"assets/products.json\";\n\nvar load = function load(onSuccess, onError) {\n  var xhr = new XMLHttpRequest();\n  xhr.responseType = \"json\";\n  xhr.addEventListener(\"load\", function () {\n    if (xhr.status === 200) {\n      onSuccess(xhr.response);\n    } else {\n      onError(\"\\u0421\\u0442\\u0430\\u0442\\u0443\\u0441 \\u043E\\u0442\\u0432\\u0435\\u0442\\u0430: \" + xhr.status + \" \" + xhr.statusText);\n    }\n  });\n  xhr.addEventListener(\"error\", function () {\n    onError(\"\\u041F\\u0440\\u043E\\u0438\\u0437\\u043E\\u0448\\u043B\\u0430 \\u043E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0441\\u043E\\u0435\\u0434\\u0438\\u043D\\u0435\\u043D\\u0438\\u044F\");\n  });\n  xhr.addEventListener(\"timeout\", function () {\n    onError(\"\\u0417\\u0430\\u043F\\u0440\\u043E\\u0441 \\u043D\\u0435 \\u0443\\u0441\\u043F\\u0435\\u043B \\u0432\\u044B\\u043F\\u043E\\u043B\\u043D\\u0438\\u0442\\u044C\\u0441\\u044F \\u0437\\u0430 \" + xhr.timeout + \" \\u043C\\u0441\");\n  });\n  xhr.timeout = 10000;\n  xhr.open(\"GET\", URL);\n  xhr.send();\n};\n\n\n\n//# sourceURL=webpack:///./source/js/components/backend.js?");

/***/ }),

/***/ "./source/js/components/card.js":
/*!**************************************!*\
  !*** ./source/js/components/card.js ***!
  \**************************************/
/*! exports provided: getCardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCardTemplate\", function() { return getCardTemplate; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./source/js/components/utils.js\");\n\n\n\n\nvar getCardTemplate = function getCardTemplate(data) {\n  return \"<div id=\\\"products_section\\\">\\n            <div class=\\\"products_page pg_0\\\">\\n                <div class=\\\"product product_horizontal\\\">\\n                    <span class=\\\"product_code\\\">\\u041A\\u043E\\u0434: \".concat(data.code, \"</span>\\n                    <div class=\\\"product_status_tooltip_container\\\">\\n                        <span class=\\\"product_status\\\">\\u041D\\u0430\\u043B\\u0438\\u0447\\u0438\\u0435</span>\\n                    </div>\\n                    <div class=\\\"product_photo\\\">\\n                        <a href=\\\"#\\\" class=\\\"url--link product__link\\\">\\n                            <img src=\\\"\").concat(_utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].getImgUrl(data.primaryImageUrl), \"\\\">\\n                        </a>\\n                    </div>\\n                    <div class=\\\"product_description\\\">\\n                        <a href=\\\"#\\\" class=\\\"product__link\\\">\").concat(data.title, \"</a>\\n                    </div>\\n                    <div class=\\\"product_tags hidden-sm\\\">\\n                        <p>\\u041C\\u043E\\u0433\\u0443\\u0442 \\u043F\\u043E\\u043D\\u0430\\u0434\\u043E\\u0431\\u0438\\u0442\\u044C\\u0441\\u044F:</p>\\n                        \").concat(data.assocProducts.split(\";\").map(function (current) {\n    return \"<a href=\\\"#\\\" class=\\\"url--link\\\">\".concat(current, \"</a>\");\n  }), \"\\n                    </div>\\n                    <div class=\\\"product_units\\\">\\n                        <div class=\\\"unit--wrapper\\\">\\n                            <div class=\\\"unit--select unit--active\\\">\\n                                <p class=\\\"ng-binding\\\">\\u0417\\u0430 \").concat(data.unitAlt, \"</p>\\n                            </div>\\n                            <div class=\\\"unit--select\\\">\\n                                <p class=\\\"ng-binding\\\">\\u0417\\u0430 \").concat(_utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].makeRightWord(data.unitFull), \"</p>\\n                            </div>\\n                        </div>\\n                    </div>\\n                    <p class=\\\"product_price_club_card\\\">\\n                        <span class=\\\"product_price_club_card_text\\\">\\u041F\\u043E \\u043A\\u0430\\u0440\\u0442\\u0435<br>\\u043A\\u043B\\u0443\\u0431\\u0430</span>\\n                        <span class=\\\"goldPrice\\\">\").concat(Math.ceil(Number(data.priceGoldAlt) * 100) / 100, \"</span>\\n                        <span class=\\\"rouble__i black__i\\\">\\n                            <svg version=\\\"1.0\\\" id=\\\"rouble__b\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0\\\" y=\\\"0\\\" width=\\\"30px\\\" height=\\\"22px\\\" viewBox=\\\"0 0 50 50\\\" enable-background=\\\"new 0 0 50 50\\\" xml:space=\\\"preserve\\\">\\n                               <use xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" xlink:href=\\\"#rouble_black\\\"></use>\\n                            </svg>\\n                         </span>\\n                    </p>\\n                    <p class=\\\"product_price_default\\\">\\n                        <span class=\\\"retailPrice\\\">\").concat(Math.ceil(Number(data.priceRetailAlt) * 100) / 100, \"</span>\\n                        <span class=\\\"rouble__i black__i\\\">\\n                            <svg version=\\\"1.0\\\" id=\\\"rouble__g\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0\\\" y=\\\"0\\\" width=\\\"30px\\\" height=\\\"22px\\\" viewBox=\\\"0 0 50 50\\\" enable-background=\\\"new 0 0 50 50\\\" xml:space=\\\"preserve\\\">\\n                               <use xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" xlink:href=\\\"#rouble_gray\\\"></use>\\n                            </svg>\\n                         </span>\\n                    </p>\\n                    <div class=\\\"product_price_points\\\">\\n                        <p class=\\\"ng-binding\\\">\\u041C\\u043E\\u0436\\u043D\\u043E \\u043A\\u0443\\u043F\\u0438\\u0442\\u044C \\u0437\\u0430 \").concat(_utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].makeRandomScore(), \" \\u0431\\u0430\\u043B\\u043B\\u0430</p>\\n                    </div>\\n                    <div class=\\\"list--unit-padd\\\"></div>\\n                    <div class=\\\"list--unit-desc\\\">\\n                        <div class=\\\"unit--info\\\">\\n                            <div class=\\\"unit--desc-i\\\">\\n                              <img src=\\\"img/unit--i.png\\\" width=\\\"15\\\" height=\\\"15\\\" alt=\\\"\\u0412\\u043D\\u0438\\u043C\\u0430\\u043D\\u0438\\u0435\\\">\\n                            </div>\\n                            <div class=\\\"unit--desc-t\\\">\\n                                <p>\\n                                    <span class=\\\"ng-binding\\\">\\u041F\\u0440\\u043E\\u0434\\u0430\\u0435\\u0442\\u0441\\u044F \").concat(_utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].makeRightPack(data.unitFull), \":</span>\\n                                    <span class=\\\"unit--infoInn\\\">\").concat(_utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].makeRightCount(data.unitFull), \"</span>\\n                                </p>\\n                            </div>\\n                        </div>\\n                    </div>\\n                    <div class=\\\"product__wrapper\\\">\\n                        <div class=\\\"product_count_wrapper\\\">\\n                            <div class=\\\"stepper\\\">\\n                                <input class=\\\"product__count stepper-input\\\" type=\\\"number\\\" value=\\\"1\\\">\\n                                <span class=\\\"stepper-arrow up\\\"></span>\\n                                <span class=\\\"stepper-arrow down\\\"></span>\\n                                <img src=\\\"img/jquery.fs.stepper-arrows.png\\\" width=\\\"54\\\" height=\\\"41\\\" alt=\\\"\\u0421\\u0442\\u0440\\u0435\\u043B\\u043A\\u0438 \\u0443\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u044F\\\">\\n                            </div>\\n                        </div>\\n                        <span class=\\\"btn btn_cart\\\" data-url=\\\"/cart/\\\" data-product-id=\\\"\").concat(data.productId, \"\\\">\\n                            <svg class=\\\"ic ic_cart\\\">\\n                               <use xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" xlink:href=\\\"#cart\\\"></use>\\n                            </svg>\\n                            <span class=\\\"ng-binding\\\">\\u0412 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0443</span>\\n                        </span>\\n                    </div>\\n                </div>\\n            </div>\\n          </div>\");\n};\n\n\n\n//# sourceURL=webpack:///./source/js/components/card.js?");

/***/ }),

/***/ "./source/js/components/cards.js":
/*!***************************************!*\
  !*** ./source/js/components/cards.js ***!
  \***************************************/
/*! exports provided: renderCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCards\", function() { return renderCards; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./source/js/components/utils.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ \"./source/js/components/card.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers */ \"./source/js/components/handlers.js\");\n\n\n\n\n\nvar cardsContainer = document.body.querySelector(\".product__area\");\n\nvar renderCards = function renderCards(data) {\n  var cards = Array.from(data).reverse();\n  cards.map(function (card) {\n    var element = _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].makeElement(Object(_card__WEBPACK_IMPORTED_MODULE_1__[\"getCardTemplate\"])(card));\n    var ratio = card.unitRatioAlt;\n    Object(_handlers__WEBPACK_IMPORTED_MODULE_2__[\"setElementHandlers\"])(element, ratio);\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].render(cardsContainer, element, _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].Position.AFTERBEGIN);\n  });\n};\n\n\n\n//# sourceURL=webpack:///./source/js/components/cards.js?");

/***/ }),

/***/ "./source/js/components/error.js":
/*!***************************************!*\
  !*** ./source/js/components/error.js ***!
  \***************************************/
/*! exports provided: renderError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderError\", function() { return renderError; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./source/js/components/utils.js\");\n\n\n\nvar cardsContainer = document.body.querySelector(\".product__area\");\n\nvar getErrorTemplate = function getErrorTemplate(error) {\n  return \"<h2><span style=\\\"color: red\\\">\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430:</span> \".concat(error, \"</h2>\");\n};\n\nvar renderError = function renderError(message) {\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].render(cardsContainer, _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].makeElement(getErrorTemplate(message)), _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].Position.AFTERBEGIN);\n};\n\n\n\n//# sourceURL=webpack:///./source/js/components/error.js?");

/***/ }),

/***/ "./source/js/components/handlers.js":
/*!******************************************!*\
  !*** ./source/js/components/handlers.js ***!
  \******************************************/
/*! exports provided: setElementHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setElementHandlers\", function() { return setElementHandlers; });\n\n\nvar changeCount = function changeCount(element, field) {\n  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"plus\";\n  var number = Number(field.value);\n\n  if (direction === \"minus\") {\n    if (number > 0) {\n      number--;\n    }\n  } else {\n    number++;\n  }\n\n  field.value = number;\n};\n\nvar setElementHandlers = function setElementHandlers(element, ratio) {\n  var countField = element.querySelector(\".stepper-input\");\n  var countControls = element.querySelectorAll(\".stepper-arrow\");\n  var countUp = countControls[0];\n  var countDown = countControls[1];\n  var goldPrice = element.querySelector(\".goldPrice\");\n  var retailPrice = element.querySelector(\".retailPrice\");\n  var goldPriceNumber = Number(goldPrice.textContent);\n  var retailPriceNumber = Number(retailPrice.textContent);\n  var types = element.querySelectorAll(\".unit--select\");\n  var mainType = types[1];\n  var altType = types[0];\n\n  var setPrices = function setPrices() {\n    goldPrice.textContent = \"\".concat(Number(Number(countField.value) * goldPriceNumber).toFixed(2));\n    retailPrice.textContent = \"\".concat(Number(Number(countField.value) * retailPriceNumber).toFixed(2));\n  };\n\n  countUp.addEventListener(\"click\", function () {\n    changeCount(element, countField);\n    setPrices();\n  });\n  countDown.addEventListener(\"click\", function () {\n    changeCount(element, countField, \"minus\");\n    setPrices();\n  });\n  countField.addEventListener(\"input\", function () {\n    setPrices();\n  });\n  mainType.addEventListener(\"click\", function () {\n    if (!mainType.classList.contains(\"unit--active\")) {\n      mainType.classList.add(\"unit--active\");\n      altType.classList.remove(\"unit--active\");\n      goldPriceNumber = Number(goldPriceNumber / ratio).toFixed(0);\n      retailPriceNumber = Number(retailPriceNumber / ratio).toFixed(0);\n      setPrices();\n    }\n  });\n  altType.addEventListener(\"click\", function () {\n    if (!altType.classList.contains(\"unit--active\")) {\n      altType.classList.add(\"unit--active\");\n      mainType.classList.remove(\"unit--active\");\n      goldPriceNumber = Number(goldPriceNumber * ratio).toFixed(2);\n      retailPriceNumber = Number(retailPriceNumber * ratio).toFixed(2);\n      setPrices();\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack:///./source/js/components/handlers.js?");

/***/ }),

/***/ "./source/js/components/utils.js":
/*!***************************************!*\
  !*** ./source/js/components/utils.js ***!
  \***************************************/
/*! exports provided: utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utils\", function() { return utils; });\n\n\nvar IMG_MOD = \"_220x220_1\";\nvar RANDOM_MULTIPLIER = 200;\nvar RANDOM_DIVIDER = 10;\nvar utils = {\n  Position: {\n    AFTERBEGIN: \"afterbegin\",\n    BEFOREEND: \"beforeend\"\n  },\n  makeElement: function makeElement(template) {\n    var newElement = document.createElement(\"div\");\n    newElement.innerHTML = template;\n    return newElement.firstElementChild;\n  },\n  render: function render(container, element, place) {\n    switch (place) {\n      case utils.Position.AFTERBEGIN:\n        container.prepend(element);\n        break;\n\n      case utils.Position.BEFOREEND:\n        container.append(element);\n        break;\n    }\n  },\n  getImgUrl: function getImgUrl(url) {\n    var splittedUrl = url.split(\".\");\n    splittedUrl[1] = splittedUrl[1] + IMG_MOD;\n    return splittedUrl.join(\".\");\n  },\n  getRandom: function getRandom() {\n    var digits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;\n    var random = Math.random() * (RANDOM_MULTIPLIER / RANDOM_DIVIDER);\n\n    if (random === 0) {\n      random = Math.random() * (RANDOM_MULTIPLIER / RANDOM_DIVIDER);\n    }\n\n    return Number(random.toFixed(digits));\n  },\n  makeRandomScore: function makeRandomScore() {\n    return Number(Math.random() * RANDOM_MULTIPLIER).toFixed(2).split(\".\").join(\",\");\n  },\n  makeRightWord: function makeRightWord(word) {\n    var wordNew = \"\";\n\n    if (word === \"\\u0448\\u0442\\u0443\\u043A\\u0430\") {\n      wordNew = \"\\u0448\\u0442\\u0443\\u043A\\u0443\";\n    }\n\n    if (word === \"\\u0443\\u043F\\u0430\\u043A\\u043E\\u0432\\u043A\\u0430\") {\n      wordNew = \"\\u0443\\u043F\\u0430\\u043A\\u043E\\u0432\\u043A\\u0443\";\n    }\n\n    if (word !== \"\\u0448\\u0442\\u0443\\u043A\\u0430\" && word !== \"\\u0443\\u043F\\u0430\\u043A\\u043E\\u0432\\u043A\\u0430\") {\n      wordNew = word;\n    }\n\n    return wordNew;\n  },\n  makeRightPack: function makeRightPack(word) {\n    var pack = \"\";\n\n    switch (word) {\n      case \"\\u0448\\u0442\\u0443\\u043A\\u0430\":\n        pack = \"\\u043F\\u043E\\u0448\\u0442\\u0443\\u0447\\u043D\\u043E\";\n        break;\n\n      case \"\\u0443\\u043F\\u0430\\u043A\\u043E\\u0432\\u043A\\u0430\":\n        pack = \"\\u0443\\u043F\\u0430\\u043A\\u043E\\u0432\\u043A\\u0430\\u043C\\u0438\";\n        break;\n\n      case \"\\u043C\\u0435\\u0442\\u0440 \\u043F\\u043E\\u0433\\u043E\\u043D\\u043D\\u044B\\u0439\":\n        pack = \"\\u043F\\u043E\\u0433. \\u043C\\u0435\\u0442\\u0440\\u043E\\u043C\";\n        break;\n    }\n\n    return pack;\n  },\n  makeRightCount: function makeRightCount(word) {\n    var count = \"\";\n\n    switch (word) {\n      case \"\\u0448\\u0442\\u0443\\u043A\\u0430\":\n        count = \"1 \\u043A\\u0432.\\u043C = \".concat(utils.getRandom(0), \" \\u0448\\u0442\");\n        break;\n\n      case \"\\u0443\\u043F\\u0430\\u043A\\u043E\\u0432\\u043A\\u0430\":\n        count = \"1 \\u0443\\u043F\\u0430\\u043A. = \".concat(utils.getRandom(), \" \\u043C. \\u043A\\u0432.\");\n        break;\n\n      case \"\\u043C\\u0435\\u0442\\u0440 \\u043F\\u043E\\u0433\\u043E\\u043D\\u043D\\u044B\\u0439\":\n        count = \"1 \\u043F\\u043E\\u0433. \\u043C = \".concat(utils.getRandom(), \" \\u043C. \\u043A\\u0432.\");\n        break;\n    }\n\n    return count;\n  }\n};\n\n\n//# sourceURL=webpack:///./source/js/components/utils.js?");

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/backend */ \"./source/js/components/backend.js\");\n/* harmony import */ var _components_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cards */ \"./source/js/components/cards.js\");\n/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/error */ \"./source/js/components/error.js\");\n\n\n\n\n\nObject(_components_backend__WEBPACK_IMPORTED_MODULE_0__[\"load\"])(_components_cards__WEBPACK_IMPORTED_MODULE_1__[\"renderCards\"], _components_error__WEBPACK_IMPORTED_MODULE_2__[\"renderError\"]);\n\n//# sourceURL=webpack:///./source/js/script.js?");

/***/ })

/******/ });