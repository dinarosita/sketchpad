function makeGrid(r, c) {
    const grid = document.getElementById("grid");
    for (let i = 1; i <= r; i++) {
        const row = document.createElement("div");
        row.classList = "row";
        row.id = `r${i.toString().padStart(2, "0")}`;
        // row.textContent = row.id;
        grid.appendChild(row);
        
        for (let j = 1; j <= c; j++) {
            const cell = document.createElement("div");
            cell.classList = "cell";
            cell.id = `${row.id}c${j.toString().padStart(2, "0")}`;
            // cell.textContent = cell.id;
            row.appendChild(cell);
        }
    }
}

makeGrid(16, 16);

function trailHover(e) {
    this.classList.add("hover");
}

const gridCell = document.getElementsByClassName("cell");
Array.from(gridCell).forEach(c => c.addEventListener("mouseover", trailHover))
; 

function changeSize() {
alert("hi");
}

const sizeButton = document.getElementById("sizeButton");

sizeButton.addEventListener("click, changeSize");