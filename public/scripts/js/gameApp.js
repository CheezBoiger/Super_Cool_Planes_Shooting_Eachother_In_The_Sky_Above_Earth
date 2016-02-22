var socket = io();

window.onload = function () {
    var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    var cursors;
    var player;
    function preload() {
        game.load.image('cat', '/assets/18254.jpg');
    }

    function create() {
        player = game.add.sprite(0, 0, 'cat');
        player.width = 550;
        player.height = 350;
        game.physics.enable(player, Phaser.Physics.ARCADE);
        // Use the keyboard ARROW keys to move the picture. You can move in any direction you want. Up, down, left,
        // right, up-left, up-right, diagonal, you name it.
        cursors = game.input.keyboard.createCursorKeys();
    }

    function update() {
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        
        if (cursors.left.isDown && cursors.up.isDown) {
            player.body.velocity.x = -150;
            player.body.velocity.y = -150;
        } else if (cursors.left.isDown && cursors.down.isDown) {
            player.body.velocity.x = -150;
            player.body.velocity.y = 150;
        } else if (cursors.left.isDown) {
            player.body.velocity.x = -150;
        } else if (cursors.right.isDown && cursors.up.isDown) {
            player.body.velocity.x = 150;
            player.body.velocity.y = -150;
        } else if (cursors.right.isDown && cursors.down.isDown) {
            player.body.velocity.x = 150;
            player.body.velocity.y = 150;
        } else if (cursors.right.isDown) {
            player.body.velocity.x = 150;
        } else if (cursors.down.isDown) {
            player.body.velocity.y = 150;
        } else if (cursors.up.isDown) {
            player.body.velocity.y = -150;
        } 

        socket.on('move', function (data) {
            if (data.x < 2) {
                player.body.velocity.x = -150;
            }
            if (data.x > 2) {
                player.body.velocity.x = 150;
            }
            if (data.y < 2) {
                player.body.velocity.y = 150;
            }
            if (data.y > 2) {
                player.body.velocity.y = -150;
            } 
        });
    }
};
