let defaultGrid = 2
const gridContainer = document.querySelector("#container");

function constructGrid(gridSize){
    let fullSize = gridSize*gridSize
    console.log("Starting construction of grid with size " + fullSize)
    document.querySelector("#container").style.width = (gridSize*100)+(gridSize*2) + "px";
    for (i = 0; i < (gridSize*gridSize); i++){
        const newPixel = document.createElement("div")
        newPixel.classList.add("pixel")
        newPixel.setAttribute("id", "pixel" + i)
        gridContainer.appendChild(newPixel);
    }
}

gridContainer.addEventListener("mouseover", (event) => {
    let target = event.target
    target.style.backgroundColor = "Black"
})



constructGrid(defaultGrid)