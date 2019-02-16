let mobilenet;
let classifier;
let video;
var label = "loading model";
let happyButton;
let sadButton;
let trainButton;
let obnoxiousVAR = "HAYOOO";
var windowWidth = windowWidth;
//PAGE CONTENT

//MODEL
function modelReady() {
  console.log("Model is ready!!!");
  classifier.load("model (4).json", customModelReady);
}

function customModelReady() {
  console.log("Custom Model is ready!!!");
  label = "model ready";
  classifier.classify(gotResults);
  //console.log(gotResults);
}

function videoReady() {
  console.log("Video is ready!!!");
}

function setup() {
  video = createCapture(VIDEO);
  video.hide();
  canvas = createCanvas(320, 270);
  canvas.position(0, 50);

  //video.hide();
  background(0);

  mobilenet = ml5.featureExtractor("MobileNet", modelReady);
  classifier = mobilenet.classification(video, videoReady); //can only hook in when mobilenet is ready

  //USE THESE BUTTONS FOR TRAINING
  rightButton = createButton("right");
  rightButton.mousePressed(function() {
    classifier.addImage("right");
  });

  //   centerButton = createButton("center");
  //   centerButton.mousePressed(function() {
  //     classifier.addImage("center");
  //   });

  noneButton = createButton("none");
  noneButton.mousePressed(function() {
    classifier.addImage("none");
  });

  leftButton = createButton("left");
  leftButton.mousePressed(function() {
    classifier.addImage("left");
  });

  trainButton = createButton("train");
  trainButton.mousePressed(function() {
    classifier.train(whileTraining);
  });

  saveButton = createButton("save");
  saveButton.mousePressed(function() {
    classifier.save();
  });
}

function draw() {
  background(0);

  image(video, 0, 0, 320, 240);
  fill(255);
  textSize(20);
  text(label, 10, height - 10);
}

function whileTraining(loss) {
  if (loss == null) {
    console.log("Training Complete");
    classifier.classify(gotResults);
  } else {
    console.log(loss);
  }
}

function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    label = result;
    classifier.classify(gotResults);
  }
}

function getLabel() {
  return label;
}
