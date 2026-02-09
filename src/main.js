import Preload from "./scenes/Preload.js";
import Title from "./scenes/Title.js"
import Field3 from "./scenes/Field3.js";
import Court from "./scenes/Court.js";
import Ritual from "./scenes/Ritual.js";
import River from "./scenes/River.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 640,
		height: 480,
		type: Phaser.AUTO,
		pixelArt: true,
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: 'arcade',
			arcade: {
				debug: true
			}
		}
	});



	game.scene.add("Title", Title);
	game.scene.add("Field", Field3);
	game.scene.add("Court", Court);
	game.scene.add("River", River);
	game.scene.add("Ritual", Ritual);
	game.scene.add("Preload", Preload, true);
});
