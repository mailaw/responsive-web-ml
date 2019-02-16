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
//var movingWords = [];

//MODEL
function modelReady() {
  console.log("Model is ready!!!");
  classifier.load("model.json", customModelReady);
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
  createCanvas(320, 270);

  video = createCapture(VIDEO);
  video.hide();
  background(0);

  mobilenet = ml5.featureExtractor("MobileNet", modelReady);
  classifier = mobilenet.classification(video, videoReady); //can only hook in when mobilenet is ready

  //   article_text_1 = createDiv(
  //     "Anemone is the dreamy psych-pop brainchild of Chloé Soldevila, a classically-trained, jazz-fluent performer from Montreal. Ironically for an album recorded in the dead of a harsh Canadian winter, their debut Beat My Distance resembles the aural equivalent of a beach-town postcard, its airy shoegaze atmosphere drifting in and out at a leisurely tide. That calming, sun-dappled backdrop, in turn, helps Soldevila’s sweet, simplistic hooks ripen to perfection: organic alchemy at its finest. Such is Soldevila’s goal with the LP, a clearly-stated one at that; on the early-half, Slowdive-esque highlight “Daffodils,” she proclaims, “Where you go, I want to be a hole inside your head.” And judging by the sound of Beat My Distance, this promising upstarts gets what she wants, without fail."
  //   );
  //   article_text_2 = createDiv(
  //     "When listening to After Its own Death/ Walking in a Spiral, a collection of recordings made by Liz Harris of Grouper under the name Nivhek, one question comes to mind: is this music? The answer isn’t no—it’s hard to deny that the nebulous and ever-shifting layers of reverb, vocal tracks, and isolated instruments do take melodious forms when and where they choose—but it isn’t exactly yes, either. These aren’t songs so much as ruminations running the gamut from hauntingly celestial to eerily raw; deeply personal sonic experiments that require close attention to grasp their many subtleties and occasional profundities, but won’t demand it. That part, just like the answer to the question posed above, is on you."
  //   );
  //USE THESE BUTTONS FOR TRAINING
  //   happyButton = createButton("right");
  //   happyButton.mousePressed(function() {
  //     classifier.addImage("right");
  //   });

  //   centerButton = createButton("center");
  //   centerButton.mousePressed(function() {
  //     classifier.addImage("center");
  //   });

  //   sadButton = createButton("left");
  //   sadButton.mousePressed(function() {
  //     classifier.addImage("left");
  //   });

  //   trainButton = createButton("train");
  //   trainButton.mousePressed(function() {
  //     classifier.train(whileTraining);
  //   });

  //   saveButton = createButton("save");
  //   saveButton.mousePressed(function() {
  //     classifier.save();
  //   });
}

function draw() {
  background(0);

  image(video, 0, 0, 320, 240);
  fill(255);
  textSize(20);
  text(label, 10, height - 10);
}

// function whileTraining(loss) {
//   if (loss == null) {
//     console.log("Training Complete");
//     classifier.classify(gotResults);
//   } else {
//     console.log(loss);
//   }
// }

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
