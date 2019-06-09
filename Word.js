var Letter = require('./Letter');

function Word(underlyingWord) {
  this.letterArray = [];
  for (let i = 0; i < underlyingWord.length; i++) {
    var underlyingLetter = underlyingWord[i];
    var letter = new Letter(underlyingLetter);
    this.letterArray.push(letter);
  }

  this.wordRepresent = function() {
    var word = '';
    for (let i = 0; i < this.letterArray.length; i++) {
      word += this.letterArray[i].userGuessed() + ' ';
    }
    return word;
  };

  this.wordGuess = function(char) {
    for (let i = 0; i < this.letterArray.length; i++) {
      this.letterArray[i].checker(char);
    }
  };
}

var test = new Word('cat');

// var pre = test.wordRepresent();
// var gue = test.wordGuess('a');
// console.log(gue);
module.exports = Word;
