const container = document.querySelector("#container");
const gridSizeVal = document.querySelector("#gridSizeVal");
const gridSize = document.querySelector("#gridSize");
const gridLines = document.querySelector("#gridLines");
const colorInput = document.querySelector("#color");
const clearButton = document.querySelector("#clear");
const eraserButton = document.querySelector("#eraser");
const rainbowButton = document.querySelector("#rainbow");
let penColor = "#000000";
let isMouseDown = false;
let isRainbowOn = false;
let rainbowColors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"];
let eraser = false;
let color = 0;
let squares;
window.onload = createGrid();
gridSize.addEventListener('input', createGrid);

function createGrid() {
    gridSizeVal.textContent = `Grid size: ${gridSize.value}  x  ${gridSize.value} `;
    container.style.cssText = `grid-template-columns: repeat(${gridSize.value}, 1fr); grid-template-rows: repeat(${gridSize.value}, 1fr);`;
    container.textContent = "";
    for (let i = 0; i < Math.pow(gridSize.value, 2); i++) {
        const drawingSquare = document.createElement('div');
        if (i == 0) {
            drawingSquare.style.cssText = "border-top-left-radius: 15px;"
            drawingSquare.setAttribute("id", "edge");
        } else if (i == gridSize.value - 1) {
            drawingSquare.style.cssText = "border-top-right-radius: 15px;"
            drawingSquare.setAttribute("id", "edge");
        }
        else if (i == (gridSize.value - 1) * gridSize.value) {
            drawingSquare.style.cssText = "border-bottom-left-radius: 15px;"
            drawingSquare.setAttribute("id", "edge");
        }
        else if (i == Math.pow(gridSize.value, 2) - 1) {
            drawingSquare.style.cssText = "border-bottom-right-radius: 15px;"
            drawingSquare.setAttribute("id", "edge");
        }
        drawingSquare.classList.add("child");
        if (gridLines.checked)
            drawingSquare.classList.add("border");
        container.appendChild(drawingSquare);
    }
    squares = document.querySelectorAll(".child");
    squares.forEach(square => {
        square.addEventListener('mousedown', function () {
            isMouseDown = true;
        })
        square.addEventListener('mouseup', function () {
            isMouseDown = false;
        })
        square.addEventListener('mouseover', function () {
            if (isMouseDown == true && eraser == false && isRainbowOn == true) {
                square.style.cssText = `background-color:${rainbowColors[color]}`;
                if (color >= rainbowColors.length - 1)
                    color = 0;
                else
                    color++;
            }
            else if (isMouseDown == true && eraser == false && isRainbowOn == false)
                square.style.cssText = `background-color:${penColor}`;

            else if (isMouseDown == true && eraser == true && isRainbowOn == false)
                square.style.cssText = "background-color:white";

        })
    });
}
gridLines.addEventListener("change", function () {
    if (this.checked) {
        squares.forEach(square => {
            square.classList.add("border");
        });
    }
    else {
        squares.forEach(square => {
            square.classList.remove("border");
        });
    }
})
colorInput.addEventListener("change", function () {
    penColor = this.value;
})
clearButton.addEventListener("click", function () {
    createGrid();
    eraserButton.classList.remove("active");
    erase = false;
})
eraserButton.addEventListener("click", function () {
    if (eraser == false) {
        eraser = true;
        eraserButton.classList.add("active");

    }
    else if (eraser == true) {
        eraser = false;
        eraserButton.classList.remove("active");
    }
    isMouseDown = false;
})
rainbowButton.addEventListener("click", function () {
    if (isRainbowOn == false) {
        isRainbowOn = true;
        rainbowButton.classList.add("active");
        rainbowButton.classList.remove("rainbow");
    }
    else if (isRainbowOn == true) {
        isRainbowOn = false;
        rainbowButton.classList.remove("active");
        rainbowButton.classList.add("rainbow");
   
    }
    isMouseDown = false;
})