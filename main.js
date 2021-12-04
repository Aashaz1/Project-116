mouthX = 0;
mouthY = 0;

function preload(){
    mustache = loadImage('https://i.postimg.cc/d12mVfsL/mustache-removebg-preview.png')
}

function setup(){
    canvas= createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);;
}

function draw(){
    image(video, 0, 0, 500, 500);
    image(mustache, mouthX, mouthY, 70, 70)
}

function takeSnapshot(){
    save('Project 114');
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        mouthX = results[0].pose.nose.x-33;
        mouthY = results[0].pose.nose.y-25;
        console.log("mustache x = "+ results[0].pose.nose.x);
        console.log("mustache y = "+ results[0].pose.nose.y);
    }
}