//used on both index,html and receiver.html, to ensure the canvas is of a consistent size across the two windows
function createCanvas() {
	width = 500;
	height = 500;
	canvas = document.createElement( 'canvas' );
	canvas.width = width;
	canvas.height = height;
	document.body.appendChild( canvas );
	return canvas;
}

function init() {
	canvas = createCanvas();
	context = canvas.getContext( '2d' );

	//clear to black BG
	context.beginPath();
	context.rect( 0, 0, canvas.width, canvas.height );
	context.fillStyle = 'black';
	context.fill();

	return canvas;
}

//http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
// requestAnim shim layer by Paul Irish
window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       || 
		window.webkitRequestAnimationFrame || 
		window.mozRequestAnimationFrame    || 
		window.oRequestAnimationFrame      || 
		window.msRequestAnimationFrame     || 
		function(/* function */ callback, /* DOMElement */ element){
		window.setTimeout(callback, 1000 / 60);
	};
})();