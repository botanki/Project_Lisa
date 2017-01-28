function updateBullets() {
	game.physics.arcade.overlap(bullets, theEnemies, onBulletHitEnemy, null, game);
	game.physics.arcade.overlap(bullets, platforms, onBulletHitPlatform, null, game);
	game.physics.arcade.overlap(bullets, bossX, onBulletHitBossX, null, game);
}

function onBulletHitPlatform(bullet, platform) {
	bullet.kill();
}

function onBulletHitEnemy(bullet, enemy) {
	bullet.kill();
	enemy.kill();
}

function onBulletHitBossX(bossX, bullet) {
	bullet.kill();
	bossX.health -= 1;

	if (bossX.health == 0) {
		bossX.frame = 2;
		bossX.direction = 0;
		game.time.events.add(500, afterDeathFrame, this);
	} else {
		bossX.frame = 1;
		game.time.events.add(200, setDefaultFrame, this);
	}

	function afterDeathFrame() {
		setDefaultFrame();
		bossX.kill();
	}

	function setDefaultFrame() {
		bossX.frame = 0;
	}
}

function updateBulletsMovement(){
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
