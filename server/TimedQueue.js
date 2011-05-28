//////////////
// Timed Queue
//////////////
export = function(callback) {
	var timer = null,
		start, last_delay, events;

	function sendEvents() {
		callback(events);
		timer = null;
	}

	return {
		send: function(event) {
			// Create new event stack
			if(timer === null) {
				start = (new Date()).getTime();
				last_delay = export.DELAY;
				events = [export.DELAY];
				setTimeout(sendEvents, TimedQueue.DELAY);
			}
			// Push delay onto existing event stack
			else {
				var delay = export.DELAY - ((new Date()).getTime() - start);
				if(delay !== last_delay) {
					events.push(delay);
					last_delay = delay;
				}
			}

			events.push(event);
		},
		stop: function() {
			clearTimeout(timer);
			timer = null;
		}
	};
};

export.DELAY = 12; 

