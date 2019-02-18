$(function() {
	shortestWord();
});

function shortestWord(){
	$("#input_text").keypress(function(event){
		var ew = event.which;
		if(ew == 32)
			return true;
		if(48 <= ew && ew <= 57)
			return true;
		if(65 <= ew && ew <= 90)
			return true;
		if(97 <= ew && ew <= 122)
			return true;
		if(1040 <= ew && ew <= 1105)
			return true;
		return false;
	});
	$('#input_submit').on('click', function(){
		$('p').empty();
		let valueInput = $('#input_text').val();
		let words= valueInput.split(' ');
		let smallestWord = Infinity;
		for (let i=0; i<words.length ; i++) {
			if(smallestWord>words[i].length && words[i]!=''){
				smallestWord = words[i].length;
			};
		}
		$('body').append('<p>The shortest length of the word: ' + smallestWord + '</p>');
	});

}