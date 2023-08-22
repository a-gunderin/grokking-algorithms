const binarySearch = (arr, item) => {
	let low = 0;
	let high = arr.length - 1;

	while(low <= high) {
		const mid = Math.floor((low + high) / 2);
		const guess = arr[mid];
		if (guess === item) {
			console.log(`Index of searched item '${item}' is ${mid}`);
			return mid;
		}
		if (guess < item) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	console.log(`Index of searched item '${item}' was not found`);
	return null;

};

const testArr = [1,2,3,4,5,6,7,8,9,10,12,18,50,100,1000];

console.log(binarySearch(testArr, 50));
console.log(binarySearch(testArr, 80));
