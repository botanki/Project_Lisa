var level3 = {
	player: {
		"spawnPos": { "x": 32, "y": 450 }
	},
	enemies: [
		{
			"spawnPos": { "x": 150, "y": 320 },
			"movementPos": { "left": 0, "right": 318 }
		},
		{
			"spawnPos": { "x": 500, "y": 420 },
			"movementPos": { "left": 400, "right": 768 }
		},
		{
			"spawnPos": { "x": 350, "y": 120 },
			"movementPos": { "left": 300, "right": 668 }
		}
	],
	ground: [
		{
			"spawnPos": { "x": 0, "y": 64 },
			"scale": { "x": 2, "y": 2 },
			"sprite": 'ground'
		}
	],
	ledges: [
		{ "spawnPos": { "x": 400, "y": 450 }, "sprite": 'ground' },
		{ "spawnPos": { "x": -50, "y": 350 }, "sprite": 'ground' },
		{ "spawnPos": { "x": 300, "y": 250 }, "sprite": 'ground' },
		{ "spawnPos": { "x": 150, "y": 150 }, "sprite": 'ground' }
	],
	stars: [
		{
			"spawnPos": { "x": 0, "y": 0 },
			"scaling": 1,
			"score": 1
		},
		{
			"spawnPos": { "x": 185, "y": 0 },
			"scaling": 1,
			"score": 1
		},
		{
			"spawnPos": { "x": 370, "y": 0 },
			"scaling": 1,
			"score": 1
		},
		{
			"spawnPos": { "x": 555, "y": 0 },
			"scaling": 1,
			"score": 1
		},
		{
			"spawnPos": { "x": 740, "y": 0 },
			"scaling": 1,
			"score": 1
		}
	],
	firstAidKits: [
		{
			"spawnPos": { "x": 400, "y": 220 }
		}
	],
	healthPoints: 1,
	greenMushrooms: [
		{
			"spawnPos": { "x": 550, "y": 395 }
		}
	]
}


level3.boss = {
	create: function() {
		boss = game.add.sprite(185, 0, 'boss3');
		game.physics.arcade.enable(boss);
		boss.body.gravity.y = 300;
		boss.body.collideWorldBounds = true;
		boss.frame = 0;
		boss.health = 4;
		boss.direction = 1;
	},
	update: function() {
		game.physics.arcade.collide(boss, platforms);
		game.physics.arcade.overlap(player, boss, enemyCollide, null, game);
		game.physics.arcade.overlap(bullets, boss, onBulletHitBoss, null, game);

		boss.body.velocity.x = 70 * boss.direction;

	    if (boss.x >= 420) {
	        boss.direction = -1;
	    } else if (boss.x <= 150) {
	    	boss.direction = 1;
	    }

		function onBulletHitBoss(boss, bullet) {
			bullet.destroy();
			boss.health -= 1;

			if (boss.health == 0) {
				boss.frame = 2;
				boss.direction = 0;
				game.time.events.add(500, afterDeathFrame, this);
			} else {
				boss.frame = 1;
				game.time.events.add(200, setDefaultFrame, this);
			}

			function afterDeathFrame() {
				setDefaultFrame();
				boss.destroy();
			}

			function setDefaultFrame() {
				boss.frame = 0;
			}
		}
	}
}
