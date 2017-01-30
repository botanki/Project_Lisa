function createPlatforms () {
	if (platforms) platforms.destroy();
	platforms = game.add.group();
	platforms.enableBody = true;

	if (currentLevel.ground) {
		currentLevel.ground.forEach(function(levelGround) {
			var ground = platforms.create(levelGround.spawnPos.x, game.world.height - levelGround.spawnPos.y, levelGround.sprite);
			ground.scale.setTo(levelGround.scale.x, levelGround.scale.y);
			ground.body.immovable = true;
		});
	}

	if (currentLevel.ledges) {
		currentLevel.ledges.forEach(function(levelLedge) {
			var ledge = platforms.create(levelLedge.spawnPos.x, levelLedge.spawnPos.y, levelLedge.sprite);
			ledge.body.immovable = true;
		});
	}
}
