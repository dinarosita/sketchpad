function makeGrid(length) {
    const grid = document.getElementById("grid");
    grid.textContent = "";
    for (let i = 1; i <= length; i++) {
        const row = document.createElement("div");
        row.classList = "row";
        row.id = `r${i.toString().padStart(2, "0")}`;
        grid.appendChild(row);
        
        for (let j = 1; j <= length; j++) {
            const cell = document.createElement("div");
            cell.classList = "cell";
            cell.id = `${row.id}c${j.toString().padStart(2, "0")}`;
            row.appendChild(cell);
        }
    }
    updateSize(length);
}

function basicTrail(e) {
    if (penMode === "standard") {
        this.style.backgroundColor = "cadetblue";
    } else if (penMode === "sprinkles") {
        this.style.backgroundColor = randomColor();
    } else if (penMode === "unicorn") {
        this.style.backgroundColor = unicornColor();
    } else if (penMode === "pastel") {
        this.style.backgroundColor = pastelColor();
    } else if (penMode === "grayscale") {
        this.style.backgroundColor = grayPressure();
    }
}

function activatePad() {
    const gridCell = document.getElementsByClassName("cell");
    Array.from(gridCell).forEach(c => c.addEventListener("mouseover", basicTrail));
} 

function changeSize() {
    let length = prompt("Length (1-100): ", 16);
    if (length === null || isNaN(length)) {
        return;
    } else if (length < 1) {
        length = 1;
    } else if (length > 100) {
        length = 100;
    }

    makeGrid(length);
    activatePad();
}

function updateSize(length) {
    const horizontal = document.getElementById("horizontal");
    horizontal.textContent = length;
    const vertical = document.getElementById("vertical");
    vertical.textContent = length;
}

function refresh() {
    const gridCell = document.getElementsByClassName("cell");
    Array.from(gridCell).forEach(e => e.style.backgroundColor = "");
}

const sizeButton = document.getElementById("sizeButton");
const refreshButton = document.getElementById("refreshButton");

sizeButton.addEventListener("click", changeSize);
refreshButton.addEventListener("click", refresh);
makeGrid(16);
activatePad();

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function unicornColor() {
    let r = Math.floor(Math.random() * 150 + 100);
    let g = 50;
    let b = 200;
    return `rgb(${r}, ${g}, ${b}, 50%)`;
}

function pastelColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b}, 40%)`;
}

let penMode = "standard";
function changePen(e) {
    penMode = this.id;
}

function grayPressure() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(0, 0, 0, 10%)`;
}

const pens = document.getElementsByClassName("pen");
Array.from(pens).forEach(p => p.addEventListener("click", changePen));