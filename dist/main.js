/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = function() {\n    const content = document.querySelector('#content');\n\n    const page = document.createElement('div');\n    page.classList.add('page');\n\n    const heading = document.createElement('h2');\n    heading.textContent = \"About\";\n    page.appendChild(heading);\n\n    const info = document.createElement('p');\n    info.textContent = \"founded in 2021, we blazed a way for food pioneers all around the globe. welcome to the future.\"\n    page.appendChild(info);\n\n    content.appendChild(page);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = function() {\n    const content = document.querySelector('#content');\n\n    const page = document.createElement('div');\n    page.classList.add('page');\n\n    const img = document.createElement('img');\n    img.classList.add('mainimg');\n    img.src = \"building.jpg\";\n    page.appendChild(img);\n\n    const heading = document.createElement('h2');\n    heading.textContent = \"Welcome to My Restaurant\";\n    page.appendChild(heading);\n\n    const info = document.createElement('p');\n    info.textContent = \"this is my restaurant. please look around for a good food eating time\"\n    page.appendChild(info);\n\n    content.appendChild(page);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\nconst homeBtn = document.querySelector('#home');\nconst menuBtn = document.querySelector('#menu');\nconst aboutBtn = document.querySelector('#about');\n\nfunction clear() {\n    document.querySelector('.page').remove();\n}\n\nhomeBtn.addEventListener('click', function() {\n    clear();\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n});\n\nmenuBtn.addEventListener('click', function() {\n    clear();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\n});\n\naboutBtn.addEventListener('click', function() {\n    clear();\n    (0,_about__WEBPACK_IMPORTED_MODULE_2__.default)();\n});\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = function() {\n    const content = document.querySelector('#content');\n\n    const page = document.createElement('div');\n    page.classList.add('page');\n\n    const img = document.createElement('img');\n    img.classList.add('mainimg');\n    img.src = \"burger.jpeg\";\n    page.appendChild(img);\n\n    const heading = document.createElement('h2');\n    heading.textContent = \"Menu\";\n    page.appendChild(heading);\n\n    const bhead = document.createElement('h3');\n    bhead.textContent = \"burger\"\n    page.appendChild(bhead);\n\n    const binfo = document.createElement('p');\n    binfo.textContent = \"half pounder with onions and fries on top\"\n    page.appendChild(binfo);\n\n    const phead = document.createElement('h3');\n    phead.textContent = \"pizza\"\n    page.appendChild(phead);\n\n    const pinfo = document.createElement('p');\n    pinfo.textContent = \"cooked on a metal pan. 7 different cheeses. 3 different metals.\"\n    page.appendChild(pinfo);\n\n    content.appendChild(page);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;