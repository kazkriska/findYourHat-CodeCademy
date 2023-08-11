const { inputLogic } = require('./inputLogic.js');
const { gameLogic } = require('./gameLogic.js');

const addTwoDimArrays = (firstArray, secondArray) => firstArray.map((value, index) => value + secondArray[index]);

class Field {
    constructor(field) {
        this.field = field;
        this.currentPosition = [0, 0];
    }

    print() {
        let fieldPrint = this.field.map((rowArray) => rowArray.join(''));
        console.log(fieldPrint.join('\n'));
    }

    isMoveWithinBoundary(move) {
        let nextPosition = addTwoDimArrays(this.currentPosition, inputLogic(move));
        if (nextPosition[0] >= 0 && nextPosition[0] < this.field.length && nextPosition[1] >= 0 && nextPosition[1] < this.field[0].length) {
            return true;
        } else {
            return false;
        }
    }

    updatePosition(move) {
        this.currentPosition = addTwoDimArrays(this.currentPosition, inputLogic(move));
        return this.currentPosition;
    }

    updateField(currentPosition) {
        this.field[currentPosition[0]][currentPosition[1]] = '*';
    }

    elementAtNextPosition(move) {
        return gameLogic(this.currentPosition, move, this.field);
    }

    
};
exports.Field = Field;

