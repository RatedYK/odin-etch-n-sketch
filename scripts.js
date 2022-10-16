const container = document.querySelector("#container");
const color = document.querySelector('#colorPicker');

container.addEventListener('load',makeGrid(50));

function makeGrid(num) {
    makeRow(num);
    makeCell(num);
    allowDraw();    
}

//make rows to be filled with squares
function makeRow(num) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        container.appendChild(row).className = 'gridRow';
    }
}

//for each row make squares equal to total amount of rows
function makeCell(num) {
    const rows = document.querySelectorAll('.gridRow');

    rows.forEach((row) => {
        for (let i = 0; i < num; i++) {
            const cell = document.createElement('div');
            row.appendChild(cell).className = 'cell'
        }
    })
}

//select all squares in the grid and add an event
function allowDraw() {
    const cells = document.querySelectorAll(".cell");
    let canDraw = false;
    cells.forEach( (cell) => {
        //checks to see if mouse is clicked
        cell.addEventListener('mousedown', () => {
            if (!canDraw) canDraw = true;
        })
        //adds the color to the squares
        cell.addEventListener('mousemove', () => {
            if (canDraw) cell.style.cssText = `background-color: ${color.value};`; 
        });
        //stops coloring when mouse is not longer clicked
        cell.addEventListener('mouseup', () => {
            if (canDraw) canDraw = false;
        })
    })
}

//menu functions

const resize = document.querySelector('.resize');
resize.addEventListener('click', makeNewGrid)

function makeNewGrid() {
    //delete previous grid
    const rows = document.querySelectorAll(".gridRow")
    rows.forEach((row) => {
        container.removeChild(row);
    })

    //set new grid
    let size = +prompt("Enter size of grid, 10 - 50")
    
    makeGrid(size);
}

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell')
    cells.forEach((cell) => {cell.style.cssText = 'background-color: white;'})
})