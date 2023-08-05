function getRandomColor() {

    return Math.floor(Math.random() * 256);
}

function getRandomOpacity() {
    
    return Math.round(Math.random() * 10) / 10;
}
function createDivs (nbrOflines) {
    let numberOflines = parseInt(nbrOflines) * parseInt(nbrOflines);
    
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("container_div");
    document.querySelector("body").appendChild(containerDiv);

    for (i = 1; i <= numberOflines; i++) {
        let div = document.createElement("div");
        div.classList.add("square_div");
        div.classList.add("div_" + i);
        document.querySelector(".container_div").appendChild(div);

        let divHover = document.querySelector(".div_" + i);
        divHover.addEventListener("mouseover", function () {
            divHover.style = "background-color: rgb(" + getRandomColor() + ", " + getRandomColor() + ", " + getRandomColor() + "); opacity: " + getRandomOpacity() + ";";
        })
    }
    
}

createDivs(16);
document.querySelector(".container_div").style = "width: " + parseInt(16) * 50 + "px;";

let buttonForSizeChange = document.querySelector("button");
buttonForSizeChange.addEventListener("click", function (){
    let sizeChoosed = prompt("Choose the grid's size please (Max 100).");
    
    let grid = document.querySelector(".container_div");
    
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    
    //console.log(testSuppression.childNodes.length)
    createDivs(parseInt(sizeChoosed));

    document.querySelector(".container_div").style = "width: " + parseInt(sizeChoosed) * 50 + "px;";
} )



