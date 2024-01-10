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

function getRandomIndex(array) {
  return Math.floor(Math.random() * (array.length));
}

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
      newSpan.style.margin = ".1rem";
      // style new single-character span with new font, new size, new etc.
      newSpan.style.fontFamily = fontArray[getRandomIndex(fontArray)];
      newSpan.style.fontWeight = weightArray[getRandomIndex(weightArray)];
      newSpan.style.backgroundColor = colorArray[getRandomIndex(colorArray)];
      newSpan.style.fontSize = `${(Math.random() * 1.5) + 1}rem`;
      newSpan.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
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
