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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
	const total = arr.reduce((ac, cu) => (ac + cu))
	return arr.reduce((ac, cu) => {
		const x = total - cu
		if (x < ac[0] || ac[0] == 0) ac[0] = x
		if (x > ac[1]) ac[1] = x
		return ac
	}, [0, 0])
}

function main() {
	const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
	console.log(miniMaxSum(arr).join(' '))
}
