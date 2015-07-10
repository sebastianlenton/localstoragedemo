(function() {
	"use strict";

	//some of this was taken from
	//http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

	// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/
	var canvas, context, toggle;

	canvas = init();
	context = canvas.getContext( '2d' );
	
	animate();

	function animate() {
		requestAnimFrame( animate );
		draw();
		var JSONobj = {
			imgData : convertCanvasToBase64()
		}
		setLSObj( 'canvas', JSONobj );
	}

	function draw() {
		var outerWidth = ( canvas.width / 2 );
		var innerWidth = ( canvas.width / 3 );
		var time = new Date().getTime() * 0.002;
		var x = Math.sin( time ) * innerWidth + outerWidth;
		var y = Math.cos( time * 0.9 ) * innerWidth + outerWidth;
		toggle = !toggle;

		context.fillStyle = toggle ? 'rgb(200,200,20)' :  'rgb(20,20,200)';
		context.beginPath();
		context.arc( x, y, 4, 0, Math.PI * 2, true );
		context.closePath();
		context.fill();
	}

	//convert to base64 so we can store img in localstorage
	function convertCanvasToBase64() {
		var pngUrl = canvas.toDataURL();
		return pngUrl;
	}

	//set LocalStorage object
	function setLSObj( key, value ) {
		value = JSON.stringify( value );
		localStorage.setItem( key, value );
	}
}());