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
/******/ 	return __webpack_require__(__webpack_require__.s = "./#src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./#src/js/modules/calc.js":
/*!*********************************!*\
  !*** ./#src/js/modules/calc.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);








function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function calc() {
  var btnChangeScheme = document.querySelector('[data-form=btnChangeScheme]'),
      sendScheme = document.querySelector('#sendScheme'),
      calcFormPart1 = document.querySelector('.calc__form--part1'),
      calcFormPart2 = document.querySelector('.calc__form--part2'),
      calcForm = document.querySelector('.calc__form'),
      offerBlock = document.querySelector('[data-content=offerBlock]'),
      offerPrice = document.querySelector('[data-content=offerPrice]'),
      offerDescription = document.querySelector('[data-content=offerDescription]'),
      modalBody = document.querySelector('#basicExampleModal'),
      modalBtnClose = document.querySelectorAll('[data-form=btnClose]'),
      userName = document.querySelector('[data-form=userName]'),
      userNameOffer = document.querySelector('[data-form=userNameOffer]'),
      userEmail = document.querySelector('[data-form=userEmail]'),
      schemeTitle = document.querySelector('[data-form=schemeTitle]'),
      schemeImg = document.querySelector('[data-form=schemeImg]'),
      tableBlockOneTitle = document.querySelector('[data-form=tableBlockOneTitle]'),
      tableBlockOneText = document.querySelector('[data-form=tableBlockOneText]'),
      tableBlockOneImg = document.querySelector('[data-form=tableBlockOneImg]'),
      tableBlockTwoTitle = document.querySelector('[data-form=tableBlockTwoTitle]'),
      tableBlockTwoText = document.querySelector('[data-form=tableBlockTwoText]'),
      tableBlockTwoImg = document.querySelector('[data-form=tableBlockTwoImg]'),
      tableBlockThirdBlock = document.querySelector('[data-form=tableBlockThirdBlock]'),
      tableBlockThirdTitle = document.querySelector('[data-form=tableBlockThirdTitle]'),
      tableBlockThirdText = document.querySelector('[data-form=tableBlockThirdText]'),
      tableBlockThirdImg = document.querySelector('[data-form=tableBlockThirdImg]'),
      tableBlockFiveBlock = document.querySelector('[data-form=tableBlockFiveBlock]'),
      tableBlockFiveTitle = document.querySelector('[data-form=tableBlockFiveTitle]'),
      tableBlockFiveText = document.querySelector('[data-form=tableBlockFiveText]'),
      tableBlockFiveImg = document.querySelector('[data-form=tableBlockFiveImg]'),
      tableBlockFourTitle = document.querySelector('[data-form=tableBlockFourTitle]'),
      tableBlockFourText = document.querySelector('[data-form=tableBlockFourText]'),
      tableBlockFourImg = document.querySelector('[data-form=tableBlockFourImg]'),
      bodyItemPrice = document.querySelector('[data-price=bodyItemPrice]'),
      sumLowPriceItemPrice = document.querySelector('[data-price=sumLowPriceItemPrice]'),
      sumHightPriceItemPrice = document.querySelector('[data-price=sumHightPriceItemPrice]'); // создание счетчика схемы

  var schemeNumber;
  var points = document.querySelector('#points');
  var offerNumber; // перезагрузка страницы при закрытии модального окна

  modalBtnClose.forEach(function (btn) {
    btn.addEventListener('click', function () {
      window.location.reload();
    });
  }); // определение прайса

  function getData(selector) {
    var elements = document.querySelectorAll(selector);
    var result = [];
    elements.forEach(function (elem) {
      if (elem.selected) {
        result.push(elem.value);
      }
    });
    var resultKeys = result.join('');

    switch (resultKeys) {
      case '1114111111':
        schemeNumber = '1';
        console.log(schemeNumber);
        schemeTitle.textContent = 'СХЕМА 1. Установка умягчения';
        schemeImg.innerHTML = "\n                   <img src=\"../media/offer/scheme-1/1.png\" alt=\"\u0421\u0445\u0435\u043C\u0430\" class=\"img-fluid\">\n                   ";
        schemeImg.alt = schemeTitle;
        tableBlockOneTitle.textContent = 'Фильтр механический';
        tableBlockOneText.innerHTML = "\n                       <p class=\"text-muted font-weight-bold\">\u0424\u0438\u043B\u044C\u0442\u0440 CEPEX LF 1\" (130\u043C\u043A\u043C)</p>\n                       <p class=\"text-muted\">\u0422\u043E\u043D\u043A\u043E\u0441\u0442\u044C \u043E\u0447\u0438\u0441\u0442\u043A\u0438 (\u043C\u043A\u043C) 130 </p>\n                       <p class=\"text-muted\">\u0414\u0438\u0441\u043A\u043E\u0432\u044B\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B CEPEX \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E \u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0439\n                       \u0433\u0440\u044F\u0437\u0435\u0435\u043C\u043A\u043E\u0441\u0442\u044C\u044E \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u0441\u0435\u0442\u0447\u0430\u0442\u044B\u043C\u0438 \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C\u0438. </p>\n                       <p class=\"text-muted\">\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0434\u0438\u0441\u043A\u0438 \u0438\u0437 \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043E\u0432, \u043D\u0430\n                       \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u043A\u0430\u043D\u0430\u0432\u043A\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u0448\u0438\u0440\u0438\u043D\u044B \u0438 \u0433\u043B\u0443\u0431\u0438\u043D\u044B. </p>\n                       <p class=\"text-muted\">\u041F\u0440\u0438 \u0441\u0436\u0430\u0442\u0438\u0438 \u0434\u0438\u0441\u043A\u043E\u0432 \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438 \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044A\u0435\u043C\u043D\u0430\u044F \u0441\u0435\u0442\u0447\u0430\u0442\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430,\n                       \u044F\u0432\u043B\u044F\u044E\u0449\u0430\u044F\u0441\u044F \u0440\u0430\u0431\u043E\u0447\u0438\u043C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u043C. \u0412\u043E\u0434\u0430 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u043B\u043E\u0442\u043D\u043E \u0441\u0436\u0430\u0442\u044B\u0435 \u0434\u0438\u0441\u043A\u0438, \u0430 \u043D\u0435\u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044B\u0435\n                       \u0447\u0430\u0441\u0442\u0438\u0446\u044B \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0432 \u043C\u0435\u0436\u0434\u0438\u0441\u043A\u043E\u0432\u043E\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435. \u0414\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u043C\u044B\u0442\u044C \u0434\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440, \u043D\u0443\u0436\u043D\u043E \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C\n                       \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u043C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043B\u0438, \u0437\u0430\u0442\u0435\u043C \u0441\u043D\u044F\u0442\u044C \u043A\u043E\u0436\u0443\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043F\u0430\u043A\u0435\u0442\n                       \u0434\u0438\u0441\u043A\u043E\u0432 \u0440\u0430\u0437\u043E\u0436\u043C\u0435\u0442\u0441\u044F. \u0412 \u0440\u0430\u0437\u0436\u0430\u0442\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0434\u0438\u0441\u043A\u0438 \u043B\u0435\u0433\u043A\u043E \u043F\u0440\u043E\u043C\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u043E\u0434\u043E\u0439 \u043F\u043E\u0434 \u043D\u0435\u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043D\u0430\u043F\u043E\u0440\u043E\u043C.\n                       </p>\n                   ";
        tableBlockOneImg.innerHTML = "\n                   <img src=\"../media/offer/filter.png\">\n                   ";
        tableBlockTwoTitle.textContent = 'Установка умягчения';
        tableBlockTwoText.innerHTML = "\n                       <p class=\"text-muted\">\u0418\u043E\u043D\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445\n                       \u0432\u043E\u0434\u043E\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0438 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0434\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0441\u043E\u043B\u0435\u0439 \u0436\u0435\u0441\u0442\u043A\u043E\u0441\u0442\u0438, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435\n                       \u043D\u0430\u043A\u0438\u043F\u0438 \u0432 \u043A\u043E\u0442\u043B\u0430\u0445, \u0431\u043E\u0439\u043B\u0435\u0440\u0430\u0445, \u0441\u0442\u0438\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0438 \u043F\u043E\u0441\u0443\u0434\u043E\u043C\u043E\u0435\u0447\u043D\u044B\u0445 \u043C\u0430\u0448\u0438\u043D\u0430\u0445 \u0438 \u0434\u0440\u0443\u0433\u043E\u0439 \u0431\u044B\u0442\u043E\u0432\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438, \u0447\u0442\u043E\n                       \u043F\u0440\u043E\u0434\u043B\u0435\u0432\u0430\u044E\u0442 \u0441\u0440\u043E\u043A \u0441\u043B\u0443\u0436\u0431\u044B \u0432\u0441\u0435\u0439 \u0431\u0435\u0437 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0438. \u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u0432\u043E\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440,\n                       \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044E \u043C\u043E\u044E\u0449\u0438\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0438. \u0414\u0430\u043D\u043D\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0438\u043E\u043D\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u044B\u0445\n                       \u0441\u043C\u043E\u043B \u0440\u0430\u0437\u043D\u043E\u0433\u043E \u0433\u0440\u0430\u043D\u0443\u043B\u043E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u0430\u0432\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0445 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0443\u0434\u0430\u043B\u044F\u0442\u044C \u0438\u0437 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u043E\u0434\u044B \u0441\u043E\u043B\u0438\n                       \u0436\u0435\u0441\u0442\u043A\u043E\u0441\u0442\u0438 (Ca2+ \u0438 Mg2+)</p>\n                       <p class=\"text-muted\">\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0438\u043E\u043D\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u044B\u0435 \u0441\u043C\u043E\u043B\u044B, \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0449\u0438\u0435\n                           \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C\u0438 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u043C\u0438;</p>\n                       <ul class=\"text-muted\">\n                           <li class=\"list-item offer__list-item\">\u0432\u044B\u0441\u043E\u043A\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u043F\u043E\u0442\u043E\u043A\u0430 \u043F\u0440\u0438 \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u0438\u0438 \u0438 \u0440\u0435\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438;</li>\n                           <li class=\"list-item offer__list-item\">\u043D\u0438\u0437\u043A\u0438\u0439 \u0440\u0430\u0441\u0445\u043E\u0434 \u0432\u043E\u0434\u044B \u043D\u0430 \u043E\u0442\u043C\u044B\u0432\u043A\u0443 - \u0434\u043E 150-200\u043B;</li>\n                           <li class=\"list-item offer__list-item\">\u0440\u0430\u0432\u043D\u043E\u043C\u0435\u0440\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0440\u0435\u0430\u0433\u0435\u043D\u0442\u043E\u0432, \u0432\u043E\u0434\u044B \u0438 \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u043E\u0432;\n                           </li>\n                           <li class=\"list-item offer__list-item\"> \u043E\u0434\u043D\u043E\u0440\u043E\u0434\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0447\u0430\u044F \u0437\u043E\u043D\u0430;</li>\n                       </ul>\n                       <p class=\"text-muted\">\u0421\u0440\u043E\u043A \u0441\u043B\u0443\u0436\u0431\u044B \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u043E 4-6 \u043B\u0435\u0442.\n                       </p>\n                   ";
        tableBlockTwoImg.innerHTML = "\n                   <img src=\"../media/offer/iron.png\">\n                   ";
        tableBlockThirdBlock.style.display = 'none';
        tableBlockThirdTitle.style.display = 'none';
        tableBlockThirdText.style.display = 'none';
        tableBlockThirdImg.style.display = 'none';
        tableBlockFiveBlock.style.display = 'none';
        tableBlockFiveTitle.style.display = 'none';
        tableBlockFiveText.style.display = 'none';
        tableBlockFiveImg.style.display = 'none';
        tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
        tableBlockFourText.innerHTML = "\n                       <p class=\"text-muted\">\n                       \u0423\u0434\u0430\u043B\u044F\u0435\u0442 \u0438\u0437 \u0432\u043E\u0434\u044B \u0431\u044B\u0442\u043E\u0432\u043E\u0433\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043D\u0435\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u0437\u0430\u043F\u0430\u0445 \u0438 \u0446\u0432\u0435\u0442, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0445\u043B\u043E\u0440, \u0445\u043B\u043E\u0440\u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0430\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430.\n                       </p>     \n                   ";
        tableBlockFourImg.innerHTML = "\n                   <img src=\"../media/offer/smell.png\">\n                   ";
        break;

      case '1113221111':
        schemeNumber = 2;
        console.log('Схема 2');
        schemeTitle.textContent = 'СХЕМА 2. Фильтр для удаления железа и жесткости';
        schemeImg.innerHTML = "\n                   <img src=\"../media/offer/scheme-2/1.png\" alt=\"\u0421\u0445\u0435\u043C\u0430\" class=\"img-fluid\">\n                   ";
        schemeImg.alt = schemeTitle;
        tableBlockOneTitle.textContent = 'Фильтр механический';
        tableBlockOneText.innerHTML = "\n                       <p class=\"text-muted font-weight-bold\">\u0424\u0438\u043B\u044C\u0442\u0440 CEPEX LF 1\" (130\u043C\u043A\u043C)</p>\n                       <p class=\"text-muted\">\u0422\u043E\u043D\u043A\u043E\u0441\u0442\u044C \u043E\u0447\u0438\u0441\u0442\u043A\u0438 (\u043C\u043A\u043C) 130 </p>\n                       <p class=\"text-muted\">\u0414\u0438\u0441\u043A\u043E\u0432\u044B\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B CEPEX \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E \u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0439\n                       \u0433\u0440\u044F\u0437\u0435\u0435\u043C\u043A\u043E\u0441\u0442\u044C\u044E \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u0441\u0435\u0442\u0447\u0430\u0442\u044B\u043C\u0438 \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C\u0438. </p>\n                       <p class=\"text-muted\">\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0434\u0438\u0441\u043A\u0438 \u0438\u0437 \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043E\u0432, \u043D\u0430\n                       \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u043A\u0430\u043D\u0430\u0432\u043A\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u0448\u0438\u0440\u0438\u043D\u044B \u0438 \u0433\u043B\u0443\u0431\u0438\u043D\u044B. </p>\n                       <p class=\"text-muted\">\u041F\u0440\u0438 \u0441\u0436\u0430\u0442\u0438\u0438 \u0434\u0438\u0441\u043A\u043E\u0432 \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438 \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044A\u0435\u043C\u043D\u0430\u044F \u0441\u0435\u0442\u0447\u0430\u0442\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430,\n                       \u044F\u0432\u043B\u044F\u044E\u0449\u0430\u044F\u0441\u044F \u0440\u0430\u0431\u043E\u0447\u0438\u043C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u043C. \u0412\u043E\u0434\u0430 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u043B\u043E\u0442\u043D\u043E \u0441\u0436\u0430\u0442\u044B\u0435 \u0434\u0438\u0441\u043A\u0438, \u0430 \u043D\u0435\u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044B\u0435\n                       \u0447\u0430\u0441\u0442\u0438\u0446\u044B \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0432 \u043C\u0435\u0436\u0434\u0438\u0441\u043A\u043E\u0432\u043E\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435. \u0414\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u043C\u044B\u0442\u044C \u0434\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440, \u043D\u0443\u0436\u043D\u043E \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C\n                       \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u043C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043B\u0438, \u0437\u0430\u0442\u0435\u043C \u0441\u043D\u044F\u0442\u044C \u043A\u043E\u0436\u0443\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043F\u0430\u043A\u0435\u0442\n                       \u0434\u0438\u0441\u043A\u043E\u0432 \u0440\u0430\u0437\u043E\u0436\u043C\u0435\u0442\u0441\u044F. \u0412 \u0440\u0430\u0437\u0436\u0430\u0442\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0434\u0438\u0441\u043A\u0438 \u043B\u0435\u0433\u043A\u043E \u043F\u0440\u043E\u043C\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u043E\u0434\u043E\u0439 \u043F\u043E\u0434 \u043D\u0435\u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043D\u0430\u043F\u043E\u0440\u043E\u043C.\n                       </p>\n                   ";
        tableBlockOneImg.innerHTML = "\n                   <img src=\"../media/offer/filter.png\">\n                   ";
        tableBlockTwoTitle.textContent = 'Фильтр для удаления железа и жесткости';
        tableBlockTwoText.innerHTML = "\n                       <p class=\"text-muted\">\u0418\u043E\u043D\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445\n                       \u0432\u043E\u0434\u043E\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0438 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0434\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0441\u043E\u043B\u0435\u0439 \u0436\u0435\u0441\u0442\u043A\u043E\u0441\u0442\u0438, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435\n                       \u043D\u0430\u043A\u0438\u043F\u0438 \u0432 \u043A\u043E\u0442\u043B\u0430\u0445, \u0431\u043E\u0439\u043B\u0435\u0440\u0430\u0445, \u0441\u0442\u0438\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0438 \u043F\u043E\u0441\u0443\u0434\u043E\u043C\u043E\u0435\u0447\u043D\u044B\u0445 \u043C\u0430\u0448\u0438\u043D\u0430\u0445 \u0438 \u0434\u0440\u0443\u0433\u043E\u0439 \u0431\u044B\u0442\u043E\u0432\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438, \u0447\u0442\u043E\n                       \u043F\u0440\u043E\u0434\u043B\u0435\u0432\u0430\u044E\u0442 \u0441\u0440\u043E\u043A \u0441\u043B\u0443\u0436\u0431\u044B \u0432\u0441\u0435\u0439 \u0431\u0435\u0437 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0438. \u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u0432\u043E\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440,\n                       \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044E \u043C\u043E\u044E\u0449\u0438\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0438. \u0414\u0430\u043D\u043D\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0438\u043E\u043D\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u044B\u0445\n                       \u0441\u043C\u043E\u043B \u0440\u0430\u0437\u043D\u043E\u0433\u043E \u0433\u0440\u0430\u043D\u0443\u043B\u043E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u0430\u0432\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0445 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0443\u0434\u0430\u043B\u044F\u0442\u044C \u0438\u0437 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u043E\u0434\u044B \u0441\u043E\u043B\u0438\n                       \u0436\u0435\u0441\u0442\u043A\u043E\u0441\u0442\u0438 (Ca2+ \u0438 Mg2+)</p>\n                       <p class=\"text-muted\">\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0438\u043E\u043D\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u044B\u0435 \u0441\u043C\u043E\u043B\u044B, \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0449\u0438\u0435\n                           \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C\u0438 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u043C\u0438;</p>\n                       <ul class=\"text-muted\">\n                           <li class=\"list-item offer__list-item\">\u0432\u044B\u0441\u043E\u043A\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u043F\u043E\u0442\u043E\u043A\u0430 \u043F\u0440\u0438 \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u0438\u0438 \u0438 \u0440\u0435\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438;</li>\n                           <li class=\"list-item offer__list-item\">\u043D\u0438\u0437\u043A\u0438\u0439 \u0440\u0430\u0441\u0445\u043E\u0434 \u0432\u043E\u0434\u044B \u043D\u0430 \u043E\u0442\u043C\u044B\u0432\u043A\u0443 - \u0434\u043E 150-200\u043B;</li>\n                           <li class=\"list-item offer__list-item\">\u0440\u0430\u0432\u043D\u043E\u043C\u0435\u0440\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0440\u0435\u0430\u0433\u0435\u043D\u0442\u043E\u0432, \u0432\u043E\u0434\u044B \u0438 \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u043E\u0432;\n                           </li>\n                           <li class=\"list-item offer__list-item\"> \u043E\u0434\u043D\u043E\u0440\u043E\u0434\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0447\u0430\u044F \u0437\u043E\u043D\u0430;</li>\n                       </ul>\n                       <p class=\"text-muted\">\u0421\u0440\u043E\u043A \u0441\u043B\u0443\u0436\u0431\u044B \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u043E 4-6 \u043B\u0435\u0442.\n                       </p>\n                   ";
        tableBlockTwoImg.innerHTML = "\n                   <img src=\"../media/offer/iron.png\">\n                   ";
        tableBlockThirdBlock.style.display = 'none';
        tableBlockThirdTitle.style.display = 'none';
        tableBlockThirdText.style.display = 'none';
        tableBlockThirdImg.style.display = 'none';
        tableBlockFiveBlock.style.display = 'none';
        tableBlockFiveTitle.style.display = 'none';
        tableBlockFiveText.style.display = 'none';
        tableBlockFiveImg.style.display = 'none';
        tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
        tableBlockFourText.innerHTML = "\n                       <p class=\"text-muted\">\n                       \u0423\u0434\u0430\u043B\u044F\u0435\u0442 \u0438\u0437 \u0432\u043E\u0434\u044B \u0431\u044B\u0442\u043E\u0432\u043E\u0433\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043D\u0435\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u0437\u0430\u043F\u0430\u0445 \u0438 \u0446\u0432\u0435\u0442, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0445\u043B\u043E\u0440, \u0445\u043B\u043E\u0440\u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0430\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430.\n                       </p>     \n                   ";
        tableBlockFourImg.innerHTML = "\n                   <img src=\"../media/offer/smell.png\">\n                   ";
        break;

      case '2211221111':
        schemeNumber = 3;
        console.log('Схема 3');
        schemeTitle.textContent = 'СХЕМА 3. Комплекс обезжелезивания и осветления';
        schemeImg.innerHTML = "\n                   <img src=\"../media/offer/scheme-3/1.png\" alt=\"\u0421\u0445\u0435\u043C\u0430\" class=\"img-fluid\">\n                   ";
        schemeImg.alt = schemeTitle;
        tableBlockOneTitle.textContent = 'Фильтр механический';
        tableBlockOneText.innerHTML = "\n                       <p class=\"text-muted font-weight-bold\">\u0424\u0438\u043B\u044C\u0442\u0440 CEPEX LF 1\" (130\u043C\u043A\u043C)</p>\n                       <p class=\"text-muted\">\u0422\u043E\u043D\u043A\u043E\u0441\u0442\u044C \u043E\u0447\u0438\u0441\u0442\u043A\u0438 (\u043C\u043A\u043C) 130 </p>\n                       <p class=\"text-muted\">\u0414\u0438\u0441\u043A\u043E\u0432\u044B\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B CEPEX \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E \u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0439\n                       \u0433\u0440\u044F\u0437\u0435\u0435\u043C\u043A\u043E\u0441\u0442\u044C\u044E \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u0441\u0435\u0442\u0447\u0430\u0442\u044B\u043C\u0438 \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C\u0438. </p>\n                       <p class=\"text-muted\">\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0434\u0438\u0441\u043A\u0438 \u0438\u0437 \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043E\u0432, \u043D\u0430\n                       \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u043A\u0430\u043D\u0430\u0432\u043A\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u0448\u0438\u0440\u0438\u043D\u044B \u0438 \u0433\u043B\u0443\u0431\u0438\u043D\u044B. </p>\n                       <p class=\"text-muted\">\u041F\u0440\u0438 \u0441\u0436\u0430\u0442\u0438\u0438 \u0434\u0438\u0441\u043A\u043E\u0432 \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438 \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044A\u0435\u043C\u043D\u0430\u044F \u0441\u0435\u0442\u0447\u0430\u0442\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430,\n                       \u044F\u0432\u043B\u044F\u044E\u0449\u0430\u044F\u0441\u044F \u0440\u0430\u0431\u043E\u0447\u0438\u043C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u043C. \u0412\u043E\u0434\u0430 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u043B\u043E\u0442\u043D\u043E \u0441\u0436\u0430\u0442\u044B\u0435 \u0434\u0438\u0441\u043A\u0438, \u0430 \u043D\u0435\u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044B\u0435\n                       \u0447\u0430\u0441\u0442\u0438\u0446\u044B \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0432 \u043C\u0435\u0436\u0434\u0438\u0441\u043A\u043E\u0432\u043E\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435. \u0414\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u043C\u044B\u0442\u044C \u0434\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440, \u043D\u0443\u0436\u043D\u043E \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C\n                       \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u043C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043B\u0438, \u0437\u0430\u0442\u0435\u043C \u0441\u043D\u044F\u0442\u044C \u043A\u043E\u0436\u0443\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043F\u0430\u043A\u0435\u0442\n                       \u0434\u0438\u0441\u043A\u043E\u0432 \u0440\u0430\u0437\u043E\u0436\u043C\u0435\u0442\u0441\u044F. \u0412 \u0440\u0430\u0437\u0436\u0430\u0442\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0434\u0438\u0441\u043A\u0438 \u043B\u0435\u0433\u043A\u043E \u043F\u0440\u043E\u043C\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u043E\u0434\u043E\u0439 \u043F\u043E\u0434 \u043D\u0435\u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043D\u0430\u043F\u043E\u0440\u043E\u043C.\n                       </p>\n                   ";
        tableBlockOneImg.innerHTML = "\n                   <img src=\"../media/offer/filter.png\">\n                   ";
        tableBlockTwoTitle.textContent = 'Комплекс  обезжелезивания и осветления';
        tableBlockTwoText.innerHTML = "\n                       <p class=\"text-muted\">\u0424\u0438\u043B\u044C\u0442\u0440 \u0443\u0441\u043A\u043E\u0440\u044F\u0435\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0436\u0435\u043B\u0435\u0437\u0430 \u0438 \u0437\u0430\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0435\u0433\u043E \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0432 \u0441\u043B\u043E\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430.  \u0424\u0438\u043B\u044C\u0442\u0440 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435. \u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435  \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u042D\u043A\u043E\u0444\u0435\u0440\u043E\u043A\u0441 \u0438 \u041C\u0421\u0424\u0435\u0440\u043E\u043A\u0441.  \u041F\u0440\u043E\u043C\u044B\u0432\u043A\u0430 \u0444\u0438\u043B\u044C\u0442\u0440\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F  \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u043E\u0434\u043E\u0439.</p>\n                       <p class=\"text-muted\">\u042D\u041A\u041E\u0424\u0415\u0420\u041E\u041A\u0421 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u0430\u043A \u043A\u0430\u0442\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440 \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0432 \u0440\u0435\u0430\u043A\u0446\u0438\u044F\u0445 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u0438\u0441\u043B\u043E\u0440\u043E\u0434\u0430 \u0441 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F\u043C\u0438 \u0436\u0435\u043B\u0435\u0437\u0430 (II) \u0438 (III), \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0447\u0435\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044F \u0433\u0438\u0434\u0440\u043E\u043E\u043A\u0441\u0438\u0434 \u0436\u0435\u043B\u0435\u0437\u0430 (III), \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0435\u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0438\u043C\u044B\u043C \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435\u043C \u0438 \u043B\u0435\u0433\u043A\u043E \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0432\u043E\u0434\u044B.</p>                   \n                       <p class=\"text-muted\">\xABMSFerox\xBB \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u0430\u043A \u043A\u0430\u0442\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440 \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0432 \u0440\u0435\u0430\u043A\u0446\u0438\u044F\u0445 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u0438\u0441\u043B\u043E\u0440\u043E\u0434\u0430 \u0441 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F\u043C\u0438 \u0436\u0435\u043B\u0435\u0437\u0430 (II) \u0438 (III) \u0432\u0430\u043B\u0435\u043D\u0442\u043D\u043E\u0433\u043E, \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0440\u0435\u0430\u043A\u0446\u0438\u0438 \u043E\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044F \u0433\u0438\u0434\u0440\u043E\u043A\u0441\u0438\u0434 \u0436\u0435\u043B\u0435\u0437\u0430 (III), \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0435 \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0438\u043C\u044B\u043C \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435\u043C \u0438 \u043B\u0435\u0433\u043A\u043E \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0432\u043E\u0434\u044B. \u0421\u0435\u0440\u043E\u0432\u043E\u0434\u043E\u0440\u043E\u0434 \u0438 \u043C\u0430\u0440\u0433\u0430\u043D\u0435\u0446 \u0442\u0430\u043A\u0436\u0435 \u043E\u043A\u0438\u0441\u043B\u044F\u044E\u0442\u0441\u044F \u0438 \u043E\u0441\u0435\u0434\u0430\u044E\u0442 \u0432 \u0441\u043B\u043E\u044F\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430, \u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435\u043C \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0432\u043E\u0434\u044B. \xABMSFerox\xBB \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0434\u043B\u044F \u0440\u0435\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0440\u0435\u0430\u0433\u0435\u043D\u0442\u043E\u0432. \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u0440\u043E\u043C\u044B\u0432\u043A\u0430 \u0432\u043E\u0434\u043E\u0439 \u0438\u043B\u0438 \u0434\u043B\u044F \u0431\u043E\u043B\u0435\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u043F\u0440\u043E\u043C\u044B\u0432\u043A\u0438 - \u0432\u043E\u0434\u043E-\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u0430\u044F.</p>\n                   ";
        tableBlockTwoImg.innerHTML = "\n                   <img src=\"../media/offer/color.png\">\n                   ";
        tableBlockThirdBlock.style.display = 'none';
        tableBlockThirdTitle.style.display = 'none';
        tableBlockThirdText.style.display = 'none';
        tableBlockThirdImg.style.display = 'none';
        tableBlockFiveBlock.style.display = 'none';
        tableBlockFiveTitle.style.display = 'none';
        tableBlockFiveText.style.display = 'none';
        tableBlockFiveImg.style.display = 'none';
        tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
        tableBlockFourText.innerHTML = "\n                       <p class=\"text-muted\">\n                       \u0423\u0434\u0430\u043B\u044F\u0435\u0442 \u0438\u0437 \u0432\u043E\u0434\u044B \u0431\u044B\u0442\u043E\u0432\u043E\u0433\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043D\u0435\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u0437\u0430\u043F\u0430\u0445 \u0438 \u0446\u0432\u0435\u0442, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0445\u043B\u043E\u0440, \u0445\u043B\u043E\u0440\u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0430\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430.\n                       </p>     \n                   ";
        tableBlockFourImg.innerHTML = "\n                   <img src=\"../media/offer/smell.png\">\n                   ";
        break;

      case '2214221111':
        schemeNumber = 4;
        console.log('Схема 4');
        schemeTitle.textContent = 'СХЕМА 4. Обезжелезивание + Умягчение';
        schemeImg.innerHTML = "\n                   <img src=\"../media/offer/scheme-4/1.png\" alt=\"\u0421\u0445\u0435\u043C\u0430\" class=\"img-fluid\">\n                   ";
        schemeImg.alt = schemeTitle;
        tableBlockOneTitle.textContent = 'Фильтр механический';
        tableBlockOneText.innerHTML = "\n                       <p class=\"text-muted font-weight-bold\">\u0424\u0438\u043B\u044C\u0442\u0440 CEPEX LF 1\" (130\u043C\u043A\u043C)</p>\n                       <p class=\"text-muted\">\u0422\u043E\u043D\u043A\u043E\u0441\u0442\u044C \u043E\u0447\u0438\u0441\u0442\u043A\u0438 (\u043C\u043A\u043C) 130 </p>\n                       <p class=\"text-muted\">\u0414\u0438\u0441\u043A\u043E\u0432\u044B\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B CEPEX \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E \u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0439\n                       \u0433\u0440\u044F\u0437\u0435\u0435\u043C\u043A\u043E\u0441\u0442\u044C\u044E \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u0441\u0435\u0442\u0447\u0430\u0442\u044B\u043C\u0438 \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C\u0438. </p>\n                       <p class=\"text-muted\">\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0434\u0438\u0441\u043A\u0438 \u0438\u0437 \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043E\u0432, \u043D\u0430\n                       \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u043A\u0430\u043D\u0430\u0432\u043A\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u0448\u0438\u0440\u0438\u043D\u044B \u0438 \u0433\u043B\u0443\u0431\u0438\u043D\u044B. </p>\n                       <p class=\"text-muted\">\u041F\u0440\u0438 \u0441\u0436\u0430\u0442\u0438\u0438 \u0434\u0438\u0441\u043A\u043E\u0432 \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438 \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044A\u0435\u043C\u043D\u0430\u044F \u0441\u0435\u0442\u0447\u0430\u0442\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430,\n                       \u044F\u0432\u043B\u044F\u044E\u0449\u0430\u044F\u0441\u044F \u0440\u0430\u0431\u043E\u0447\u0438\u043C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u043C. \u0412\u043E\u0434\u0430 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u043B\u043E\u0442\u043D\u043E \u0441\u0436\u0430\u0442\u044B\u0435 \u0434\u0438\u0441\u043A\u0438, \u0430 \u043D\u0435\u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044B\u0435\n                       \u0447\u0430\u0441\u0442\u0438\u0446\u044B \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0432 \u043C\u0435\u0436\u0434\u0438\u0441\u043A\u043E\u0432\u043E\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435. \u0414\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u043C\u044B\u0442\u044C \u0434\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440, \u043D\u0443\u0436\u043D\u043E \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C\n                       \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u043C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043B\u0438, \u0437\u0430\u0442\u0435\u043C \u0441\u043D\u044F\u0442\u044C \u043A\u043E\u0436\u0443\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043F\u0430\u043A\u0435\u0442\n                       \u0434\u0438\u0441\u043A\u043E\u0432 \u0440\u0430\u0437\u043E\u0436\u043C\u0435\u0442\u0441\u044F. \u0412 \u0440\u0430\u0437\u0436\u0430\u0442\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0434\u0438\u0441\u043A\u0438 \u043B\u0435\u0433\u043A\u043E \u043F\u0440\u043E\u043C\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u043E\u0434\u043E\u0439 \u043F\u043E\u0434 \u043D\u0435\u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043D\u0430\u043F\u043E\u0440\u043E\u043C.\n                       </p>\n                   ";
        tableBlockOneImg.innerHTML = "\n                   <img src=\"../media/offer/filter.png\">\n                   ";
        tableBlockTwoTitle.textContent = 'Комплекс  обезжелезивания и осветления';
        tableBlockTwoText.innerHTML = "\n                       <p class=\"text-muted\">\u0424\u0438\u043B\u044C\u0442\u0440 \u0443\u0441\u043A\u043E\u0440\u044F\u0435\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0436\u0435\u043B\u0435\u0437\u0430 \u0438 \u0437\u0430\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0435\u0433\u043E \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0432 \u0441\u043B\u043E\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430.  \u0424\u0438\u043B\u044C\u0442\u0440 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435. \u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435  \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u042D\u043A\u043E\u0444\u0435\u0440\u043E\u043A\u0441 \u0438 \u041C\u0421\u0424\u0435\u0440\u043E\u043A\u0441.  \u041F\u0440\u043E\u043C\u044B\u0432\u043A\u0430 \u0444\u0438\u043B\u044C\u0442\u0440\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F  \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u043E\u0434\u043E\u0439.</p>\n                       <p class=\"text-muted\">\u042D\u041A\u041E\u0424\u0415\u0420\u041E\u041A\u0421 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u0430\u043A \u043A\u0430\u0442\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440 \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0432 \u0440\u0435\u0430\u043A\u0446\u0438\u044F\u0445 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u0438\u0441\u043B\u043E\u0440\u043E\u0434\u0430 \u0441 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F\u043C\u0438 \u0436\u0435\u043B\u0435\u0437\u0430 (II) \u0438 (III), \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0447\u0435\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044F \u0433\u0438\u0434\u0440\u043E\u043E\u043A\u0441\u0438\u0434 \u0436\u0435\u043B\u0435\u0437\u0430 (III), \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0435\u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0438\u043C\u044B\u043C \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435\u043C \u0438 \u043B\u0435\u0433\u043A\u043E \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0432\u043E\u0434\u044B.</p>                   \n                       <p class=\"text-muted\">\xABMSFerox\xBB \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u0430\u043A \u043A\u0430\u0442\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440 \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0432 \u0440\u0435\u0430\u043A\u0446\u0438\u044F\u0445 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u0438\u0441\u043B\u043E\u0440\u043E\u0434\u0430 \u0441 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F\u043C\u0438 \u0436\u0435\u043B\u0435\u0437\u0430 (II) \u0438 (III) \u0432\u0430\u043B\u0435\u043D\u0442\u043D\u043E\u0433\u043E, \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0440\u0435\u0430\u043A\u0446\u0438\u0438 \u043E\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044F \u0433\u0438\u0434\u0440\u043E\u043A\u0441\u0438\u0434 \u0436\u0435\u043B\u0435\u0437\u0430 (III), \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0435 \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0438\u043C\u044B\u043C \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435\u043C \u0438 \u043B\u0435\u0433\u043A\u043E \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0432\u043E\u0434\u044B. \u0421\u0435\u0440\u043E\u0432\u043E\u0434\u043E\u0440\u043E\u0434 \u0438 \u043C\u0430\u0440\u0433\u0430\u043D\u0435\u0446 \u0442\u0430\u043A\u0436\u0435 \u043E\u043A\u0438\u0441\u043B\u044F\u044E\u0442\u0441\u044F \u0438 \u043E\u0441\u0435\u0434\u0430\u044E\u0442 \u0432 \u0441\u043B\u043E\u044F\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430, \u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435\u043C \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0432\u043E\u0434\u044B. \xABMSFerox\xBB \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0434\u043B\u044F \u0440\u0435\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0440\u0435\u0430\u0433\u0435\u043D\u0442\u043E\u0432. \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u0440\u043E\u043C\u044B\u0432\u043A\u0430 \u0432\u043E\u0434\u043E\u0439 \u0438\u043B\u0438 \u0434\u043B\u044F \u0431\u043E\u043B\u0435\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u043F\u0440\u043E\u043C\u044B\u0432\u043A\u0438 - \u0432\u043E\u0434\u043E-\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u0430\u044F.</p>\n                   ";
        tableBlockTwoImg.innerHTML = "\n                   <img src=\"../media/offer/color.png\">\n                   "; // tableBlockThirdBlock.style.display = 'block';  

        tableBlockThirdTitle.textContent = 'Фильтр для удаления жесткости';
        tableBlockThirdText.innerHTML = "\n                   <p class=\"text-muted\">\u0424\u0438\u043B\u044C\u0442\u0440 \u0443\u0441\u043A\u043E\u0440\u044F\u0435\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0436\u0435\u043B\u0435\u0437\u0430 \u0438 \u0437\u0430\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0435\u0433\u043E \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0432 \u0441\u043B\u043E\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430.  \u0424\u0438\u043B\u044C\u0442\u0440 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435. \u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435  \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u042D\u043A\u043E\u0444\u0435\u0440\u043E\u043A\u0441 \u0438 \u041C\u0421\u0424\u0435\u0440\u043E\u043A\u0441.  \u041F\u0440\u043E\u043C\u044B\u0432\u043A\u0430 \u0444\u0438\u043B\u044C\u0442\u0440\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F  \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u043E\u0434\u043E\u0439.</p>\n                   <p class=\"text-muted\">\u042D\u041A\u041E\u0424\u0415\u0420\u041E\u041A\u0421 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u0430\u043A \u043A\u0430\u0442\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440 \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0432 \u0440\u0435\u0430\u043A\u0446\u0438\u044F\u0445 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u0438\u0441\u043B\u043E\u0440\u043E\u0434\u0430 \u0441 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F\u043C\u0438 \u0436\u0435\u043B\u0435\u0437\u0430 (II) \u0438 (III), \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0447\u0435\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044F \u0433\u0438\u0434\u0440\u043E\u043E\u043A\u0441\u0438\u0434 \u0436\u0435\u043B\u0435\u0437\u0430 (III), \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0435\u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0438\u043C\u044B\u043C \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435\u043C \u0438 \u043B\u0435\u0433\u043A\u043E \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0432\u043E\u0434\u044B.</p>                   \n                   <p class=\"text-muted\">\xABMSFerox\xBB \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u0430\u043A \u043A\u0430\u0442\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440 \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0432 \u0440\u0435\u0430\u043A\u0446\u0438\u044F\u0445 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u0438\u0441\u043B\u043E\u0440\u043E\u0434\u0430 \u0441 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F\u043C\u0438 \u0436\u0435\u043B\u0435\u0437\u0430 (II) \u0438 (III) \u0432\u0430\u043B\u0435\u043D\u0442\u043D\u043E\u0433\u043E, \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0440\u0435\u0430\u043A\u0446\u0438\u0438 \u043E\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044F \u0433\u0438\u0434\u0440\u043E\u043A\u0441\u0438\u0434 \u0436\u0435\u043B\u0435\u0437\u0430 (III), \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0435 \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0438\u043C\u044B\u043C \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435\u043C \u0438 \u043B\u0435\u0433\u043A\u043E \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0432\u043E\u0434\u044B. \u0421\u0435\u0440\u043E\u0432\u043E\u0434\u043E\u0440\u043E\u0434 \u0438 \u043C\u0430\u0440\u0433\u0430\u043D\u0435\u0446 \u0442\u0430\u043A\u0436\u0435 \u043E\u043A\u0438\u0441\u043B\u044F\u044E\u0442\u0441\u044F \u0438 \u043E\u0441\u0435\u0434\u0430\u044E\u0442 \u0432 \u0441\u043B\u043E\u044F\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430, \u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435\u043C \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0432\u043E\u0434\u044B. \xABMSFerox\xBB \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0434\u043B\u044F \u0440\u0435\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0440\u0435\u0430\u0433\u0435\u043D\u0442\u043E\u0432. \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u0440\u043E\u043C\u044B\u0432\u043A\u0430 \u0432\u043E\u0434\u043E\u0439 \u0438\u043B\u0438 \u0434\u043B\u044F \u0431\u043E\u043B\u0435\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u043F\u0440\u043E\u043C\u044B\u0432\u043A\u0438 - \u0432\u043E\u0434\u043E-\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u0430\u044F.</p>\n               ";
        tableBlockThirdImg.innerHTML = "\n                   <img src=\"../media/offer/iron.png\">\n                   ";
        tableBlockFiveBlock.style.display = 'none';
        tableBlockFiveTitle.style.display = 'none';
        tableBlockFiveText.style.display = 'none';
        tableBlockFiveImg.style.display = 'none';
        tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
        tableBlockFourText.innerHTML = "\n                       <p class=\"text-muted\">\n                       \u0423\u0434\u0430\u043B\u044F\u0435\u0442 \u0438\u0437 \u0432\u043E\u0434\u044B \u0431\u044B\u0442\u043E\u0432\u043E\u0433\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043D\u0435\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u0437\u0430\u043F\u0430\u0445 \u0438 \u0446\u0432\u0435\u0442, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0445\u043B\u043E\u0440, \u0445\u043B\u043E\u0440\u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0430\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430.\n                       </p>     \n                   ";
        tableBlockFourImg.innerHTML = "\n                   <img src=\"../media/offer/smell.png\">\n                   ";
        break;

      case '2212222111':
        schemeNumber = 5;
        console.log('Схема 5');
        schemeTitle.textContent = 'СХЕМА 5. Удаление железа, жесткости и ПМО';
        schemeImg.innerHTML = "\n                   <img src=\"../media/offer/scheme-5/1.png\" alt=\"\u0421\u0445\u0435\u043C\u0430\" class=\"img-fluid\">\n                   ";
        schemeImg.alt = schemeTitle;
        tableBlockOneTitle.textContent = 'Фильтр механический';
        tableBlockOneText.innerHTML = "\n                       <p class=\"text-muted font-weight-bold\">\u0424\u0438\u043B\u044C\u0442\u0440 CEPEX LF 1\" (130\u043C\u043A\u043C)</p>\n                       <p class=\"text-muted\">\u0422\u043E\u043D\u043A\u043E\u0441\u0442\u044C \u043E\u0447\u0438\u0441\u0442\u043A\u0438 (\u043C\u043A\u043C) 130 </p>\n                       <p class=\"text-muted\">\u0414\u0438\u0441\u043A\u043E\u0432\u044B\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B CEPEX \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E \u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0439\n                       \u0433\u0440\u044F\u0437\u0435\u0435\u043C\u043A\u043E\u0441\u0442\u044C\u044E \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u0441\u0435\u0442\u0447\u0430\u0442\u044B\u043C\u0438 \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C\u0438. </p>\n                       <p class=\"text-muted\">\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0434\u0438\u0441\u043A\u0438 \u0438\u0437 \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043E\u0432, \u043D\u0430\n                       \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u043A\u0430\u043D\u0430\u0432\u043A\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u0448\u0438\u0440\u0438\u043D\u044B \u0438 \u0433\u043B\u0443\u0431\u0438\u043D\u044B. </p>\n                       <p class=\"text-muted\">\u041F\u0440\u0438 \u0441\u0436\u0430\u0442\u0438\u0438 \u0434\u0438\u0441\u043A\u043E\u0432 \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438 \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044A\u0435\u043C\u043D\u0430\u044F \u0441\u0435\u0442\u0447\u0430\u0442\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430,\n                       \u044F\u0432\u043B\u044F\u044E\u0449\u0430\u044F\u0441\u044F \u0440\u0430\u0431\u043E\u0447\u0438\u043C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u043C. \u0412\u043E\u0434\u0430 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u043B\u043E\u0442\u043D\u043E \u0441\u0436\u0430\u0442\u044B\u0435 \u0434\u0438\u0441\u043A\u0438, \u0430 \u043D\u0435\u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044B\u0435\n                       \u0447\u0430\u0441\u0442\u0438\u0446\u044B \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0432 \u043C\u0435\u0436\u0434\u0438\u0441\u043A\u043E\u0432\u043E\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435. \u0414\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u043C\u044B\u0442\u044C \u0434\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440, \u043D\u0443\u0436\u043D\u043E \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C\n                       \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u043C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043B\u0438, \u0437\u0430\u0442\u0435\u043C \u0441\u043D\u044F\u0442\u044C \u043A\u043E\u0436\u0443\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043F\u0430\u043A\u0435\u0442\n                       \u0434\u0438\u0441\u043A\u043E\u0432 \u0440\u0430\u0437\u043E\u0436\u043C\u0435\u0442\u0441\u044F. \u0412 \u0440\u0430\u0437\u0436\u0430\u0442\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0434\u0438\u0441\u043A\u0438 \u043B\u0435\u0433\u043A\u043E \u043F\u0440\u043E\u043C\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u043E\u0434\u043E\u0439 \u043F\u043E\u0434 \u043D\u0435\u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043D\u0430\u043F\u043E\u0440\u043E\u043C.\n                       </p>\n                   ";
        tableBlockOneImg.innerHTML = "\n                   <img src=\"../media/offer/filter.png\">\n                   ";
        tableBlockTwoTitle.textContent = 'Фильтр для удаления железа, жесткости и перманганатной окисляемости (ПМО)';
        tableBlockTwoText.innerHTML = "\n                   <p class=\"text-muted\">\u0418\u043E\u043D\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445\n                   \u0432\u043E\u0434\u043E\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0438 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0434\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0441\u043E\u043B\u0435\u0439 \u0436\u0435\u0441\u0442\u043A\u043E\u0441\u0442\u0438, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435\n                   \u043D\u0430\u043A\u0438\u043F\u0438 \u0432 \u043A\u043E\u0442\u043B\u0430\u0445, \u0431\u043E\u0439\u043B\u0435\u0440\u0430\u0445, \u0441\u0442\u0438\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0438 \u043F\u043E\u0441\u0443\u0434\u043E\u043C\u043E\u0435\u0447\u043D\u044B\u0445 \u043C\u0430\u0448\u0438\u043D\u0430\u0445 \u0438 \u0434\u0440\u0443\u0433\u043E\u0439 \u0431\u044B\u0442\u043E\u0432\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438, \u0447\u0442\u043E\n                   \u043F\u0440\u043E\u0434\u043B\u0435\u0432\u0430\u044E\u0442 \u0441\u0440\u043E\u043A \u0441\u043B\u0443\u0436\u0431\u044B \u0432\u0441\u0435\u0439 \u0431\u0435\u0437 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0438. \u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u0432\u043E\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440,\n                   \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044E \u043C\u043E\u044E\u0449\u0438\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0438. \u0414\u0430\u043D\u043D\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0438\u043E\u043D\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u044B\u0445\n                   \u0441\u043C\u043E\u043B \u0440\u0430\u0437\u043D\u043E\u0433\u043E \u0433\u0440\u0430\u043D\u0443\u043B\u043E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u0430\u0432\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0445 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0443\u0434\u0430\u043B\u044F\u0442\u044C \u0438\u0437 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u043E\u0434\u044B \u0441\u043E\u043B\u0438\n                   \u0436\u0435\u0441\u0442\u043A\u043E\u0441\u0442\u0438 (Ca2+ \u0438 Mg2+)</p>\n                   <p class=\"text-muted\">\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0438\u043E\u043D\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u044B\u0435 \u0441\u043C\u043E\u043B\u044B, \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0449\u0438\u0435\n                       \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C\u0438 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u043C\u0438;</p>\n                   <ul class=\"text-muted\">\n                       <li class=\"list-item offer__list-item\">\u0432\u044B\u0441\u043E\u043A\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u043F\u043E\u0442\u043E\u043A\u0430 \u043F\u0440\u0438 \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u0438\u0438 \u0438 \u0440\u0435\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438;</li>\n                       <li class=\"list-item offer__list-item\">\u043D\u0438\u0437\u043A\u0438\u0439 \u0440\u0430\u0441\u0445\u043E\u0434 \u0432\u043E\u0434\u044B \u043D\u0430 \u043E\u0442\u043C\u044B\u0432\u043A\u0443 - \u0434\u043E 150-200\u043B;</li>\n                       <li class=\"list-item offer__list-item\">\u0440\u0430\u0432\u043D\u043E\u043C\u0435\u0440\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0440\u0435\u0430\u0433\u0435\u043D\u0442\u043E\u0432, \u0432\u043E\u0434\u044B \u0438 \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u043E\u0432;\n                       </li>\n                       <li class=\"list-item offer__list-item\"> \u043E\u0434\u043D\u043E\u0440\u043E\u0434\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0447\u0430\u044F \u0437\u043E\u043D\u0430;</li>\n                   </ul>\n                   <p class=\"text-muted\">\u0421\u0440\u043E\u043A \u0441\u043B\u0443\u0436\u0431\u044B \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u043E 4-6 \u043B\u0435\u0442.\n                   </p>\n               ";
        tableBlockTwoImg.innerHTML = "\n                   <img src=\"../media/offer/color.png\">\n                   ";
        tableBlockThirdBlock.style.display = 'none';
        tableBlockThirdTitle.style.display = 'none';
        tableBlockThirdText.style.display = 'none';
        tableBlockThirdImg.style.display = 'none';
        tableBlockFiveBlock.style.display = 'none';
        tableBlockFiveTitle.style.display = 'none';
        tableBlockFiveText.style.display = 'none';
        tableBlockFiveImg.style.display = 'none';
        tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
        tableBlockFourText.innerHTML = "\n                       <p class=\"text-muted\">\n                       \u0423\u0434\u0430\u043B\u044F\u0435\u0442 \u0438\u0437 \u0432\u043E\u0434\u044B \u0431\u044B\u0442\u043E\u0432\u043E\u0433\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043D\u0435\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u0437\u0430\u043F\u0430\u0445 \u0438 \u0446\u0432\u0435\u0442, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0445\u043B\u043E\u0440, \u0445\u043B\u043E\u0440\u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0430\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430.\n                       </p>     \n                   ";
        tableBlockFourImg.innerHTML = "\n                   <img src=\"../media/offer/smell.png\">\n                   ";
        break;

      case '2213221112':
        schemeNumber = 6;
        console.log('Схема 6');
        schemeTitle.textContent = 'СХЕМА 6. Фильтр для удаления железа, жесткости и нитратов';
        schemeImg.innerHTML = "\n                   <img src=\"../media/offer/scheme-6/1.png\" alt=\"\u0421\u0445\u0435\u043C\u0430\" class=\"img-fluid\">\n                   ";
        schemeImg.alt = schemeTitle;
        tableBlockOneTitle.textContent = 'Фильтр механический';
        tableBlockOneText.innerHTML = "\n                       <p class=\"text-muted font-weight-bold\">\u0424\u0438\u043B\u044C\u0442\u0440 CEPEX LF 1\" (130\u043C\u043A\u043C)</p>\n                       <p class=\"text-muted\">\u0422\u043E\u043D\u043A\u043E\u0441\u0442\u044C \u043E\u0447\u0438\u0441\u0442\u043A\u0438 (\u043C\u043A\u043C) 130 </p>\n                       <p class=\"text-muted\">\u0414\u0438\u0441\u043A\u043E\u0432\u044B\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B CEPEX \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E \u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0439\n                       \u0433\u0440\u044F\u0437\u0435\u0435\u043C\u043A\u043E\u0441\u0442\u044C\u044E \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u0441\u0435\u0442\u0447\u0430\u0442\u044B\u043C\u0438 \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C\u0438. </p>\n                       <p class=\"text-muted\">\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0434\u0438\u0441\u043A\u0438 \u0438\u0437 \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043E\u0432, \u043D\u0430\n                       \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u043A\u0430\u043D\u0430\u0432\u043A\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u0448\u0438\u0440\u0438\u043D\u044B \u0438 \u0433\u043B\u0443\u0431\u0438\u043D\u044B. </p>\n                       <p class=\"text-muted\">\u041F\u0440\u0438 \u0441\u0436\u0430\u0442\u0438\u0438 \u0434\u0438\u0441\u043A\u043E\u0432 \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438 \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044A\u0435\u043C\u043D\u0430\u044F \u0441\u0435\u0442\u0447\u0430\u0442\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430,\n                       \u044F\u0432\u043B\u044F\u044E\u0449\u0430\u044F\u0441\u044F \u0440\u0430\u0431\u043E\u0447\u0438\u043C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u043C. \u0412\u043E\u0434\u0430 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u043B\u043E\u0442\u043D\u043E \u0441\u0436\u0430\u0442\u044B\u0435 \u0434\u0438\u0441\u043A\u0438, \u0430 \u043D\u0435\u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044B\u0435\n                       \u0447\u0430\u0441\u0442\u0438\u0446\u044B \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0432 \u043C\u0435\u0436\u0434\u0438\u0441\u043A\u043E\u0432\u043E\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435. \u0414\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u043C\u044B\u0442\u044C \u0434\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440, \u043D\u0443\u0436\u043D\u043E \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C\n                       \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u043C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043B\u0438, \u0437\u0430\u0442\u0435\u043C \u0441\u043D\u044F\u0442\u044C \u043A\u043E\u0436\u0443\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043F\u0430\u043A\u0435\u0442\n                       \u0434\u0438\u0441\u043A\u043E\u0432 \u0440\u0430\u0437\u043E\u0436\u043C\u0435\u0442\u0441\u044F. \u0412 \u0440\u0430\u0437\u0436\u0430\u0442\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0434\u0438\u0441\u043A\u0438 \u043B\u0435\u0433\u043A\u043E \u043F\u0440\u043E\u043C\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u043E\u0434\u043E\u0439 \u043F\u043E\u0434 \u043D\u0435\u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043D\u0430\u043F\u043E\u0440\u043E\u043C.\n                       </p>\n                   ";
        tableBlockOneImg.innerHTML = "\n                   <img src=\"../media/offer/filter.png\">\n                   ";
        tableBlockTwoTitle.textContent = 'Фильтр для удаления железа, жесткости и нитратов';
        tableBlockTwoText.innerHTML = "\n                   <p class=\"text-muted\">\u0418\u043E\u043D\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445\n                   \u0432\u043E\u0434\u043E\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0438 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0434\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0441\u043E\u043B\u0435\u0439 \u0436\u0435\u0441\u0442\u043A\u043E\u0441\u0442\u0438, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435\n                   \u043D\u0430\u043A\u0438\u043F\u0438 \u0432 \u043A\u043E\u0442\u043B\u0430\u0445, \u0431\u043E\u0439\u043B\u0435\u0440\u0430\u0445, \u0441\u0442\u0438\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0438 \u043F\u043E\u0441\u0443\u0434\u043E\u043C\u043E\u0435\u0447\u043D\u044B\u0445 \u043C\u0430\u0448\u0438\u043D\u0430\u0445 \u0438 \u0434\u0440\u0443\u0433\u043E\u0439 \u0431\u044B\u0442\u043E\u0432\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438, \u0447\u0442\u043E\n                   \u043F\u0440\u043E\u0434\u043B\u0435\u0432\u0430\u044E\u0442 \u0441\u0440\u043E\u043A \u0441\u043B\u0443\u0436\u0431\u044B \u0432\u0441\u0435\u0439 \u0431\u0435\u0437 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0438. \u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u0432\u043E\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440,\n                   \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044E \u043C\u043E\u044E\u0449\u0438\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0438. \u0414\u0430\u043D\u043D\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0438\u043E\u043D\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u044B\u0445\n                   \u0441\u043C\u043E\u043B \u0440\u0430\u0437\u043D\u043E\u0433\u043E \u0433\u0440\u0430\u043D\u0443\u043B\u043E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u0430\u0432\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0445 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0443\u0434\u0430\u043B\u044F\u0442\u044C \u0438\u0437 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u043E\u0434\u044B \u0441\u043E\u043B\u0438\n                   \u0436\u0435\u0441\u0442\u043A\u043E\u0441\u0442\u0438 (Ca2+ \u0438 Mg2+)</p>\n                   <p class=\"text-muted\">\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0438\u043E\u043D\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u044B\u0435 \u0441\u043C\u043E\u043B\u044B, \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0449\u0438\u0435\n                       \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C\u0438 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u043C\u0438;</p>\n                   <ul class=\"text-muted\">\n                       <li class=\"list-item offer__list-item\">\u0432\u044B\u0441\u043E\u043A\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u043F\u043E\u0442\u043E\u043A\u0430 \u043F\u0440\u0438 \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u0438\u0438 \u0438 \u0440\u0435\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438;</li>\n                       <li class=\"list-item offer__list-item\">\u043D\u0438\u0437\u043A\u0438\u0439 \u0440\u0430\u0441\u0445\u043E\u0434 \u0432\u043E\u0434\u044B \u043D\u0430 \u043E\u0442\u043C\u044B\u0432\u043A\u0443 - \u0434\u043E 150-200\u043B;</li>\n                       <li class=\"list-item offer__list-item\">\u0440\u0430\u0432\u043D\u043E\u043C\u0435\u0440\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0440\u0435\u0430\u0433\u0435\u043D\u0442\u043E\u0432, \u0432\u043E\u0434\u044B \u0438 \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u043E\u0432;\n                       </li>\n                       <li class=\"list-item offer__list-item\"> \u043E\u0434\u043D\u043E\u0440\u043E\u0434\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0447\u0430\u044F \u0437\u043E\u043D\u0430;</li>\n                   </ul>\n                   <p class=\"text-muted\">\u0421\u0440\u043E\u043A \u0441\u043B\u0443\u0436\u0431\u044B \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u043E 4-6 \u043B\u0435\u0442.\n                   </p>\n               ";
        tableBlockTwoImg.innerHTML = "\n                   <img src=\"../media/offer/iron.png\">\n                   ";
        tableBlockThirdBlock.style.display = 'none';
        tableBlockThirdTitle.style.display = 'none';
        tableBlockThirdText.style.display = 'none';
        tableBlockThirdImg.style.display = 'none';
        tableBlockFiveBlock.style.display = 'none';
        tableBlockFiveTitle.style.display = 'none';
        tableBlockFiveText.style.display = 'none';
        tableBlockFiveImg.style.display = 'none';
        tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
        tableBlockFourText.innerHTML = "\n                       <p class=\"text-muted\">\n                       \u0423\u0434\u0430\u043B\u044F\u0435\u0442 \u0438\u0437 \u0432\u043E\u0434\u044B \u0431\u044B\u0442\u043E\u0432\u043E\u0433\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043D\u0435\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u0437\u0430\u043F\u0430\u0445 \u0438 \u0446\u0432\u0435\u0442, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0445\u043B\u043E\u0440, \u0445\u043B\u043E\u0440\u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0430\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430.\n                       </p>     \n                   ";
        tableBlockFourImg.innerHTML = "\n                   <img src=\"../media/offer/smell.png\">\n                   ";
        break;

      case '2213222121':
        schemeNumber = 7;
        console.log('Схема 7');
        schemeTitle.textContent = 'СХЕМА 7. Фильтр для удаления железа, жесткости, аммония и ПМО';
        schemeImg.innerHTML = "\n                   <img src=\"../media/offer/scheme-7/1.png\" alt=\"\u0421\u0445\u0435\u043C\u0430\" class=\"img-fluid\">\n                   ";
        schemeImg.alt = schemeTitle;
        tableBlockOneTitle.textContent = 'Фильтр механический';
        tableBlockOneText.innerHTML = "\n                       <p class=\"text-muted font-weight-bold\">\u0424\u0438\u043B\u044C\u0442\u0440 CEPEX LF 1\" (130\u043C\u043A\u043C)</p>\n                       <p class=\"text-muted\">\u0422\u043E\u043D\u043A\u043E\u0441\u0442\u044C \u043E\u0447\u0438\u0441\u0442\u043A\u0438 (\u043C\u043A\u043C) 130 </p>\n                       <p class=\"text-muted\">\u0414\u0438\u0441\u043A\u043E\u0432\u044B\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B CEPEX \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E \u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0439\n                       \u0433\u0440\u044F\u0437\u0435\u0435\u043C\u043A\u043E\u0441\u0442\u044C\u044E \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u0441\u0435\u0442\u0447\u0430\u0442\u044B\u043C\u0438 \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C\u0438. </p>\n                       <p class=\"text-muted\">\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0434\u0438\u0441\u043A\u0438 \u0438\u0437 \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043E\u0432, \u043D\u0430\n                       \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u043A\u0430\u043D\u0430\u0432\u043A\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u0448\u0438\u0440\u0438\u043D\u044B \u0438 \u0433\u043B\u0443\u0431\u0438\u043D\u044B. </p>\n                       <p class=\"text-muted\">\u041F\u0440\u0438 \u0441\u0436\u0430\u0442\u0438\u0438 \u0434\u0438\u0441\u043A\u043E\u0432 \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438 \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044A\u0435\u043C\u043D\u0430\u044F \u0441\u0435\u0442\u0447\u0430\u0442\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430,\n                       \u044F\u0432\u043B\u044F\u044E\u0449\u0430\u044F\u0441\u044F \u0440\u0430\u0431\u043E\u0447\u0438\u043C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u043C. \u0412\u043E\u0434\u0430 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u043B\u043E\u0442\u043D\u043E \u0441\u0436\u0430\u0442\u044B\u0435 \u0434\u0438\u0441\u043A\u0438, \u0430 \u043D\u0435\u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044B\u0435\n                       \u0447\u0430\u0441\u0442\u0438\u0446\u044B \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0432 \u043C\u0435\u0436\u0434\u0438\u0441\u043A\u043E\u0432\u043E\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435. \u0414\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u043C\u044B\u0442\u044C \u0434\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440, \u043D\u0443\u0436\u043D\u043E \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C\n                       \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u043C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043B\u0438, \u0437\u0430\u0442\u0435\u043C \u0441\u043D\u044F\u0442\u044C \u043A\u043E\u0436\u0443\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043F\u0430\u043A\u0435\u0442\n                       \u0434\u0438\u0441\u043A\u043E\u0432 \u0440\u0430\u0437\u043E\u0436\u043C\u0435\u0442\u0441\u044F. \u0412 \u0440\u0430\u0437\u0436\u0430\u0442\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0434\u0438\u0441\u043A\u0438 \u043B\u0435\u0433\u043A\u043E \u043F\u0440\u043E\u043C\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u043E\u0434\u043E\u0439 \u043F\u043E\u0434 \u043D\u0435\u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043D\u0430\u043F\u043E\u0440\u043E\u043C.\n                       </p>\n                   ";
        tableBlockOneImg.innerHTML = "\n                   <img src=\"../media/offer/filter.png\">\n                   ";
        tableBlockTwoTitle.textContent = 'Фильтр для удаления железа, жесткости, аммония и ПМО';
        tableBlockTwoText.innerHTML = "\n                   <p class=\"text-muted\">\u0418\u043E\u043D\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445\n                   \u0432\u043E\u0434\u043E\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0438 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0434\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0441\u043E\u043B\u0435\u0439 \u0436\u0435\u0441\u0442\u043A\u043E\u0441\u0442\u0438, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435\n                   \u043D\u0430\u043A\u0438\u043F\u0438 \u0432 \u043A\u043E\u0442\u043B\u0430\u0445, \u0431\u043E\u0439\u043B\u0435\u0440\u0430\u0445, \u0441\u0442\u0438\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0438 \u043F\u043E\u0441\u0443\u0434\u043E\u043C\u043E\u0435\u0447\u043D\u044B\u0445 \u043C\u0430\u0448\u0438\u043D\u0430\u0445 \u0438 \u0434\u0440\u0443\u0433\u043E\u0439 \u0431\u044B\u0442\u043E\u0432\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438, \u0447\u0442\u043E\n                   \u043F\u0440\u043E\u0434\u043B\u0435\u0432\u0430\u044E\u0442 \u0441\u0440\u043E\u043A \u0441\u043B\u0443\u0436\u0431\u044B \u0432\u0441\u0435\u0439 \u0431\u0435\u0437 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0438. \u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u0432\u043E\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440,\n                   \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044E \u043C\u043E\u044E\u0449\u0438\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0438. \u0414\u0430\u043D\u043D\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0438\u043E\u043D\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u044B\u0445\n                   \u0441\u043C\u043E\u043B \u0440\u0430\u0437\u043D\u043E\u0433\u043E \u0433\u0440\u0430\u043D\u0443\u043B\u043E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u0430\u0432\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0445 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0443\u0434\u0430\u043B\u044F\u0442\u044C \u0438\u0437 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u043E\u0434\u044B \u0441\u043E\u043B\u0438\n                   \u0436\u0435\u0441\u0442\u043A\u043E\u0441\u0442\u0438 (Ca2+ \u0438 Mg2+)</p>\n                   <p class=\"text-muted\">\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0438\u043E\u043D\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u044B\u0435 \u0441\u043C\u043E\u043B\u044B, \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0449\u0438\u0435\n                       \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C\u0438 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u043C\u0438;</p>\n                   <ul class=\"text-muted\">\n                       <li class=\"list-item offer__list-item\">\u0432\u044B\u0441\u043E\u043A\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u043F\u043E\u0442\u043E\u043A\u0430 \u043F\u0440\u0438 \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u0438\u0438 \u0438 \u0440\u0435\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438;</li>\n                       <li class=\"list-item offer__list-item\">\u043D\u0438\u0437\u043A\u0438\u0439 \u0440\u0430\u0441\u0445\u043E\u0434 \u0432\u043E\u0434\u044B \u043D\u0430 \u043E\u0442\u043C\u044B\u0432\u043A\u0443 - \u0434\u043E 150-200\u043B;</li>\n                       <li class=\"list-item offer__list-item\">\u0440\u0430\u0432\u043D\u043E\u043C\u0435\u0440\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0440\u0435\u0430\u0433\u0435\u043D\u0442\u043E\u0432, \u0432\u043E\u0434\u044B \u0438 \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u043E\u0432;\n                       </li>\n                       <li class=\"list-item offer__list-item\"> \u043E\u0434\u043D\u043E\u0440\u043E\u0434\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0447\u0430\u044F \u0437\u043E\u043D\u0430;</li>\n                   </ul>\n                   <p class=\"text-muted\">\u0421\u0440\u043E\u043A \u0441\u043B\u0443\u0436\u0431\u044B \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u043E 4-6 \u043B\u0435\u0442.\n                   </p>\n               ";
        tableBlockTwoImg.innerHTML = "\n                   <img src=\"../media/offer/iron.png\">\n                   ";
        tableBlockThirdBlock.style.display = 'none';
        tableBlockThirdTitle.style.display = 'none';
        tableBlockThirdText.style.display = 'none';
        tableBlockThirdImg.style.display = 'none';
        tableBlockFiveBlock.style.display = 'none';
        tableBlockFiveTitle.style.display = 'none';
        tableBlockFiveText.style.display = 'none';
        tableBlockFiveImg.style.display = 'none';
        tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
        tableBlockFourText.innerHTML = "\n                       <p class=\"text-muted\">\n                       \u0423\u0434\u0430\u043B\u044F\u0435\u0442 \u0438\u0437 \u0432\u043E\u0434\u044B \u0431\u044B\u0442\u043E\u0432\u043E\u0433\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043D\u0435\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u0437\u0430\u043F\u0430\u0445 \u0438 \u0446\u0432\u0435\u0442, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0445\u043B\u043E\u0440, \u0445\u043B\u043E\u0440\u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0430\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430.\n                       </p>     \n                   ";
        tableBlockFourImg.innerHTML = "\n                   <img src=\"../media/offer/smell.png\">\n                   ";
        break;

      case '2221221211':
        schemeNumber = 8;
        console.log('Схема 8');
        schemeTitle.textContent = 'СХЕМА 8. Обезжелезивание + Сероводород + Запах';
        schemeImg.innerHTML = "\n                   <img src=\"../media/offer/scheme-8/1.png\" alt=\"\u0421\u0445\u0435\u043C\u0430\" class=\"img-fluid\">\n                   ";
        schemeImg.alt = schemeTitle;
        tableBlockOneTitle.textContent = 'Фильтр механический';
        tableBlockOneText.innerHTML = "\n                       <p class=\"text-muted font-weight-bold\">\u0424\u0438\u043B\u044C\u0442\u0440 CEPEX LF 1\" (130\u043C\u043A\u043C)</p>\n                       <p class=\"text-muted\">\u0422\u043E\u043D\u043A\u043E\u0441\u0442\u044C \u043E\u0447\u0438\u0441\u0442\u043A\u0438 (\u043C\u043A\u043C) 130 </p>\n                       <p class=\"text-muted\">\u0414\u0438\u0441\u043A\u043E\u0432\u044B\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B CEPEX \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E \u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0439\n                       \u0433\u0440\u044F\u0437\u0435\u0435\u043C\u043A\u043E\u0441\u0442\u044C\u044E \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u0441\u0435\u0442\u0447\u0430\u0442\u044B\u043C\u0438 \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C\u0438. </p>\n                       <p class=\"text-muted\">\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0434\u0438\u0441\u043A\u0438 \u0438\u0437 \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043E\u0432, \u043D\u0430\n                       \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u043A\u0430\u043D\u0430\u0432\u043A\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u0448\u0438\u0440\u0438\u043D\u044B \u0438 \u0433\u043B\u0443\u0431\u0438\u043D\u044B. </p>\n                       <p class=\"text-muted\">\u041F\u0440\u0438 \u0441\u0436\u0430\u0442\u0438\u0438 \u0434\u0438\u0441\u043A\u043E\u0432 \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438 \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044A\u0435\u043C\u043D\u0430\u044F \u0441\u0435\u0442\u0447\u0430\u0442\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430,\n                       \u044F\u0432\u043B\u044F\u044E\u0449\u0430\u044F\u0441\u044F \u0440\u0430\u0431\u043E\u0447\u0438\u043C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u043C. \u0412\u043E\u0434\u0430 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u043B\u043E\u0442\u043D\u043E \u0441\u0436\u0430\u0442\u044B\u0435 \u0434\u0438\u0441\u043A\u0438, \u0430 \u043D\u0435\u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044B\u0435\n                       \u0447\u0430\u0441\u0442\u0438\u0446\u044B \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0432 \u043C\u0435\u0436\u0434\u0438\u0441\u043A\u043E\u0432\u043E\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435. \u0414\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u043C\u044B\u0442\u044C \u0434\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440, \u043D\u0443\u0436\u043D\u043E \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C\n                       \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u043C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043B\u0438, \u0437\u0430\u0442\u0435\u043C \u0441\u043D\u044F\u0442\u044C \u043A\u043E\u0436\u0443\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043F\u0430\u043A\u0435\u0442\n                       \u0434\u0438\u0441\u043A\u043E\u0432 \u0440\u0430\u0437\u043E\u0436\u043C\u0435\u0442\u0441\u044F. \u0412 \u0440\u0430\u0437\u0436\u0430\u0442\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0434\u0438\u0441\u043A\u0438 \u043B\u0435\u0433\u043A\u043E \u043F\u0440\u043E\u043C\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u043E\u0434\u043E\u0439 \u043F\u043E\u0434 \u043D\u0435\u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043D\u0430\u043F\u043E\u0440\u043E\u043C.\n                       </p>\n                   ";
        tableBlockOneImg.innerHTML = "\n                   <img src=\"../media/offer/filter.png\">\n                   ";
        tableBlockTwoTitle.textContent = 'Установка аэрации';
        tableBlockTwoText.innerHTML = "\n                       <p class=\"text-muted\">\u0410\u044D\u0440\u0430\u0446\u0438\u044F \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0430 \u043D\u0430 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0435 \u043F\u0440\u0438\u043D\u0443\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u043E\u0434\u0430\u0447\u0438 \u0432\u043E\u0437\u0434\u0443\u0445\u0430 \u0432 \u0430\u044D\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u0443\u044E \u043A\u043E\u043B\u043E\u043D\u043D\u0443 \u0441 \u0432\u043E\u0434\u043E\u0439. \u0410\u044D\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043A\u043E\u043B\u043E\u043D\u043D\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0437\u0430\u0447\u0430\u0441\u0442\u0443\u044E \u0432 \u0441\u0445\u0435\u043C\u0430\u0445 \u0432\u043E\u0434\u043E\u043E\u0447\u0438\u0441\u0442\u043A\u0438 \u0441 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E. \u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E   \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043D\u0430\u0433\u043D\u0435\u0442\u0430\u043D\u0438\u0435 \u0432\u043E\u0437\u0434\u0443\u0445\u0430. \u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u0438\u0435 \u0432\u043E\u0434\u044B \u043A\u0438\u0441\u043B\u043E\u0440\u043E\u0434\u043E\u043C \u0438 \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u0438\u0435 \u0436\u0435\u043B\u0435\u0437\u0430 \u0438 \u043C\u0430\u0440\u0433\u0430\u043D\u0446\u0430. </p>\n                   ";
        tableBlockTwoImg.innerHTML = "\n                   <img src=\"../media/offer/aero.png\">\n                   "; // tableBlockThirdBlock.style.display = 'block';  

        tableBlockThirdTitle.textContent = 'Комплекс  обезжелезивания и осветления';
        tableBlockThirdText.innerHTML = "\n                   <p class=\"text-muted\">\u0424\u0438\u043B\u044C\u0442\u0440 \u0443\u0441\u043A\u043E\u0440\u044F\u0435\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0436\u0435\u043B\u0435\u0437\u0430 \u0438 \u0437\u0430\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0435\u0433\u043E \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0432 \u0441\u043B\u043E\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430.  \u0424\u0438\u043B\u044C\u0442\u0440 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435. \u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435  \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u042D\u043A\u043E\u0444\u0435\u0440\u043E\u043A\u0441 \u0438 \u041C\u0421\u0424\u0435\u0440\u043E\u043A\u0441.  \u041F\u0440\u043E\u043C\u044B\u0432\u043A\u0430 \u0444\u0438\u043B\u044C\u0442\u0440\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F  \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u043E\u0434\u043E\u0439.</p>\n                   <p class=\"text-muted\">\u042D\u041A\u041E\u0424\u0415\u0420\u041E\u041A\u0421 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u0430\u043A \u043A\u0430\u0442\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440 \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0432 \u0440\u0435\u0430\u043A\u0446\u0438\u044F\u0445 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u0438\u0441\u043B\u043E\u0440\u043E\u0434\u0430 \u0441 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F\u043C\u0438 \u0436\u0435\u043B\u0435\u0437\u0430 (II) \u0438 (III), \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0447\u0435\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044F \u0433\u0438\u0434\u0440\u043E\u043E\u043A\u0441\u0438\u0434 \u0436\u0435\u043B\u0435\u0437\u0430 (III), \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0435\u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0438\u043C\u044B\u043C \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435\u043C \u0438 \u043B\u0435\u0433\u043A\u043E \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0432\u043E\u0434\u044B.</p>                   \n                   <p class=\"text-muted\">\xABMSFerox\xBB \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u0430\u043A \u043A\u0430\u0442\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440 \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0432 \u0440\u0435\u0430\u043A\u0446\u0438\u044F\u0445 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u0438\u0441\u043B\u043E\u0440\u043E\u0434\u0430 \u0441 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F\u043C\u0438 \u0436\u0435\u043B\u0435\u0437\u0430 (II) \u0438 (III) \u0432\u0430\u043B\u0435\u043D\u0442\u043D\u043E\u0433\u043E, \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0440\u0435\u0430\u043A\u0446\u0438\u0438 \u043E\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044F \u0433\u0438\u0434\u0440\u043E\u043A\u0441\u0438\u0434 \u0436\u0435\u043B\u0435\u0437\u0430 (III), \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0435 \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0438\u043C\u044B\u043C \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435\u043C \u0438 \u043B\u0435\u0433\u043A\u043E \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0432\u043E\u0434\u044B. \u0421\u0435\u0440\u043E\u0432\u043E\u0434\u043E\u0440\u043E\u0434 \u0438 \u043C\u0430\u0440\u0433\u0430\u043D\u0435\u0446 \u0442\u0430\u043A\u0436\u0435 \u043E\u043A\u0438\u0441\u043B\u044F\u044E\u0442\u0441\u044F \u0438 \u043E\u0441\u0435\u0434\u0430\u044E\u0442 \u0432 \u0441\u043B\u043E\u044F\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430, \u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435\u043C \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0432\u043E\u0434\u044B. \xABMSFerox\xBB \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0434\u043B\u044F \u0440\u0435\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0440\u0435\u0430\u0433\u0435\u043D\u0442\u043E\u0432. \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u0440\u043E\u043C\u044B\u0432\u043A\u0430 \u0432\u043E\u0434\u043E\u0439 \u0438\u043B\u0438 \u0434\u043B\u044F \u0431\u043E\u043B\u0435\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u043F\u0440\u043E\u043C\u044B\u0432\u043A\u0438 - \u0432\u043E\u0434\u043E-\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u0430\u044F.</p>\n               ";
        tableBlockThirdImg.innerHTML = "\n                   <img src=\"../media/offer/color.png\">\n                   ";
        tableBlockFiveBlock.style.display = 'none';
        tableBlockFiveTitle.style.display = 'none';
        tableBlockFiveText.style.display = 'none';
        tableBlockFiveImg.style.display = 'none';
        tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
        tableBlockFourText.innerHTML = "\n                       <p class=\"text-muted\">\n                       \u0423\u0434\u0430\u043B\u044F\u0435\u0442 \u0438\u0437 \u0432\u043E\u0434\u044B \u0431\u044B\u0442\u043E\u0432\u043E\u0433\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043D\u0435\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u0437\u0430\u043F\u0430\u0445 \u0438 \u0446\u0432\u0435\u0442, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0445\u043B\u043E\u0440, \u0445\u043B\u043E\u0440\u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0430\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430.\n                       </p>     \n                   ";
        tableBlockFourImg.innerHTML = "\n                   <img src=\"../media/offer/smell.png\">\n                   ";
        break;

      case '2321111111':
        schemeNumber = 9;
        console.log('Схема 9');
        schemeTitle.textContent = 'СХЕМА 9. Осветление (Мутность + Цветность)';
        schemeImg.innerHTML = "\n                   <img src=\"../media/offer/scheme-9/1.png\" alt=\"\u0421\u0445\u0435\u043C\u0430\" class=\"img-fluid\">\n                   ";
        schemeImg.alt = schemeTitle;
        tableBlockOneTitle.textContent = 'Фильтр механический';
        tableBlockOneText.innerHTML = "\n                       <p class=\"text-muted font-weight-bold\">\u0424\u0438\u043B\u044C\u0442\u0440 CEPEX LF 1\" (130\u043C\u043A\u043C)</p>\n                       <p class=\"text-muted\">\u0422\u043E\u043D\u043A\u043E\u0441\u0442\u044C \u043E\u0447\u0438\u0441\u0442\u043A\u0438 (\u043C\u043A\u043C) 130 </p>\n                       <p class=\"text-muted\">\u0414\u0438\u0441\u043A\u043E\u0432\u044B\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B CEPEX \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E \u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0439 \u0433\u0440\u044F\u0437\u0435\u0435\u043C\u043A\u043E\u0441\u0442\u044C\u044E \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u0441\u0435\u0442\u0447\u0430\u0442\u044B\u043C\u0438 \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C\u0438.</p>\n                       <p class=\"text-muted\">\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0434\u0438\u0441\u043A\u0438 \u0438\u0437 \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043E\u0432, \u043D\u0430\n                       \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u043A\u0430\u043D\u0430\u0432\u043A\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u0448\u0438\u0440\u0438\u043D\u044B \u0438 \u0433\u043B\u0443\u0431\u0438\u043D\u044B. </p>\n                       <p class=\"text-muted\">\u041F\u0440\u0438 \u0441\u0436\u0430\u0442\u0438\u0438 \u0434\u0438\u0441\u043A\u043E\u0432 \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438 \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044A\u0435\u043C\u043D\u0430\u044F \u0441\u0435\u0442\u0447\u0430\u0442\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430,\n                       \u044F\u0432\u043B\u044F\u044E\u0449\u0430\u044F\u0441\u044F \u0440\u0430\u0431\u043E\u0447\u0438\u043C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u043C. \u0412\u043E\u0434\u0430 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u043B\u043E\u0442\u043D\u043E \u0441\u0436\u0430\u0442\u044B\u0435 \u0434\u0438\u0441\u043A\u0438, \u0430 \u043D\u0435\u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044B\u0435 \u0447\u0430\u0441\u0442\u0438\u0446\u044B \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0432 \u043C\u0435\u0436\u0434\u0438\u0441\u043A\u043E\u0432\u043E\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435. \u0414\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u043C\u044B\u0442\u044C \u0434\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440, \u043D\u0443\u0436\u043D\u043E \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u043C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043B\u0438, \u0437\u0430\u0442\u0435\u043C \u0441\u043D\u044F\u0442\u044C \u043A\u043E\u0436\u0443\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043F\u0430\u043A\u0435\u0442 \u0434\u0438\u0441\u043A\u043E\u0432 \u0440\u0430\u0437\u043E\u0436\u043C\u0435\u0442\u0441\u044F. \u0412 \u0440\u0430\u0437\u0436\u0430\u0442\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0434\u0438\u0441\u043A\u0438 \u043B\u0435\u0433\u043A\u043E \u043F\u0440\u043E\u043C\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u043E\u0434\u043E\u0439 \u043F\u043E\u0434 \u043D\u0435\u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043D\u0430\u043F\u043E\u0440\u043E\u043C.</p>\n                   ";
        tableBlockOneImg.innerHTML = "\n                   <img src=\"../media/offer/filter.png\">\n                   ";
        tableBlockTwoTitle.textContent = 'Комплекс  обезжелезивания и осветления';
        tableBlockTwoText.innerHTML = "\n                       <p class=\"text-muted\">\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0443\u0433\u043E\u043B\u044C\u043D\u044B\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B \u0441\u0435\u0440\u0438\u0438 \u0441\u043B\u0443\u0436\u0430\u0442 \u0434\u043B\u044F \u0434\u0435\u0445\u043B\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0432\u043E\u0434\u044B, \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u043F\u043E\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0445 \u0437\u0430\u043F\u0430\u0445\u043E\u0432, \u0446\u0432\u0435\u0442\u043D\u043E\u0441\u0442\u0438, \u043E\u0440\u0433\u0430\u043D\u0438\u043A\u0438, \u0445\u043B\u043E\u0440\u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u044B\u0445 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0432\u0440\u0435\u0434\u043D\u044B\u0445 \u0437\u0430\u0433\u0440\u044F\u0437\u043D\u0435\u043D\u0438\u0439. \u0410\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0443\u0433\u043E\u043B\u044C \u0438\u043C\u0435\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u0443\u044E \u0443\u0434\u0435\u043B\u044C\u043D\u0443\u044E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C \u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u043C \u0441\u043E\u0440\u0431\u0435\u043D\u0442\u043E\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u0433\u043B\u043E\u0449\u0430\u0435\u0442 \u0438\u0437 \u0432\u043E\u0434\u044B \u0438 \u0437\u0430\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u0435 \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u0438\u043C\u0435\u0441\u0438 \u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u043A\u0443, \u0443\u0434\u0430\u043B\u044F\u0435\u0442 \u043D\u0435\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u0437\u0430\u043F\u0430\u0445 \u0438 \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u0442 \u0432\u043A\u0443\u0441 \u0432\u043E\u0434\u044B. \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0443\u0433\u043E\u043B\u044C \u043E\u0431\u043B\u0430\u0434\u0430\u0435\u0442 \u043A\u0430\u0442\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u043C\u0438 \u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u0435\u043D \u043E\u0447\u0438\u0449\u0430\u0442\u044C \u0432\u043E\u0434\u0443 \u043E\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0433\u043E \u0445\u043B\u043E\u0440\u0430 -\u0434\u0435\u0445\u043B\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C.  \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0444\u0438\u043B\u044C\u0442\u0440\u0430 \u043D\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u0443\u0435\u0442\u0441\u044F, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0434\u043E\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0435\u0430\u0433\u0435\u043D\u0442\u043E\u0432 \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438.</p>\n                   ";
        tableBlockTwoImg.innerHTML = "\n                   <img src=\"../media/offer/color.png\">\n                   ";
        tableBlockThirdBlock.style.display = 'none';
        tableBlockThirdTitle.style.display = 'none';
        tableBlockThirdText.style.display = 'none';
        tableBlockThirdImg.style.display = 'none';
        tableBlockFiveBlock.style.display = 'none';
        tableBlockFiveTitle.style.display = 'none';
        tableBlockFiveText.style.display = 'none';
        tableBlockFiveImg.style.display = 'none';
        tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
        tableBlockFourText.innerHTML = "\n                       <p class=\"text-muted\">\n                       \u0423\u0434\u0430\u043B\u044F\u0435\u0442 \u0438\u0437 \u0432\u043E\u0434\u044B \u0431\u044B\u0442\u043E\u0432\u043E\u0433\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043D\u0435\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u0437\u0430\u043F\u0430\u0445 \u0438 \u0446\u0432\u0435\u0442, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0445\u043B\u043E\u0440, \u0445\u043B\u043E\u0440\u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0430\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430.\n                       </p>     \n                   ";
        tableBlockFourImg.innerHTML = "\n                   <img src=\"../media/offer/smell.png\">\n                   ";
        break;

      case '2224221211':
        schemeNumber = 10;
        console.log('Схема 10');
        schemeTitle.textContent = 'СХЕМА 10. Аэрация (Сероводород) + Обезжелезивание + Умягчение';
        schemeImg.innerHTML = "\n                   <img src=\"../media/offer/scheme-10/1.png\" alt=\"\u0421\u0445\u0435\u043C\u0430\" class=\"img-fluid\">\n                   ";
        schemeImg.alt = schemeTitle;
        tableBlockOneTitle.textContent = 'Фильтр механический';
        tableBlockOneText.innerHTML = "\n                       <p class=\"text-muted font-weight-bold\">\u0424\u0438\u043B\u044C\u0442\u0440 CEPEX LF 1\" (130\u043C\u043A\u043C)</p>\n                       <p class=\"text-muted\">\u0422\u043E\u043D\u043A\u043E\u0441\u0442\u044C \u043E\u0447\u0438\u0441\u0442\u043A\u0438 (\u043C\u043A\u043C) 130 </p>\n                       <p class=\"text-muted\">\u0414\u0438\u0441\u043A\u043E\u0432\u044B\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B CEPEX \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E \u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0439\n                       \u0433\u0440\u044F\u0437\u0435\u0435\u043C\u043A\u043E\u0441\u0442\u044C\u044E \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u0441\u0435\u0442\u0447\u0430\u0442\u044B\u043C\u0438 \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C\u0438. </p>\n                       <p class=\"text-muted\">\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0434\u0438\u0441\u043A\u0438 \u0438\u0437 \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043E\u0432, \u043D\u0430\n                       \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u043A\u0430\u043D\u0430\u0432\u043A\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u0448\u0438\u0440\u0438\u043D\u044B \u0438 \u0433\u043B\u0443\u0431\u0438\u043D\u044B. </p>\n                       <p class=\"text-muted\">\u041F\u0440\u0438 \u0441\u0436\u0430\u0442\u0438\u0438 \u0434\u0438\u0441\u043A\u043E\u0432 \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438 \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044A\u0435\u043C\u043D\u0430\u044F \u0441\u0435\u0442\u0447\u0430\u0442\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430,\n                       \u044F\u0432\u043B\u044F\u044E\u0449\u0430\u044F\u0441\u044F \u0440\u0430\u0431\u043E\u0447\u0438\u043C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u043C. \u0412\u043E\u0434\u0430 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u043B\u043E\u0442\u043D\u043E \u0441\u0436\u0430\u0442\u044B\u0435 \u0434\u0438\u0441\u043A\u0438, \u0430 \u043D\u0435\u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044B\u0435\n                       \u0447\u0430\u0441\u0442\u0438\u0446\u044B \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0432 \u043C\u0435\u0436\u0434\u0438\u0441\u043A\u043E\u0432\u043E\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435. \u0414\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u043C\u044B\u0442\u044C \u0434\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440, \u043D\u0443\u0436\u043D\u043E \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C\n                       \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u043C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043B\u0438, \u0437\u0430\u0442\u0435\u043C \u0441\u043D\u044F\u0442\u044C \u043A\u043E\u0436\u0443\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043F\u0430\u043A\u0435\u0442\n                       \u0434\u0438\u0441\u043A\u043E\u0432 \u0440\u0430\u0437\u043E\u0436\u043C\u0435\u0442\u0441\u044F. \u0412 \u0440\u0430\u0437\u0436\u0430\u0442\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0434\u0438\u0441\u043A\u0438 \u043B\u0435\u0433\u043A\u043E \u043F\u0440\u043E\u043C\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u043E\u0434\u043E\u0439 \u043F\u043E\u0434 \u043D\u0435\u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043D\u0430\u043F\u043E\u0440\u043E\u043C.\n                       </p>\n                   ";
        tableBlockOneImg.innerHTML = "\n                   <img src=\"../media/offer/filter.png\">\n                   ";
        tableBlockTwoTitle.textContent = 'Установка аэрации';
        tableBlockTwoText.innerHTML = "\n                       <p class=\"text-muted\">\u0410\u044D\u0440\u0430\u0446\u0438\u044F \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0430 \u043D\u0430 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0435 \u043F\u0440\u0438\u043D\u0443\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u043E\u0434\u0430\u0447\u0438 \u0432\u043E\u0437\u0434\u0443\u0445\u0430 \u0432 \u0430\u044D\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u0443\u044E \u043A\u043E\u043B\u043E\u043D\u043D\u0443 \u0441 \u0432\u043E\u0434\u043E\u0439. \u0410\u044D\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043A\u043E\u043B\u043E\u043D\u043D\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0437\u0430\u0447\u0430\u0441\u0442\u0443\u044E \u0432 \u0441\u0445\u0435\u043C\u0430\u0445 \u0432\u043E\u0434\u043E\u043E\u0447\u0438\u0441\u0442\u043A\u0438 \u0441 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E. \u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E   \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043D\u0430\u0433\u043D\u0435\u0442\u0430\u043D\u0438\u0435 \u0432\u043E\u0437\u0434\u0443\u0445\u0430. \u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u0438\u0435 \u0432\u043E\u0434\u044B \u043A\u0438\u0441\u043B\u043E\u0440\u043E\u0434\u043E\u043C \u0438 \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u0438\u0435 \u0436\u0435\u043B\u0435\u0437\u0430 \u0438 \u043C\u0430\u0440\u0433\u0430\u043D\u0446\u0430. </p>\n                   ";
        tableBlockTwoImg.innerHTML = "\n                   <img src=\"../media/offer/aero.png\">\n                   "; // tableBlockThirdBlock.style.display = 'block';  

        tableBlockThirdTitle.textContent = 'Комплекс  обезжелезивания и осветления';
        tableBlockThirdText.innerHTML = "\n                   <p class=\"text-muted\">\u0424\u0438\u043B\u044C\u0442\u0440 \u0443\u0441\u043A\u043E\u0440\u044F\u0435\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0436\u0435\u043B\u0435\u0437\u0430 \u0438 \u0437\u0430\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0435\u0433\u043E \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0432 \u0441\u043B\u043E\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430.  \u0424\u0438\u043B\u044C\u0442\u0440 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435. \u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435  \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u042D\u043A\u043E\u0444\u0435\u0440\u043E\u043A\u0441 \u0438 \u041C\u0421\u0424\u0435\u0440\u043E\u043A\u0441.  \u041F\u0440\u043E\u043C\u044B\u0432\u043A\u0430 \u0444\u0438\u043B\u044C\u0442\u0440\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F  \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u043E\u0434\u043E\u0439.</p>\n                   <p class=\"text-muted\">\u042D\u041A\u041E\u0424\u0415\u0420\u041E\u041A\u0421 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u0430\u043A \u043A\u0430\u0442\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440 \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0432 \u0440\u0435\u0430\u043A\u0446\u0438\u044F\u0445 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u0438\u0441\u043B\u043E\u0440\u043E\u0434\u0430 \u0441 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F\u043C\u0438 \u0436\u0435\u043B\u0435\u0437\u0430 (II) \u0438 (III), \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0447\u0435\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044F \u0433\u0438\u0434\u0440\u043E\u043E\u043A\u0441\u0438\u0434 \u0436\u0435\u043B\u0435\u0437\u0430 (III), \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0435\u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0438\u043C\u044B\u043C \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435\u043C \u0438 \u043B\u0435\u0433\u043A\u043E \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0432\u043E\u0434\u044B.</p>                   \n                   <p class=\"text-muted\">\xABMSFerox\xBB \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u0430\u043A \u043A\u0430\u0442\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440 \u043E\u043A\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0432 \u0440\u0435\u0430\u043A\u0446\u0438\u044F\u0445 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u0438\u0441\u043B\u043E\u0440\u043E\u0434\u0430 \u0441 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F\u043C\u0438 \u0436\u0435\u043B\u0435\u0437\u0430 (II) \u0438 (III) \u0432\u0430\u043B\u0435\u043D\u0442\u043D\u043E\u0433\u043E, \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0440\u0435\u0430\u043A\u0446\u0438\u0438 \u043E\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044F \u0433\u0438\u0434\u0440\u043E\u043A\u0441\u0438\u0434 \u0436\u0435\u043B\u0435\u0437\u0430 (III), \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0435 \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0438\u043C\u044B\u043C \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435\u043C \u0438 \u043B\u0435\u0433\u043A\u043E \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0432\u043E\u0434\u044B. \u0421\u0435\u0440\u043E\u0432\u043E\u0434\u043E\u0440\u043E\u0434 \u0438 \u043C\u0430\u0440\u0433\u0430\u043D\u0435\u0446 \u0442\u0430\u043A\u0436\u0435 \u043E\u043A\u0438\u0441\u043B\u044F\u044E\u0442\u0441\u044F \u0438 \u043E\u0441\u0435\u0434\u0430\u044E\u0442 \u0432 \u0441\u043B\u043E\u044F\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430, \u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435\u043C \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u043C \u0442\u043E\u043A\u043E\u043C \u0432\u043E\u0434\u044B. \xABMSFerox\xBB \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0434\u043B\u044F \u0440\u0435\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0440\u0435\u0430\u0433\u0435\u043D\u0442\u043E\u0432. \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u0440\u043E\u043C\u044B\u0432\u043A\u0430 \u0432\u043E\u0434\u043E\u0439 \u0438\u043B\u0438 \u0434\u043B\u044F \u0431\u043E\u043B\u0435\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u043F\u0440\u043E\u043C\u044B\u0432\u043A\u0438 - \u0432\u043E\u0434\u043E-\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u0430\u044F.</p>\n               ";
        tableBlockThirdImg.innerHTML = "\n                   <img src=\"../media/offer/color.png\">\n                   "; // tableBlockFiveBlock.style.display = 'block';  

        tableBlockFiveTitle.textContent = 'Установка умягчения';
        tableBlockFiveText.innerHTML = "\n                   <p class=\"text-muted\">\u0418\u043E\u043D\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445\n                   \u0432\u043E\u0434\u043E\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0438 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0434\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0441\u043E\u043B\u0435\u0439 \u0436\u0435\u0441\u0442\u043A\u043E\u0441\u0442\u0438, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435\n                   \u043D\u0430\u043A\u0438\u043F\u0438 \u0432 \u043A\u043E\u0442\u043B\u0430\u0445, \u0431\u043E\u0439\u043B\u0435\u0440\u0430\u0445, \u0441\u0442\u0438\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0438 \u043F\u043E\u0441\u0443\u0434\u043E\u043C\u043E\u0435\u0447\u043D\u044B\u0445 \u043C\u0430\u0448\u0438\u043D\u0430\u0445 \u0438 \u0434\u0440\u0443\u0433\u043E\u0439 \u0431\u044B\u0442\u043E\u0432\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438, \u0447\u0442\u043E\n                   \u043F\u0440\u043E\u0434\u043B\u0435\u0432\u0430\u044E\u0442 \u0441\u0440\u043E\u043A \u0441\u043B\u0443\u0436\u0431\u044B \u0432\u0441\u0435\u0439 \u0431\u0435\u0437 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0438. \u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u0432\u043E\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440,\n                   \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044E \u043C\u043E\u044E\u0449\u0438\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0438. \u0414\u0430\u043D\u043D\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0438\u043E\u043D\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u044B\u0445\n                   \u0441\u043C\u043E\u043B \u0440\u0430\u0437\u043D\u043E\u0433\u043E \u0433\u0440\u0430\u043D\u0443\u043B\u043E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u0430\u0432\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0445 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0443\u0434\u0430\u043B\u044F\u0442\u044C \u0438\u0437 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u043E\u0434\u044B \u0441\u043E\u043B\u0438\n                   \u0436\u0435\u0441\u0442\u043A\u043E\u0441\u0442\u0438 (Ca2+ \u0438 Mg2+)</p>\n                   <p class=\"text-muted\">\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0438\u043E\u043D\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u044B\u0435 \u0441\u043C\u043E\u043B\u044B, \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0449\u0438\u0435\n                       \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C\u0438 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u043C\u0438;</p>\n                   <ul class=\"text-muted\">\n                       <li class=\"list-item offer__list-item\">\u0432\u044B\u0441\u043E\u043A\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u043F\u043E\u0442\u043E\u043A\u0430 \u043F\u0440\u0438 \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u0438\u0438 \u0438 \u0440\u0435\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438;</li>\n                       <li class=\"list-item offer__list-item\">\u043D\u0438\u0437\u043A\u0438\u0439 \u0440\u0430\u0441\u0445\u043E\u0434 \u0432\u043E\u0434\u044B \u043D\u0430 \u043E\u0442\u043C\u044B\u0432\u043A\u0443 - \u0434\u043E 150-200\u043B;</li>\n                       <li class=\"list-item offer__list-item\">\u0440\u0430\u0432\u043D\u043E\u043C\u0435\u0440\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0440\u0435\u0430\u0433\u0435\u043D\u0442\u043E\u0432, \u0432\u043E\u0434\u044B \u0438 \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u043E\u0432;\n                       </li>\n                       <li class=\"list-item offer__list-item\"> \u043E\u0434\u043D\u043E\u0440\u043E\u0434\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0447\u0430\u044F \u0437\u043E\u043D\u0430;</li>\n                   </ul>\n                   <p class=\"text-muted\">\u0421\u0440\u043E\u043A \u0441\u043B\u0443\u0436\u0431\u044B \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u043E 4-6 \u043B\u0435\u0442.\n                   </p>\n               ";
        tableBlockFiveImg.innerHTML = "\n                   <img src=\"../media/offer/iron.png\">\n                   ";
        tableBlockFourTitle.textContent = 'Фильтр с угольным блоком ВВ10';
        tableBlockFourText.innerHTML = "\n                       <p class=\"text-muted\">\n                       \u0423\u0434\u0430\u043B\u044F\u0435\u0442 \u0438\u0437 \u0432\u043E\u0434\u044B \u0431\u044B\u0442\u043E\u0432\u043E\u0433\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043D\u0435\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u0437\u0430\u043F\u0430\u0445 \u0438 \u0446\u0432\u0435\u0442, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0445\u043B\u043E\u0440, \u0445\u043B\u043E\u0440\u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0430\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430.\n                       </p>     \n                   ";
        tableBlockFourImg.innerHTML = "\n                   <img src=\"../media/offer/smell.png\">\n                   ";
        break;

      case '':
        console.log('начало архива');
        break;

      default:
        modalBody.innerHTML = "\n                   <div class=\"modal-dialog modal-lg\" role=\"document\">\n                       <div class=\"modal-content\">\n                           <div class=\"modal-header\">\n                               <h5 class=\"modal-title\" id=\"exampleModalLabel\">\u0422\u0440\u0435\u0431\u0443\u044E\u0442\u0441\u044F \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445</h5>\n                               <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                   <span aria-hidden=\"true\">&times;</span>\n                               </button>\n                           </div>\n                           <div class=\"modal-body\">\n                               <p>\u041F\u043E \u0432\u0430\u0448\u0438\u043C \u0434\u0430\u043D\u043D\u044B\u043C \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0441\u0447\u0435\u0442. \u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438 \u043D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438.</p>\n                           </div>\n                           <div class=\"modal-footer\">\n                               <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>\n                           </div>\n                       </div>\n                   </div>\n                   ";
        setTimeout(function () {
          window.location.reload();
        }, 3000);
        console.log('По вашим данным требуется индивидуальный расчет. Оставьте контактные данные и наш менеджер свяжется с вами.');
        break;
    }
  }

  btnChangeScheme.addEventListener('click', function () {
    offerPrice.classList.add('hide');
    calcFormPart2.classList.remove('hide');
    calcFormPart1.classList.add('hide');
    getData('.calc__form--part1 .calc__input');
    getData('.calc__form--part1 .calc__option');
  }); // создаем класс прайса

  var PriceLine = /*#__PURE__*/function () {
    function PriceLine(numberItem, nameItem, unitsItem, volumeItem, lowPriceItem, highPriceItem) {
      _classCallCheck(this, PriceLine);

      this.numberItem = numberItem;
      this.nameItem = nameItem;
      this.unitsItem = unitsItem;
      this.volumeItem = volumeItem;
      this.lowPriceItem = lowPriceItem;
      this.highPriceItem = highPriceItem;
    }

    _createClass(PriceLine, [{
      key: "render",
      value: function render() {
        var element = document.createElement('tr');
        element.innerHTML = "\n                                   <th scope=\"row\">".concat(this.numberItem, "</th>\n                                   <td>").concat(this.nameItem, "</td>\n                                   <td>").concat(this.unitsItem, "</td>\n                                   <td>").concat(this.volumeItem, "</td>\n                                   <td>").concat(this.lowPriceItem, "</td>\n                                   <td>").concat(this.highPriceItem, "</td>\n                     ");
        bodyItemPrice.prepend(element);
        var sumLowPrice = +sumLowPriceItemPrice.innerText + +this.lowPriceItem;
        var sumHightPrice = +sumHightPriceItemPrice.innerText + +this.highPriceItem;
        sumLowPriceItemPrice.textContent = sumLowPrice;
        sumHightPriceItemPrice.textContent = sumHightPrice;
      }
    }]);

    return PriceLine;
  }();

  function getPrice() {
    // собираем прайс
    offerNumber = String(schemeNumber) + Number(points.selectedIndex + 1);

    switch (offerNumber) {
      //схема 1
      case '14':
        console.log('price 14');
        new PriceLine('4', 'Фильтр угольный ВВ СР20”', 'шт.', '1', '5500', '5500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр умягчения 1354 в сборе  Солевой бак на 70 л', 'шт.', '1', '47250', '66750').render();
        break;

      case '13':
        console.log('price 13');
        new PriceLine('4', 'Фильтр угольный ВВ СР20”', 'шт.', '1', '5500', '5500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр умягчения 1252 в сборе  Солевой бак на 70 л', 'шт.', '1', '41250', '60750').render();
        break;

      case '12':
        console.log('price 12');
        new PriceLine('4', 'Фильтр угольный ВВ СР10”', 'шт.', '1', '3500', '3500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр умягчения 1054 в сборе  Солевой бак на 70 л', 'шт.', '1', '34875', '54000').render();
        break;

      case '11':
        console.log('price 11');
        new PriceLine('4', 'Фильтр угольный ВВ СР10”', 'шт.', '1', '3500', '3500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр умягчения 1035 в сборе  Солевой бак на 70 л', 'шт.', '1', '28125', '49500').render();
        break;
      //схема 2  

      case '24':
        console.log('price 24');
        new PriceLine('4', 'Фильтр угольный ВВ СР20”', 'шт.', '1', '5500', '5500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа и жесткости 1354 в сборе  Солевой бак на 70 л', 'шт.', '1', '55500', '75000').render();
        break;

      case '23':
        console.log('price 23');
        new PriceLine('4', 'Фильтр угольный ВВ СР20”', 'шт.', '1', '5500', '5500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа и жесткости 1252 в сборе  Солевой бак на 70 л', 'шт.', '1', '48750', '67500').render();
        break;

      case '22':
        console.log('price 22');
        new PriceLine('4', 'Фильтр угольный ВВ СР10”', 'шт.', '1', '3500', '3500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа и жесткости 1054 в сборе  Солевой бак на 70 л', 'шт.', '1', '40500', '59250').render();
        break;

      case '21':
        console.log('price 21');
        new PriceLine('4', 'Фильтр угольный ВВ СР10”', 'шт.', '1', '3500', '3500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа и жесткости 1035 в сборе  Солевой бак на 70 л', 'шт.', '1', '31500', '52875').render();
        break;
      //схема 3  

      case '34':
        console.log('price 34');
        new PriceLine('3', 'Фильтр угольный ВВ СР20”', 'шт.', '1', '5500', '5500').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа и марганца 1665 в сборе', 'шт.', '1', '36375', '54750').render();
        break;

      case '33':
        console.log('price 33');
        new PriceLine('3', 'Фильтр угольный ВВ СР20”', 'шт.', '1', '5500', '5500').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа и марганца 1465 в сборе', 'шт.', '1', '31500', '50250').render();
        break;

      case '32':
        console.log('price 32');
        new PriceLine('3', 'Фильтр угольный ВВ СР10”', 'шт.', '1', '3500', '3500').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа и марганца 1354 в сборе', 'шт.', '1', '24750', '41250').render();
        break;

      case '31':
        console.log('price 31');
        new PriceLine('3', 'Фильтр угольный ВВ СР10”', 'шт.', '1', '3500', '3500').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа и марганца 1252 в сборе', 'шт.', '1', '31500', '52875').render();
        break;
      //схема 4                       

      case '44':
        console.log('price 44');
        new PriceLine('5', 'Фильтр угольный ВВ СР20”', 'шт.', '1', '5500', '5500').render();
        new PriceLine('4', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('3', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('2', 'Фильтр умягчения 1354 в сборе  Солевой бак на 70 л', 'шт.', '1', '47250', '66750').render();
        new PriceLine('1', 'Фильтр для удаления железа и марганца 1665 в сборе', 'шт.', '1', '36375', '54750').render();
        break;

      case '43':
        console.log('price 43');
        new PriceLine('5', 'Фильтр угольный ВВ СР20”', 'шт.', '1', '5500', '5500').render();
        new PriceLine('4', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('3', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('2', 'Фильтр умягчения 1252 в сборе  Солевой бак на 70 л', 'шт.', '1', '41250', '60750').render();
        new PriceLine('1', 'Фильтр для удаления железа и марганца 1465 в сборе', 'шт.', '1', '31500', '50250').render();
        break;

      case '42':
        console.log('price 42');
        new PriceLine('5', 'Фильтр угольный ВВ СР10”', 'шт.', '1', '3500', '3500').render();
        new PriceLine('4', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('3', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('2', 'Фильтр умягчения 1054 в сборе  Солевой бак на 70 л', 'шт.', '1', '34875', '54000').render();
        new PriceLine('1', 'Фильтр для удаления железа и марганца 1354 в сборе', 'шт.', '1', '24750', '41250').render();
        break;

      case '41':
        console.log('price 41');
        new PriceLine('5', 'Фильтр угольный ВВ СР10”', 'шт.', '1', '3500', '3500').render();
        new PriceLine('4', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('3', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('2', 'Фильтр умягчения 1035 в сборе  Солевой бак на 70 л', 'шт.', '1', '28125', '49500').render();
        new PriceLine('1', 'Фильтр для удаления железа и марганца 1252 в сборе', 'шт.', '1', '22125', '39000').render();
        break;
      //схема 5  

      case '54':
        console.log('price 54');
        new PriceLine('4', 'Фильтр угольный ВВ СР20”', 'шт.', '1', '5500', '5500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа, жесткости и ПМО 1354 в сборе  Солевой бак на 70 л', 'шт.', '1', '57000', '76500').render();
        break;

      case '53':
        console.log('price 53');
        new PriceLine('4', 'Фильтр угольный ВВ СР20”', 'шт.', '1', '5500', '5500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа, жесткости и ПМО 1252 в сборе  Солевой бак на 70 л', 'шт.', '1', '49500', '69000').render();
        break;

      case '52':
        console.log('price 52');
        new PriceLine('4', 'Фильтр угольный ВВ СР10”', 'шт.', '1', '3500', '3500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа, жесткости и ПМО 1054 в сборе  Солевой бак на 70 л', 'шт.', '1', '41250', '60750').render();
        break;

      case '51':
        console.log('price 51');
        new PriceLine('4', 'Фильтр угольный ВВ СР10”', 'шт.', '1', '3500', '3500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа, жесткости и ПМО 1035 в сборе  Солевой бак на 70 л', 'шт.', '1', '32250', '53625').render();
        break;
      //схема 6  

      case '64':
        console.log('price 64');
        new PriceLine('4', 'Фильтр угольный ВВ СР20”', 'шт.', '1', '5500', '5500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа, жесткости и нитратов 1354 в сборе  Солевой бак на 70 л', 'шт.', '1', '61500', '81000').render();
        break;

      case '63':
        console.log('price 63');
        new PriceLine('4', 'Фильтр угольный ВВ СР20”', 'шт.', '1', '5500', '5500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа, жесткости и нитратов 1252 в сборе  Солевой бак на 70 л', 'шт.', '1', '54750', '74250').render();
        break;

      case '62':
        console.log('price 62');
        new PriceLine('4', 'Фильтр угольный ВВ СР10”', 'шт.', '1', '3500', '3500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа, жесткости и нитратов 1054 в сборе  Солевой бак на 70 л', 'шт.', '1', '46500', '66000').render();
        break;

      case '61':
        console.log('price 61');
        new PriceLine('4', 'Фильтр угольный ВВ СР10”', 'шт.', '1', '3500', '3500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа, жесткости и нитратов 1035 в сборе  Солевой бак на 70 л', 'шт.', '1', '35250', '57000').render();
        break;
      //схема 7  

      case '74':
        console.log('price 64');
        new PriceLine('4', 'Фильтр угольный ВВ СР20”', 'шт.', '1', '5500', '5500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа, жесткости, аммония и ПМО 1354 в сборе  Солевой бак на 70 л', 'шт.', '1', '64500', '84000').render();
        break;

      case '73':
        console.log('price 73');
        new PriceLine('4', 'Фильтр угольный ВВ СР20”', 'шт.', '1', '5500', '5500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа, жесткости, аммония и ПМО 1252 в сборе  Солевой бак на 70 л', 'шт.', '1', '56250', '75750').render();
        break;

      case '72':
        console.log('price 72');
        new PriceLine('4', 'Фильтр угольный ВВ СР10”', 'шт.', '1', '3500', '3500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа, жесткости, аммония и ПМО 1054 в сборе  Солевой бак на 70 л', 'шт.', '1', '46500', '65625').render();
        break;

      case '71':
        console.log('price 71');
        new PriceLine('4', 'Фильтр угольный ВВ СР10”', 'шт.', '1', '3500', '3500').render();
        new PriceLine('3', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления железа, жесткости, аммония и ПМО 1035 в сборе  Солевой бак на 70 л', 'шт.', '1', '35250', '56625').render();
        break;
      //схема 8                       

      case '84':
        console.log('price 84');
        new PriceLine('4', 'Фильтр угольный ВВ СР20”', 'шт.', '1', '5500', '5500').render();
        new PriceLine('3', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('2', 'Фильтр для удаления железа и марганца 1665 в сборе', 'шт.', '1', '36375', '54750').render();
        new PriceLine('1', 'Система напорной аэрации 1354 в сборе', 'шт.', '1', '81000', '81000').render();
        break;

      case '83':
        console.log('price 83');
        new PriceLine('4', 'Фильтр угольный ВВ СР20”', 'шт.', '1', '5500', '5500').render();
        new PriceLine('3', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('2', 'Фильтр для удаления железа и марганца 1465 в сборе', 'шт.', '1', '31500', '50250').render();
        new PriceLine('1', 'Система напорной аэрации 1252 в сборе', 'шт.', '1', '69000', '69000').render();
        break;

      case '82':
        console.log('price 82');
        new PriceLine('4', 'Фильтр угольный ВВ СР10”', 'шт.', '1', '3500', '3500').render();
        new PriceLine('3', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('2', 'Фильтр для удаления железа и марганца 1354 в сборе', 'шт.', '1', '24750', '41250').render();
        new PriceLine('1', 'Система напорной аэрации 1054 в сборе', 'шт.', '1', '66750', '66750').render();
        break;

      case '81':
        console.log('price 81');
        new PriceLine('4', 'Фильтр угольный ВВ СР10”', 'шт.', '1', '3500', '3500').render();
        new PriceLine('3', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('2', 'Фильтр для удаления железа и марганца 1252 в сборе', 'шт.', '1', '22125', '39000').render();
        new PriceLine('1', 'Система напорной аэрации 0844 в сборе', 'шт.', '1', '64500', '64500').render();
        break;
      //схема 9 

      case '94':
        console.log('price 94');
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления цветности, мутности  и хлора в сборе 1665 в сборе', 'шт.', '1', '49500', '67500').render();
        break;

      case '93':
        console.log('price 93');
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления цветности, мутности  и хлора в сборе 1465 в сборе', 'шт.', '1', '42000', '60750').render();
        break;

      case '92':
        console.log('price 92');
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления цветности, мутности  и хлора в сборе 1354 в сборе', 'шт.', '1', '32625', '49500').render();
        break;

      case '91':
        console.log('price 91');
        new PriceLine('2', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('1', 'Фильтр для удаления цветности, мутности  и хлора в сборе 1252 в сборе', 'шт.', '1', '28500', '45750').render();
        break;
      //схема 10                       

      case '104':
        console.log('price 104');
        new PriceLine('6', 'Фильтр угольный ВВ СР20”', 'шт.', '1', '5500', '5500').render();
        new PriceLine('5', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('4', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('3', 'Фильтр умягчения 1354 в сборе  Солевой бак на 70 л', 'шт.', '1', '47250', '66750').render();
        new PriceLine('2', 'Фильтр для удаления железа, марганца, цветности и мутности 1665 в сборе', 'шт.', '1', '36375', '54750').render();
        new PriceLine('1', 'Система напорной аэрации 1354 в сборе', 'шт.', '1', '81000', '81000').render();
        break;

      case '103':
        console.log('price 103');
        new PriceLine('6', 'Фильтр угольный ВВ СР20”', 'шт.', '1', '5500', '5500').render();
        new PriceLine('5', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('4', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('3', 'Фильтр умягчения 1252 в сборе  Солевой бак на 70 л', 'шт.', '1', '41250', '60750').render();
        new PriceLine('2', 'Фильтр для удаления железа, марганца, цветности и мутности 1465 в сборе', 'шт.', '1', '31500', '50250').render();
        new PriceLine('1', 'Система напорной аэрации 1252 в сборе', 'шт.', '1', '69000', '69000').render();
        break;

      case '102':
        console.log('price 102');
        new PriceLine('6', 'Фильтр угольный ВВ СР10”', 'шт.', '1', '3500', '3500').render();
        new PriceLine('5', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('4', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('3', 'Фильтр умягчения 1054 в сборе  Солевой бак на 70 л', 'шт.', '1', '34875', '54000').render();
        new PriceLine('2', 'Фильтр для удаления железа, марганца, цветности и мутности 1354 в сборе', 'шт.', '1', '24750', '41250').render();
        new PriceLine('1', 'Система напорной аэрации 1054 в сборе', 'шт.', '1', '66750', '66750').render();
        break;

      case '101':
        console.log('price 101');
        new PriceLine('6', 'Фильтр угольный ВВ СР10”', 'шт.', '1', '3500', '3500').render();
        new PriceLine('5', 'Соль таблетированная (25кг)', 'меш.', '1', '600', '600').render();
        new PriceLine('4', 'Фильтр CEPEX LF 1" (130мкм) (Испания)', 'шт.', '1', '1400', '1400').render();
        new PriceLine('3', 'Фильтр умягчения 1035 в сборе  Солевой бак на 70 л', 'шт.', '1', '28125', '49500').render();
        new PriceLine('2', 'Фильтр для удаления железа, марганца, цветности и мутности 1252 в сборе', 'шт.', '1', '22125', '39000').render();
        new PriceLine('1', 'Система напорной аэрации 0844 в сборе', 'шт.', '1', '64500', '64500').render();
        break;

      default:
        console.log('switch не сработал');
        break;
    }
  }

  function setData() {
    // собираем офер
    getPrice();
    console.log('offerBlock', offerBlock); // получили блок офера
  } //send offer


  sendScheme.addEventListener('click', function () {
    var _offer$set;

    // отправляем офер на почту
    offerPrice.classList.remove('hide');
    calcFormPart2.classList.add('hide');
    setData('.calc__form');
    calcForm.innerHTML = "\n                     <h3 class=\"text-success\">".concat(userName.value, " \u0440\u0430\u0441\u0447\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u0432 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443. \u041C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0432\u0430\u0448\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u0441 \u0432\u0430\u043C\u0438 \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F</h3>;");
    userNameOffer.textContent = userName.value;
    var offer = html2pdf(offerBlock);
    offer.set((_offer$set = {
      format: 'letter',
      orientation: 'portrait',
      unit: 'in'
    }, _defineProperty(_offer$set, "format", 'a4'), _defineProperty(_offer$set, "pagebreak", {
      mode: 'avoid-all',
      after: '#page1',
      avoid: 'img'
    }), _defineProperty(_offer$set, "jsPDF", {
      orientation: 'portrait',
      unit: 'in',
      format: 'a4'
    }), _defineProperty(_offer$set, "margin", 15), _offer$set)); //   let formData = new FormData(formSelector); 
  }); //func getData
  //------------------------calc-end---------------------//
}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./#src/js/modules/date.js":
/*!*********************************!*\
  !*** ./#src/js/modules/date.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function date(selector) {
  var date = new Date().getFullYear();
  document.querySelector(selector).innerHTML = date;
}

/* harmony default export */ __webpack_exports__["default"] = (date);

/***/ }),

/***/ "./#src/js/modules/dateOffer.js":
/*!**************************************!*\
  !*** ./#src/js/modules/dateOffer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function dateOffer(selector) {
  var date = new Date();
  var month = date.getMonth() + 1; //months from 1-12

  var day = date.getDate();
  var year = date.getFullYear();
  var dateForOffer;

  if (day < 10) {
    dateForOffer = 'от ' + '0' + day + "/" + month + "/" + year;
  } else {
    dateForOffer = 'от ' + day + "/" + month + "/" + year;
  }

  document.querySelector(selector).innerHTML = dateForOffer;
}

/* harmony default export */ __webpack_exports__["default"] = (dateOffer);

/***/ }),

/***/ "./#src/js/modules/scroll-to.js":
/*!**************************************!*\
  !*** ./#src/js/modules/scroll-to.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);












function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//------------------------scroll-----------------------//
function scrollTo(selector) {
  var anchors = document.querySelectorAll(selector);

  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var blockID = anchor.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (scrollTo);

/***/ }),

/***/ "./#src/js/script.js":
/*!***************************!*\
  !*** ./#src/js/script.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_scroll_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-to */ "./#src/js/modules/scroll-to.js");
/* harmony import */ var _modules_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/date */ "./#src/js/modules/date.js");
/* harmony import */ var _modules_dateOffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dateOffer */ "./#src/js/modules/dateOffer.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ "./#src/js/modules/calc.js");






window.addEventListener("DOMContentLoaded", function () {
  try {
    Object(_modules_scroll_to__WEBPACK_IMPORTED_MODULE_0__["default"])('a.scroll-to');
  } catch (error) {
    console.log(error);
  }

  try {
    Object(_modules_date__WEBPACK_IMPORTED_MODULE_1__["default"])('.footer__date');
  } catch (error) {
    console.log(error);
  }

  try {
    Object(_modules_dateOffer__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-toggle=dataOffer]');
  } catch (error) {
    console.log(error);
  }

  try {
    Object(_modules_calc__WEBPACK_IMPORTED_MODULE_3__["default"])();
  } catch (error) {
    console.log(error);
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-uses-to-length.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var flags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map