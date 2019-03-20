var word = ["505", "sheffield", "turner"];

var wins = 0;
var underscore = [];
var guessesLeft = 10;
var alreadyGuessed = [];

var underscoreText = document.getElementById("underscore-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var alreadyGuessedText = document.getElementById("alreadyGuessed-text");
var winsText = document.getElementById ("wins-text");

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
// user guess
document.onkeyup = function(event) {
    var userGuess = event.key;
    alreadyGuessed.push(userGuess);

    for (var i=0; i < wordPickLetter.length; i++){
        if (wordPickLetter[i] == userGuess.toString()) {
            underscore[i] = userGuess;
        }
    }

    if (wordPick == underscore.join("")){
        wins++; guessesLeft = 10; alreadyGuessed = [];
    } else {
        if (guessesLeft == 0) {
        alreadyGuessed = [];
        } else {
            guessesLeft--;
        }
    }

    underscoreText.textContent = "" + underscore.join(" ");
    guessesLeftText.textContent = "Number of guesses remaining: " + guessesLeft;
    alreadyGuessedText.textContent = "Letters already guessed: " + alreadyGuessed;
    winsText.textContent = "Wins: " + wins;

}




    // checking if letter matches in word
    // if(wordPick.indexOf(userGuess) > -1){
        
    //     alreadyGuessed.push(userGuess);
    //     console.log("alreadyGuessed" + alreadyGuessed);
    //     // push letter to right underscore
    //     underscore [wordPick.indexOf(userGuess)] = userGuess;
    //     console.log("underscore:" + underscore);
    //     // if word matches
    //     if (underscore.join("") === wordPick){
    //         wins++; 
    //         guessesLeft = 10;
    //     }

    //     //  else i lose a guess
    // }
