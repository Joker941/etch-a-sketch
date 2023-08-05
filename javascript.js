function createDivs (nbrOflines) {
    let numberOflines = parseInt(nbrOflines) * parseInt(nbrOflines);
    
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("container_div");
    document.querySelector("body").appendChild(containerDiv);

    for (i = 1; i <= numberOflines; i++) {
        let div = document.createElement("div");
        div.classList.add("square_div");
        div.textContent = i;
        document.querySelector(".container_div").appendChild(div);
    }
}

createDivs(16);