
// You can write more code here

/* START OF COMPILED CODE */

import PlayerPrefab from "../prefabs/PlayerPrefab.js";
/* START-USER-IMPORTS */
import DialogueManager from "../prefabs/DialogueManager.js";
/* END-USER-IMPORTS */

export default class Ritual extends Phaser.Scene {

	constructor() {
		super("Ritual");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// ritual
		const ritual = this.add.sprite(320, 241, "ritual", 0);
		ritual.play("ritual");

		// puzzle_1
		const puzzle_1 = this.add.rectangle(321, 241, 640, 480);
		puzzle_1.name = "puzzle_1";
		puzzle_1.visible = false;
		puzzle_1.isFilled = true;

		// puzzle_2
		const puzzle_2 = this.add.rectangle(355, 165, 30, 30);
		puzzle_2.name = "puzzle_2";
		puzzle_2.visible = false;
		puzzle_2.isFilled = true;

		// puzzle_3
		const puzzle_3 = this.add.rectangle(88, 348, 30, 30);
		puzzle_3.name = "puzzle_3";
		puzzle_3.visible = false;
		puzzle_3.isFilled = true;

		// puzzle_4
		const puzzle_4 = this.add.rectangle(520, 261, 30, 30);
		puzzle_4.name = "puzzle_4";
		puzzle_4.visible = false;
		puzzle_4.isFilled = true;

		// puzzle_5
		const puzzle_5 = this.add.rectangle(22, 94, 30, 30);
		puzzle_5.name = "puzzle_5";
		puzzle_5.visible = false;
		puzzle_5.isFilled = true;

		// puzzle_6
		const puzzle_6 = this.add.rectangle(241, 324, 20, 20);
		puzzle_6.name = "puzzle_6";
		puzzle_6.visible = false;
		puzzle_6.isFilled = true;

		// collision_1
		const collision_1 = this.add.rectangle(390, 63, 500, 10);
		collision_1.name = "collision_1";
		collision_1.visible = false;
		collision_1.isFilled = true;

		// collision_2
		const collision_2 = this.add.rectangle(62, 63, 120, 10);
		collision_2.name = "collision_2";
		collision_2.visible = false;
		collision_2.isFilled = true;

		// collision
		const collision = this.add.rectangle(578, 417, 120, 10);
		collision.name = "collision";
		collision.visible = false;
		collision.isFilled = true;

		// collision_4
		const collision_4 = this.add.rectangle(252, 415, 500, 10);
		collision_4.name = "collision_4";
		collision_4.visible = false;
		collision_4.isFilled = true;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.musicTracks = {
			2: this.sound.add('god'),
			3: this.sound.add('so'),
			4: this.sound.add('around')
		};

		this.player = new PlayerPrefab(this, 303, 286);

		this.dialogueManager = new DialogueManager(this);

		this.dialogueManager.text.setColor("#FFD966")

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
			if (puzzle.successDialogue?.length) {
				this.dialogueManager.start(puzzle.successDialogue);

				this.events.once("dialogueFinished", () => {
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
					this.musicTracks[puzzle.puzzleIndex].once('complete', () => {
						this.completePuzzle(puzzle);
						this.interacting = false;
					});
					break;
				case 3:
					this.musicTracks[puzzle.puzzleIndex].once('complete', () => {
						this.completePuzzle(puzzle);
						this.interacting = false;
					});
					break;
				case 4:
					this.startPuzzleInput("god so around", puzzle);
					break;
				case 5:
					this.startPuzzleInput("so long", puzzle);
					break;
			}

			this.currentPuzzle = puzzle.puzzleIndex;
			this.activePuzzle = null;

		}

		//triggers and dialogues
		this.spaceKey = this.input.keyboard.addKey("SPACE");
		this.puzzles = this.physics.add.staticGroup();

		this.puzzles.children.iterate(puzzle => {
			if (puzzle.puzzleIndex <= this.currentPuzzle) {
				puzzle.body.checkCollision.none = true;
				puzzle.setVisible(false);
			}
		});


		this.children.list.forEach(obj => {
			if (obj.name && obj.name.startsWith("puzzle_")) {
				this.physics.add.existing(obj, true);
				this.puzzles.add(obj);

				obj.puzzleIndex = parseInt(obj.name.split("_")[1]);

				switch (obj.puzzleIndex) {
					case 1:
						obj.dialogue = [
							"Woah! New area unlocked!",
							"This is a sacred space",
							"If you listen closely enough, you'll hear sounds from afar",
							"What is the last word spoken by them?",
							"There should be three"
						],
							obj.successDialogue = []
						obj.action = "dialogue";
						break;
					case 2:
						obj.dialogue = [
							""
						],
							obj.action = "dialogue";
						break;
					case 3:
						obj.dialogue = [
							""
						],
							obj.action = "dialogue"
						break;
					case 4:
						obj.dialogue = [
							""
						],
							obj.successDialogue = [
								"Oh interesting",
								"These are sacred grounds after all",
								"But it's quite a novel idea",
								"Wonder if anyone is exploring that philosophical boundary",
								"Maybe it's worth exploring the bounds of this area too"
							]
						obj.action = "dialogue"
						break;
					case 5:
						obj.dialogue = [
							"Oh hey, you found me",
							"Listen, I hate to be the barer of bad news",
							"I *dont* like watching you suffer",
							"But it is a long game after all",
							"In your talk with the merchant at the river, there were letters at the end which made a phrase the creator thought described you well ",
							"Might you be able to figure out what it is?",

						],
							obj.successDialogue = [
								"Just like this game!",
								"The creator must really love you",
								"Teasing you to no end",
								"And hey! You've completed all 30 puzzles!",
								"Congrats!",
								"If you find the exit to this place, go through the archway to meet the one who kidnapped and started you on this arduous journey",
								"I'm sure you have a lot to say to her but your dialogue is a fixed and fated course unfortunately",
								"Go and collect your prize anyway!"
							],
							obj.action = 'dialogue'
						break;
					case 6:
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

			console.log(puzzle.puzzleIndex);
			console.log(this.currentPuzzle)

			if (puzzle.puzzleIndex !== this.currentPuzzle + 1) {
				console.log("Wrong puzzle order!");
				return;
			}

			// const track = this.musicTracks[puzzle.puzzleIndex];
			// if (track) {
			// 	let prevTrack = this.musicTracks[2];
			// 	if (puzzle.puzzleIndex > 2) {
			// 		prevTrack = this.musicTracks[puzzle.puzzleIndex - 1]
			// 	}

			// 	if (!prevTrack.isPlaying) {
			// 		track.play();
			// 	}
			// 	// this.musicTracks[puzzle.puzzleIndex].play();
			// }
			if (puzzle.puzzleIndex > 2) { // music puzzles start at 2
				const prevTrack = this.musicTracks[puzzle.puzzleIndex - 1];
				if (prevTrack && prevTrack.isPlaying) {
					console.log("Previous puzzle music still playing, cannot interact yet.");
					return; // BLOCK the interaction
				}
			}

			const track = this.musicTracks[puzzle.puzzleIndex];
			if (track && !track.isPlaying) {
				track.play();
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
					break;

				case "scene":
					this.currentPuzzle++;
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

	startPuzzleInput(expectedWord, puzzle) {

		this.expectedWord = expectedWord;

		this.inputPuzzle = puzzle;

		this.typed = "";

		this.typingActive = true;

		this.inputText.setVisible(true);

		// puzzle.body.enable = false

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

			if (this.puzzleImage) {
				this.puzzleImage.destroy();
				this.puzzleImage = null;
			}

			this.events.emit("puzzleCorrect", this.inputPuzzle)

		} else {
			console.log("Wrong!");
			this.typed = "";
		}
	}



	completePuzzle(puzzle) {

		// const track = this.musicTracks[puzzle.puzzleIndex];

		// if (track && track.isPlaying) {
		// 	track.once('complete', () => {
		// 		console.log("Completed puzzle", puzzle.puzzleIndex);

		// 		this.registry.set("puzzleProgress", this.currentPuzzle);
		// 		puzzle.body.checkCollision.none = true;
		// 		puzzle.setVisible(false);
		// 	});
		// }
		// else {
		console.log("Completed puzzle", puzzle.puzzleIndex);

		this.registry.set("puzzleProgress", this.currentPuzzle);
		puzzle.body.checkCollision.none = true;
		puzzle.setVisible(false);
		// }
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
