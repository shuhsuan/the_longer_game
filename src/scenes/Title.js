
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Title extends Phaser.Scene {

	constructor() {
		super("Title");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(318, 238, 645, 485);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 8741933;

		// clickToStartText
		const clickToStartText = this.add.text(320, 402, "", {});
		clickToStartText.setOrigin(0.5, 0.5);
		clickToStartText.text = "CLICK TO START";
		clickToStartText.setStyle({ "align": "center", "fontSize": "24px" });

		// titleText
		const titleText = this.add.text(320, 240, "", {});
		titleText.setOrigin(0.5, 0.5);
		titleText.text = "THE LONG GAME";
		titleText.setStyle({ "align": "center", "fontSize": "48px" });

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.input.once(Phaser.Input.Events.POINTER_DOWN, () => {
			this.scene.start('Field3')
		})
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
