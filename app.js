// Add a string to each square with a click event

const squareOne = document.getElementById("square_1");
const squareTwo = document.getElementById("square_2");
const squareThree = document.getElementById("square_3");
const squareFour = document.getElementById("square_4");
const squareFive = document.getElementById("square_5");
const squareSix = document.getElementById("square_6");
const squareSeven = document.getElementById("square_7");
const squareEight = document.getElementById("square_8");
const squareNine = document.getElementById("square_9");

/*

squareTwo.addEventListener("click", () => {
  let x2 = square_2.append("X");
  let n2 = square_2.append("0");
});
squareThree.addEventListener("click", () => {
  let x3 = square_3.append("X");
});
squareFour.addEventListener("click", () => {
  let x4 = square_4.append("X");
});
squareFive.addEventListener("click", () => {
  let x5 = square_5.append("X");
});
squareSix.addEventListener("click", () => {
  let x6 = square_6.append("X");
});
squareSeven.addEventListener("click", () => {
  let x7 = square_7.append("X");
});
squareEight.addEventListener("click", () => {
  let x8 = square_8.append("X");
});
squareNine.addEventListener("click", () => {
  let x9 = square_9.append("X");
});
*/

// Add an abortable event listener to grid
const controller = new AbortController();
const oneX = document.getElementById("grid");
oneX.addEventListener("click", playOnce, { signal: controller.signal });

// Function to allow only one go per tile
function playOnce() {
  const square_1 = document.getElementById("square_1");
  let x1 = square_1.append("X");
  if (square_1.firstChild.nodeValue === "X" || "0") {
    controller.abort(); // remove listener after value reaches "X"
  }
}
