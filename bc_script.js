// function shifter(elem, label, pos) {
//   console.log("boss" + pos);
//   if (label == "left" && pos > 0) {
//     pos -= 12;
//     elem.style.left = pos + "px";
//   }
//   if (label == "right" && pos < windowWidth - 30) {
//     pos += 3;
//     elem.style.left = pos + "px";
//   }
//   console.log("boss" + pos);
//   console.log("label");
// }

var myLabel = setInterval(setLabel, 50);
var pos = 0;
function setLabel() {
  var idName = document
    .getElementById("all-content")
    .querySelectorAll("p, h1, iframe");
  for (i = 0; i < idName.length; i++) {
    var elem = idName[i];
    elem.style.position = "relative";
    elem.style.display = "inline-block";
    if (idName[i] == "p-el") {
      elem.style.width = "400px";
    }
    if (label == "right" && pos < windowWidth - 1020) {
      pos += 2;
      elem.style.left = pos + "px";
    }
    if (label == "left" && pos >= -400) {
      pos -= 2;
      elem.style.left = pos + "px";
    }
  }

  var idName2 = document
    .getElementById("all-content")
    .querySelectorAll("h2, h3");

  for (i = 0; i < idName2.length; i++) {
    var elem = idName2[i];
    elem.style.position = "relative";
    elem.style.display = "inline-block";
    if (idName[i] == "p-el") {
      elem.style.width = "400px";
    }
    if (label == "right" && pos < windowWidth - 1020) {
      pos += 1;
      elem.style.left = pos + "px";
    }
    if (label == "left" && pos >= -400) {
      pos -= 1;
      elem.style.left = pos + "px";
    }
  }
}
