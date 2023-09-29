const graph = {
	start: {
		a: 6,
		b: 2
	},
	a: {
		fin: 1
	},
	b: {
		a: 3,
		fin: 5
	},
	fin: null
};

const costs = {
	a: 6,
	b: 2,
	fin: Infinity
};

const parents = {
	a: 'start',
	b: 'start',
	fin: null
};

let processed = [];

const findLowestCostNode = () => {
	let lowestCost = Infinity;
	let lowestCostNode = null;

	for (let node in costs) {
		const cost = costs[node];
		if (cost < lowestCost && !processed.includes(node)) {
			lowestCost = cost;
			lowestCostNode = node;
		}
	}

	return lowestCostNode;
};

let node = findLowestCostNode(costs);

while(node !== null) {
	const cost = costs[node];
	const neighbors = graph[node];

	if (neighbors) {
		Object.keys(neighbors).forEach((n) => {
			const newCost = cost + neighbors[n];
			if (newCost < costs[n]) {
				costs[n] = newCost;
				parents[n] = node;
			}
		});
	}


	processed = [...processed, node ];
	node = findLowestCostNode(costs);
}

console.log(parents);
console.log(costs);