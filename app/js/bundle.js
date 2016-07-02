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
	var Arrays = __webpack_require__(5);
	var ArraysAccessingWriting = __webpack_require__(6);
	var ArraysStrings = __webpack_require__(7);
	var IteratorFunctions = __webpack_require__(8);

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

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	var numbers = ['1', '2', '3', '4', '5'];

	// array constructor
	var numbers2 = new Array(6, 7, 8, 9, 10, 11);

	var numbers3 = '4';
	var numbers4 = ['1', '2', '3'];

	console.log('arrays:', numbers.length, numbers2.length);
	console.log('numbers3: is it an array?', Array.isArray(numbers3));
	console.log('numbers4: is it an array?', Array.isArray(numbers4));

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	var nums = ['1', '2', '3', '4', '5'];
	var sum = 0;
	var sum2 = nums[0] + nums[1] + nums[2] + nums[3] + nums[4];

	for (var i = 0; i < nums.length; ++i) {
		sum += nums[i];
	}

	console.log('accessingarrays:', sum);
	console.log('accessingarrays:', sum2);

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	var sentence = 'Portugal have been playing in the European Championships';
	var words = sentence.split(" ");

	for (var i = 0; i < words.length; ++i) {
		console.log('word' + i + ': ' + words[i]);
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	function square(num) {
	    console.log('square', num, num + num);
	}

	var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

	nums.forEach(square);

/***/ }
/******/ ]);