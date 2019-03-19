var word = ["505", "sheffield", "turner"];

var wins = 0;
var losses = 0;
var underscore = [];
var guessesLeft = 10;
var alreadyGuessed = [];

// choose word randomly
var random = Math.floor(Math.random() * word.length);
var wordPick = word[random];

console.log(wordPick);

// underscore based on word length
var generateUnderscore = function () {
    for (var i = 0; i < wordPick.length; i++){
        underscore.push("_");
    }
    return underscore;
}

console.log(generateUnderscore());

// user guess
document.onkeyup = function(event) {
    var userGuess = event.key;
    // checking if letter matches in word
    if(wordPick.indexOf(userGuess) > -1){
        alreadyGuessed.push(userGuess);
        console.log(alreadyGuessed);
        // push letter to right underscore
        underscore [wordPick.indexOf(userGuess)] = userGuess;
        console.log(underscore);
    }
}