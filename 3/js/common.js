$(function() {
	shortestWord();
});

function shortestWord(){

	$('#input_submit').on('click', function(){
		$('p').empty();
		let valueInput = $('#input_text').val();
		let words= valueInput.split(' ');
		let smallestWord = Infinity;
		for (let i=0; i<words.length ; i++) {
			if(smallestWord>words[i].length){
				smallestWord = words[i].length;
			};
		}
		$('body').append('<p>The shortest length of the word: ' + smallestWord + '</p>');
	});

}