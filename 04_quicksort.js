const quickSort = (arr) => {
	if (arr.length < 2) return arr;

	const pivot = arr[0];
	const less = [];
	const greater = []

	for(let i = 1; i < arr.length; i += 1) {
		if (arr[i] < arr[0]) {
			less.push(arr[i])
		} else {
			greater.push(arr[i]);
		}
	}

	return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log(quickSort([1,10,5,2,3,5,5,1]));