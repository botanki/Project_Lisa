function createStars() {
	if (stars) stars.destroy();
	stars = game.add.group();
	stars.enableBody = true;

	scoreText = game.add.text(670, 15, 'score: 0', { fontSize: '32px', fill: '#ccc '});

	if (!currentLevel.stars)
		return;

	currentLevel.stars.forEach(function(levelStar) {
		var star = stars.create(levelStar.spawnPos.x, levelStar.spawnPos.y, 'star');
		star = Object.assign(star, levelStar);

		star.scale.setTo(levelStar.scaling, levelStar.scaling);
		star.body.gravity.y = 25;
		star.body.bounce.y = 0.8 + Math.random() * 0.2;
	});
}

function updateCollectStars() {
	if (!currentLevel.stars)
		return;

	game.physics.arcade.collide(stars, platforms);
	game.physics.arcade.overlap(player, stars, collectStar, null, game);

	function collectStar(player, star) {
		star.kill();

		score += star.score;

		scoreText.text = 'Score: ' + score;
	}
}
