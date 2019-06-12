//import Letter.js
var Letter = require('./Letter');

// create Word object function
function Word(underlyingWord) {
  this.underlyingWord = underlyingWord;
  this.letterArray = [];

  // creating letter array instance from Letter instance
  for (let i = 0; i < underlyingWord.length; i++) {
    //for each underlyingWord letter [i] equal to new variable underlyingLetter, use that as Letter argument and store it in the letter variable. Push each letter and make it as array store in letterArray
    var underlyingLetter = underlyingWord[i];
    var letter = new Letter(underlyingLetter);
    this.letterArray.push(letter);
  }

  this.wordRepresent = function() {
    //store the userGuessed letter into word as string i.e it will create a placeholder for how many letter user need to guess
    var word = '';
    for (let i = 0; i < this.letterArray.length; i++) {
      word += this.letterArray[i].userGuessed();
    }
    return word;
  };

  this.wordGuess = function(char) {
    var guessedRight = false;

    // check for each underlyingLetter is guessed right or not with the user input
    for (let i = 0; i < this.letterArray.length; i++) {
      var checker = this.letterArray[i].checker(char);
      if (checker == true) {
        guessedRight = true;
      }
    }
    return guessedRight;
  };
}

//export the module
module.exports = Word;

//==========================
//Test code
// var test = new Word('cat');
// test.wordGuess(process.argv[2]);
// var pre = test.wordRepresent();
// console.log(pre);
