
const bodyParts = [
	'left arm',
	'right arm',
	'left leg',
	'right leg',
	'head',
	'one ear',
	'left elbow',
	'right elbow'
];

const colors = [
	'yellow',
	'blue',
	'brown',
	'navy'
];

function pickRandom(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function next() {
	console.log(`${pickRandom(bodyParts)} goes to... `);
	console.log(`${pickRandom(colors)}!`);
}

process.stdin.on('data', function (chunk) {
	next();
});
