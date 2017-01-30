function createHP() {
	if (health) health.destroy();
	health = game.add.group();
	health.enableBody = true;

	for (var i = 0; i < 1; i++) {
		health.create(i * 30, 0, 'hp');
	}
}

function createfirstAidKits() {
	if (firstAidKits) firstAidKits.destroy();
	firstAidKits = game.add.group();
	firstAidKits.enableBody = true;

	if (!currentLevel.firstAidKits)
		return;

	currentLevel.firstAidKits.forEach(function(levelFirstAidKit) {
		firstAidKits.create(levelFirstAidKit.spawnPos.x, levelFirstAidKit.spawnPos.y, 'first-aid');
	});
}

function updateCollectFirstAidKits() {
	game.physics.arcade.overlap(player, firstAidKits, collectFirstAidKit, null, game);

	function collectFirstAidKit(player, firstAidKit) {
		firstAidKit.destroy();

		function addHealth() {
            health.create(health.length * 30, 0, 'hp');
        }

        addHealth();
	}
}
