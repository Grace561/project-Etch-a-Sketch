const container = document.getElementById("container");
const resizeBtn = document.getElementById("resizeBtn");
const clearBtn = document.getElementById("clearBtn");

let currentSize = 16;

// Create the grid function
function createGrid(size) {
    container.innerHTML = "";
     
    const containerSize = container.clientWidth;
    const squareSize = containerSize / size;

    for (let i = 0; i < size * size; i++){
        const square = document.createElement("div");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.classList.add("square");


        square.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random()* 256);
            const g = Math.floor(Math.random()* 256);
            const b = Math.floor(Math.random()* 256); 

            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
        square.style.backgroundColor = "random";
        container.appendChild(square);
    }
}

// LOAD dEFAULT Grid
createGrid(currentSize);

// RESIZE THE BUTTON
resizeBtn.addEventListener("click", () => {
    let newSize = prompt("Enter grid size (max 100):");

    newSize = Number(newSize);
    if (newSize > 0 && newSize <=100){
        currentSize = newSize;
        createGrid(currentSize);
    } else {
        alert("please enter a number between 1 and 100.");
    }
});


// CLEAR THE BUTTON 
clearBtn.addEventListener("click", () => {
    createGrid(currentSize);
})
