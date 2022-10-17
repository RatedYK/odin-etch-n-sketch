const container = document.querySelector("#container");
const color = document.querySelector('#colorPicker');
const prevColor = document.querySelector('#prevColor');
let colorNow = "#000000";
let oldColor = null;

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
    let canDraw = false;
    const cells = document.querySelectorAll(".cell");
    cells.forEach( (cell) => {
        //checks to see if mouse is clicked
        cell.addEventListener('mousedown', () => {
            canDraw = true;
            cell.style.cssText = `background-color: ${colorNow};`;  
        })
        cell.addEventListener('mousemove', () => {
            if (canDraw) cell.style.cssText = `background-color: ${colorNow};`;
        }) 
        //stops coloring when mouse is not longer clicked
        cell.addEventListener('mouseup', () => {
            canDraw = false;
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
    let size = +prompt("Enter size of grid (10 - 100)")
    size >= 10 && size <= 100 ? makeGrid(size): makeGrid(50);
}

//clears all squares, sets to default white color
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell')
    cells.forEach((cell) => {cell.style.cssText = 'background-color: white;'})
})

//chooses the current drawing color.
color.addEventListener('input', () => {
    oldColor = colorNow; //updates prev color
    prevColor.style.cssText = `background-color: ${colorNow};`; //updates prev color button
    colorNow = color.value; //change current drawing color
    console.log(`Old Color is ${oldColor}`)
    console.log(`Color now is ${colorNow}`)
    
})
prevColor.addEventListener('click', () => {
    colorNow = oldColor; //update current drawing color to prev color
    console.log(`Old Color is ${oldColor}`)
    console.log(`Color now is ${colorNow}`)
})

//grid size toggler

const gridLines = document.querySelector('.gridLines');
gridLines.addEventListener('click', () => {
    const cellLines = document.querySelectorAll('.cell')
    cellLines.forEach((cell) => {
        cell.classList.toggle('noBorder')
    })

    gridLines.textContent === "Grid: ON" ? gridLines.textContent = "Grid: OFF" : gridLines.textContent = "Grid: ON"
})
