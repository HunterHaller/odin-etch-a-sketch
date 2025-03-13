let defaultGrid = 2
//let gridContainer = document.querySelector("#container")
const gridContainer = document.querySelector("#container");

function constructGrid(gridSize){
    let fullSize = gridSize*gridSize
    console.log("Starting construction of grid with size " + fullSize)
    document.querySelector("#container").style.width = (gridSize*100)+(5*gridSize) + "px";
    for (i = 0; i < (gridSize*gridSize); i++){
        console.log("Constructor looping running iteration " + i)
        const newPixel = document.createElement("div")
        newPixel.classList.add("pixel")
        newPixel.textContent = "Hello!"
        gridContainer.appendChild(newPixel);
        
        console.log("Added a pixel!")
    }
}

constructGrid(defaultGrid)