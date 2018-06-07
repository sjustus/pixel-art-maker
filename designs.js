
let colorInput = document.querySelector('#colorPicker').value; // Select color

// Select submit button
const submit = document.querySelector('#submit');

// When size is submitted by the user, call makeGrid()
submit.addEventListener('click', function () {
  event.preventDefault();
  let height = document.getElementById('inputHeight').value; //Select height
  let width = document.getElementById('inputWidth').value; // Select width
  //clear grid

  makeGrid(height, width); //call makeGrid()
}, true);

// On click change cell based on color input
cell.addEventListener('click', function() {
  cell.style.color = colorInput;
});
//Make function makeGrid()
function makeGrid(height, width) {
  const table = document.getElementById('pixelCanvas');
  for (n = 0; n < height; n++) {
    const row = document.createElement('tr'); // Create row
    for (m = 0; m < width; m++) {
      const cell = document.createElement('td'); // Create cell
      row.appendChild(cell); //Attach cell to row
    }
    //add row to table
    table.appendChild(row);
  }
};
