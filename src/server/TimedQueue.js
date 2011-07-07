function TimedQueue(callback) {
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

TimedQueue.DELAY = 12;

export = TimedQueue;

/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
// vim: ts=4 sw=4 sts=4 et:
