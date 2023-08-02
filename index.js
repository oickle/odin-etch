let canvas = document.querySelector('.canvas');

let mouseDown = false;

// Sets whether the mouse is being held down or not
function getMouseStatus() {
    document.body.onmousedown = () => {
        mouseDown = true;
    }
    document.body.onmouseup = () => {
        mouseDown = false;
    };
}

function fillRow(size){
    // Creates a row
    for (let i = 0; i < size; i++) {
        const newCell = document.createElement('div');
        newCell.classList.add('cell');

        // Instantly changes color of clicked cell
        newCell.addEventListener('mousedown', paint);
        
        // Checks whether mouse is held down when entering to allow painting by mouse dragging
        newCell.addEventListener('mouseover', checkPaintDrag);
        
        canvas.appendChild(newCell);
    }
};

function fillGrid(size) {
    // Creates equal amount of rows to columns
    for (let i = 0; i < size; i++) {
        fillRow(size);
    }

    // Sets the maximum width of the entire canvas to the exact size of all the cells
    canvas.style['max-width'] = `${size * 25}px`;
}

// Called when mouse enters cell, allows for mouse to be dragged to paint
function checkPaintDrag(e) {
    if (mouseDown === true) { // checks whether mouse is being held down
        paint(e);
    }
}

// Changes selected cell's color
function paint(e) {
    const cell = e.target;
    cell.style['background-color'] = 'black';
}

getMouseStatus();
fillGrid(16);