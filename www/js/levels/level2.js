var level2 = {
	player: {
		"spawnPos": { "x": 32, "y": 450 }
	},
	ground: [
		{
			"spawnPos": { "x": 0, "y": 64 },
			"scale": { "x": 2, "y": 2 },
			"sprite": 'ground'
		}
	],
	ledges: [
		{ "spawnPos": { "x": 400, "y": 450 }, "sprite": 'ground' },
		{ "spawnPos": { "x": 100, "y": 350 }, "sprite": 'ground' },
		{ "spawnPos": { "x": 300, "y": 250 }, "sprite": 'ground' },
		{ "spawnPos": { "x": 150, "y": 150 }, "sprite": 'ground' }
	],
	stars: [
		{
			"spawnPos": { "x": 300, "y": 0 },
			"scaling": 1,
			"score": 1
		},{
			"spawnPos": { "x": 600, "y": 330 },
			"scaling": 1,
			"score": 1
		}
	],
	healthPoints: 1,
	greenMushrooms: [
		{
			"spawnPos": { "x": 350, "y": 295 }
		}
	]
}
