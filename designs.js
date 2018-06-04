// Select size input
const height = document.querySelector('#inputHeight').value;
const width = document.querySelector('#inputWidth').value;
// Select color input
const color = document.querySelector('#colorPicker').value;

// Select submit button
const submit = document.querySelector('#submit');

// When size is submitted by the user, call makeGrid()
submit.addEventListener('click' makeGrid(height, width));

//Make function makeGrid()
function makeGrid(height, width) {
  //Add rows
  for (let n = 0; n < height; n++) {
    const row = document.createElement('tr');
    const table = document.querySelector('#pixelCanvas');
    table.appendChild('row');
  };
  //Add cells
  for (let m = 0; m < width; m++) {
    const cell = document.createElement('tr');
    row.appendChild('cell');
  }
};
