function createGreenMushrooms() {

	if (greenMushrooms) greenMushrooms.destroy();
	greenMushrooms = game.add.group();
	greenMushrooms.enableBody = true;

	if (!currentLevel.greenMushrooms)
		return;

	currentLevel.greenMushrooms.forEach(function(levelGreenMushrooms) {
		greenMushrooms.create(levelGreenMushrooms.spawnPos.x, levelGreenMushrooms.spawnPos.y, 'gMushroom');
	});
}

function updateCollectGreenMushrooms() {
	if (!currentLevel.greenMushrooms)
		return;

	game.physics.arcade.overlap(player, greenMushrooms, collectGreenMushroom, null, game);

	function collectGreenMushroom(player, greenMushroom) {
		greenMushroom.destroy();
		moveSpeedMultiplier = 2.0;

		game.time.events.add(Phaser.Timer.SECOND * 2, stopBoost, this);

		function stopBoost() {
			moveSpeedMultiplier = 1.0;
		}
	}
}
