class AbstractVisualization {
	onRender() {
		console.log("Abstract class called!");
	}
	onPlay() {
		console.log("Abstract class called!");
	}
	onPause() {
		console.log("Abstract class called!");
	}
	onStop() {
		console.log("Abstract class called!");
	}
}

class CanvasVisualization extends AbstractVisualization {
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
