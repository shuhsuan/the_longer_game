
// You can write more code here

/* START OF COMPILED CODE */

import PlayerPrefab from "../prefabs/PlayerPrefab.js";
/* START-USER-IMPORTS */
import DialogueManager from "../prefabs/DialogueManager.js";
/* END-USER-IMPORTS */

export default class River extends Phaser.Scene {

	constructor() {
		super("River");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// river
		const river = this.add.sprite(321, 238, "river", 0);
		river.play("river");

		// playerPrefab
		const playerPrefab = new PlayerPrefab(this, 598, 215);
		this.add.existing(playerPrefab);

		// puzzle_1
		const puzzle_1 = this.add.rectangle(287, 130, 640, 489);
		puzzle_1.name = "puzzle_1";
		puzzle_1.setOrigin(0.45, 0.28);
		puzzle_1.visible = false;
		puzzle_1.isFilled = true;

		// puzzle_2
		const puzzle_2 = this.add.rectangle(317, 138, 30, 30);
		puzzle_2.name = "puzzle_2";
		puzzle_2.visible = false;
		puzzle_2.isFilled = true;

		// puzzle_3
		const puzzle_3 = this.add.rectangle(223, 344, 20, 20);
		puzzle_3.name = "puzzle_3";
		puzzle_3.visible = false;
		puzzle_3.isFilled = true;

		// puzzle_4
		const puzzle_4 = this.add.rectangle(506, 193, 30, 20);
		puzzle_4.name = "puzzle_4";
		puzzle_4.visible = false;
		puzzle_4.isFilled = true;

		// puzzle_5
		const puzzle_5 = this.add.rectangle(159, 247, 30, 30);
		puzzle_5.name = "puzzle_5";
		puzzle_5.visible = false;
		puzzle_5.isFilled = true;

		// puzzle_7
		const puzzle_7 = this.add.rectangle(54, 184, 20, 20);
		puzzle_7.name = "puzzle_7";
		puzzle_7.visible = false;
		puzzle_7.isFilled = true;

		// flying_eye
		const flying_eye = this.add.sprite(151, 249, "flying_eye", 0);
		flying_eye.name = "flying_eye";
		flying_eye.scaleX = 2;
		flying_eye.scaleY = 2;
		flying_eye.play("flying_eye");

		// merchant
		const merchant = this.add.sprite(320, 133, "Merchant", 1);
		merchant.name = "merchant";
		merchant.scaleX = 1.2;
		merchant.scaleY = 1.2;
		merchant.play("merchant");

		// tent_guy
		const tent_guy = this.add.sprite(555, 336, "sprite2", 397);
		tent_guy.name = "tent_guy";
		tent_guy.scaleX = 1.2;
		tent_guy.scaleY = 1.2;
		tent_guy.play("tent_guy");

		// puzzle_6
		const puzzle_6 = this.add.rectangle(554, 339, 20, 20);
		puzzle_6.name = "puzzle_6";
		puzzle_6.visible = false;
		puzzle_6.isFilled = true;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.editorCreate();

		this.player = new PlayerPrefab(this, 598, 215);

		this.dialogueManager = new DialogueManager(this);

		this.dialogueManager.text.setColor("#f8f8f8");

		this.currentPuzzle = 0;

		this.interacting = false;

		this.input.keyboard.on("keydown-SPACE", () => {
			if (this.dialogueManager.active) {
				this.dialogueManager.next();
			}
		});


		//collisions
		this.collisionGroup = this.physics.add.staticGroup();
		this.children.list.forEach(obj => {
			if (obj.name && obj.name.startsWith("collision_")) {
				this.physics.add.existing(obj, true);
				this.collisionGroup.add(obj);
			}
		});
		this.physics.add.collider(this.player, this.collisionGroup);

		//success dialogue handling
		this.events.on("puzzleCorrect", (puzzle) => {

			console.log(this.dialogueManager.active)

			if (puzzle.successDialogue?.length) {

				console.log("in success dialogue")
				this.dialogueManager.start(puzzle.successDialogue);

				this.events.once("dialogueFinished", () => {
					console.log("hello")
					this.completePuzzle(puzzle);
					this.interacting = false;
				});

			} else {
				this.completePuzzle(puzzle);
				this.interacting = false;
			}
		});

		this.onDialogueFinished = (puzzle) => {
			switch (puzzle.puzzleIndex) {
				case 1:
					this.completePuzzle(puzzle);
					this.interacting = false;
					break;
				case 2:
					this.startPuzzleInput("11", puzzle);
					break;
				case 3:
					this.startPuzzleInput("test", puzzle);
					break;
				case 4:
					this.startPuzzleInput("sisyphus", puzzle);
					break;
				case 5:
					this.startPuzzleInput("flask", puzzle);
					break;
				case 6:
					this.startPuzzleInput("yes", puzzle);
					break;
			}

			this.currentPuzzle = puzzle.puzzleIndex;
			this.activePuzzle = null;

		}

		//triggers and dialogues
		this.spaceKey = this.input.keyboard.addKey("SPACE");
		this.puzzles = this.physics.add.staticGroup();


		this.children.list.forEach(obj => {
			if (obj.name && obj.name.startsWith("puzzle_")) {
				this.physics.add.existing(obj, true);
				this.puzzles.add(obj);

				obj.puzzleIndex = parseInt(obj.name.split("_")[1]);

				switch (obj.puzzleIndex) {
					case 1:
						obj.dialogue = [
							"Welcome to the Potion lab",
							"You're trapped until you find safe passage out",
							"Find the one who can help you"
						],
							obj.action = "dialogue";
						break;

					case 2:
						obj.dialogue = [
							"Soo, you're stuck here until you find the exit",
							"In the meanwhile, do you remember how many texture bits were on the floor in the other area?"
						],
							obj.successDialogue = [
								"Nice",
								"Hope you didn't have to restart for that",
								"There's a potion on the table over there for you"
							],
							obj.action = "dialogue";
						break;

					case 3:
						obj.dialogue = [
							"There are jujubes in this potion",
							"What's the botanical name for it?"
						],
							obj.successDialogue = [
								"That information might help later on",
								"On the notice board for example"
							],
							obj.action = "dialogue";
						break;

					case 4:
						obj.dialogue = [
							"Jujubes are common ingredients in potion making",
							"What's the myth that sounds a lot like the genus?"
						],
							obj.successDialogue = [
								"So mythical, so mysterious, a lot like someone I know",
								"And a lot like something in this area"
							],
							obj.action = "dialogue";
						break;

					case 5: 
							obj.dialogue = [
								"The Winged Witness: Heye there",
								"The Winged Witness: Want to play a game?",
								"The Winged Witness: I'll give you a hint for the way out if you do",
								"Har V: i'm sceptical",
								"The Winged Witness: It's fun don't worry! I'm also really good at it",
								"Har V: fine..",
								"The Winged Witness: Eye spy with my little eye",
								"The Winged Witness: Something beginnining with F"
							],
							obj.successDialogue = [
								"The Winged Witness: Told you I'm good at it, that was a great find if I may say so myself",
								"The Winged Witness: As promised, the one you're looking for is floppy"
							],
							obj.action = "dialogue"
							break;

					case 6:
						obj.dialogue = [
							"Floppy: Howdy traveler",
							"Floppy: Hope the road hasn't been too rough thus far",
							"Floppy: Not sure how you've managed to find yourself in the backrooms where potions and mythical items are created",
							"Floppy: But I assume you'll want to find your way out",
							"Floppy: Just need to make sure you're someone who can be trusted",
							"Floppy: Do you like cats?"
						],
							obj.successDialogue = [
								"Floppy: Mmm a man of culture",
								"Floppy: Very well, along the path you'll find some broken trees",
								"Floppy: One of them leads to the outside world",
								"Floppy: Once you leave this place, there is no turning back",
								"Floppy: It was nice to meet you, Har the Fifth"
							],
							obj.action = "dialogue";
						break;

					case 7:
						obj.action = "scene";
						obj.targetScene = "Field3";
						break;

				}
			}
		});


		//managing dialoge start and overlap on the screen
		this.physics.add.overlap(this.player, this.puzzles, (player, puzzle) => {
			if (this.typingActive) return;
			if (!Phaser.Input.Keyboard.JustDown(this.spaceKey)) return;

			console.log("Action:", puzzle.action);

			if (puzzle.puzzleIndex !== this.currentPuzzle + 1) {
				console.log("Wrong puzzle order!");
				return;
			}

			this.interacting = true;

			switch (puzzle.action) {

				case "dialogue":
					if (!this.dialogueManager.active) {
						this.activePuzzle = puzzle;
						this.dialogueManager.start(puzzle.dialogue);

						this.events.once("dialogueFinished", () => {
							if (this.activePuzzle) {
								this.onDialogueFinished(this.activePuzzle);
								this.activePuzzle = null;
							}
							this.interacting = false;
						});
					}
					// } else {
					// 	this.dialogueManager.next();
					// }
					break;

				case "scene":
					this.completePuzzle(puzzle);
					this.scene.switch(puzzle.targetScene);
					break;
			}
		});

		this.typed = "";
		this.typingActive = false;

		this.inputText = this.add.text(0, 387, "", {
			fontSize: "20px",
			fill: "#ffffff"
		});

		this.inputText.setVisible(false);


	}

	//after puzxle: this.input.keyboard.off("keydown", this.typeHandler);

	startPuzzleInput(expectedWord, puzzle) {

		this.expectedWord = expectedWord;

		this.inputPuzzle = puzzle;

		this.typed = "";

		this.typingActive = true;

		this.inputText.setVisible(true);

		puzzle.body.enable = false

		this.typeHandler = (e) => {


			if (!this.typingActive) return;

			if (e.key === "Enter") {
				this.checkAnswer(this.typed);
			}
			else if (e.key === "Backspace") {
				this.typed = this.typed.slice(0, -1);
			}
			else if (e.key.length === 1) {
				this.typed += e.key;
			}

			this.inputText.setText(this.typed);
		};

		this.input.keyboard.on("keydown", this.typeHandler);


	}



	checkAnswer(word) {
		if (word.toLowerCase() === this.expectedWord) {
			console.log("Correct!");

			this.typingActive = false;
			this.input.keyboard.off("keydown", this.typeHandler);
			this.inputText.setVisible(false);

			this.events.emit("puzzleCorrect", this.inputPuzzle)

		} else {
			console.log("Wrong!");
			this.typed = "";
		}
	}

	completePuzzle(puzzle) {
		console.log("Completed puzzle", puzzle.puzzleIndex);

		puzzle.body.checkCollision.none = true;
		puzzle.setVisible(false);
	}

	update() {
		if (this.player && !this.typingActive) {
			this.player.update()
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
