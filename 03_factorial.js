const factorialRecursion = (n) => {
	if (n < 0) return new Error(`Nummber couldn\'t be less then zero`);
	if (n === 0 || n === 1) return 1;
	return factorialRecursion(n - 1) * n;
};

const factorialLoop = (n) => {
	if (n < 0) return new Error(`Nummber couldn\'t be less then zero`);
	if (n === 0 || n === 1) return 1;
	let result = 1;
	for (let i = 2; i <= n; i += 1) {
		result *= i;
	}
	return result;
};

console.log(factorialRecursion(5));
console.log(factorialLoop(5));