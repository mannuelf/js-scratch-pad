function product(...numbers) {
	//   var numbers = [a,b,c,d,e];
	return numbers.reduce(function (acc, number) {
		return acc * number;
	}, 1);
}
