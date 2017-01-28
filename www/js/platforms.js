function createPlatforms (){
	platforms = game.add.group();
	platforms.enableBody = true;

	var ground = platforms.create(0, game.world.height - 64, 'ground');
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;

	var ledge = platforms.create(400, 450, 'ground');
	ledge.body.immovable = true;

	ledge = platforms.create(-50, 350, 'ground');
	ledge.body.immovable = true;

	ledge = platforms.create(300, 250, 'ground');
	ledge.body.immovable = true;

	ledge = platforms.create(150, 150, 'ground');
	ledge.body.immovable = true;
}
