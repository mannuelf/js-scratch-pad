var Task = function (name) {
	this.name = name;
	this.completed = false;
}

Task.prototype.complete = function () {
	console.log('completing task: ' + this.name);
	this.completed = true;
};

Task.prototype.save = function () {
	console.log('Saving task: ' + this.name);
};

module.exports = Task;
