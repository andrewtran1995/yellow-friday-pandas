// Create mixin as common interface for visualizations
// var visualizationMixin = Base => class extends Base {
// 	onRender() { }
// 	onPlay() { }
// 	onPause() { }
// 	onStop() { }
// }

class CanvasVisualization {
	constructor(song) {
		this.song = song;
	}

	onRender() {
		createCanvas(720, 200);
		background(255,0,0);
	}
	onPlay() {
		background(0, 255, 0);
	}

	onPause() {
		background(255, 255, 0);
	}

	onStop() {
		background(255, 0, 0);
	}
}
