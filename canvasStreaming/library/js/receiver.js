(function() {
	"use strict";

	var canvas, context;
	var image = new Image();

	canvas = init();
	context = canvas.getContext( '2d' );
	animate();

	function animate() {
		requestAnimFrame( animate );
		draw();
	}

	function draw() {
		image.src = getDataFromLocalStorage();
		context.drawImage( image, 0, 0);
	}

	function getDataFromLocalStorage() {
		var newData = JSON.parse( localStorage.getItem( 'canvas' ) );
		return newData.imgData;
	}
}());