const gridContainer = document.querySelector('#gridContainer');
const div = document.createElement('div');
div.style.backgroundColor= 'red';
div.textContent = 'grid';

function createGrid(gridSize){
    //Creates copies of individual grid divs and add them to the container
    for (let index = 0; index < gridSize; index++) {
        var grid = div.cloneNode(true);
        gridContainer.appendChild(grid);
    }
}

createGrid(16);