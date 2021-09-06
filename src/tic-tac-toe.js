class TicTacToe {
    constructor() {
        this.move = 0
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
    }

    getCurrentPlayerSymbol() {
        return this.move % 2 === 0 ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.move++;
          }
    }

    isFinished() {
        return this.isDraw() || this.getWinner() ? true : false;
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.field[i][0] === this.field[i][1] && this.field[i][0] === this.field[i][2]) {
              return this.field[i][0];
            } else if (this.field[0][i] === this.field[1][i] && this.field[0][i] === this.field[2][i]) {
              return this.field[0][i];
            }
          }
          if (this.field[0][0] === this.field[1][1] && this.field[0][0] === this.field[2][2]) {
            return this.field[0][0];
          }
      
          if (this.field[0][2] === this.field[1][1] && this.field[0][2] === this.field[2][0]) {
            return this.field[0][2];
          }
          return null;
    }

    noMoreTurns() {
        return this.move === 9 ? true : false;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
