function getLowerestIndex(array, number) {
	var sortArray = array.sort();
	for (let i = 0; array.length>i; i++) {
		if(number<sortArray[i]) {
			console.log(i);
			break;
		}
	}
}
$(function() {
	getLowerestIndex([1,2,3,4], 1.5);
});