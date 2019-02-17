$(function() {
	sheeps();
});

function sheeps(){
	$('#input_submit').on('click', function(){

		let valueInput = $('#input_text').val();
		if(isNaN(valueInput)){
			alert('Write a number!');
		}
		else if(valueInput>30){
			alert('Write a number from 0 to 30');
		}
		else{
			for (let i = 1; i <= valueInput; i++) {
				$("body").append("<span>" + (i) +" sheep...</span>");
			}
			$("body").append("<br>");
		}
	});
}