var level1 = {
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
		{ "spawnPos": { "x": 200, "y": 450 }, "sprite": 'ground' },
		{ "spawnPos": { "x": -50, "y": 350 }, "sprite": 'ground' },
		{ "spawnPos": { "x": 300, "y": 250 }, "sprite": 'ground' }
	],
	stars: [
		{
			"spawnPos": { "x": 500, "y": 0 },
			"scaling": 1,
			"score": 1
		},{
			"spawnPos": { "x": 100, "y": 200 },
			"scaling": 1,
			"score": 1
		}
	],
	firstAidKits: [
		{
			"spawnPos": { "x": 400, "y": 220 }
		}
	]
}
