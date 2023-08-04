let canvas = document.querySelector('.canvas');
let changeSizeButton = document.querySelector('.size-button');

let selectedColor = 'black';

let mouseDown = false;
let hoverMode = false;
let rainbowMode = false;

// Sets whether the mouse is being held down or not
function getMouseStatus() {
    document.body.onmousedown = () => {
        mouseDown = true;
    }
    document.body.onmouseup = () => {
        mouseDown = false;
    };
}

// Returns an integer from 0 to max (cannot be max)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function fillRow(size){
    // Creates a row
    for (let i = 0; i < size; i++) {
        const newCell = document.createElement('div');
        
        // Cell sizes change to fit the 400px by 400px grid, rather than the grid itself changing
        let scale = 400 / size // Calculates the maximum size for the cells
        console.log(scale);
        newCell.style['width'] = `${scale}px`;
        newCell.style['height'] = `${scale}px`;
        newCell.classList.add('cell');

        // Instantly changes color of clicked cell
        newCell.addEventListener('mousedown', paint);
        
        // Checks whether mouse is held down when entering to allow painting by mouse dragging
        newCell.addEventListener('mouseover', checkPaintDrag);
        
        canvas.appendChild(newCell);
    }
};

// Creates an equal amount of rows to columns
function fillCanvas(size) {
    for (let i = 0; i < size; i++) {
        fillRow(size);
    }
}

// Deletes all old cells on the grid
function clearCanvas(){
    var cell = canvas.firstElementChild;
    while (cell) {
        canvas.removeChild(cell);
        cell = canvas.firstElementChild;
    }
}

// Called when mouse enters cell, allows for mouse to be dragged to paint
function checkPaintDrag(e) {
    if (mouseDown === true || hoverMode) { // checks whether mouse is being held down
        paint(e);
    }
}

// Changes selected cell's color
function paint(e) {
    const cell = e.target;

    if (rainbowMode) {
        let r = getRandomInt(256);
        let g = getRandomInt(256);
        let b = getRandomInt(256);
        cell.style['background-color'] = `rgb(${r}, ${g}, ${b})`;
    }
    else {
        cell.style['background-color'] = selectedColor;
    }
}

// Called from html 'onclick' function
function changeCanvasSize() {
    let newSize = +prompt("What size do you want? (MAX is 100)");
    newSize = newSize > 0 ? newSize : 1; // prevents sizes of 0 or negative values
    newSize = newSize < 100 ? newSize : 100; // limits max grid size to 100
    
    clearCanvas(); // deletes every child div
    fillCanvas(newSize);
}

// Toggles hover mode when checkbox is clicked
function toggleHover() {
    hoverMode = !hoverMode;
}

// Toggles rainbow mode when checkbox is clicked
function toggleRainbow() {
    rainbowMode = !rainbowMode;
}

// Initial set up functions
getMouseStatus();
fillCanvas(16);

