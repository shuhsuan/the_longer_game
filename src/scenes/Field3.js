
// You can write more code here

/* START OF COMPILED CODE */

import PlayerPrefab from "../prefabs/PlayerPrefab.js";
/* START-USER-IMPORTS */
import DialogueManager from "../prefabs/DialogueManager.js";
/* END-USER-IMPORTS */

export default class Field3 extends Phaser.Scene {

	constructor() {
		super("Field3");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// editabletilemap
		this.cache.tilemap.add("editabletilemap_b73d98a0-cae7-4079-ad58-2022f8322fbe", {
			format: 1,
			data: {
				width: 40,
				height: 30,
				orientation: "orthogonal",
				tilewidth: 16,
				tileheight: 16,
				tilesets: [
					{
						columns: 20,
						margin: 0,
						spacing: 0,
						tilewidth: 16,
						tileheight: 16,
						tilecount: 360,
						firstgid: 1,
						image: "ground",
						name: "ground",
						imagewidth: 320,
						imageheight: 288,
					},
					{
						columns: 18,
						margin: 0,
						spacing: 0,
						tilewidth: 16,
						tileheight: 16,
						tilecount: 522,
						firstgid: 361,
						image: "sprite2",
						name: "sprite2",
						imagewidth: 288,
						imageheight: 464,
					},
					{
						columns: 11,
						margin: 0,
						spacing: 0,
						tilewidth: 16,
						tileheight: 16,
						tilecount: 77,
						firstgid: 883,
						image: "stands",
						name: "stands",
						imagewidth: 176,
						imageheight: 112,
					},
					{
						columns: 11,
						margin: 0,
						spacing: 0,
						tilewidth: 16,
						tileheight: 16,
						tilecount: 55,
						firstgid: 960,
						image: "structures",
						name: "structures",
						imagewidth: 176,
						imageheight: 80,
					},
					{
						columns: 11,
						margin: 0,
						spacing: 0,
						tilewidth: 16,
						tileheight: 16,
						tilecount: 143,
						firstgid: 1015,
						image: "items",
						name: "items",
						imagewidth: 176,
						imageheight: 208,
					},
					{
						columns: 11,
						margin: 0,
						spacing: 0,
						tilewidth: 16,
						tileheight: 16,
						tilecount: 143,
						firstgid: 1158,
						image: "props",
						name: "props",
						imagewidth: 176,
						imageheight: 208,
					},
				],
				layers: [
					{
						type: "tilelayer",
						name: "layer",
						width: 40,
						height: 30,
						opacity: 1,
						data: [286, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 22, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 86, 86, 328, 284, 86, 86, 86, 86, 86, 86, 86, 62, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 86, 86, 86, 86, 86, 86, 86, 86, 328, 284, 86, 62, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 62, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 74, 84, 84, 84, 84, 84, 84, 84, 84, 86, 86, 86, 86, 86, 322, 86, 86, 86, 86, 86, 62, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 86, 284, 284, 86, 86, 86, 86, 86, 86, 86, 22, 84, 84, 84, 84, 84, 84, 84, 84, 74, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 86, 86, 86, 86, 284, 86, 86, 86, 332, 86, 142, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 74, 84, 84, 84, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 142, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 86, 86, 86, 290, 86, 86, 284, 86, 86, 86, 86, 86, 62, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 286, 102, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 86, 86, 322, 86, 86, 86, 326, 86, 86, 284, 86, 22, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 74, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 22, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 86, 326, 86, 286, 86, 86, 86, 86, 86, 22, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 86, 86, 86, 86, 86, 332, 86, 86, 22, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 74, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 86, 86, 284, 86, 86, 86, 86, 22, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 86, 86, 86, 86, 86, 22, 26, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 22, 24, 24, 24, 24, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 144, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 74, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 148, 86, 142, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 146, 148, 86, 86, 86, 142, 144, 146, 146, 144, 146, 144, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 86, 86, 86, 324, 86, 86, 86, 86, 86, 86, 86, 86, 142, 74, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 148, 86, 86, 86, 86, 86, 86, 86, 86, 328, 86, 86, 86, 86, 102, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 148, 142, 148, 86, 86, 86, 86, 86, 86, 22, 26, 24, 26, 26, 24, 24, 28, 86, 142, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 148, 148, 86, 86, 86, 86, 86, 86, 86, 86, 22, 84, 84, 84, 84, 84, 84, 116, 68, 86, 86, 102, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 148, 86, 86, 86, 86, 86, 86, 326, 86, 86, 62, 84, 84, 84, 84, 74, 84, 84, 68, 86, 86, 102, 84, 84, 84, 84, 74, 84, 84, 186, 187, 84, 84, 84, 84, 84, 84, 84, 84, 146, 28, 86, 86, 86, 286, 86, 86, 86, 86, 86, 102, 84, 84, 84, 84, 84, 84, 84, 148, 86, 86, 102, 84, 84, 84, 84, 84, 84, 205, 206, 207, 208, 84, 84, 84, 84, 84, 84, 148, 86, 86, 284, 86, 86, 86, 86, 86, 86, 86, 86, 102, 84, 84, 84, 84, 84, 84, 68, 86, 86, 86, 142, 84, 84, 84, 84, 84, 84, 225, 226, 227, 228, 84, 84, 84, 84, 84, 68, 86, 86, 86, 86, 86, 86, 86, 286, 86, 86, 326, 86, 102, 84, 84, 84, 84, 84, 84, 108, 86, 86, 86, 86, 142, 84, 84, 84, 84, 84, 84, 246, 247, 84, 84, 84, 84, 84, 144, 148, 86, 86, 86, 86, 286, 86, 86, 86, 86, 86, 86, 86, 62, 84, 84, 84, 84, 116, 84, 84, 28, 86, 86, 326, 86, 142, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 148, 86, 86, 86, 86, 86, 86, 86, 86, 86, 202, 203, 86, 86, 86, 142, 146, 144, 146, 144, 144, 146, 146, 148, 324, 86, 86, 86, 86, 142, 84, 84, 84, 84, 84, 84, 84, 84, 84, 148, 86, 86, 86, 86, 286, 86, 86, 86, 86, 86, 222, 223],
					},
					{
						type: "tilelayer",
						name: "player",
						width: 40,
						height: 30,
						opacity: 1,
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 506, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					},
					{
						type: "tilelayer",
						name: "stands",
						width: 40,
						height: 30,
						opacity: 1,
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 906, 907, 908, 905, 905, 905, 0, 0, 0, 905, 883, 884, 885, 886, 905, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 932, 933, 934, 0, 0, 0, 0, 0, 0, 0, 0, 0, 917, 918, 919, 916, 916, 916, 0, 0, 0, 916, 894, 895, 896, 897, 916, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 959, 0, 0, 943, 944, 945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 954, 955, 956, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 905, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 905, 0, 0, 0, 0, 0, 0, 0, 0, 916, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 916, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 909, 910, 911, 905, 887, 888, 889, 890, 891, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 920, 921, 922, 916, 898, 899, 900, 901, 902, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1294, 1295, 1296, 1297, 1298, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 959, 0, 0, 0, 0, 0, 0, 0, 0, 0, 959, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 959, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 959, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 959, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 959, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 959, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 912, 913, 914, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 923, 924, 925, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 959, 959, 959, 0, 0, 0],
					},
					{
						type: "tilelayer",
						name: "structures",
						width: 40,
						height: 30,
						opacity: 1,
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 977, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 988, 0, 0, 995, 996, 997, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1006, 1007, 1008, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 982, 983, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 967, 968, 969, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 978, 979, 980, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 989, 990, 991, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1003, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 976, 977, 976, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 987, 988, 987, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 987, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 964, 964, 965, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000, 1001, 964, 965, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					},
					{
						type: "tilelayer",
						name: "items",
						width: 40,
						height: 30,
						opacity: 1,
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1019, 1034, 1016, 1048, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1033, 1020, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 929, 930, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 940, 941, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					},
					{
						type: "tilelayer",
						name: "props",
						width: 40,
						height: 30,
						opacity: 1,
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1193, 1191, 1192, 0, 0, 0, 1230, 0, 0, 0, 0, 1220, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1218, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1194, 0, 0, 1159, 1165, 1166, 1160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1219, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					},
				],
			},
		});
		const editabletilemap = this.add.tilemap("editabletilemap_b73d98a0-cae7-4079-ad58-2022f8322fbe");
		editabletilemap.addTilesetImage("ground");
		editabletilemap.addTilesetImage("sprite2");
		editabletilemap.addTilesetImage("stands");
		editabletilemap.addTilesetImage("structures");
		editabletilemap.addTilesetImage("items");
		editabletilemap.addTilesetImage("props");

		// layer
		editabletilemap.createLayer("layer", ["ground"], -1, 0);

		// player
		const player = editabletilemap.createLayer("player", ["sprite2"], 0, 0);
		player.visible = false;

		// stands
		const stands = editabletilemap.createLayer("stands", ["stands","props"], 0, 0);
		stands.name = "stands";

		// structures
		editabletilemap.createLayer("structures", ["structures"], 0, 0);

		// props
		editabletilemap.createLayer("props", ["props"], 0, 0);

		// items
		editabletilemap.createLayer("items", ["items","stands"], 0, 0);

		// collision_cock
		const collision_cock = this.add.rectangle(130, 420, 128, 128);
		collision_cock.name = "collision_cock";
		collision_cock.scaleX = 0.6304458971412823;
		collision_cock.scaleY = 0.2383685338237117;
		collision_cock.visible = false;
		collision_cock.isFilled = true;

		// collision_ball1
		const collision_ball1 = this.add.rectangle(82, 396, 128, 128);
		collision_ball1.name = "collision_ball1";
		collision_ball1.scaleX = 0.28150100690260804;
		collision_ball1.scaleY = 0.2934650954403445;
		collision_ball1.visible = false;
		collision_ball1.isFilled = true;

		// collision_ball2
		const collision_ball2 = this.add.rectangle(82, 445, 128, 128);
		collision_ball2.name = "collision_ball2";
		collision_ball2.scaleX = 0.28150100690260804;
		collision_ball2.scaleY = 0.2934650954403445;
		collision_ball2.visible = false;
		collision_ball2.isFilled = true;

		// puzzle_1
		const puzzle_1 = this.add.rectangle(320, 240, 640, 480);
		puzzle_1.name = "puzzle_1";
		puzzle_1.visible = false;
		puzzle_1.isFilled = true;

		// puzzle_2
		const puzzle_2 = this.add.rectangle(328, 32, 128, 128);
		puzzle_2.name = "puzzle_2";
		puzzle_2.scaleX = 0.09662779013177017;
		puzzle_2.scaleY = 0.059347241812916174;
		puzzle_2.visible = false;
		puzzle_2.isFilled = true;

		// puzzle_3
		const puzzle_3 = this.add.rectangle(87, 215, 128, 128);
		puzzle_3.name = "puzzle_3";
		puzzle_3.scaleX = 0.10372126699488457;
		puzzle_3.scaleY = 0.0806458906359205;
		puzzle_3.visible = false;
		puzzle_3.isFilled = true;

		// puzzle_4
		const puzzle_4 = this.add.rectangle(595, 233, 128, 128);
		puzzle_4.name = "puzzle_4";
		puzzle_4.scaleX = 0.12313806781570664;
		puzzle_4.scaleY = 0.10951726289426822;
		puzzle_4.visible = false;
		puzzle_4.isFilled = true;

		// puzzle_5
		const puzzle_5 = this.add.rectangle(179, 420, 128, 128);
		puzzle_5.name = "puzzle_5";
		puzzle_5.scaleX = 0.1352942039616838;
		puzzle_5.scaleY = 0.1257273571249192;
		puzzle_5.visible = false;
		puzzle_5.isFilled = true;

		// puzzle_6
		const puzzle_6 = this.add.rectangle(615, 424, 128, 128);
		puzzle_6.name = "puzzle_6";
		puzzle_6.scaleX = 0.1173262316690006;
		puzzle_6.scaleY = 0.1277277799705906;
		puzzle_6.visible = false;
		puzzle_6.isFilled = true;

		// puzzle_7
		const puzzle_7 = this.add.rectangle(17, 178, 128, 128);
		puzzle_7.name = "puzzle_7";
		puzzle_7.scaleX = 0.20798372911287366;
		puzzle_7.scaleY = 0.1580166967973088;
		puzzle_7.visible = false;
		puzzle_7.isFilled = true;

		// puzzle_8
		const puzzle_8 = this.add.rectangle(320, 240, 640, 480);
		puzzle_8.name = "puzzle_8";
		puzzle_8.visible = false;
		puzzle_8.isFilled = true;

		// puzzle_9
		const puzzle_9 = this.add.rectangle(518, 445, 120, 120);
		puzzle_9.name = "puzzle_9";
		puzzle_9.scaleX = 0.15992423895167918;
		puzzle_9.scaleY = 0.12653958830306428;
		puzzle_9.visible = false;
		puzzle_9.isFilled = true;

		// puzzle_10
		const puzzle_10 = this.add.rectangle(320, 240, 640, 480);
		puzzle_10.name = "puzzle_10";
		puzzle_10.visible = false;
		puzzle_10.isFilled = true;

		// puzzle_11
		const puzzle_11 = this.add.rectangle(80, 64, 20, 20);
		puzzle_11.name = "puzzle_11";
		puzzle_11.visible = false;
		puzzle_11.isFilled = true;

		// puzzle_12
		const puzzle_12 = this.add.rectangle(544, 464, 20, 20);
		puzzle_12.name = "puzzle_12";
		puzzle_12.visible = false;
		puzzle_12.isFilled = true;

		// puzzle_13
		const puzzle_13 = this.add.rectangle(48, 336, 20, 20);
		puzzle_13.name = "puzzle_13";
		puzzle_13.visible = false;
		puzzle_13.isFilled = true;

		// puzzle_14
		const puzzle_14 = this.add.rectangle(90, 96, 30, 30);
		puzzle_14.name = "puzzle_14";
		puzzle_14.visible = false;
		puzzle_14.isFilled = true;

		// collision_stands1
		const collision_stands1 = this.add.rectangle(295, 144, 150, 35);
		collision_stands1.name = "collision_stands1";
		collision_stands1.visible = false;
		collision_stands1.isFilled = true;

		// collision_stand2
		const collision_stand2 = this.add.rectangle(288, 16, 90, 35);
		collision_stand2.name = "collision_stand2";
		collision_stand2.visible = false;
		collision_stand2.isFilled = true;

		// collision_stand3
		const collision_stand3 = this.add.rectangle(432, 16, 90, 35);
		collision_stand3.name = "collision_stand3";
		collision_stand3.visible = false;
		collision_stand3.isFilled = true;

		// collision_stand6
		const collision_stand6 = this.add.rectangle(360, 64, 20, 35);
		collision_stand6.name = "collision_stand6";
		collision_stand6.visible = false;
		collision_stand6.isFilled = true;

		// collision_stand5
		const collision_stand5 = this.add.rectangle(215, 80, 20, 35);
		collision_stand5.name = "collision_stand5";
		collision_stand5.visible = false;
		collision_stand5.isFilled = true;

		// collision_stand4
		const collision_stand4 = this.add.rectangle(288, 90, 70, 15);
		collision_stand4.name = "collision_stand4";
		collision_stand4.visible = false;
		collision_stand4.isFilled = true;

		// collision_stand
		const collision_stand = this.add.rectangle(535, 198, 70, 15);
		collision_stand.name = "collision_stand";
		collision_stand.visible = false;
		collision_stand.isFilled = true;

		this.editabletilemap = editabletilemap;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.Tilemap} */
	editabletilemap;

	/* START-USER-CODE */

	// Write your code here

	preload() {
		this.load.audio("main_muse", "assets/court_muse.m4a");
	}


	create() {

		this.editorCreate();

		this.player = new PlayerPrefab(this, 317, 313);

		this.dialogueManager = new DialogueManager(this);

		this.bgm = this.sound.add("main_muse", {
			loop: true,
			volume: 0.3
		});

		this.startBGM();

		this.events.on("sleep", this.stopBGM, this);
		this.events.on("wake", this.startBGM, this);

		// this.currentPuzzle = this.registry.get("puzzleProgress") ?? 0;
		this.currentPuzzle = 0;

		this.interacting = false;

		this.typingActive = false;
		this.typed = "";

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
					this.startPuzzleInput("20", puzzle);
					break;

				case 3:
					this.startPuzzleInput("candle", puzzle);
					break;

				case 4:
					this.startPuzzleInput("4", puzzle);
					break;
				case 5:
					this.startPuzzleInput("cock", puzzle);
					break;
				case 6:
					this.startPuzzleInput("kakorrhaphiophobia", puzzle);
					break;
				case 8:
					this.startPuzzleInput("brewery", puzzle);
					break;
				case 10:
					this.startPuzzleInput("53", puzzle);
					break;
				case 11:
					this.completePuzzle(puzzle);
					this.interacting = false;
					break;
				case 12:
					this.completePuzzle(puzzle);
					this.interacting = false;
					break;
				case 13:
					this.completePuzzle(puzzle);
					this.interacting = false;
					break;
			}

			this.currentPuzzle = puzzle.puzzleIndex;
			this.activePuzzle = null;

		}

		//triggers and dialogues
		this.spaceKey = this.input.keyboard.addKey("SPACE");
		this.puzzles = this.physics.add.staticGroup();

		// this.puzzles.children.iterate(puzzle => {
		// 	if (puzzle.puzzleIndex <= this.currentPuzzle) {
		// 		puzzle.body.checkCollision.none = true;
		// 		puzzle.setVisible(false);
		// 	}
		// });
		this.puzzles.children.iterate(puzzle => {
			puzzle.puzzleIndex = parseInt(puzzle.name.split("_")[1]);

			if (puzzle.puzzleIndex !== this.currentPuzzle + 1) {
				puzzle.body.enable = false;
			} else {
				puzzle.body.enable = true;
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
							"Yurt: You're finally awake.",
							"Har the Fifth: ...where am i?",
							"Yurt: Not where you were. This place resets when you fail.",
							"Har the Fifth: reset?",
							"Yurt: You'll understand.",
							"Yurt: Thirty seals hold the prize.",
							"Har the Fifth: why so many?",
							"Yurt: So only the worthy reach it.",
							"Har the Fifth: and who is worthy..",
							"Yurt: Those who carried themselves here.",
							"Yurt: The creator is very interested in you",
							"Yurt: Finish the quest and she'll give you your prize",
							"Yurt: Good Luck.",
							"Use arrow keys to move and spacebar to interact",
							"Watch out for trailing spaces at the beginning of your attempts",
							"The console is your friend",
							"First, go to the stand selling fruit."
						];
						obj.action = "dialogue";
						break;

					case 2:
						obj.dialogue = [
							"How many flowers on the screen?"
						],
							obj.successDialogue = [
								"Mmmm",
								"Too easy I see",
								"Ok, look for the unturned stone"
							]
						obj.action = "dialogue";
						break;

					case 3:
						obj.dialogue = [
							"What kind of dle melts?"
						],
							obj.successDialogue = [
								"You're getting the hang of this",
								"Now take a look at that which seeks stars"
							]
						obj.action = "dialogue";
						break;

					case 4:
						obj.dialogue = [
							"What number have you created?"
						],
							obj.successDialogue = [
								"We're getting there",
								"I think there's something near the bottom of the area"
							]
						obj.action = "dialogue";
						break;
					case 5:
						obj.dialogue = [
							"What is the shape of the thing to the left?",
							"You may have to restart for this, better get used to it ;)"
						],
							obj.successDialogue = [
								"Hehe, language",
								"Next one at the right most flower"
							]
						obj.action = "dialogue";
						break;
					case 6:
						obj.dialogue = [
							"I'm running out of ideas at this point",
							"What is the answer?"
						],
							obj.successDialogue = [
								"Heh",
								"Alright, somewhere on this map is a hidden area"
							],
							obj.action = "dialogue";
						break;
					case 7:
						obj.action = "scene";
						obj.targetScene = "River";
						break;
					case 8:
						obj.dialogue = [
							"You're back",
							"Whoops I think I sent you to the wrong place",
							"My bad",
							"Can you read the layout and check what it says?",
							"Must've reorganised it at some point"
						],
							obj.successDialogue = [
								"Ahhh, that's why it send you to the labs",
								"I've opened up another portal, shoud take you to the right place this time",
							],
							obj.action = "dialogue";
						break;
					case 9:
						obj.action = "scene";
						obj.targetScene = "Court";
						break;
					case 10:
						obj.dialogue = [
							"Welcome back!",
							"Did you have fun?",
							"You're 2/3 of the way there",
							"I'm sure you're tired of all these expositions",
							"And maybe perhaps tired of restarting too",
							"But I'm afraid I'm out of time and out of options",
							"So I will use yours, thank you",
							"How many of these world prompts have occured, not including the ones that started when you entered this area?",
							"(World prompts meaning, not spoken by a named friend ..thing)"
						]
						obj.successDialogue = [
							"Nice, I'm sure you're wondering who I am",
							"Too bad there's not enough time to create a sick ass story for me",
							"For now, I am world",
							"Hello Har the Fifth",
							"The expo continues (:moonface:)",
							"Seek the place where objects forget the ground and remember the air."
						]
						obj.action = "dialogue";
						break;
					case 11:
						obj.dialogue = [
							"Even fallen trees remember the forest",
							"Sit where the old trunk rests beside the tent"
						],
							obj.action = "dialogue";
						break;
					case 12:
						obj.dialogue = [
							"Seek the stones that remember the night"
						],
							obj.action = "dialogue";
						break;
					case 13:
						obj.action = "scene";
						obj.targetScene = "Ritual";
						break;
					case 14:
						obj.action = "scene";
						obj.targetScene = "creator2";
						break;

				}
			}
		});

		//managing dialoge start and overlap on the screen
		this.physics.add.overlap(this.player, this.puzzles, (player, puzzle) => {

			if (puzzle.puzzleIndex !== this.currentPuzzle + 1) return;

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

		this.inputText = this.add.text(0, 460, "", {
			fontSize: "20px",
			fill: "#0a0a0a"
		});

		this.inputText.setVisible(false);


	}

	startBGM() {
		if (!this.bgm) {
			this.bgm = this.sound.add("main_muse", {
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

		this.puzzles.children.iterate(puzzle => {
			if (puzzle.puzzleIndex === this.currentPuzzle + 1) {
				puzzle.body.enable = true;
			}
		});

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
