var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var platforms;
var player;
var cursors;
var stars;
var score = 0;
var scoreText;
var health;
var firstAidKits;
var greenMushrooms;
var enemies;
var boss;
var spaceKey;
var canShoot = true;
var bullets;
var moveSpeedMultiplier = 1.0;
var playersLastDirection = 1;
var currentLevel;
var currentLevelIndex = 0;

var levels = [
	//level1,
	//level2,
	level3,
	//level4
]

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
	game.load.spritesheet('boss4', 'assets/boss4.png', 130, 110);
}

function create() {

	game.add.sprite(0, 0, 'sky');
	game.physics.startSystem(Phaser.Physics.ARCADE);

	spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

	bullets = game.add.group();
	bullets.enableBody = true;

	loadLevel(currentLevelIndex);
}

function loadLevel(levelIndex) {
	currentLevelIndex = levelIndex;
	currentLevel = levels[levelIndex];

	createPlatforms();
	createPlayer();
	createEnemies();
	createStars();
	createfirstAidKits();
	createGreenMushrooms();
	createHP();
	createBoss();

	function createBoss() {
		if (boss) {
			boss.destroy();
			boss = null;
		}

		if (currentLevel.boss != undefined)
			currentLevel.boss.create();
	}
}


function update() {
	updatePlayerMovement();
	updateCollectStars();
	updateCollectFirstAidKits();
	updateCollectGreenMushrooms();
	updateBullets();
	updateEnemies();
	if (boss) currentLevel.boss.update();
	updateBulletsMovement();


	if (stars.countLiving() == 0) {
		loadLevel(currentLevelIndex + 1);
	}
}
