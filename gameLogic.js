const { inputLogic } = require('./inputLogic.js');

const addTwoDimArrays = (firstArray, secondArray) => firstArray.map((value, index) => value + secondArray[index]);

function gameLogic(currentPosition, move, field) {
    let nextPosition = addTwoDimArrays(currentPosition, inputLogic(move));
     const elementAtNextPosition = field[nextPosition[0]][nextPosition[1]];

     switch(elementAtNextPosition) {
        case '░': {
            return '░';
        }
        case 'O': {
            return 'O';
        }
        case '^': {
            return '^';
        }
        default: {
            return null;
        }
     }
};

module.exports.gameLogic = gameLogic;