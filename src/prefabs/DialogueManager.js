export default class DialogueManager {
    constructor(scene) {
        this.scene = scene;
        this.active = false;

        ///

        this.text = scene.add.text(
            scene.scale.width / 2, // x position (center of screen)
            scene.scale.height - 200,
            '',
            {
                fontFamily: 'Minecraft',
                fontSize: '20px',
                color: '#000000',
                align: 'center',
                wordWrap: { width: scene.scale.width - 40 }
            }
        )
            .setOrigin(0.5, 0.5)   // center both horizontally and vertically
            .setDepth(150)         // on top of everything
            .setVisible(false);


        // Dialogue state
        this.dialogueQueue = [];
        this.currentIndex = 0;
    }

    start(dialogueArray) {
        if (!dialogueArray || dialogueArray.length === 0) return;

        this.dialogueQueue = dialogueArray;
        this.currentIndex = 0;
        this.showCurrent();
        this.active = true;

        // Optional: freeze player movement
        if (this.scene.player) this.scene.player.canMove = false;
    }

    showCurrent() {
        const line = this.dialogueQueue[this.currentIndex];

        let textToShow;
        if (typeof line === "string") {
            textToShow = line; // Simple string
        } else if (line.speaker === "player") {
            textToShow = "HAR V: " + line.text;
        } else {
            textToShow = line.text;
        }

        this.text.setVisible(true);
        this.text.setText(textToShow);
    }

    next() {
        this.currentIndex++;
        if (this.currentIndex >= this.dialogueQueue.length) {
            this.end();
        } else {
            this.showCurrent();
        }
    }

    end() {
        this.active = false;
        this.text.setVisible(false);
        this.dialogueQueue = [];

        // Unfreeze player
        if (this.scene.player) this.scene.player.canMove = true;
    }
}
