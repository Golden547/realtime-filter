noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage('http://assets.stickpng.com/images/580b57fbd9996e24bc43bed5.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Initialized.');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x-15; 
        noseY = results[0].pose.nose.y-15;
    }
}

function draw(){
image(video, 0, 0, 300, 300);
image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterimg.png')
}