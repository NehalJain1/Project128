song1 = "";
song2 = "";
LeftWristX = 0;
LeftWristY = 0;
RightWristX = 0;
RightWristX = 0;

function preload() {
song1 = loadSound("music.mp3");
song2 = loadSound("music.mp3");
}
function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    PoseNet = ml5.poseNet(video,ModelLoaded);
    PoseNet.on('pose',gotposes);
}
function draw() {
    image(video, 0, 0, 600, 600);
}

function ModelLoaded() {
    console.log("PoseNet is initialized");
}

function gotposes(results) {
    if(results.length > 0) {
        console.log(results);

        LeftWristX = results[0].pose.leftWrist.x ;
        LeftWristY = results[0].pose.leftWrist.y ;
        RightWristX = results[0].pose.rightWrist.x ;
        RightWristY = results[0].pose.rightWrist.y ;
        console.log("Left Wrist X = " + LeftWristX + "Right Wrist X = " + RightWristX + "Left Wrist Y = " + LeftWristY + "Right Wrist Y = " + RightWristY);
    }
}

