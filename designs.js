// Select color input

var colorInput = document.getElementById('colorPicker');

// Select size input

var size = document.getElementById("sizePicker");

var height = document.getElementById('inputHeight');

var width = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()

var picture = document.getElementById("pixelCanvas");

size.addEventListener('submit', function(event) {

event.preventDefault();

makeGrid(height, width);

});

function makeGrid(height,width)
{

var height = document.getElementById("inputHeight").value;

var width = document.getElementById("inputWidth").value;

picture.innerHTML = null;

for (var i = 0; i < height; i++)
{

var row = picture.insertRow(i);

for (var j = 0; j < width; j++)
{

  var cell= row.insertCell(j);

  cell.addEventListener('click', function(event) {

    var color = colorInput.value;

    this.style.backgroundColor = color;

})

}

}

};
