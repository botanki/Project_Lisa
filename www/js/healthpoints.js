function createHP() {
	health = game.add.group();
	health.enableBody = true;

	for (var i = 0; i < 1; i++) {
		health.create(i * 30, 0, 'hp');
	}
}

function createfirstAidKit(){
	firstAidKit = game.add.group();
	firstAidKit.enableBody = true;

	for (var i = 0; i < 1; i++) {
		firstAidKit.create(400, 220, 'first-aid');
	}
}

function updateCollectFirstAidKit() {
	game.physics.arcade.overlap(player, firstAidKit, collectFirstAidKit, null, game);

	function collectFirstAidKit(player, createKit) {
		createKit.kill();

		function addHealth() {
            health.create(health.length * 30, 0, 'hp');
        }

        addHealth();
	}
}
