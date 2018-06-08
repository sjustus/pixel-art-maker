const table = document.getElementById('pixelCanvas');
let colorInput = document.querySelector('#colorPicker'); // Select color

// Select submit button
const submit = document.querySelector('#submit');

// When size is submitted by the user, call makeGrid()
submit.addEventListener('click', function (event) {
  event.preventDefault();
  let height = document.getElementById('inputHeight').value; //Select height
  let width = document.getElementById('inputWidth').value; // Select width
  //clear grid
  table.innerHTML='';
  makeGrid(height, width); //call makeGrid()
}, true);

colorInput.addEventListener('click', function() {
  cellColor();
});

//Make function makeGrid()
function makeGrid(height, width) {

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

function cellColor() {
  let cells = document.getElementsByTagName('td');
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function (event) {
      event.target.style.backgroundColor = colorInput.value;
    });
  }
}
