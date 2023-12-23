const ransom = document.getElementById("ransom");
const copyButton = document.getElementById("copy-button");
const clearButton = document.getElementById("clear-button");

document.addEventListener("keydown", changeText);
document.addEventListener("keyup", clearText);

copyButton.addEventListener("click", copyHTML);
clearButton.addEventListener("click", clearNote);

const fontArray = [
  "Arial",
  "Verdana",
  "Courier Prime",
  "Georgia",
  "Playpen Sans"
];
const weightArray = ["normal", "bold", "lighter", "bolder"];
const colorArray = [
  "cornsilk",
  "white",
  "azure",
  "aliceblue",
  "antiquewhite",
  "beige",
  "bisque",
];
const ascii =
  " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
let fontIndex = 0;
let weightIndex = 0;
let colorIndex = 0;
let textSize = 1;
let textRotation = 0;

function changeText(e) {
  e.preventDefault();
  if (e.key === "Backspace") {
    // removes the last span added
    ransom.removeChild(ransom.lastChild);
  } else if (ascii.includes(e.key)) {
    // don't just add the key, add it within a styled span
    const newSpan = document.createElement("span");
    newSpan.innerText = e.key;
    if (e.key != " ") {
      newSpan.style.display = "inline-block";
      // style new single-character span with new font, new size
      newSpan.style.fontFamily = fontArray[fontIndex];
      newSpan.style.fontWeight = weightArray[weightIndex];
      newSpan.style.backgroundColor = colorArray[colorIndex];
      newSpan.style.fontSize = `${textSize}rem`;
      newSpan.style.transform = `rotate(${textRotation}deg)`;
      // select next font from array
      if (fontIndex == fontArray.length - 1) {
        fontIndex = 0;
      } else {
        fontIndex++;
      }
      // select next weight from array
      if (weightIndex == weightArray.length - 1) {
        weightIndex = 0;
      } else {
        weightIndex++;
      }
      // select next color
      if (colorIndex == colorArray.length - 1) {
        colorIndex = 0;
      } else {
        colorIndex++;
      }
      // randomize text size between 2.5 and 1.75 rem
      textSize = (Math.random() * 1.5) + 1;
      // randomize text rotation between 15 and -15 degrees
      textRotation = Math.random() * 30 - 15;
    }
    // add new span
    ransom.appendChild(newSpan);
  }
}

function clearText() {
  if (ransom.value === "") {
    removeAllChildNodes(ransom);
  }
}

function removeAllChildNodes(parent) {
  while (parent.hasChildNodes()) {
    console.log(parent.firstChild);
    parent.removeChild(parent.firstChild);
  }
}

function copyHTML() {
  navigator.clipboard.writeText(ransom.innerHTML);
  alert("Copied the raw HTML for your ransom note!");
}

function clearNote() {
  ransom.innerHTML = "";
}
