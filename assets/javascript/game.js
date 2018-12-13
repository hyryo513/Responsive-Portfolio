var winNumber = document.getElementById('win#');
var lossNumber = document.getElementById('loss#');
var guessNumber = document.getElementById('guess#');

var guessArray = [];

var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//store computerChoice for the first time
var letterIndex = Math.floor(Math.random() * 26);
var computerChoice = letterArray[letterIndex];

document.onkeyup = function(event) {
    if (letterArray.indexOf(event.key) !== -1) {
        if (computerChoice === event.key){
            winNumber.textContent = parseInt(winNumber.textContent) + 1;
            computerChoice = letterArray[letterIndex];
            alert("You Win and the answer is " + event.key + ". Keep Going!");
            guessArray.push(event.key);
            document.getElementById("guessSofar").innerHTML = guessArray;
            // refresh computerChoice after guessing correctly
            letterIndex = Math.floor(Math.random() * 26);
            computerChoice = letterArray[letterIndex];
        }
        else {
            lossNumber.textContent = parseInt(lossNumber.textContent) + 1;
            guessNumber.textContent = parseInt(guessNumber.textContent) - 1;
            guessArray.push(event.key);
            document.getElementById("guessSofar").innerHTML = guessArray;
        };
        if (guessNumber.textContent === "0"){
            alert("You Lost:( Click OK to continue!")
            guessNumber.textContent = "9";
            lossNumber.textContent = "0";
            winNumber.textContent = "0";
            // refresh computerChoice after guessing incorrectly for 9 times
            letterIndex = Math.floor(Math.random() * 26);
            computerChoice = letterArray[letterIndex];
            guessArray = [];
            document.getElementById("guessSofar").innerHTML = "";
        };
    };
};