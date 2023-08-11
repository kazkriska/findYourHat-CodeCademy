const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this.field = field;
        this.row = 0;
        this.col = 0;
        this.startingPosition = [0,0];
    }

    print(str) {
        let fieldPrint = this.field.map((rowArray) => rowArray.join(''));
        console.log(fieldPrint.join('\n'));
    }
};

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  
//myField.print();

myField.row = 0;
console.log(myField.row + 3);