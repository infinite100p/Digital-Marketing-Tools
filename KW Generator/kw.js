
var kw = ["kw1", "kw2", "kw3", "kw4", "kw5", "kw6"];

var r1 = document.getElementById('1');
var r2 = document.getElementById('2');

var r3 = $('#3');

var textArea = $('#txt');
var userInput;

inTitle(kw);
combo(kw)


$(document).ready(function() {
	userInput = $('#txt').val();


	printStr({});	

	var str = '';
	textArea.keypress(function(e) {
		str += String.fromCharCode(e.which);
	})
})

// print string in text field when user clicks button
function printStr() {
	$('#generate').click(function() {
		$('#3').html(String.fromCharCode(userInput.which));
		console.log(userInput);
		alert('yo');
		})
}

// generate keywords in array in the format: intitle:"[keyword]" 
function inTitle(arr) {
	arr.forEach(function(e) {
		r1.innerHTML += `<br>intitle:"${e}"`;
	})
}

function combo(arr) {
	arr.forEach(function(e) {
		r2.innerHTML += `<br>intitle:"${e}" inanchor:"${e}"`;
	})
}


