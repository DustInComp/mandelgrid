var x, y, xm, ym, r, imax,
	pointerPos = { x: 0, y: 0 };

function updateVar() {
	x = innerWidth / 2;
	y = innerHeight / 2;
	xm = x;
	ym = y;
}

function draw() {
	var c = document.getElementById("canvas");
	ctx = c.getContext("2d");

	c.width = c.clientWidth = innerWidth;
	c.height = c.clientHeight = innerHeight;
	ctx.globalCompositeOperation = 'xor';

	for (var i = 0; i < imax; i++) {
		var x1 = x - ( Math.cos(2*Math.PI/imax * i +.5*Math.PI)*r );
		var y1 = y - ( Math.sin(2*Math.PI/imax * i +.5*Math.PI)*r );
		var r1 = Math.sqrt( Math.pow(x1-xm, 2) + Math.pow(y1-ym, 2) );
		ctx.beginPath();
		ctx.arc( x1, y1, r1, 0, 2*Math.PI );
		ctx.fill();
	}
}

document.addEventListener( "mousemove", function(e) {
	x = e.clientX || e.pageX;
	y = e.clientY || e.pageY;
}, false);

document.addEventListener( "DOMContentLoaded", function() {
	r = Math.ceil( prompt("Scale", 100) ) || 100;
	imax = Math.ceil( prompt("Complexity", 50) ) || 50;

	updateVar();
	draw();
});

window.onresize = function(event) {updateVar(); draw()};

setInterval( draw, 16 );
