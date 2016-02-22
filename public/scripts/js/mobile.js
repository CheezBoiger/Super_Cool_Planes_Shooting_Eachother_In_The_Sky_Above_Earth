var socket = io();

$('#right').click(function () {
  socket.emit('move right', { });
});
      
$('#left').click(function () {
  socket.emit('move left', { });
});
      
$('#down').click(function () {
  socket.emit('move down', { });
});
      
$('#up').click(function () {
  socket.emit('move up', { });
});

if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", function(event) {
    socket.emit('move', {x: Math.round(event.gamma), y: Math.round(event.beta)});
  }
)};