var task = {
	title: "My Title",
	description: "My Description"
};

Object.defineProperty(task, 'toString', {
	value: function () {
		return this.title + ' ' + this.description;
	},
	writable: false, // stop you from accidentally overwriting this property
	enumarable: false,
	configurable: false
});

// inheritance
var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
	value: function () {
		return this.title + ' ' + 'is urgent';
	},
	writable: false,
	enumarable: false,
	configurable: false
});

console.log('TASK', Object.keys(task) );
console.log('URGENT TASK', Object.keys(urgentTask) );
console.log('URGENT TASK', urgentTask.toString());
