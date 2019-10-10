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

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
	const memory = {
		number: 0,
		counter: 0
	}
	arr.forEach(i => {
		if (`${i}` in memory) memory[i]++
		else memory[i] = 1

		if (memory[i] > memory.counter) {
			memory.counter = memory[i]
			memory.current = i
		} else if (memory[i] == memory.counter) {
			if (i <= memory.current) memory.current = i
		}
	})
	return memory.current
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const arrCount = parseInt(readLine().trim(), 10);

	const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

	const result = migratoryBirds(arr);

	ws.write(result + '\n');

	ws.end();
}
