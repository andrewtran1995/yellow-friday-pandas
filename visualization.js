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
		this.fft = new p5.FFT();
	}

	onRender() {
		createCanvas(720, 200);
		background(255,0,0);
	}
	onPlay() {
		background(0, 255, 0);
		while(1)
			this.draw();
	}

	onPause() {
		background(255, 255, 0);
	}

	onStop() {
		background(255, 0, 0);
	}

	draw() {
		background(0);
		noStroke();
		fill(0,255,0); // spectrum is green
		var spectrum = this.fft.analyze();
		for (var i = 0; i< spectrum.length; i++){
			var x = map(i, 0, spectrum.length, 0, width);
			var h = -height + map(spectrum[i], 0, 255, height, 0);
			rect(x, height, width / spectrum.length, h )
		}
	}
}
