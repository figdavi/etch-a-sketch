// Create grid
// Hover effect that leaves pixelated trail (dones with classes)

/* Button that sends popups asking grid size 
* (current grid removed, new one added in same container space)
*/ 

// Rainbow RGB button trail
// Darken by 10% (with opacity) button trail


const cell_quantity_input = document.getElementById("#cell-quantity-input");
const grid_container = document.getElementById("grid-container");
const grid_size_button = document.querySelector(".grid-size-btn");
const grid_clear_button = document.querySelector(".grid-clear-btn");
const body = document.querySelector("body");

grid_clear_button.addEventListener("click", clearGrid);

grid_size_button.addEventListener("click", setGridSize);

function clearGrid() {
    grid_container.childNodes.forEach((element) => element.classList.remove("painted"));
}

function setGridSize() {
    const grid_size = parseInt(prompt("New Grid Size [1, 100]: "));

    if(isNaN(grid_size)) {
        alert("Invalid input");
        return;
    }

    if(grid_size < 1 || grid_size > 100) {
        alert("Size must be in [1,100] interval");
        return;
    }

    deleteGrid();
    createGrid(grid_size);
}

const createGrid = (grid_size) => {
    const flex_basis_value = 100 / grid_size;

    // row*column
    for (let i = 0; i < grid_size * grid_size; i++) {
        const cell = document.createElement("div");
        cell.setAttribute(
            "style", `flex: 0 0 ${flex_basis_value}%; border: 1px solid hsl(0 0 0/ 0.03)`
        );

        cell.addEventListener("mouseover", () => {
                cell.classList.add("painted");
        });

        grid_container.appendChild(cell);
    }
};

const deleteGrid = () => {
    grid_container.innerHTML = "";
}

createGrid(10);