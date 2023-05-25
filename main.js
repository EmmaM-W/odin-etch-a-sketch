const gridContainer = document.querySelector('#gridContainer');
const btn = document.querySelector('#gridButton');
const div = document.createElement('div');
div.style.backgroundColor= 'red';

btn.addEventListener('click',() => {
    do {
        x = prompt('please enter the size of the grid you want. Must be between 1 and 100.');

    } while (x < 1 || x > 100 || isNum(x) === false);
    createGrid(x);
})

function isNum(input){
    let isnum = /^\d+$/.test(input);
    return isnum;
}

function createGrid(gridSize){
    //first clear current grid
    gridContainer.textContent = '';
    let gridHeight =  480/gridSize;
    console.log(gridHeight);
    //Creates copies of individual grid divs and add them to the container
    for (let index = 0; index < gridSize*gridSize; index++) {
        var grid = div.cloneNode(true);
        grid.style.flexShrink = '0';
        grid.style.height =  gridHeight +'px';
        grid.style.width = gridHeight + 'px';
        grid.addEventListener('mouseover', function (e) {
            console.log('hit');
            e.target.style.backgroundColor = 'blue';
        });

        gridContainer.appendChild(grid);
    }
}


