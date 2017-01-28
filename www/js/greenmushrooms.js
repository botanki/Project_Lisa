function createGreenMushroom(){
	greenMushroom = game.add.group();
	greenMushroom.enableBody = true;

	for (var i = 0; i < 1; i++) {
		greenMushroom.create(550, 395, 'gMushroom');
	}
}

function updateCollectGreenMushroom() {
	game.physics.arcade.overlap(player, greenMushroom, collectGreenMushroom, null, game);

	function collectGreenMushroom(player, createMushroom) {
		createMushroom.kill();
		moveSpeedMultiplier = 2.0;

		game.time.events.add(Phaser.Timer.SECOND * 2, stopBoost, this);

		function stopBoost() {
			moveSpeedMultiplier = 1.0;
		}
	}
}
