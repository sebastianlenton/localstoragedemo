(function() {
	"use strict";

	clickBind();

	//bind our button click
	function clickBind() {
		document.getElementById('js-sender').addEventListener('mousedown', function () {

			//create object to be set in Local Storage
			//you can store params in here, which 
			//can be used by the receiving page
			var JSONobj = {
				date : getCurrentdate(),
				rnd : Math.random()

				//the Math.random allows the storage event to be received
				//as quickly as you can click. Without it you can only send
				//one event per second, as the event only fires when unique
				//data is received
			}

			setLSObj( 'command', JSONobj );

			createExplosion();
		});
	}

	//we're going to send the date & time when the button was
	//last pressed to the second window.
	function getCurrentdate() {
		var currentdate = new Date();
		var datetime = "Last LocalStorage event received:<br />" + currentdate.getDate() + "/"
		        + (currentdate.getMonth()+1)  + "/" 
		        + currentdate.getFullYear() + " @ "  
		        + currentdate.getHours() + ":"  
		        + currentdate.getMinutes() + ":" 
		        + currentdate.getSeconds();
		return datetime;
	}

	//set LocalStorage object
	function setLSObj( key, value ) {
		value = JSON.stringify( value );
		localStorage.setItem( key, value );
	}

	//anims
	//you can ignore the below if you're only inerested in the LocalStorage stuff
	function animBind( element ) {
		var e = element;
		e.addEventListener("animationend", listener, false);
	}

	function createExplosion() {
		var newExplosion = document.createElement("div");
		newExplosion.className = "square explode noselect";
		document.getElementById('js-sender').appendChild( newExplosion );
		animBind( newExplosion );
	}

	function listener(e) {
		switch(e.type) {
			case "animationend":
				this.remove();
			break;
		}
	}
}());