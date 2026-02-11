
// You can write more code here

/* START OF COMPILED CODE */

import PlayerPrefab from "../prefabs/PlayerPrefab.js";
/* START-USER-IMPORTS */
import DialogueManager from "../prefabs/DialogueManager.js";
/* END-USER-IMPORTS */

export default class Court extends Phaser.Scene {

	constructor() {
		super("Court");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// court
		const court = this.add.sprite(321, 240, "court", 0);
		court.play("court");

		// puzzle_1
		const puzzle_1 = this.add.rectangle(-1, -2, 640, 480);
		puzzle_1.name = "puzzle_1";
		puzzle_1.setOrigin(0, 0);
		puzzle_1.visible = false;
		puzzle_1.isFilled = true;

		// elder
		const elder = this.add.sprite(153, 246, "wise_elder", 13);
		elder.scaleX = 1.2;
		elder.scaleY = 1.2;
		elder.play("elder");

		// puzzle_2
		const puzzle_2 = this.add.rectangle(154, 245, 20, 20);
		puzzle_2.name = "puzzle_2";
		puzzle_2.visible = false;
		puzzle_2.isFilled = true;

		// puzzle_3
		const puzzle_3 = this.add.rectangle(321, 233, 20, 20);
		puzzle_3.name = "puzzle_3";
		puzzle_3.visible = false;
		puzzle_3.isFilled = true;

		// slime
		const slime = this.add.sprite(145, 108, "slime", 131);
		slime.scaleX = 3;
		slime.scaleY = 3;
		slime.play("slime");

		// puzzle_4
		const puzzle_4 = this.add.rectangle(145, 128, 25, 20);
		puzzle_4.name = "puzzle_4";
		puzzle_4.visible = false;
		puzzle_4.isFilled = true;

		// puzzle_5
		const puzzle_5 = this.add.rectangle(152, 387, 20, 20);
		puzzle_5.name = "puzzle_5";
		puzzle_5.visible = false;
		puzzle_5.isFilled = true;

		// chesst_puzzle
		const chesst_puzzle = this.add.image(309, 252, "chess_puzzle1");
		chesst_puzzle.name = "chesst_puzzle";
		chesst_puzzle.scaleX = 0.4;
		chesst_puzzle.scaleY = 0.4;
		chesst_puzzle.visible = false;

		// puzzle_6
		const puzzle_6 = this.add.rectangle(508, 358, 20, 20);
		puzzle_6.name = "puzzle_6";
		puzzle_6.visible = false;
		puzzle_6.isFilled = true;

		// collision_border1
		const collision_border1 = this.add.rectangle(252, 62, 500, 10);
		collision_border1.name = "collision_border1";
		collision_border1.visible = false;
		collision_border1.isFilled = true;

		// collision_border2
		const collision_border2 = this.add.rectangle(62, 415, 120, 10);
		collision_border2.name = "collision_border2";
		collision_border2.visible = false;
		collision_border2.isFilled = true;

		// collision_border3
		const collision_border3 = this.add.rectangle(583, 62, 120, 10);
		collision_border3.name = "collision_border3";
		collision_border3.visible = false;
		collision_border3.isFilled = true;

		// collision_border4
		const collision_border4 = this.add.rectangle(389, 418, 500, 10);
		collision_border4.name = "collision_border4";
		collision_border4.visible = false;
		collision_border4.isFilled = true;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	preload() {
		this.load.image("chesst_puzzle", "assets/chess_puzzle1.png");
		this.load.audio("court_muse", "assets/court_muse.m4a");
	}

	create() {

		this.editorCreate();

		this.player = new PlayerPrefab(this, 465, 133);

		this.dialogueManager = new DialogueManager(this);

		this.dialogueManager.text.setColor("#FFD966");

		this.bgm = this.sound.add("court_muse", {
			loop: true,
			volume: 0.5
		});

		this.startBGM();

		this.events.on("sleep", this.stopBGM, this);
		this.events.on("wake", this.startBGM, this);

		// this.currentPuzzle = this.registry.get("puzzleProgress") ?? 0;
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
					this.startPuzzleInput("peaches", puzzle);
					break;
				case 3:
					this.startPuzzleInput("capybara", puzzle);
					break;
				case 4:
					this.startPuzzleInput("cross", puzzle);
					break;
				case 5:
					this.startPuzzleInput("ra6 b7", puzzle);
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
							"Welcome welcome",
							"This is the market court where you can find hidden items not available in other areas",
							"Speak to the one who offers guidance to those who are lost"
						],
							obj.action = "dialogue";
						break;

					case 2:
						obj.dialogue = [
							"Elder: The bees debated, the butterflies listened, and the birds concluded:",
							"Elder: not of iron or smoke, but of orchards kissed by dawn.",
							"Elder: Tell me, wanderer… what fruit clings to your spirit?"
						],
							obj.successDialogue = [
								"Elder: A peach is shaped by sun and soil, but sweetness comes from within.",
								"Life gives you the branch -",
								"But you decide which fruit you become.",
								"And it seems you have",
								"What a sweet, vibrant, and brilliant peach you have become Har the fifth",
								"Kudos",
								"Walk to the gathering circle where the stools stand empty",
								"Sit, and listen. Your path forward from now will become clear."
							]
						obj.action = "dialogue";
						break;
					case 3:
						obj.dialogue = [
							"The way forward ey...",
							"The old man likes to throw me under the bus",
							"I'm not sure",
							"All I know is, a walked path becomes a path made",
							"And things will happen that are outside of your control",
							"Getting sent a random gif during the day for example",
							"What was that animal?",
						],
							obj.successDialogue = [
								"Ahh yes that's right, the capybara",
								"What a wonderful animal",
								"So chill",
								"A lot like Rev. Squidge over there"
							]
						obj.action = "dialogue";
						break;

					case 4:
						obj.dialogue = [
							"Rev. Squidge: Blessings upon you",
							"Rev. Squidge: Do you remember what particular shape of grass was on the groud in the large field area over there?"
						],
							obj.successDialogue = [
								"Rev. Squidge: That's right, a holy cross!",
								"Rev. Squidge: Like all things, it was gods work for it to have grown like that",
								"Rev. Squidge: What a blessed space",
								"Rev. Squidge: Unlike a certain chest in this area, I've had people complaining to me about the voices they hear from within.."
							]
						obj.action = "dialogue";
						break;
					case 5:
						obj.dialogue = [
							"Chester: Hey you, want to do a puzzle?",
							"Chester: I've got a great one for you",
							"Har the Fifth: will you show me the way out if I do",
							"Chester: Sure!"
						],
							obj.successDialogue = [
								"Chester: Wow you're really good at this",
								"Chester: The exit is that way",
								"Har the Fifth: .....",
								"Chester: .....",
								"Chester: Oh right yeah I have no fingers to point",
								"Chester: That way over by the caravan",
								"Har the Fifth: thanks"
							],
							obj.puzzleImageKey = "chesst_puzzle";
						obj.action = "dialogue";
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

	startBGM() {
		if (!this.bgm) {
			this.bgm = this.sound.add("court_muse", {
				loop: true,
				volume: 0.5
			});
		}

		if (!this.bgm.isPlaying) {
			this.bgm.play();
		}
	}

	stopBGM() {
		if (this.bgm && this.bgm.isPlaying) {
			this.bgm.stop();
		}
	}

	startPuzzleInput(expectedWord, puzzle) {

		this.expectedWord = expectedWord;

		this.inputPuzzle = puzzle;

		this.typed = "";

		this.typingActive = true;

		this.inputText.setVisible(true);

		if (puzzle.puzzleImageKey) {
			this.puzzleImage = this.children.getByName(puzzle.puzzleImageKey);
			this.puzzleImage.setVisible(true);
			this.puzzleImage.setDepth(200);
		}

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
		console.log("Completed puzzle", puzzle.puzzleIndex);

		this.registry.set("puzzleProgress", this.currentPuzzle);
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
