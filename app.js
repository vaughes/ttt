// Add an abortable event listener to square 1
const controller_1 = new AbortController();
const play1 = document.getElementById("square_1");
play1.addEventListener("click", tileOne, { signal: controller_1.signal });

// Function to stop after a tile is filled
function tileOne() {
  const square_1 = document.getElementById("square_1");
  let x1 = square_1.append("0");
  if (square_1.firstChild.nodeValue === "X" || "0") {
    controller_1.abort(); // remove listener after value reaches "X" or "0"
  }
}

// Add an abortable event listener to square 2
const controller_2 = new AbortController();
const play2 = document.getElementById("square_2");
play2.addEventListener("click", tileTwo, { signal: controller_2.signal });

// Function to stop after a tile is filled
function tileTwo() {
  const square_2 = document.getElementById("square_2");
  let x2 = square_2.append("X");
  if (square_2.firstChild.nodeValue === "X" || "0") {
    controller_2.abort(); // remove listener after value reaches "X" or "0"
  }
}
