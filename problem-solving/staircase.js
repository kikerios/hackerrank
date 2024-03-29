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

// Complete the staircase function below.
function staircase(n) {
	let lines = ''
	for (let i = 0; i < n; i++) {
		for (let j = n - 1; j >= 0; j--) {
			if (j <= i) lines += '#'
			else lines += ' '
		}
		if (i != n - 1) lines += '\n'
	}
	return lines
}

function main() {
	const n = parseInt(readLine(), 10);
	console.log(staircase(n));
}
