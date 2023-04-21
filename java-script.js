const container = document.querySelector("#container");
for (let i = 0; i < 16; i++) {
    const drawingSquare = document.createElement('div');
    drawingSquare.classList.add("child");
    container.appendChild(drawingSquare);
}