// class GuessingGame {
//   constructor() {
//     this.min = 0;
//     this.max = 0;
//     this.guessNum = 0;
//   }

//   setRange(min, max) {
//     this.min = min;
//     this.max = max;
//   }

//   guess() {
//     this.guessNum = Math.floor((this.min + this.max) / 2);
//     return this.guessNum;
//   }

//   lower() {
//     this.max = this.guessNum;
//   }

//   greater() {
//     this.min = this.guessNum + 1;
//   }
// }

// module.exports = GuessingGame;

class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.guessNum = 0;
    this.useCeil = false;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    if (this.useCeil) {
      this.guessNum = Math.ceil((this.min + this.max) / 2);
    } else {
      this.guessNum = Math.floor((this.min + this.max) / 2);
    }
    return this.guessNum;
  }

  lower() {
    this.max = this.guessNum;
    this.useCeil = false;
  }

  greater() {
    this.min = this.guessNum + 1;
    this.useCeil = true;
  }
}

module.exports = GuessingGame;
