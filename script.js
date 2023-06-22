//your JS code here. If required.
let p1;
let p2;

const btnStart = document.getElementById("btnStart");
btnStart.addEventListener("click",function(e){
	e.preventDefault();
	const player1 = document.getElementById("p1");
	const player2 = document.getElementById("p2");
	p1 = player1.value;
	p2 = player2.value;
});
