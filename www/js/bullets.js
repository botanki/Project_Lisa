function updateBullets() {
	game.physics.arcade.overlap(bullets, enemies, onBulletHitEnemy, null, game);
	game.physics.arcade.overlap(bullets, platforms, onBulletHitPlatform, null, game);
}

function onBulletHitPlatform(bullet, platform) {
	bullet.destroy();
}

function onBulletHitEnemy(bullet, enemy) {
	bullet.destroy();
	enemy.destroy();
}

function updateBulletsMovement() {
	for (var i = 0; i < bullets.children.length; i++) {
		bullets.children[i].body.velocity.x = 500 * bullets.children[i].direction;
	}
}

function shootBullet() {
	if (canShoot) {
		var bullet = bullets.create(player.x, player.y, 'bullet');
		bullet.direction = playersLastDirection;
		canShoot = false;
		game.time.events.add(Phaser.Timer.SECOND * 1, enableShooting, this);
	}

	function enableShooting() {
		canShoot = true;
	}
}
