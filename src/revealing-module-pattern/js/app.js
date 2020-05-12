
const app = (() => {
	"use strict"
	console.log("hello world");

	const moduleA = () => {
		console.log("module a says hi");
	}

	const moduleB = () => {
		console.log("module be says hi");
	}

	const moduleC = () => {
		console.log("module c says hi");
	}

	return {
		moduleA: moduleA,
		moduleB: moduleB,
		moduleC: moduleC
	}
})();
