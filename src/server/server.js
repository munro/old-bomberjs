require.paths.unshift('.')

var sys = require('sys'),
	ws = require('ws')

var clients = [];



//////////
// Client
//////////
function Client(_socket) {
	var self = this;
	var debounce = null;
	var queue = [];
	
	socket.addListener('data', function(data) {
		self.emit('message', JSON.parse(data));
	});
	
	var obj = {
		send: function(message) {
			if(debounce === null) {
				queue = [Client.DELAY, message];
			}
			else {
				queue.push(message);
			}
			socket.write(JSON.stringify(message));
		}
	};
	
	obj.prototype = new process.EventEmitter();
	
	return obj;
}

Client.DELAY = 15;

///////////////////
// Websocket Server
///////////////////
var server = ws.createServer(function(socket) {
	var _client = null;
	
	socket.addListener('connect', function(resource) {
		sys.puts('client connected from ' + resource);
		_client = Client(socket);
		clients.push(_client);
	});

	socket.addListener('close', function() {
		sys.puts('client left');
	});
});

server.listen(1337);

////////////////
// Simple Server
////////////////
var simple = ws.createServer(function(socket) {
	socket.addListener("connect", function(resource) {
		sys.puts("client connected from " + resource)
		socket.write("welcome\r\n")
	});

	socket.addListener("data", function(data) {
		socket.write(data)
	});

	socket.addListener("close", function() {
		sys.puts("client left")
	});
});

simple.listen(1338);

/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
// vim: ts=4 sw=4 sts=4 et:
