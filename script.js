const note = document.getElementById("note");
const ransom = document.getElementById("ransom");

note.addEventListener("keydown", changeText);
note.addEventListener("keyup", clearText);

const fontArray = [
  "Arial",
  "Verdana",
  "Courier New",
  "Georgia",
  "Comic Sans MS",
];
const ascii =
  " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
let fontIndex = 0;
let textSize = 1;

function changeText(e) {
  if (e.key === "Backspace") {
    // removes the last span added
    ransom.removeChild(ransom.lastChild);
  } else if (ascii.includes(e.key)) {
    // don't just add the key, add it within a styled span
    const newSpan = document.createElement("span");
    newSpan.innerText = e.key;
    if (e.key != " ") {
      // style new single-character span with new font, new size
      newSpan.style.fontFamily = fontArray[fontIndex];
      newSpan.style.fontSize = `${textSize}rem`
      // select next font from array
      if (fontIndex == fontArray.length - 1) {
        fontIndex = 0;
      } else {
        fontIndex++;
      }
      textSize = (Math.random() * .75 + .75);
    }
    // add new span
    ransom.appendChild(newSpan);
  }
}

function clearText() {
  if (note.value === "") {
    removeAllChildNodes(ransom);
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}