function createStars(){
	stars = game.add.group();
	stars.enableBody = true;

	for (var i = 0; i < 5; i++) {
		var star = stars.create(i * 185, 0, 'star');
		star.body.gravity.y = 25;
		star.body.bounce.y = 0.8 + Math.random() * 0.2;
	}
	scoreText = game.add.text(670, 15, 'score: 0', { fontSize: '32px', fill: '#ccc '});
}

function updateCollectStar() {
	game.physics.arcade.collide(stars, platforms);
	game.physics.arcade.overlap(player, stars, collectStar, null, game);

	function collectStar(player, star) {
		star.kill();

		score += 1;
		scoreText.text = 'Score: ' + score;
	}
}
