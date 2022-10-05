const grid = document.getElementById("grid");
const sizeButton = document.getElementById("sizeButton");
const refreshButton = document.getElementById("refreshButton");
const gridCell = document.getElementsByClassName("cell");
const lengths = document.getElementsByClassName("length");
const pens = document.getElementsByClassName("pen");

let penMode = "standard";

function makeGrid(length) {
    grid.textContent = "";
    for (let i = 1; i <= length; i++) {
        const row = document.createElement("div");
        row.classList = "row";
        // row.id = `r${i.toString().padStart(2, "0")}`;
        grid.appendChild(row);
        
        for (let j = 1; j <= length; j++) {
            const cell = document.createElement("div");
            cell.classList = "cell";
            // cell.id = `${row.id}c${j.toString().padStart(2, "0")}`;
            row.appendChild(cell);
        }
    }
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
    updateSize(length);
}

function updateSize(l) {
    Array.from(lengths).forEach(e => e.textContent = l);
}

function refresh() {
    Array.from(gridCell).forEach(e => {
        e.style.backgroundColor = "";
        e.style.opacity = "";
        e.name = "";
    });
}

function random256() {
    return Math.floor(Math.random() * 256);
}

function changePen(e) {
    penMode = this.id;
}

function activatePad() {
    ["mousedown", "mouseover"].forEach(ev => Array.from(gridCell).forEach(c => c.addEventListener(ev, draw)));
} 

function draw(e) {
    if (e.buttons === 1) {
        e.preventDefault()
        if (penMode === "standard") {
            if (this.name === "standard") {
                if (this.style.opacity < 1) {
                    this.style.opacity = Number(this.style.opacity) + 0.1;
                } 
            } else {
                this.style.backgroundColor = "cadetblue";
                this.style.opacity = 0.1;
                this.name = "standard";
            }
        } else if (penMode === "grayscale") {
            if (this.name === "grayscale") {
                if (this.style.opacity < 1) {
                    this.style.opacity = Number(this.style.opacity) + 0.1;
                } 
            } else {
                this.style.backgroundColor = "black";
                this.style.opacity = 0.1;
                this.name = "grayscale";
            }
        } else if (penMode === "sprinkles") {
            if (this.name === "sprinkles") {
                if (this.style.opacity < 1) {
                    this.style.opacity = Number(this.style.opacity) + 0.1;
                } 
            } else {
                this.style.backgroundColor = `rgb(${random256()}, ${random256()}, ${random256()})`;
                this.style.opacity = 0.1;
                this.name = "sprinkles";
            }
        } else if (penMode === "unicorn") {
            if (this.name === "unicorn") {
                if (this.style.opacity < 1) {
                    this.style.opacity = Number(this.style.opacity) + 0.1;
                } 
            } else {
                this.style.backgroundColor = `rgb(${random256()}, 50, 200)`;
                this.style.opacity = 0.1;
                this.name = "unicorn";
            }
        } else if (penMode === "eraser") {
            this.style.backgroundColor = "";
            this.style.opacity = "";
            this.name = "";
        } 
    } 
    this.style.border = "1px solid mistyrose"   
}

sizeButton.addEventListener("click", changeSize);
refreshButton.addEventListener("click", refresh);
Array.from(pens).forEach(p => p.addEventListener("click", changePen));

makeGrid(16);
activatePad();
