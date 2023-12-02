const note = document.getElementById("note");
const ransom = document.getElementById("ransom");

note.addEventListener("keydown", changeText);

const fontArray = ['Arial', 'Verdana', 'Courier New', 'Georgia', 'Comic Sans MS'];
const ascii = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

function changeText(e) {
  if (e.key === "Backspace") {
    // returns the string with the last span cut off
    ransom.removeChild(ransom.lastChild);
  } else if (ascii.includes(e.key)) {
    // don't just add the key, add it within a styled span
    const newSpan = document.createElement("span");
    newSpan.innerText = e.key;
    ransom.appendChild(newSpan);
  }
}