(function() {
	"use strict";

	//what to do when the Local Storage changed event fires
	function displayLSEvent( e ) {
		switchClass();												//switch class to do the CSS3 animation
		var newDate = getDateFromLocalStorage();					//get the date data encoded in Local Storage
		setNewDate( newDate );
	}

	function getDateFromLocalStorage() {
		var newDate = JSON.parse( localStorage.getItem( 'command' ) );
		return newDate.date;
	}

	function switchClass() {
		var classes = document.getElementById('js-receiver');

		if( classes.classList.contains( 'on' ) ) {
			classes.classList.remove( 'on' );
		} else {
			classes.classList.add( 'on' );
		}
	}

	function setNewDate( newDate ) {
		document.getElementById( 'js-date' ).innerHTML = newDate;
	}

	//event listener for when local storage changes
	//only works on other windows of same origin
	window.addEventListener( "storage", displayLSEvent, true );
}());