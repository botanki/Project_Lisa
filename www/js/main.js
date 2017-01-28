var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var platforms;
var player;
var cursors;
var stars;
var score = 0;
var scoreText;
var health = [];
var firstAidKit;
var greenMushroom;
var theEnemies;
var bossX;
var spaceKey;
var canShoot = true;
var bullets;
var moveSpeedMultiplier = 1.0;
var playersLastDirection = 1;

function preload() {
	game.load.image('sky', 'assets/sky.png');
	game.load.image('platform', 'assets/platform.png');
	game.load.image('star', 'assets/star.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('diamond', 'assets/diamond.png');
	game.load.image('first-aid', 'assets/firstaid.png');
	game.load.image('hp', 'assets/healthpoint.png');
	game.load.image('gMushroom', 'assets/greenmushroom.png');
	game.load.image('bullet', 'assets/bullet.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
	game.load.spritesheet('bossX', 'assets/boss.png', 130, 110);
}

function create() {
	game.add.sprite(0, 0, 'sky');

	spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

	bullets = game.add.group();
	bullets.enableBody = true;

	createPlatforms();
	enablePhysics();
	createPlayer();
	createTheEnemies();
	createStars();
	createfirstAidKit();
	createGreenMushroom();
	createHP();
	createBossX();
}

function update() {
	updatePlayerMovement();
	updateCollectStar();
	updateCollectFirstAidKit();
	updateCollectGreenMushroom();
	updateBullets();
	updateEnemy();
	updateBossX();
	updateEnemyMovement();
	updateBossXMovement();
	updateBulletsMovement();
}

function enablePhysics() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
}
