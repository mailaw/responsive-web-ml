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
  idName = ["select-el", "img-el", "p-el"];
  for (i = 0; i < idName.length; i++) {
    var elem = document.getElementById(idName[i]);
    elem.style.position = "relative";
    elem.style.display = "inline-block";
    if (idName[i] == "p-el") {
      elem.style.width = "400px";
    }
    if (label == "right" && pos < windowWidth - 120) {
      pos += 20;

      elem.style.left = pos + "px";
    }
    if (label == "left" && pos >= 20) {
      pos -= 20;
      elem.style.left = pos + "px";
    }
  }
}
