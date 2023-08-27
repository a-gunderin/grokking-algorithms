const findSmallest = (arr) => {
	let smallest = arr[0];
	let smallestIndex = 0;
	for (let i = 1; i < arr.length; i += 1) {
		if (arr[i] < smallest) {
			smallest = arr[i];
			smallestIndex = i;
		}
	}
	return smallestIndex;
}

const selectionSort = (arr) => {
	const sortedArr = [];
	const copyOfArr = [...arr];

	for(let i = 0; i < arr.length; i += 1) {
		const smallestIndex = findSmallest(copyOfArr);
		sortedArr.push(copyOfArr[smallestIndex]);
		copyOfArr.splice(smallestIndex, 1);
	}

	return sortedArr;
}

const testArr = [100, 1, 10, 5, 6, 25, 33];

console.log(selectionSort(testArr));