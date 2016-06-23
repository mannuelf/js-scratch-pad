
var stack = {
	array: [],
	undoStack: [],

	push: function (value) {
		this.undoStack.push(function () {
			this.array.pop();
		});
		return this.array.push(value);
	},

	pop: function () {
		var popped = this.array.pop();
		this.undoStack.push(function () {
			this.array.push(popped);
		});
		return popped;
	},

	isEmpty: function () {
		return array.length === 0;
	},

	undo: function () {
		this.undoStack.pop().call(this);
	}
};

stack.push('hello');
stack.push('there');
stack.undo();
stack.undo();
stack.pop();
