const note = document.getElementById("note");
const ransom = document.getElementById("ransom");

note.addEventListener("keydown", changeText);

const fontArray = ['Arial', 'Verdana', 'Courier New', 'Georgia', 'Comic Sans MS'];
const ascii = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

function changeText(e) {
  let styleTagStart = "<style "
  if (e.key === "Backspace") {
    ransom.innerHTML = ransom.innerHTML.slice(0, -1);
  } else if (ascii.includes(e.key)) {
    ransom.innerHTML += e.key;
  }
}