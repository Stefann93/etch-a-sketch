const container = document.querySelector("#container");
const gridSizeVal = document.querySelector("#gridSizeVal");
const gridSize = document.querySelector("#gridSize");
window.onload = createGrid();
gridSize.addEventListener('input', createGrid);

function createGrid() {
    gridSizeVal.textContent = `Grid size: ${gridSize.value}  x  ${gridSize.value} `;
    container.style.cssText = `grid-template-columns: repeat(${gridSize.value}, 1fr); grid-template-rows: repeat(${gridSize.value}, 1fr);`;
    container.textContent = "";
    for (let i = 0; i < Math.pow(gridSize.value, 2); i++) {
        const drawingSquare = document.createElement('div');
        drawingSquare.classList.add("child");
        container.appendChild(drawingSquare);
    }
}
const squares = document.querySelectorAll(".child")
squares.forEach(square => {
    square.addEventListener('mouseover', function(){
        square.style.cssText = "background-color:black";
    })
});