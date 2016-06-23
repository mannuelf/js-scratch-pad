/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var factorialFunction = __webpack_require__(4);
	var SubProcedureFunction = __webpack_require__(3);
	var Scope = __webpack_require__(6);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	'use strict';

	function curve(arr, amount) {
		for (var i = 0; i < arr.length; ++i) {
			arr[i] += amount;
		}
	}
	var grades = ['33', '45', '88'];
	curve(grades, 5);
	console.log('Grades', grades);

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	function factorial(number) {
		var product = 1;
		for (var i = number; i >= 1; --i) {
			product *= 2;
		}
		return product;
	}

	console.log(factorial(4));
	console.log(factorial(5));
	console.log(factorial(10));

/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	'use strict';

	function showScope() {
		scope = 'local';
		return scope;
	}

	var scope = 'global';

	console.log('I am', scope);
	console.log('I am', showScope());

/***/ }
/******/ ]);