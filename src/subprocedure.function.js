
function curve(arr, amount) {
	for (var i = 0; i < arr.length; ++i) {
		arr[i] += amount;
	}
}
var grades = ['33', '45', '88'];
curve(grades, 5);
console.log('Grades', grades)
