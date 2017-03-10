console.log("starting");
var BPM = Tone.Transport.bpm;
var playing = false;
BPM.value = 120;

var player = new Tone.Player("./audio/woodblock.wav").toMaster();
var loop = new Tone.Sequence(function(time){
			console.log("entered loop");
			player.start(time);	
		}, "4n");
Tone.Transport.start();

function changeState() {
	if (!playing) {
		loop.start();
		playing = true;
		document.getElementById("start-stop").innerHTML = "STOP";
	} else {
		loop.stop();
		playing = false;
		document.getElementById("start-stop").innerHTML = "START";
	}
}

// changes the BPM via the HTML range slider input and updates range val
function displayBPM(newBPM) {
	BPM.value = newBPM;
	document.getElementById("range").innerHTML = newBPM;

}