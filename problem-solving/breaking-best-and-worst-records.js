'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
	inputString += inputStdin;
});

process.stdin.on('end', function () {
	inputString = inputString.replace(/\s*$/, '')
		.split('\n')
		.map(str => str.replace(/\s*$/, ''));

	main();
});

function readLine() {
	return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
	let minScore = scores[0]
	let maxScore = scores[0]
	const counter = [0, 0]
	scores.forEach(score => {
		if (score < minScore) {
			minScore = score
			counter[1]++
		}

		if (score > maxScore) {
			maxScore = score
			counter[0]++
		}
	})
	return counter
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const n = parseInt(readLine(), 10);

	const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

	const result = breakingRecords(scores);

	ws.write(result.join(' ') + '\n');

	ws.end();
}
