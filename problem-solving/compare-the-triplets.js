'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on('end', function () {
	inputString = inputString.split('\n');

	main();
});

function readLine() {
	return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a = [], b = []) {
	const scores = [0, 0]
	a.forEach((va, i) => {
		if (va > b[i]) scores[0]++
		else if (va < b[i]) scores[1]++
	})
	return scores
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

	const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

	const result = compareTriplets(a, b);

	ws.write(result.join(' ') + '\n');

	ws.end();
}
