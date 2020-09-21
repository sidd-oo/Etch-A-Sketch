// Select Reset Button
let resetButton = document.querySelector('#reset-btn');
//Select Grid DIv
let gridContainer = document.querySelector('#grid');

//Prompts user for grid size and calls the createGrid function.
function main(){
    let grid_size = prompt("Choose Grid Size: ", "24");
    create_grid(grid_size);
    resetButton.addEventListener('click', resetfunc);
}

//for creation of the grid
function create_grid(grid_size){
    for(let i = 0; i < grid_size * grid_size; i++){
        const newDiv = document.createElement('div');
        gridContainer.appendChild(newDiv);
        newDiv.classList.add('newGrid');
        newDiv.style.width = `${(1/grid_size)*100}%`;
        newDiv.style.height = newDiv.style.width;
        newDiv.addEventListener('mouseover', drawSketch);
    }
}

//for reloading the page and re prompt the new grid size
function resetfunc(){
    window.location.reload();
}
  
//this is for sketching and filling the random colors to the grid element
function drawSketch(draw){
    draw.target.style.backgroundColor = randomColor();

}

//random color picking function
function randomColor(){
    let r = Number(Math.floor(Math.random() * 256));
    let g = Number(Math.floor(Math.random() * 256));
    let b = Number(Math.floor(Math.random() * 256));
    let randomColor = "rgb("+r+","+g+","+b+")";
    return randomColor;
    
} 

//calling the main function
main();
