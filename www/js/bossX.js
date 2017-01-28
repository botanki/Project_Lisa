function createBossX(){
	bossX = game.add.sprite(185, 0, 'bossX');
	game.physics.arcade.enable(bossX);
	bossX.body.gravity.y = 300;
	bossX.body.collideWorldBounds = true;
	bossX.frame = 0;
	bossX.health = 4;
	bossX.direction = 1;
}

function updateBossX(){
	game.physics.arcade.collide(bossX, platforms);
	game.physics.arcade.overlap(player, bossX, enemyCollide, null, game);
}

function updateBossXMovement() {
	bossX.body.velocity.x = 70 * bossX.direction;

    if (bossX.x >= 420) {
        bossX.direction = -1;
    } else if (bossX.x <= 150) {
    	bossX.direction = 1;
    }
}
