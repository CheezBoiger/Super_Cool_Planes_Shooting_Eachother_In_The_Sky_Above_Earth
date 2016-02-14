var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var io = require('socket.io').listen(app.listen(port));

app.use(express.static(__dirname + "/public"));

console.log("websocket server created")

io.on("connection", function(socket) {
  console.log("websocket connection open");
  
  socket.on('move right', function (data) {
      io.emit('move right');
      console.log('moved right');
  });
  
  socket.on('move left', function (data) {
      io.emit('move left');
      console.log('moved left');
  });
  
  socket.on('move up', function (data) {
      io.emit('move up');
      console.log('moved up');
  });
  
  socket.on('move down', function (data) {
      io.emit('move down');
      console.log('moved down');
  });
})
