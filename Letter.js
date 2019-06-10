function Letter(underlyingChar) {
  this.underlyingChar = underlyingChar;
  this.guestedletter = false;
  this.placeholder = '_ ';

  this.userGuessed = function() {
    if (this.guestedletter) {
      //console.log('CORRECT!');
      return this.underlyingChar;
    } else {
      //console.log('INCORRECT!!!');
      return this.placeholder;
    }
  };

  this.checker = function(char) {
    if (this.underlyingChar === char) {
      this.guestedletter = true;
      return true;
      // console.log('true');
    } else {
      return false;
    }
  };
}

// var newWord = new Letter('a');

// newWord.checker(process.argv[2]);
// var test = newWord.userGuessed();

module.exports = Letter;
