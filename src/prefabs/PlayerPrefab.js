
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerPrefab extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "harV", frame ?? 35);

		scene.add.existing(this);
		scene.physics.add.existing(this);

		this.setCollideWorldBounds(true);

		this.cursors = scene.input.keyboard.createCursorKeys();
		this.speed = 300;

		this.play("player_idle");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	update() {
    this.setVelocity(0);
    let dir = null;

    if (this.cursors.left.isDown) {
        this.setVelocityX(-this.speed);
        dir = "left";
    }
    else if (this.cursors.right.isDown) {
        this.setVelocityX(this.speed);
        dir = "right";
    }

    if (this.cursors.up.isDown) {
        this.setVelocityY(-this.speed);
        dir = "up";
    }
    else if (this.cursors.down.isDown) {
        this.setVelocityY(this.speed);
        dir = "down";
    }

    if (dir) {
        const anim = "player_" + dir;
        if (this.anims.currentAnim?.key !== anim) {
            this.anims.play(anim);
        }
        this.lastDir = dir;
    } 
    else if (this.lastDir) {
		if(this.lastDir == "down"){
			 this.anims.play("player_idle", true);
		}
		else{
        this.anims.play("player_idle_" + this.lastDir, true);
		}
    }
}
}
