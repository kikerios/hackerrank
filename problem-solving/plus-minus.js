'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
	inputString += inputStdin;
});

process.stdin.on('end', _ => {
	inputString = inputString.replace(/\s*$/, '')
		.split('\n')
		.map(str => str.replace(/\s*$/, ''));

	main();
});

function readLine() {
	return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
	const length = arr.length
	arr.reduce((ac, cu) => {
		if (cu > 0) ac[0]++
		else if (cu < 0) ac[1]++
		else ac[2]++
		return ac
	}, [0, 0, 0]).forEach(item => console.log((item / length)))
}

function main() {
	const n = parseInt(readLine(), 10);

	const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

	plusMinus(arr);
}
