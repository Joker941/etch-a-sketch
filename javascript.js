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
        div.textContent = i;
        document.querySelector(".container_div").appendChild(div);

        let divHover = document.querySelector(".div_" + i);
        divHover.addEventListener("mouseover", function () {
            divHover.style = "background-color: rgb(" + getRandomColor() + ", " + getRandomColor() + ", " + getRandomColor() + "); opacity: " + getRandomOpacity() + ";";
        })
    }
}

createDivs(16);


// let testHover = document.querySelector(".div_6");
// testHover.addEventListener("mouseover", function () {
//     testHover.style = "background-color: red;";
//     //setTimeout(() => testHover.style = "background-color: aliceblue; opacity: .4", 3500);

// })


