var stack = {
	array: [],
	undoStack: [],

	push: function (value) {
		this.undoStack.push(function () {
			this.array.pop();
		});
	},
};

console.log(stack.push.this.undoStack);
