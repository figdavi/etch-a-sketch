// Todo:
// Eraser button
// Pencil button
// Rainbow RGB button trail
// Darken by 10% (with opacity) button trail

const DEFAULT_GRID_SIZE = 15;

const grid_container = document.getElementById("grid-container");
const grid_size_button = document.getElementById("grid-size-btn");
const grid_clear_button = document.getElementById("grid-clear-btn");
const grid_size_input = document.getElementById("grid-size-input");
const body = document.querySelector("body");

let mouse_down = false;

window.addEventListener("onload", createGrid(DEFAULT_GRID_SIZE));
window.addEventListener("mousedown", () => {mouse_down = true});
window.addEventListener("mouseup", () => {mouse_down = false});

grid_clear_button.addEventListener("click", clearGrid);
grid_size_button.addEventListener("click", setGridSize);

function clearGrid() {
    grid_container.childNodes.forEach((element) => element.classList.remove("painted"));
}

function setGridSize() {
    let grid_size = DEFAULT_GRID_SIZE;
    grid_size = grid_size_input.value;

    if(isNaN(grid_size)) {
        alert("Invalid input");
        return;
    }

    if(grid_size < 1 || grid_size > 64) {
        alert("Size must be in [1,64] interval");
        return;
    }

    deleteGrid();
    createGrid(grid_size);
}

function createGrid(grid_size) {
    const flex_basis_value = 100 / grid_size;

    // row*column
    for (let i = 0; i < grid_size * grid_size; i++) {
        const cell = document.createElement("div");
        cell.setAttribute(
            "style", `flex: 0 0 ${flex_basis_value}%; border: 1px solid hsl(0 0 0/ 0.03)`
        );

        cell.addEventListener("mouseover", () => {
            if(mouse_down) {
                cell.classList.add("painted");
            }
        });

        cell.addEventListener("mousedown", () => {
                cell.classList.add("painted");
        });

        // By far the most important line
        cell.addEventListener("dragstart", (e) => {
            e.preventDefault();
        });

        grid_container.appendChild(cell);
        
    }
};

function deleteGrid() {
    grid_container.innerHTML = "";
}