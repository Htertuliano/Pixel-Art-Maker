// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
/**
Grabbing the table form the index.html document
id name pixelCanvas
*/
var pixelTable = $('#pixelCanvas');
 $('#pixelCanvas tr').remove(); // removes every tr element, deletes table
var tBody = $('<tbody></tbody>'); // create tbody element
var rowLength = $('#inputHeight').val(); // grab user input of rows & storing in rowLenght variable
var colsLength = $('#inputWidth').val(); // grab user input of columns & storing in colsLength variable
pixelTable.append(tBody); // append the tBody to the table element
var colorChoice = $('#colorPicker'); // grab the colorPicker input element
var colorChosen = colorChoice.val(); //grabbing the value from the colorPicker & storing in colorChosen variable

/**
function updating color. attaches .click()
event listener to the colorChoice imput
element. Every chnage triggers the 
colorChosen current's value with the 
new one (colorvalue is read as hex)
*/
colorChoice.change(function colorUpdate(e) {
	colorChosen = $('#colorPicker').val();
 console.log(colorChosen)});
/**
Nested for loops cretaing first the rows then the cells and appending them
*/
	for ( var i = 0; i < rowLength; i++ ){ //for loop runs indexed from zero to one less than the input, running the same number as user input
		var newRow = $('<tr>'); // creation of a new row
	for( var j = 1; j <= colsLength; j++){ // for loop with same parameters as before thus runing the same number as user input
		newRow.append($('<td>')); //appending a new cell to the row
		}
		tBody.append(newRow); // appending the newly created row to the tbody
	}
/** 
function that adds .mouseover()
event listener to every table 
cell and changes their color on
mouseover. Takes whever cell the 
mouse is currently on and 
changes its backgorund color
*/
		$('td').mouseover( function(e) {
		e.stopPropagation(),
		$(e.currentTarget).css('background-color', colorChosen)}); 
}

