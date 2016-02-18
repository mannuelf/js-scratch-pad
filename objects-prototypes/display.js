function display() {
	for (var i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] === 'object') {
			displayObject(arguments[i])
		} else {
			displayValue(arguments[i], true)
		}

	}
}
