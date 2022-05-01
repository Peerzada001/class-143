function preload() {
	world_start = loadSound("world_start.wav");
	mariodie= loadSound("mariodie.wav") ;
	jump=loadSound("jump.wav");
	kick=loadSound("kick.wav");
	collectcoin=loadSound("coin.wav");
	gameover=loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
	
}

function setup() {
	canvas = createCanvas(1240, 336);
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

}

function modelLoaded() {
	console.log('Model Loaded!');
}

function gotPoses(results) {
	if (results.length > 0) {
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game()
}