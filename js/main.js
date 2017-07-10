// Storing main page text "header" for later reference
var text =
	`Write a program that prints the numbers from 1 to 100.<br>
	But for multiples of three print “Fizz” instead of the number<br>
	and for the multiples of five print “Buzz”. For numbers which<br>
	are multiples of both three and five print “FizzBuzz”<br><br>

	<span class='title'>Solution</span>
	<span class='code-block'>
		for (var i = 1; i <= 100; i++) {
			<br>&nbsp;&nbsp;
				if ((i % 3 == 0 && i % 5 == 0))<br> &nbsp;&nbsp;&nbsp;&nbsp;
					console.log('FizzBuzz');<br> &nbsp;&nbsp;
				else if (i % 3 == 0)<br> &nbsp;&nbsp;&nbsp;&nbsp;
					console.log('Fizz');<br> &nbsp;&nbsp;
				else if (i % 5 == 0)<br> &nbsp;&nbsp;&nbsp;&nbsp;
					console.log('Buzz');<br> &nbsp;&nbsp;
				else<br> &nbsp;&nbsp;&nbsp;&nbsp;
					console.log(i);<br>
		}</span>`;

//will render HTML to browser
function generateText(text) {
	var element = document.querySelector('.container');

	element.innerHTML = text;
}

//will run FizzBuzz up to given #
//Returns formated string with result
function FizzBuzz(upTo){
	let temp = "";
	for (var i = 1; i <= upTo; i++) {
		if ((i % 3 == 0 && i % 5 == 0))
			temp+= (`FizzBuzz<br>`);
		else if (i % 3 == 0)
			temp+= (`Fizz<br>`);
		else if (i % 5 == 0)
			temp+= (`Buzz<br>`);
		else
			temp+= (`${i}<br>`);
	}
	return temp;
}

function outputResult(fizzbuzz){
	var outputDiv = document.querySelector('.code-output');
	var result = fizzbuzz(100);
	// console.log(result);
	outputDiv.innerHTML = result;
}

// renders HTML to site
generateText(text);
outputResult(FizzBuzz);
