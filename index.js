let canvas = document.querySelector('.canvas');

function fillRow(size){
    // Creates a row
    for(let i = 0; i < size; i++) {
        const newCell = document.createElement('div');
        newCell.classList.add('cell');
        canvas.appendChild(newCell);
    }
};

function fillGrid(size) {
    // Creates equal amount of rows to columns
    for(let i = 0; i < size; i++) {
        fillRow(size);
    }

    // Sets the maximum width of the entire canvas to the exact size of all the cells
    canvas.style['max-width'] = `${size * 25}px`;
}

fillGrid(16);