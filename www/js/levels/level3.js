var level3 = {
	player: {
		"spawnPos": { "x": 32, "y": 450 }
	},
	enemies: [
		{
			"spawnPos": { "x": 185, "y": 0 },
			"movementPos": { "left": 185, "right": 500 }
		}
	],
	ground: [
		{
			"spawnPos": { "x": 0, "y": 64 },
			"scale": { "x": 2, "y": 2 },
			"sprite": 'ground'
		}
	],
	ledges: [
		{ "spawnPos": { "x": 400, "y": 450 }, "sprite": 'ground' },
		{ "spawnPos": { "x": -50, "y": 350 }, "sprite": 'ground' },
		{ "spawnPos": { "x": 300, "y": 250 }, "sprite": 'ground' },
		{ "spawnPos": { "x": 150, "y": 150 }, "sprite": 'ground' }
	],
	stars: [
		{
			"spawnPos": { "x": 0, "y": 0 },
			"scaling": 1,
			"score": 1
		},
		{
			"spawnPos": { "x": 185, "y": 0 },
			"scaling": 1,
			"score": 1
		},
		{
			"spawnPos": { "x": 370, "y": 0 },
			"scaling": 1,
			"score": 1
		},
		{
			"spawnPos": { "x": 555, "y": 0 },
			"scaling": 1,
			"score": 1
		},
		{
			"spawnPos": { "x": 740, "y": 0 },
			"scaling": 1,
			"score": 1
		}
	],
	firstAidKits: [
		{
			"spawnPos": { "x": 400, "y": 220 }
		}
	],
	healthPoints: 1,
	greenMushrooms: [
		{
			"spawnPos": { "x": 550, "y": 395 }
		}
	]
}
