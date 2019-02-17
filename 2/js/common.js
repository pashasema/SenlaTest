$(function() {
printColors();
});
function changeColor(){

	let r = Math.floor(Math.random() * (256));
	let g = Math.floor(Math.random() * (256));
	let b = Math.floor(Math.random() * (256));
	$(".item").last().css("background-color",'rgba(' + r + ',' + g + ',' + b + ')');

}

function printColors(){
	$('#input_submit').on('click', function(){

		let valueInput = $('#input_text').val();

		if(isNaN(valueInput)){
			alert('Write a number!');
		}

		else{
			if(valueInput>30){
				alert('Write a number from 0 to 30');
			}

			else{
				$(".color-blocks").empty();
				for (let j = 1; j <= valueInput; j++) {
					for (let i = 1; i <= valueInput; i++) {
						$(".color-blocks").append("<div class='item'></div>");
						changeColor();
					}
					$(".color-blocks").append("<br>");
				}
			}
		}
	});
}