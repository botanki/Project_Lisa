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
	stars: [
		{
			"spawnPos": { "x": 45, "y": 190 },
			"scaling": 1,
			"score": 1
		}
	],
	enemies: [
		{
			"spawnPos": { "x": 150, "y": 320 },
			"movementPos": { "left": 0, "right": 318 }
		},
		{
			"spawnPos": { "x": 500, "y": 420 },
			"movementPos": { "left": 400, "right": 768 }
		},
		{
			"spawnPos": { "x": 350, "y": 120 },
			"movementPos": { "left": 300, "right": 668 }
		}
	]
}
