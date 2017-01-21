var song;
var visualization;

const fileInputElement = document.getElementById("fileInput");
console.log("fileInputElement is " + fileInputElement);

fileInputElement.addEventListener('change', function(){
	// Return .files[0].path to give access to the absolute file path
	setup(fileInputElement.files[0].path);
})

function setup(audioFilePath) {
	song = loadSound(audioFilePath);
	visualization = CanvasVisualization(song);
	visualization.onRender();
}

document.getElementById('playBtn').addEventListener('click', function() {
	if (!song.isPlaying()) {
		song.play();
		visualization.onPlay();
	}
});

document.getElementById('stopBtn').addEventListener('click', function() {
	if (song.isPlaying() || song.isPaused()) {
		song.stop();
		visualization.onStop();
	}
});

document.getElementById('pauseBtn').addEventListener('click', function() {
	if (song.isPlaying()) {
		song.pause();
		visualization.onPause();
	}
});
