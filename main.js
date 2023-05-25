const gridContainer = document.querySelector('#gridContainer');
const div = document.createElement('div');
div.style.backgroundColor= 'red';
div.textContent = 'grid';
div.addEventListener('onmouseover', function (e) {
    e.target.style.backgroundColor = 'blue';
});

function createGrid(gridSize){
    let gridHeight =  480/gridSize;
    console.log(gridHeight);
    //Creates copies of individual grid divs and add them to the container
    for (let index = 0; index < gridSize*gridSize; index++) {
        var grid = div.cloneNode(true);
        grid.textContent = index;
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

createGrid(8);
