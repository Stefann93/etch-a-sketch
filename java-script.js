const container = document.querySelector("#container");
const gridSizeVal = document.querySelector("#gridSizeVal");
const gridSize = document.querySelector("#gridSize");
const gridLines = document.querySelector("#gridLines");
let isPressed = false;
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
        container.appendChild(drawingSquare);
    }
    squares = document.querySelectorAll(".child");
    squares.forEach(square => {
        square.addEventListener('mousedown', function () {
            isPressed = true;
        })
        square.addEventListener('mouseup', function () {
            isPressed = false;
        })
        square.addEventListener('mouseover', function () {
            if (isPressed == true)
                square.style.cssText = "background-color:black";
        })
    });
    gridLines.checked = false;
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