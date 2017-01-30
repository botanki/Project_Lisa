function createEnemies() {
	if (enemies) enemies.destroy();
	enemies = game.add.group();
	enemies.enableBody = true;

	if (!currentLevel.enemies)
		return;

	currentLevel.enemies.forEach(function(levelEnemy) {
		var enemy = enemies.create(levelEnemy.spawnPos.x, levelEnemy.spawnPos.y, 'baddie');
		enemy = Object.assign(enemy, levelEnemy);

		initializeEnemy(enemy);
	});
}

function initializeEnemy(enemy) {
	game.physics.arcade.enable(enemy);
	enemy.body.gravity.y = 300;
	enemy.body.collideWorldBounds = true;
	enemy.direction = 1;
}

function updateEnemies() {
	if (!currentLevel.enemies)
		return;

	game.physics.arcade.collide(enemies, platforms);
	game.physics.arcade.overlap(player, enemies, enemyCollide, null, game);

	updateEnemyMovement();
}

function updateEnemyMovement() {
	enemies.forEach(function(enemy) {
		updateOneEnemyMovement(enemy);
	});

	function updateOneEnemyMovement(enemy) {
		enemy.body.velocity.x = 150 * enemy.direction;

		if (enemy.x >= enemy.movementPos.right) {
			enemy.direction = -1;
		} else if (enemy.x <= enemy.movementPos.left) {
			enemy.direction = 1;
		}
	}
}

function enemyCollide(player, enemy) {
	health.removeChildAt(health.length-1);

	player.x = 32;
	player.y = game.world.height - 150;

	if (health.length == 0) {
		player.kill();
	}
}
