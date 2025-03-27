// Get the dodger element
const dodger = document.getElementById("dodger");

// Function to move dodger left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move dodger right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  const gameWidth = 400; // Width of the game field
  const dodgerWidth = 40; // Width of the dodger

  if (left < gameWidth - dodgerWidth) {
    dodger.style.left = `${left + 1}px`;
  }
}

// Event listener for key presses
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
// Your code here
