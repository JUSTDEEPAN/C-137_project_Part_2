function setup() {
    canvas =  createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cosossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!!!");
    stats = true;
    objectDetector.detect(img, gotResult);
     
}

function gotResult() {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

img = "";
stats = "";

function preload(){
img = loadImage("dog_cat.jpg")
}

