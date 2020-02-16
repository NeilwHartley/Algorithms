/*
let text = "Iamcountingvowels";
function countVowels (text) {

	let split = text.toLowerCase().split("");
	let len = split.length;
	console.log(split);
	console.log(len);
	let count = 0;
	for (let j = 0; j < len; j++) {
		let key = split[j];
		let a = "a";
		let e = "e";
		let i = "i";
		let o = "o";
		let u = "u";
		
		if (key === a) {
			console.log("a");
			count = count + 1;
		}
		if (key === e) {
			console.log("e");
			count = count + 1;
		}
		if (key === i) {
			console.log("i");
			count = count + 1;
		}
		if (key === o) {
			console.log("o");
			count = count + 1;
		}
		if (key === u) {
			console.log("u");
			count = count + 1;
		}
	}
	console.log(count);
}

function joeCountVowels(text) {

	//Regular Expressions are good for testing patterns in strings.
	const vowelTest = new RegExp("a|e|i|o|u", "i");
	let vowelCount = 0;
	let letters = text.split("");

	//Arrays have a common iterator method forEach
	letters.forEach((letter) => {
		if (vowelTest.test(letter)) {
			vowelCount++;
		}
	})
	console.log("Joe Counts: " + vowelCount)
	return vowelCount;
}

countVowels(text);
joeCountVowels(text);
*/

//**************************************************************************************************************

let arr = [7, 6, -5, 4, 3, 2, 1];

console.log(arr);

arr.sort(function(a, b) {return a - b});
console.log(arr);



function sort (array) {

	let len = array.length;
	for (let i = 1; i < len; i++) {
		console.log("For: " + array);
		let current = array[i];
		let j = i - 1;
		while (j >= 0 && array[j] > current) {
			console.log("While: " + array);
			array[j + 1] = array[j];
			j = j - 1;
		}
		array[j + 1] = current;
	}
	return array
}

console.log(sort(arr));
