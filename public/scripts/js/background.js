var socket = io();
var imgObj = null;
var escape = false;
var button_down = false;

// Initialize the image object onto the html file.
function init() {
    imgObj = document.createElement('myImage');
    imgObj.innerHTML = "<img src=\"/imgs/18254.jpg\" height=\"100\" width=\"100\" />";
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    document.body.appendChild(imgObj);
}

// Lets move our image to the right.
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
    socket.emit('move right', { });
}

// Moves the image left, yet this feature is not yet functional.
function moveLeft() {   
    imgObj.style.right = parseInt(imgObj.style.right) + 10 + 'px';
}

// None of these are functional.
function moveUp() {
    imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px';
}

function movedown() {
    imgObj.style.bottom = parseInt(imgObj.style.bottom) + 10 + 'px';
}

socket.on('move right', function (data) {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
});

window.onload = function () { init(); };
