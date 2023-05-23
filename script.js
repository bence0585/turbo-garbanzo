const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(50,50,50)';
let margain = 10;
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;
ctx.fillRect(margain, margain, 1000, 1000);

class bogyo {
	constructor(x, y) {
		ctx.fillStyle = 'white';
		ctx.beginPath();
		ctx.ellipse(x, y, 10, 10, 0, 0, 360);
		ctx.fill();
	}
}

// 14 magas , 3 kezd +1

let board = [];
const bogyoOffset = 65;
for (let i = 3; i <= 14; i++) {
	tempBoard = [];
	for (let j = 0; j < i; j++) {
		let x = (canvas.width - margain) / 2 - j * bogyoOffset + i * (bogyoOffset / 2) - margain * 2;
		let y = i * bogyoOffset;
		tempBoard.push(new bogyo(x, y));
	}
	board.push(tempBoard);
}
console.log(board);

// kozepso = (canvas.width-margain)/2
// szelso = (canvas.width-margain)/2 - j*xOff + margain
// https://codepen.io/LFCProductions/pen/PoWVBdw
