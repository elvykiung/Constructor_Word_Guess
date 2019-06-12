//import Word module and Inquirer NPM
var Word = require('./Word');
var inquirer = require('inquirer');

// total avilable words to guess array
var avilableWords = ['dog', 'cat', 'chicken', 'fish', 'bird', 'horse', 'cow', 'duck', 'sheep', 'pig', 'goat'];

//create word user need to guess form Word.js instance
var gameWord = new Word(avilableWords[0]);
var wordNeedToGuess = gameWord.wordRepresent();

//star number of guesses 5
var numberOfGuesses = 5;

//log the number of character user need to guess
console.log(wordNeedToGuess);

var startGame = function() {
  //if number of guesses more than 0
  if (numberOfGuesses > 0) {
    //run inquirer npm
    inquirer
      //prompt message to command line
      .prompt([{ name: 'gussedWord', message: 'Guess a word?' }])
      // take the user input store in answer argument
      .then(function(answer) {
        // store the wordGuess checker return true/false to guessRight
        var guessRight = gameWord.wordGuess(answer.gussedWord);
        //console log the underlying letters need to guess and check the letter
        wordNeedToGuess = gameWord.wordRepresent();
        console.log(wordNeedToGuess);
        // if guess wrong
        if (!guessRight) {
          numberOfGuesses--;
          console.log('Incorrect, guess again! You have ' + numberOfGuesses + ' guesses left');
          startGame();
          // if guess right
        } else if (wordNeedToGuess === gameWord.underlyingWord) {
          console.log('You Got it! Next word!');
          var randomNum = Math.floor(Math.random() * 10 + 1);
          //create new game word
          gameWord = new Word(avilableWords[randomNum]);
          console.log(gameWord.wordRepresent());
          startGame();
        } else {
          console.log('Correct!');
          startGame();
        }
      });
  }
};

startGame();
