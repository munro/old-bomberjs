function User(socket) {
    // Party controllers
    socket.on('party_create', function () {
        socket.send('party_create', Party.create());
    });
    socket.on('party_invite', function (invitee) {
        User.get(invitee, function (invitee) {
            user.party.invite(invitee);
        });
    });
    socket.on('party_join', function (id) {
        socket.send('party_join', Party.find(id).join(user));
    });
    socket.on('party_leave', function () {
        user.party && user.party.leave();
    });
    socket.on('party_ready', function (state) {
        user.party && user.party.ready(user, state);
    });
}

/*meow*/
Socket.middleware('other_move', function (msg) {
    msg.player = Player(msg.player_id);
});
function P() {
    socket.on('other_move', function (msg) {
        msg.sent = 
        setTimeout(function () {
        }, Player.max_delay - msg.player.delay - msg.delay);
    });
}

/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
// vim: ts=4 sw=4 sts=4 et:
