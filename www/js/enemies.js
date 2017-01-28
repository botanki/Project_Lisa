function createTheEnemies() {
	theEnemies = game.add.group();
	theEnemies.enableBody = true;

	createEnemy(150, 320);
	createEnemy(500, 420);
	createEnemy(350, 120);
}

function createEnemy(x, y) {
    var theEnemy = theEnemies.create(x, y, 'baddie');
    game.physics.arcade.enable(theEnemy);
    theEnemy.body.gravity.y = 300;
    theEnemy.body.collideWorldBounds = true;
    theEnemy.direction = 1;
}

function updateEnemy(){
	game.physics.arcade.collide(theEnemies, platforms);
	game.physics.arcade.overlap(player, theEnemies, enemyCollide, null, game);
}

function updateEnemyMovement() {
    updateOneEnemyMovement(theEnemies.children[0], 0, 318);
    updateOneEnemyMovement(theEnemies.children[1], 400, 768);
    updateOneEnemyMovement(theEnemies.children[2], 300, 668);

    function updateOneEnemyMovement(theEnemy, leftMost, rightMost) {
        theEnemy.body.velocity.x = 175 * theEnemy.direction;

        if (theEnemy.x >= rightMost) {
            theEnemy.direction = -1;
        } else if (theEnemy.x <= leftMost) {
            theEnemy.direction = 1;
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
