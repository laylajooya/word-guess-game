var word = ["505", "sheffield", "turner", "helders", "humbug"];

var wins = 0;
var underscore = [];
var guessesLeft = 10;
var alreadyGuessed = [];

var underscoreText = document.getElementById("underscore-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var alreadyGuessedText = document.getElementById("alreadyGuessed-text");
var winsText = document.getElementById ("wins-text");
var gameAlertText = document.getElementById ("gameAlert-text");

// ----------------- GAME START ---------------------

// choose word randomly
var random = Math.floor(Math.random() * word.length);
var wordPick = word[random];
var wordPickLetter = wordPick.split("");

console.log(wordPick);


// make underscores based on word length
var generateUnderscore = function () {
    underscore = [];

    for (var i = 0; i < wordPick.length; i++){
        underscore.push("_");
    }
    return underscore;
}

generateUnderscore();
underscoreText.textContent = "" + underscore.join(" ");
guessesLeftText.textContent = "Number of guesses remaining: " + guessesLeft;
alreadyGuessedText.textContent = "Letters already guessed: " + alreadyGuessed;
winsText.textContent = "Wins: " + wins;

// ----------------- PLAYING GAME ---------------------

// reset game
function resetGame (){
    guessesLeft = 10;
    alreadyGuessed = [];
    wordUsedInLastGame = wordPick;

    word.splice(random, 1);

    random = Math.floor(Math.random() * word.length);
    wordPick = word[random];
    wordPickLetter = wordPick.split("");

    word.push(wordUsedInLastGame)
    
    generateUnderscore ();

}

// user guess
document.onkeyup = function(event) {
    var userGuess = event.key;
    alreadyGuessed.push(userGuess);

    for (var i = 0; i < wordPickLetter.length; i++){
        if (wordPickLetter[i] == userGuess.toString()) {
            underscore[i] = userGuess;
        }
    }

    if (wordPick == underscore.join("")){
        gameAlertText.textContent = "You win!";
        wins++; resetGame ();
    } else {
        if (guessesLeft == 0) {
        gameAlertText.textContent = "You lost!";
        resetGame ();
        } else {
            guessesLeft--;
        }
    }

    underscoreText.textContent = "" + underscore.join(" ");
    guessesLeftText.textContent = "Number of guesses remaining: " + guessesLeft;
    alreadyGuessedText.textContent = "Letters already guessed: " + alreadyGuessed;
    winsText.textContent = "Wins: " + wins;

}



