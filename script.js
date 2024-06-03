const gridContainer = document.querySelector(".grid-container");
const newGridButton = document.querySelector(".new-grid-button");   
let mouseDown = false;

document.addEventListener("mousedown", (e) => {
    e.preventDefault();
    mouseDown = true;
});

document.addEventListener("mouseup", () => {
    mouseDown = false;
});

newGridButton.addEventListener("click", () => {
    gridContainer.replaceChildren();
    createGrid(prompt("How many squares per side? (Max: 100)"));
});

function createGrid(size) {
    if (size > 100) {
        alert("Too large a number, please try again with a lower number.");
        return;
    }

    for (i = 0; i < (size*size); i++) {
        const newSquare = document.createElement("square");
        newSquare.classList.add("grid-square");
        newSquare.style.minWidth = `${(900/size)}px`;
        newSquare.style.minHeight = `${(900/size)}px`;
        newSquare.style.flex = `0 0 ${(900/size)}px`;
        newSquare.addEventListener("mouseover", () => {
            if (mouseDown === true) {
                newSquare.classList.add("colored");
            }
        });
        gridContainer.appendChild(newSquare);
    }
}

createGrid(16);