var song;
var fft;
var visualization = BAR_VIS;

const fileInputElement = document.getElementById("fileInput");
console.log("fileInputElement is " + fileInputElement);

fileInputElement.addEventListener('change', function(){
	// Return .files[0].path to give access to the absolute file path
	setup(fileInputElement.files[0].path);
});

function setup(audioFilePath) {
	song = loadSound(audioFilePath);
	VISUALIZATIONS.get(visualization).onRender();
	fft = new p5.FFT();
}

function draw() {
	VISUALIZATIONS.get(visualization).draw(fft);
}

function switchVis(newVis) {
	visualization = newVis;
	VISUALIZATIONS.get(visualization).onRender();
}

$(".visBtn").click(function() {
	switchVis(this.data('visType'));
});

/* Set event listeners for Play, Stop, and Pause */

document.getElementById('playBtn').addEventListener('click', function() {
	if (!song.isPlaying()) {
		song.play();
		VISUALIZATIONS.get(visualization).onPlay();
	}
});

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

/*"Vicky was here"
 Sebastian was also here
 Monica was also here
 Cody was also here
 -sebastian*/
