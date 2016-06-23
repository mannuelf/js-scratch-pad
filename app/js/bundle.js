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

	var factorialFunction = __webpack_require__(1);
	var SubProcedureFunction = __webpack_require__(2);
	var Scope = __webpack_require__(3);
	var Checking = __webpack_require__(4);

/***/ },
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ function(module, exports) {

	'use strict';

	function showScope() {
		scope = 'local';
		return scope;
	}

	var scope = 'global';

	console.log('I am', scope);
	console.log('I am', showScope());

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	function Checking(amount) {
		this.balance = amount;
		this.deposit = deposit;
		this.withdraw = withdraw;
		this.toString = toString;
	}

	// the this keyword is used to tie each function and property to an object instance

	function deposit(amount) {
		this.balance += amount;
	}

	function withdraw(amount) {
		if (amount <= this.balance) {
			this.balance -= amount;
		}

		if (amount > this.balance) {
			console.log("Insuficient Funds!!");
		}
	}

	function toString() {
		return "Balance: " + this.balance;
	}

	var account = new Checking(500);
	account.deposit(1000);
	console.log(account.toString());
	account.withdraw(750);
	console.log(account.toString());
	account.withdraw(800);
	console.log(account.toString());

/***/ }
/******/ ]);