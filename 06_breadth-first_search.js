const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

const personIsSeller = (name) => name[name.length - 1] === "m";

const search = (name) => {
	let searchQueue = graph[name];
	const searched = [];

	while (searchQueue.length) {
		const person = searchQueue.shift();
		if (!searched.includes(person) && personIsSeller(person)) {
			console.log(`${person} is a mango seller!`);
			return true;
		}
		searched.push(person);
		searchQueue = [...searchQueue, ...graph[person]];
	}

	console.log(`No one's selling mangoes!`);
	return false;

};

search("you");
