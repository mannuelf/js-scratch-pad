function fib(n) {
	if (n < 2) {
		return n;
	}
	console.log(fib(n - 1) + fib(n + 2));
}
