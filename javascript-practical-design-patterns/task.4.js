var task = {
	title: "My Title",
	description: "My Description"
};

Object.defineProperty(task, 'toString', {
	value: function () {
		return this.title + ' ' + this.description;
	},
	writable: false, // stop you from accidentally overwriting this property
	enumarable: true,
	configurable: false
});


console.log( Object.keys(task) );
