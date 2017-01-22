var song;
var visualization;

const fileInputElement = document.getElementById("fileInput");
console.log("fileInputElement is " + fileInputElement);

fileInputElement.addEventListener('change', function(){
	// Return .files[0].path to give access to the absolute file path
	setup(fileInputElement.files[0].path);
});

function setup(audioFilePath) {
	song = loadSound(audioFilePath);
	createCanvas(720, 200);
	background(255,0,0);
	this.fft = new p5.FFT();
}

function draw() {
	background(0, 255, 0);
	noStroke();
	fill(0); // spectrum is green
	var spectrum = this.fft.analyze();
	for (var i = 0; i< spectrum.length; i++){
		var x = map(i, 0, spectrum.length, 0, width);
		var h = -height + map(spectrum[i], 0, 255, height, 0);
		rect(x, height, width * 1.5 / spectrum.length, h )
	}
}

document.getElementById('playBtn').addEventListener('click', function() {
	if (!song.isPlaying()) {
		background(0, 255, 0);
		song.play();
		draw();
	}
});
/*"Vicky was here"
Sebastian was also here
Monica was also here
Cody was also here
-sebastian*/

document.getElementById('stopBtn').addEventListener('click', function() {
	if (song.isPlaying() || song.isPaused()) {
		song.stop();
		background(255, 0, 0);
	}
});

document.getElementById('pauseBtn').addEventListener('click', function() {
	if (song.isPlaying()) {
		song.pause();
		background(255, 255, 0);
	}
});
