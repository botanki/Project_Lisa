var level5 = {
	player: {
		"spawnPos": { "x": 750, "y": 450 }
	},
	enemies: [
		{
			"spawnPos": { "x": 50, "y": 0 },
			"movementPos": { "left": 50, "right": 420 }
		},{
			"spawnPos": { "x": 425, "y": 0 },
			"movementPos": { "left": 50, "right": 420 }
		},
	],
	ground: [
		{
			"spawnPos": { "x": 0, "y": 64 },
			"scale": { "x": 2, "y": 2 },
			"sprite": 'ground'
		}
	],
	ledges: [
		{ "spawnPos": { "x": 225, "y": 450 }, "sprite": 'ground' },
		{ "spawnPos": { "x": -50, "y": 350 }, "sprite": 'ground' },
		{ "spawnPos": { "x": 300, "y": 250 }, "sprite": 'ground' },
		{ "spawnPos": { "x": 150, "y": 150 }, "sprite": 'ground' },
		{ "spawnPos": { "x": 50, "y": 50 }, "sprite": 'ground' }
	],
	stars: [
		{
			"spawnPos": { "x": 225, "y": 0 },
			"scaling": 2,
			"score": 5
		}
	]
}
