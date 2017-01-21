var song;

function setup() {
	song = createAudio('03. 미쳤나봐.mp3');
	song.play();
	song.showControls();
	createCanvas(720, 200);
	background(255,0,0);
}

function playPressed() {
	if (!song.isPlaying()) { // .isPlaying() returns a boolean
		song.play();
		background(0, 255, 0);
	}
}

function stopPressed() {
	if (song.isPlaying()) { // .isPlaying() returns a boolean
		song.stop();
		background(255, 0, 0);
	}
}

function pausePressed() {
	if ( song.isPlaying() ) { // .isPlaying() returns a boolean
		song.pause();
		background(255, 255, 0);
	}
}
