$(document).ready(function() {

	var userSum = 0;
	var userWins = 0;
	var userLosses = 0;
	var userTargetScore = 0;
	var crystalPointValues = [0, 0, 0, 0];
	var crystalIndex = 0;
	var isNewGame = false;

	newGame();

	// Start A New Game
	function newGame() {
		isNewGame = false;
		userSum = 0;
		// Generate a random number between 19 and 120.
		// This is the target number the user will try to equal.
		userTargetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		
		$("#displayTargetScore").html("Target Score: " + userTargetScore);
		$("#displayWins").html("Wins: " + userWins);
		$("#displayLosses").html("Losses: " + userLosses);
		$("#displayUserSum").html("Total Score: " + userSum);
		$("#wonLost").html("");

		//Generate 4 uniqe random numbers between 1 and 12
		crystalPointValues = [0, 0, 0, 0];
		var i;
		console.log("Generate 4 unique random numbers between 1 and 12:");
		for (i = 0; i < crystalPointValues.length; i++) {
			var temp = 0;
			temp = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
			console.log("temp = " + temp);
			// Eliminate Duplicate Crystal Point Values
			if (temp === crystalPointValues[0] ||
					temp === crystalPointValues[1] ||
					temp === crystalPointValues[2]) {
					i--;
			}
			else {
				crystalPointValues[i] = temp;
			}
		}
		console.log("crystalPointValues = " + crystalPointValues);
	}

	// Update The Game In Progress
	function updateGame() {
		userSum += crystalPointValues[crystalIndex];

		$("#displayUserSum").html("Total Score: " + userSum);
		
		if (userSum === userTargetScore) {
			updateWins();
		}
		else if (userSum > userTargetScore) {
			updateLosses();
		}
	}

	// The User Won
	function updateWins () {
		userWins++;
		isNewGame = true;
		$("#displayWins").html("Wins: " + userWins);
		$("#wonLost").html("You Won! Click a crystal to begin a new game.")
	}

	// The User Lost
	function updateLosses () {
		userLosses ++;
		isNewGame = true;
		$("#displayLosses").html("Losses: " + userLosses);
		$("#wonLost").html("You lost this time. Click a crystal to begin a new game.")
	}

	// On Click Events
	$("#crystal1").on("click", function() {
		crystalIndex = $("#crystal1").attr("value");
		if (isNewGame) {
			newGame();
		}
		else {
			updateGame();
		}
	})

	$("#crystal2").on("click", function() {
		crystalIndex = $("#crystal2").attr("value");
		if (isNewGame) {
			newGame();
		}
		else {
			updateGame();
		}
	})

	$("#crystal3").on("click", function() {
		crystalIndex = $("#crystal3").attr("value");
		if (isNewGame) {
			newGame();
		}
		else {
			updateGame();
		}
	})

	$("#crystal4").on("click", function() {
		crystalIndex = $("#crystal4").attr("value");
		if (isNewGame) {
			newGame();
		}
		else {
			updateGame();
		}
	})

})
