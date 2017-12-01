var mode = 6;
var score = 50;
var colors = [];
var h1, modeButtons, selectedButton, reset, messageDisplay, colorDisplay, pickedColor;
init();
function init(){
	colors = generateRandomColor(mode);
	h1 = document.querySelector("h1");
	modeButtons = document.querySelectorAll(".mode");
	selectedButton = document.querySelector(".selected");
	reset = document.querySelector("#reset");
	messageDisplay = document.querySelector("#messageDisplay");
	colorDisplay = document.querySelector("#colorDisplay");
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
}


// mode button event listeners
for(var i=0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click",function(){
	modeButtons[0].classList.remove("selected");
	modeButtons[1].classList.remove("selected");
	selectedButton = this;
	this.classList.add("selected");
	reseting();
	});
}

// reset event listener button
reset.addEventListener("click",function(){
	reseting();
});
// clicked color parameters
var square = document.querySelectorAll(".square");
for(var i=0; i<square.length; i++){
	// setting color to each div_s
	square[i].style.backgroundColor = colors[i];
	// click eventListener
	square[i].addEventListener("click",function(){
		score-=10;
		var clickedColor = this.style.backgroundColor;
		// compare clicked color and picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "your score is " + score;
			h1.style.backgroundColor = clickedColor;
			changeColor(clickedColor);
			reset.textContent = "Play Again!!!";
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try angain!!!";
		}
	});
}

function reseting(){
	// reseting scores & mode
	selectedButton.textContent === "Easy" ? mode = 3 : mode = 6;
	selectedButton.textContent === "Easy" ? score = 40 : score = 70;
	// generate new random color
	colors = generateRandomColor(mode);
	reset.textContent = "New Game";
	messageDisplay.textContent = "";
	// pick new color
	pickedColor = pickColor();
	// Changing the color display
	colorDisplay.textContent = pickedColor;	
	// resetting color display
	messageDisplay.textContent = null;
	// reseting bgcolor of h1
	h1.style.backgroundColor = "steelblue";
	// set new colors to squares
	setupSquare();
}
function setupSquare(){
	for(var i=0; i<square.length; i++){
		if (colors[i]) {
			square[i].style.display = "block";
			square[i].style.backgroundColor = colors[i];
		}
		else{
			square[i].style.display = "none";
		}
	}
}
function changeColor(color){
	// loop through the square
	for(var i=0; i<square.length; i++){
		// change the bg color of square
		square[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
// random color generating function
function generateRandomColor(num){
		// make an array
		var ranColor = [];
		// push random color
		for (var i=0; i < num; i++){
			ranColor.push(randomColor());
		}
		// return random color
		return ranColor;
}
// random color
function randomColor(){
	// for r
	var r = Math.floor(Math.random() * 256);
	// for g
	var g = Math.floor(Math.random() * 256);
	// for b
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")" ;
}