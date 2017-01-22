const BAR_VIS = 'BAR_VIS';
var VISUALIZATIONS = new Map();

BarVisualization = {

	onRender: function() {
		createCanvas(720, 200);
		background(255,0,0);
	},
	onPlay: function() {
		background(0, 255, 0);
		draw();
	},
	onPause: function() {
		background(255, 255, 0);
	},
	onStop: function() {
		background(255, 0, 0);
	},
	draw: function(fft) {
		background(0, 255, 0);
		noStroke();
		fill(0); // spectrum is green
		var spectrum = fft.analyze();
		for (var i = 0; i< spectrum.length; i++){
			var x = map(i, 0, spectrum.length, 0, width);
			var h = -height + map(spectrum[i], 0, 255, height, 0);
			rect(x, height, width * 1.5 / spectrum.length, h )
		}
	}
}

VISUALIZATIONS.set(BAR_VIS, BarVisualization);
