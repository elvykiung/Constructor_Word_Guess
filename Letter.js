// Creating underlying letter object function

function Letter(underlyingChar) {
  this.underlyingChar = underlyingChar;
  this.guestedletter = false;
  this.placeholder = '_ ';

  //method if the guested letter true, return the letter else show placeholder

  this.userGuessed = function() {
    if (this.guestedletter) {
      return this.underlyingChar;
    } else {
      return this.placeholder;
    }
  };

  //checker method to check if underlying char same as user input character. if true, guested letter will become true.

  this.checker = function(char) {
    if (this.underlyingChar === char) {
      this.guestedletter = true;
      return true;
    } else {
      return false;
    }
  };
}

//export Letter
module.exports = Letter;

//========================================
//Test Code to run in command line
// var newWord = new Letter('a');
// newWord.checker(process.argv[2]);
// var test = newWord.userGuessed();
