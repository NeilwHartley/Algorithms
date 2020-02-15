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

countVowels(text);