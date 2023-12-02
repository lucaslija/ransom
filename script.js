const note = document.getElementById("note");
const ransom = document.getElementById("ransom");

note.addEventListener("input", changeText);

function changeText() {
  // on keypress (input), change:
  // font,
  // font-size,
  // text-rotation
  // but for the **next** character inputted;
  // i.e., keep the styling of previous characters.
}