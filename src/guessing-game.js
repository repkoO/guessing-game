class GuessingGame {
  constructor() {
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.setGuess = Math.round((this.min + this.max) / 2);
    return this.setGuess;
  }

  lower() {
    this.max = this.setGuess;
  }

  greater() {
    this.min = this.setGuess;
  }
}

module.exports = GuessingGame;
