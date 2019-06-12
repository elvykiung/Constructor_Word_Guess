var Word = require('./Word');
var inquirer = require('inquirer');

var avilableWords = ['dog', 'cat', 'chicken', 'fish', 'bird', 'horse', 'cow', 'duck', 'sheep', 'pig', 'goat'];

var gameWord = new Word(avilableWords[0]);
var wordNeedToGuess = gameWord.wordRepresent();
var count = 5;

console.log(wordNeedToGuess);

var userGuess = function() {
  if (count > 0) {
    inquirer
      .prompt([{ name: 'gussedWord', message: 'Guess a word?' }])

      .then(function(answer) {
        var guessRight = gameWord.wordGuess(answer.gussedWord);
        wordNeedToGuess = gameWord.wordRepresent();

        console.log(wordNeedToGuess);

        if (guessRight === false) {
          count--;
          console.log('Incorrect, guess again! You have ' + count + ' guesses left');
          userGuess();
        } else if (wordNeedToGuess === gameWord.underlyingWord) {
          console.log('You Got it! Next word!');
          var randomNum = Math.floor(Math.random() * 10 + 1);
          gameWord = new Word(avilableWords[randomNum]);
          console.log(gameWord.wordRepresent());
          userGuess();
        } else {
          console.log('Correct!');
          userGuess();
        }
      });
  }
};

userGuess();
