const { inputLogic } = require('./inputLogic.js');
const { gameLogic } = require('./gameLogic.js');
const prompt = require('prompt-sync')({sigint: true});

const addTwoDimArrays = (firstArray, secondArray) => firstArray.map((value, index) => value + secondArray[index]);

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

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

    playGame() {
        let isNextMovePossible = true;
        while (isNextMovePossible) {

            this.print();
            let move = prompt('Which way? ');

            if (this.isMoveWithinBoundary(move)) {

                if (this.elementAtNextPosition(move) === hole) {
                    console.log('You fell thru a hole, GAME OVER');
                    isNextMovePossible = false;
                } else if (this.elementAtNextPosition(move) === hat) {
                    console.log('You found the hat, GAME WON');
                    isNextMovePossible = false;
                } else if (this.elementAtNextPosition(move) === fieldCharacter) {
                    this.updateField(this.updatePosition(move));
                    console.clear();
                    isNextMovePossible = true;
                } else {
                    console.log('ERROR');
                }

            } else {

                console.log('You went out of the field, GAME OVER');
                isNextMovePossible = false;
            }
        };
    }
};
exports.Field = Field;

