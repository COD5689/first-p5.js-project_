shape = "";

function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 400);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 640, 480);
    fill("green");
    stroke(0, 128, 0);
    rect(45, 50, 30, 380);
    rect(550, 45, 30, 380);
    rect(70, 45, 500, 30);
    rect(70, 400, 500, 30);
    fill("red");
    stroke(0, 128, 0);
    circle(60, 60, 50);
    ellipse(570, 60, 55, 55);
    circle(60, 420, 50);
    ellipse(570, 420, 55, 55);
}

function take_snapshot(){
    save("Pic.png");
}
