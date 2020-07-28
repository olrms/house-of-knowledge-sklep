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
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/index.js":
/*!*******************************!*\
  !*** ./resources/js/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./resources/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nconsole.log(\"Projektowanie stron www MilleniumSutdio | http://www.milleniumstudio.pl/\");\n$(document).ready(function () {// Fancybox\n  // $(\".wp-block-gallery .blocks-gallery-item a\").fancybox().attr('data-fancybox', 'gallery');\n  // AOS\n  // AOS.init({disable: 'mobile'});\n  //OWL carousel\n  //   var slidermain = $(\".slider-main.owl-carousel\").owlCarousel({\n  //     nav: true,\n  //     slideSpeed: 300,\n  //     paginationSpeed: 400,\n  //     items: 1,\n  //     dots: false,\n  //     loop: true,\n  //     autoplay: true,\n  //     autoplayTimeout: 4000,\n  //     autoplaySpeed: 1500,\n  //     autoplayHoverPause: false,\n  //   });\n}); // Cookies\n\nvar MScookies = /*#__PURE__*/function () {\n  function MScookies() {\n    _classCallCheck(this, MScookies);\n\n    this.WHCheckCookies();\n  }\n\n  _createClass(MScookies, [{\n    key: \"WHCheckCookies\",\n    value: function WHCheckCookies() {\n      if (this.WHReadCookie(\"cookies_accepted\") != \"T\") {\n        var message_container = document.createElement(\"div\");\n        message_container.id = \"cookies-message-container\";\n        var html_code = '<div id=\"cookies-message\" style=\"color: #000; padding: 10px 10px; font-size: 12px; line-height: 16px; display: flex; justify-content: space-between; align-items: center; position: fixed; bottom: 0px; right: 0; background-color: #fff; width: 100%; max-width: 320px; font-family: sans-serif; z-index: 999; box-sizing: border-box; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\">';\n        html_code += '<svg id=\"Capa_1\" style=\"fill:#000\" enable-background=\"new 0 0 556.235 556.235\" height=\"30\" viewBox=\"0 0 556.235 556.235\" width=\"30\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m278.118 0c-153.6 0-278.118 124.518-278.118 278.118s124.518 278.118 278.118 278.118c8.144 0 16.158-.533 24.126-1.218-4.327-10.325-6.743-21.652-6.743-33.547 0-24.433 10.151-46.429 26.381-62.219-5.701-12.89-8.999-27.073-8.999-42.075 0-57.6 46.694-104.294 104.294-104.294 15.002 0 29.184 3.297 42.075 8.999 15.791-16.23 37.786-26.381 62.219-26.381 11.895 0 23.222 2.415 33.547 6.741.685-7.968 1.218-15.98 1.218-24.124-.001-153.6-124.519-278.118-278.118-278.118zm-191.206 278.118c-9.599 0-17.382-7.783-17.382-17.382 0-9.601 7.783-17.382 17.382-17.382s17.382 7.781 17.382 17.382c0 9.599-7.783 17.382-17.382 17.382zm86.911 139.058c-19.201 0-34.765-15.566-34.765-34.765 0-19.201 15.564-34.765 34.765-34.765s34.765 15.564 34.765 34.765c0 19.199-15.564 34.765-34.765 34.765zm34.765-243.353c-19.201 0-34.765-15.566-34.765-34.765 0-19.201 15.564-34.765 34.765-34.765s34.765 15.564 34.765 34.765c0 19.199-15.564 34.765-34.765 34.765zm52.147 139.059c-9.599 0-17.382-7.783-17.382-17.382 0-9.601 7.783-17.382 17.382-17.382s17.382 7.781 17.382 17.382c.001 9.599-7.782 17.382-17.382 17.382zm104.294-243.353c9.599 0 17.382 7.781 17.382 17.382 0 9.599-7.783 17.382-17.382 17.382s-17.382-7.783-17.382-17.382c0-9.601 7.783-17.382 17.382-17.382zm17.383 173.824c-19.201 0-34.765-15.566-34.765-34.765 0-19.201 15.564-34.765 34.765-34.765s34.765 15.564 34.765 34.765c-.001 19.199-15.565 34.765-34.765 34.765z\"/></svg>';\n        html_code += '<div style=\"display: inline-block; width: 60%; margin: 0 2%; text-align: justify;\">Ta strona używa ciasteczek (cookies). ';\n        html_code += '<a href=\"' + privacylink + '\" style=\"color: #000;\">Dowiedz się więcej</a></div>';\n        html_code += '<a href=\"#\" id=\"accept-cookies-checkbox\" name=\"accept-cookies\" style=\"background-color: #000; padding: 4% 7%; color: #FFF; display: inline-block; margin-left: 1%; text-decoration: none; font-size: 16px; cursor: pointer;\">';\n        html_code += \"OK\";\n        html_code += \"</a>\";\n        html_code += \"</div>\";\n        message_container.innerHTML = html_code;\n        document.body.appendChild(message_container);\n\n        var _self = this;\n\n        document.getElementById(\"accept-cookies-checkbox\").addEventListener(\"click\", function (e) {\n          e.preventDefault();\n\n          _self.WHCloseCookiesWindow();\n        }, false);\n      }\n    }\n  }, {\n    key: \"WHCloseCookiesWindow\",\n    value: function WHCloseCookiesWindow() {\n      this.WHCreateCookie(\"cookies_accepted\", \"T\", 365);\n      document.getElementById(\"cookies-message-container\").removeChild(document.getElementById(\"cookies-message\"));\n    }\n  }, {\n    key: \"WHReadCookie\",\n    value: function WHReadCookie(name) {\n      var nameEQ = name + \"=\";\n      var ca = document.cookie.split(\";\");\n\n      for (var i = 0; i < ca.length; i++) {\n        var c = ca[i];\n\n        while (c.charAt(0) == \" \") {\n          c = c.substring(1, c.length);\n        }\n\n        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);\n      }\n\n      return null;\n    }\n  }, {\n    key: \"WHCreateCookie\",\n    value: function WHCreateCookie(name, value, days) {\n      var date = new Date();\n      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);\n      var expires = \"; expires=\" + date.toGMTString();\n      document.cookie = name + \"=\" + value + expires + \"; path=/\";\n    }\n  }]);\n\n  return MScookies;\n}();\n\nwindow.onload = function () {\n  var cookies = new MScookies();\n}; // Hamburger menu\n\n\nvar button = document.getElementById(\"hamburger\");\nvar menu = document.getElementById(\"menu\");\nbutton.addEventListener(\"click\", function () {\n  if (button.classList.contains(\"hamburger--opened\") == false) {\n    button.classList.add(\"hamburger--opened\");\n    menu.classList.add(\"menu--opened\");\n    document.body.style.overflow = \"hidden\";\n  } else {\n    button.classList.remove(\"hamburger--opened\");\n    menu.classList.remove(\"menu--opened\");\n    document.body.style.overflow = \"unset\";\n  }\n});\n\n//# sourceURL=webpack:///./resources/js/index.js?");

/***/ }),

/***/ "./resources/scss/style.scss":
/*!***********************************!*\
  !*** ./resources/scss/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./resources/scss/style.scss?");

/***/ })

/******/ });