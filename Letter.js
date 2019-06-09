function Letter(word) {
  this.word = word;
  this.guestedletter = false;

  this.userGuessed = function() {
    if (this.guestedletter) {
      console.log('CORRECT!');
      console.log(process.argv[2]);
    } else {
      console.log('INCORRECT!!!');
      console.log('_');
    }
  };

  this.checker = function(char) {
    for (let i = 0; i < this.word.length; i++) {
      if (this.word.charAt(i) === char) {
        this.guestedletter = true;
      }
    }
  };
}

var newWord = new Letter('cat');

newWord.checker(process.argv[2]);
newWord.userGuessed();
