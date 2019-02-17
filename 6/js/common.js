$(function() {
	frame(['Create', 'a', 'frame'], '+');
});

function frame(array, border) {

	//checks if the array is full and length of border is equal 1
	if(array.length && (border.length == 1) ){
		let longestItem = ' ';
		let space = ' ';

		// calculate the longest element of the array
		for (let j = 0; j <array.length; j++) {
			if(longestItem.length < array[j].length) longestItem = array[j];
		};

		//display the upper border of the frame
		console.log(border.repeat(longestItem.length + 4));

		//output the elements of the array
		for (let i = 0; i <array.length; i++) {
			if(array[i] != longestItem) {
				console.log(border + " " + array[i] + space.repeat(longestItem.length - array[i].length)  + " " + border);
			}
			else{
				console.log(border + " " + array[i]  + " " + border);
			}
		}

		//display the lower border of the frame
		console.log(border.repeat(longestItem.length + 4));

	}
	else alert('Array should not be empty');
};

