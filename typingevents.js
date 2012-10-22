/**
 * Typingevents.js
 * Add typingstarted and typingstopped events
 */

(function(){
	'use strict';

	var threshold = 500,
		typing = false,
		dirty = false,
		lastPressed;

	var typingStoppedEvent = new CustomEvent("typingstopped", {
		bubbles: true,
		cancelable: false
	});
	
	var typingStartedEvent = new CustomEvent("typingstarted", {
		bubbles: true,
		cancelable: false
	});
	
	document.onkeydown = function(){
		dirty = true;
		if(!typing){
			typing = true;
			dispatchEvent(typingStartedEvent);
		}
	};

	document.onkeyup = function(){
		var keyupTime = lastPressed = currentTime();
		setTimeout(function(){
			if(keyupTime === lastPressed && dirty){
				typing = false;
				dispatchEvent(typingStoppedEvent);
			}
		}, threshold);
	};

	function dispatchEvent(event){
		document.dispatchEvent(event);
	}

	function currentTime(){
		return (new Date()).getTime();
	}
})();
