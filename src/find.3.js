var array = [{
		id: 1,
		height: '20 feet'
	},
	{
		id: 2,
		height: '30 feet'
	}
];

function findWhere(array, criteria) {
	return array.find((item) => item.height === criteria.height)
}

findWhere(array, {height:'20 feet'})

console.log(findWhere(array, {height:'20 feet'}))