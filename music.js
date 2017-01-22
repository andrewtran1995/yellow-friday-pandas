var song;
var fft;
var visualization;

const fileInputElement = document.getElementById("fileInput");
console.log("fileInputElement is " + fileInputElement);

fileInputElement.addEventListener('change', function(){
	// Return .files[0].path to give access to the absolute file path
	setup(fileInputElement.files[0].path);
});

function setup(audioFilePath) {
	// TODO: Hard-coded to BAR_VIS right now
	visualization = ENVELOPE_VIS;
	song = loadSound(audioFilePath);
	VISUALIZATIONS.get(visualization).onRender();
	fft = new p5.FFT();
}

function draw() {
	VISUALIZATIONS.get(visualization).draw(fft);
}

document.getElementById('playBtn').addEventListener('click', function() {
	if (!song.isPlaying()) {
		song.play();
		VISUALIZATIONS.get(visualization).onPlay();
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
		VISUALIZATIONS.get(visualization).onStop();
	}
});

document.getElementById('pauseBtn').addEventListener('click', function() {
	if (song.isPlaying()) {
		song.pause();
		VISUALIZATIONS.get(visualization).onPause();
	}
});
