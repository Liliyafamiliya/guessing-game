class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.guessNum = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.guessNum = Math.round((this.min + this.max) / 2);
    return this.guessNum;
  }

  lower() {
    this.max = this.guessNum;
  }

  greater() {
    this.min = this.guessNum + 1;
  }
}

module.exports = GuessingGame;
