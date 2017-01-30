function createPlayer() {
	if (player) player.destroy();
	var pos = currentLevel.player ? currentLevel.player.spawnPos : { x: 0, y: 0 };
	player = game.add.sprite(pos.x, pos.y, 'dude');

	game.physics.arcade.enable(player);

	player.body.bounce.y = 0.1;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;

	player.animations.add('left', [ 0, 1, 2, 3], 15, true);
	player.animations.add('right', [ 5, 6, 7, 8 ], 15, true);
}

function updatePlayerMovement() {
	cursors = game.input.keyboard.createCursorKeys();

	var hitPlatform = game.physics.arcade.collide(player, platforms);
	var moveSpeed = 150 * moveSpeedMultiplier;

	player.body.velocity.x = 0;

	if (cursors.left.isDown) {
		player.body.velocity.x = -moveSpeed;
		player.animations.play('left');
		playersLastDirection = -1;
	} else if (cursors.right.isDown) {
		player.body.velocity.x = moveSpeed;
		player.animations.play('right');
		playersLastDirection = 1;
	} else {
		player.animations.stop();
		player.frame = 4;
	}

	if (cursors.up.isDown && player.body.touching.down && hitPlatform) {
		player.body.velocity.y = -250;
	} else if (cursors.down.isDown) {
		player.body.velocity.y = 150;
	}

	if (spaceKey.isDown) {
		shootBullet();
	}
}
