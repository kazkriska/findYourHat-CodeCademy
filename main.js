const prompt = require('prompt-sync')({sigint: true});
const { inputLogic } = require('./inputLogic.js');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this.field = field;
        this.row = 0;
        this.col = 0;
        this.currentPosition = [0,0];
    }

    print() {
        let fieldPrint = this.field.map((rowArray) => rowArray.join(''));
        console.log(fieldPrint.join('\n'));
    }

    isMoveWithinBoundary(move) {
        let positionOffset = inputLogic(move);
        let nextPosition = [this.currentPosition[0] + positionOffset[0], this.currentPosition[1] + positionOffset[1]];
        if (nextPosition[0] >= 0 && nextPosition[0] < this.field.length && nextPosition[1] >= 0 && nextPosition[1] < this.field[0].length) {
            return true;
        } else {
            return false;
        }
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
        console.clear();
        isNextMovePossible = true;
    } else {
        console.log('You went out of the field, GAME OVER')
        isNextMovePossible = false;
    }   
};