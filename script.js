const container = document.querySelector(".container");
const button = document.querySelector(".clear__button");
const rgbBtn = document.querySelector(".rgb__button");
const DEFAULT_MODE = "color";
let currentMode = DEFAULT_MODE;

const normalColor = function () {
  this.style.backgroundColor = "red";
};

const eraseColor = function () {
  this.style.backgroundColor = "black";
};

const randomColor = function () {
  this.style.backgroundColor =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
};

let currentFunction = normalColor;

function makeRows(rows, cols) {
  currentFunction = normalColor;
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let rc = 0; rc < rows * cols; rc++) {
    let column = document.createElement("div");
    // column.innerText = (rc + 1);
    container.appendChild(column).className = "grid-div";
  }

  const grid = document.querySelectorAll(".grid-div");

  grid.forEach((cell) => cell.addEventListener("mouseenter", normalColor));
}

function clear() {
  var reqGridSize = prompt("How many squares per side?");

  if (reqGridSize >= 1 && reqGridSize <= 100) {
    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    }
    makeRows(reqGridSize, reqGridSize);
  } else {
    alert("Chose a number between 1-100");
  }
}

button.addEventListener("click", clear);

makeRows(16, 16);
