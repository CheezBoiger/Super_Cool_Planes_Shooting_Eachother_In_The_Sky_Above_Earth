var socket = io();
var imgObj = null;
var escape = false;
var button_down = false;

// Initialize the image object onto the html file.
function init() {
    imgObj = document.createElement('myImage');
    imgObj.innerHTML = "<img src=\"/assets/18254.jpg\" height=\"100\" width=\"100\" />";
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';
    document.body.appendChild(imgObj);
}

function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 50 + 'px';
    console.log(imgObj.style.left);
}

function moveLeft() {
    if (imgObj.style.left > '0px') {
        imgObj.style.left = parseInt(imgObj.style.left) - 50 + 'px';
        console.log(imgObj.style.left);
    }
}

function moveUp() {
    if (imgObj.style.top > '0px') {
        imgObj.style.top = parseInt(imgObj.style.top) - 50 + 'px';
        console.log(imgObj.style.top);
    }
}

function moveDown() {
    imgObj.style.top = parseInt(imgObj.style.top) + 50 + 'px';
    console.log(imgObj.style.top);
}

socket.on('move right', function (data) {
    moveRight();
});

socket.on('move left', function (data) {
    moveLeft();
});

socket.on('move up', function (data) {
    moveUp();
});

socket.on('move down', function (data) {
    moveDown();
});

window.onload = function () { init(); };
