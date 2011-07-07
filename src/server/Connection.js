var Client = require('Client'),
    TimedQueue = require('TimedQueue');

function Connection(socket) {
    var queue = new TimedQueue();
    

    socket.addListener('data', function(data) {
        self.emit('message', JSON.parse(data));
    });
    
    var obj = {
        send: function(message) {
            if(debounce === null) {
                queue = [Connection.DELAY, message];
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

Connection.DELAY = 15;

export = Connection;

/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
// vim: ts=4 sw=4 sts=4 et:
