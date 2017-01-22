const BAR_VIS = 'BAR_VIS';
const ENVELOPE_VIS = 'ENVELOPE_VIS';
const POP_VIS = 'POP_VIS';
var VISUALIZATIONS = new Map();

BarVisualization = {
	onRender: function() {
		createCanvas(720, 400);
		background(173,216,230);
	},
	onPlay: function() {
		background(173,216,230);
		draw();
	},
	onPause: function() {
		background(173,216,230);
	},
	onStop: function() {
		background(173,216,230);
	},
	draw: function(fft) {
		background(173,216,230);

		fill(255); // spectrum is green
		noStroke();
		var spectrum = fft.analyze();
		for (var i = 0; i< spectrum.length; i++){
			var x = map(i, 0, spectrum.length, 0, width);
			var h = -height + map(spectrum[i], 0, 255, height, 0);
			rect(x, height, width / spectrum.length, h )
		}
	}
}

EnvelopeVisualization = {
	onRender: function() {
		createCanvas(720, 200);
		background(173,216,230);
	},
	onPlay: function() {
		background(173,216,230);
		draw();
	},
	onPause: function() {
		background(173,216,230);
	},
	onStop: function() {
		background(173,216,230);
	},
	draw: function(fft) {
		background(173,216,230);
		noStroke();
		fill(0); // spectrum is green
		// plot FFT.analyze() frequency analysis on the canvas
		var spectrum = fft.analyze();
		for (var i = 0; i < spectrum.length/20; i++) {
			fill(spectrum[i]/10, spectrum[i], 0);
			var x = map(i, 0, spectrum.length/20, 0, width);
			var h = map(spectrum[i], 0, 255, 0, height);
			rect(x, height, spectrum.length/20, -h);
		}
	}
}

PopVisualization = {
	onRender: function() {
		createCanvas(720, 400);
		background(173,216,230);
	},
	onPlay: function() {
		background(173,216,230);
		draw();
	},
	onPause: function() {
		background(173,216,230);
	},
	onStop: function() {
		background(173,216,230);
		noStroke();
	},
	draw: function(fft) {
		background(173,216,230);
		fill(255); // spectrum is green
		var pointillize = map(mouseX, 0, 4, 40)
		var letters = '0123456789ABCDEF'.split('');
		var hexColor = '#';
		for (var i = 0; i < 6; i++ ) {
			hexColor += letters[Math.round(Math.random() * 15)];
		}
		var x = floor(random(720));
		var y = floor(random(400));
		var spectrum = fft.analyze();

		console.log(color(hexColor))
		fill(color(hexColor));
		ellipse(x, y, pointillize, pointillize);
		// for (var i = 0; i< spectrum.length; i++){
		// 	var x = map(i, 0, spectrum.length, 0, width);
		// 	var h = -height + map(spectrum[i], 0, 255, height, 0);
		// 	rect(x, height, width / spectrum.length, h )
		// }
	}
}

VISUALIZATIONS.set(BAR_VIS, BarVisualization);
VISUALIZATIONS.set(ENVELOPE_VIS, EnvelopeVisualization);
VISUALIZATIONS.set(POP_VIS, PopVisualization);
