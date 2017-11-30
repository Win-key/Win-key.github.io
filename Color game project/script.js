var mode = 6;
var colors = generateRandomColor(mode);
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#Easy");
var hardBtn = document.querySelector("#Hard");
var score = 60;
// picked color parameters
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#messageDisplay");

// reset parameters
var reset = document.querySelector("#reset");
reset.addEventListener("click",function(){
	// generate new random color
	colors = generateRandomColor(mode);
	// pick new color
	pickedColor = pickColor();
	// set new colors to squares
	for(var i=0; i<square.length; i++){
		square[i].style.backgroundColor = colors[i];
	}
	// Changing the color display
	colorDisplay.textContent = pickedColor;	
	// reseting bgcolor of h1
	h1.style.backgroundColor = "steelblue";
	// score setting
	if(mode === 3)
		score = 40;
	else
		score = 60;
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
			reset.addEventListener("click",function(){
				this.textContent = "New Game";
				messageDisplay.textContent = "";
			});
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try angain!!!";
		}
	});
}

// easy button event listener
easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	// generate new random color
	mode = 3;
	score = 40;
	colors = generateRandomColor(mode);
	// pick new color
	pickedColor = pickColor();
	// Changing the color display
	colorDisplay.textContent = pickedColor;	
	// reseting bgcolor of h1
	h1.style.backgroundColor = "steelblue";
	// set new colors to squares
	for(var i=0; i<square.length; i++){
		if(colors[i])
			square[i].style.backgroundColor = colors[i];
		else
			// making hidden squares
			square[i].style.display = "none";
	}
	// setting messageDisplay none
	messageDisplay.textContent = "";
	// reset textContent
	reset.textContent = "New Game";

});

// hard button event listener
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	// generate new random color
	score = 60;
	mode = 6;
	colors = generateRandomColor(mode);
	// pick new color
	pickedColor = pickColor();
	// Changing the color display
	colorDisplay.textContent = pickedColor;	
	// reseting bgcolor of h1
	h1.style.backgroundColor = "steelblue";
	// set new colors to squares
	for(var i=0; i<square.length; i++){
		square[i].style.backgroundColor = colors[i];
		// making hidden squares
		square[i].style.display = "block";
	}
	// setting messageDisplay none
	messageDisplay.textContent = "";
	// reset textContent
	reset.textContent = "New Game";
});

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