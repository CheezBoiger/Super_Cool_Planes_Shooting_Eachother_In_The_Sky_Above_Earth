var socket = io();
$('form').submit(function () {
    socket.emit('message');
    return false;
});

socket.on('message', function (msg) {
    $('#messages').append($('<li>').text("button pushed"));
});

