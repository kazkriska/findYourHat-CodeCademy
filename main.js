const prompt = require('prompt-sync')({sigint: true});
const { inputLogic } = require('./inputLogic.js');
const { gameLogic } = require('./gameLogic.js');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const addTwoDimArrays = (firstArray, secondArray) => firstArray.map((value, index) => value + secondArray[index]);

class Field {
    constructor(field) {
        this.field = field;
        this.currentPosition = [0,0];
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

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  

let isNextMovePossible = true;

while (isNextMovePossible) {

    myField.print();
    let move = prompt('Which way? ');

    if (myField.isMoveWithinBoundary(move)) {

        if (myField.elementAtNextPosition(move) === hole){
            console.log('You fell thru a hole, GAME OVER');
            isNextMovePossible = false;
        } else if (myField.elementAtNextPosition(move) === hat) {
            console.log('You found the hat, GAME WON');
            isNextMovePossible = false;
        } else if (myField.elementAtNextPosition(move) === fieldCharacter) {
            myField.updateField(myField.updatePosition(move));
            console.clear();
            isNextMovePossible = true;
        } else {
            console.log('ERROR');
        }
        
    } else {

        console.log('You went out of the field, GAME OVER')
        isNextMovePossible = false;
    }   
};