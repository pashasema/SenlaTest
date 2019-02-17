function getDimensionalArray(array, size) {
	let result = [];

	while (array.length>size) {
		result.push(array.splice(0, size));
	}
	if (array.length) {
		result.push(array);
	}
	return console.log(result);
}

$(function() {
	getDimensionalArray([0, 1, 2, 3, 4, 5], 3);
});