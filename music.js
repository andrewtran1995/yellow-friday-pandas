// import p5 from 'p5';

var song;

const fileInputElement = document.getElementById("fileInput");
console.log("fileInputElement is " + fileInputElement);

fileInputElement.addEventListener('change', function(){
	// Return .files[0].path to give access to the absolute file path
	setup(fileInputElement.files[0].path);
})

function setup(audioFilePath) {
	song = loadSound(audioFilePath);
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
	if (song.isPlaying() ) { // .isPlaying() returns a boolean
		song.pause();
		background(255, 255, 0);
	}
}
