"use strict";

var a = { 'talk': 'Hello'};

function printToConsole(a) {
	a.talk = 'gone';
}

printToConsole(a);

console.log(a);
