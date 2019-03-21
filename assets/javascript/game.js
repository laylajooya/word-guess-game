var word = ["505", "sheffield", "turner"];

var wins = 0;
var underscore = [];
var guessesLeft = 10;
var alreadyGuessed = [];

var underscoreText = document.getElementById("underscore-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var alreadyGuessedText = document.getElementById("alreadyGuessed-text");
var winsText = document.getElementById ("wins-text");
var gameAlertText = document.getElementById ("gameAlert-text");

// ----------------- GAME START ---------- //
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

// ----------------- PLAYING GAME ---------- //
function resetGame (){
    guessesLeft = 10;
    alreadyGuessed = [];
    wordUsedInLastGame = wordPick;

    // at start of game lets say var random got set to 0, so wordPick would then be "505"

    // so here random is still 0, and splice allows you to remove an item in an array at a certain index, in this case would be 0
    // so word[0] = "505"  ....   word.splice(0, 1)  the 1 just means we want to remove 1 item
    // so now the array is ["sheffield", "turner"]
    // but we have the old word "505" saved in wordUsedInLastGame

    //so once 505 is out and they play sheffield then sheffield is 0 and turner will be 1??
    // exactly --- but it won't really matter cuz now `random` below will only be between 0 or 1 and picking between those two options
    // then once we've picked the new word below
    // see how we do the word.push("505") back into it
    // so then the array will be back to ["sheffield", "turner", "505"]

    // and when you rerun this function let's say sheffield was the next word that got picked, the array for the next word selection would be 
    // ["turner", "505"]

    word.splice(random, 1);
    


    // array at this point should be [" ", " "] instead of [" ", " ", " "]
    // so the same word will never get used in back to back rounds

    random = Math.floor(Math.random() * word.length);
    wordPick = word[random];
    wordPickLetter = wordPick.split("");

    // pushing back word into array to be used for next time
    word.push(wordUsedInLastGame)
    console.log(wordPick);
    
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



