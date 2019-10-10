'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
	inputString += inputStdin;
});

process.stdin.on('end', _ => {
	inputString = inputString.trim().split('\n').map(str => str.trim());

	main();
});

function readLine() {
	return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
	/*
	 * Write your code here.
	 */
	const time = s.split(':')
	const isAM = time[2].toLowerCase().indexOf('am') != -1
	const hour = parseInt(time[0], 10)

	if (isAM && hour === 12) {
		time[0] = '00'
	} else if (!isAM && hour < 12) {
		time[0] = parseInt(time[0], 10) + 12
	}

	return `${time[0]}:${time[1]}:${time[2].replace(/\D/g, '')}`
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const s = readLine();

	let result = timeConversion(s);

	ws.write(result + "\n");

	ws.end();
}
