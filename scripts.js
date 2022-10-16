const container = document.querySelector("#container");

addEventListener('load',makeGrid(50));

function makeGrid(num) {
    makeRow(num);
    makeCell(num);
    
}

function makeRow(num) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        container.appendChild(row).className = 'gridRow';
    }
}

function makeCell(num) {
    const rows = document.querySelectorAll('.gridRow');

    rows.forEach((row) => {
        for (let i = 0; i < num; i++) {
            const cell = document.createElement('div');
            row.appendChild(cell).className = 'cell'
        }
    })
}


const cells = document.querySelectorAll(".cell");

let canDraw = false;

cells.forEach( (cell) => {
    cell.addEventListener('mousedown', () => {
        if (!canDraw) canDraw = true;
    })
    cell.addEventListener('mousemove', () => {
        if (canDraw) cell.style.cssText = "background-color: blue;";
    });
    cell.addEventListener('mouseup', () => {
        if (canDraw) canDraw = false;
    })
})

function draw(cell) {
    cell.classList.add = "drawn:hover";
}