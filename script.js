let defaultGrid = 2
const gridContainer = document.querySelector("#container");
const resizeButton = document.querySelector("button")

function constructGrid(gridSize){
    let fullSize = gridSize*gridSize
    console.log("Starting construction of grid with " + fullSize + " elements.")
    //document.querySelector("#container").style.width = (gridSize*100)+(gridSize*2) + "px";
    for (i = 0; i < (gridSize*gridSize); i++){
        const newPixel = document.createElement("div")
        newPixel.classList.add("pixel")
        newPixel.style.width = ((500 / gridSize) - 2) + "px"
        gridContainer.appendChild(newPixel);
    }
}

//Using the same event delegation method that I used in the rock/paper/scissors project:
gridContainer.addEventListener("mouseover", (event) => {
    let target = event.target
    if (target.id == "container"){
        console.log("Container hit, do nothing!")
    } 
    else {
        //target.style.backgroundColor = "Black"
        target.style.opacity -= -0.1
    }
    
})

resizeButton.addEventListener("click", () => {
    
    let userGrid = prompt("What size would you like your grid to be?");
    let userNum = Number(userGrid)
    
    if (isNaN(userNum)){
        window.alert(userGrid + " isn't a number!!")
        console.log("ERROR: Input isn't a number.")
    } 
    else if (userNum > 100){
        window.alert("That's too big, dude! Think smaller.")
        console.log("ERROR: Input too large.")
    } 
    else{
        gridContainer.replaceChildren() //Without specifying new children, simply erases all current children.
        constructGrid(userNum) //
    }
})

constructGrid(defaultGrid)