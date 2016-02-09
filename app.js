var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var io = require('socket.io').listen(app.listen(port));

app.use(express.static(__dirname + "/public"));

console.log("websocket server created")

io.on("connection", function(socket) {
  console.log("websocket connection open");
  
  socket.on('message', function(message) {
    io.emit('message');
    console.log('received: %s', 'message');
  })
})