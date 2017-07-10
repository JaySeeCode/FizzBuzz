/* Write a program that prints the numbers from 1 to 100.
But for multiples of three print “Fizz” instead of the number
and for the multiples of five print “Buzz”. For numbers which
are multiples of both three and five print “FizzBuzz”/ */

function FizzBuzz(upTo){
	for (var i = 1; i <= upTo; i++) {
		if ((i % 3 == 0 && i % 5 == 0))
			console.log('FizzBuzz');
		else if (i % 3 == 0)
			console.log('Fizz');
		else if (i % 5 == 0)
			console.log('Buzz');
		else
			console.log(i);
	}
}

FizzBuzz(100);

"A <span class='code'>for</span> has three condtions:
a start condition, a stop condition, and an iterator:
<br>
	<span class='code-block'>
	for (var i = 0; i < myArray.length; i++) {
	<br>&nbsp;&nbsp;...<br>
	}</span>"

"Write a program that prints the numbers from 1 to 100.
But for multiples of three print “Fizz” instead of the number
and for the multiples of five print “Buzz”. For numbers which
are multiples of both three and five print “FizzBuzz”"

"<span class='code-block'>
for (var i = 1; i <= 100; i++) {
  <br>&nbsp;&nbsp;if ((i % 3 == 0 && i % 5 == 0))<br>
    <br>&nbsp;&nbspconsole.log('FizzBuzz');<br>
  <br>&nbsp;&nbsp;else if (i % 3 == 0)<br>
    <br>&nbsp;&nbsp;console.log('Fizz');<br>
  <br>&nbsp;&nbsp;else if (i % 5 == 0)<br>
    <br>&nbsp;&nbsp;console.log('Buzz');<br>
  <br>&nbsp;&nbsp;else<br>
    <br>&nbsp;&nbsp;console.log(i);<br>
}</span>"
