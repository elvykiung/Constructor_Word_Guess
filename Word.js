var Letter = require('./Letter');

function Word(underlyingWord) {
  this.underlyingWord = underlyingWord;
  this.letterArray = [];
  for (let i = 0; i < underlyingWord.length; i++) {
    var underlyingLetter = underlyingWord[i];
    var letter = new Letter(underlyingLetter);
    this.letterArray.push(letter);
  }

  this.wordRepresent = function() {
    var word = '';
    for (let i = 0; i < this.letterArray.length; i++) {
      word += this.letterArray[i].userGuessed();
    }
    return word;
  };

  this.wordGuess = function(char) {
    var guessedRight = false;
    for (let i = 0; i < this.letterArray.length; i++) {
      var checker = this.letterArray[i].checker(char);
      if (checker == true) {
        guessedRight = true;
      }
    }
    return guessedRight;
  };
}

// var test = new Word('cat');
// test.wordGuess(process.argv[2]);

// var pre = test.wordRepresent();

// console.log(pre);
module.exports = Word;
