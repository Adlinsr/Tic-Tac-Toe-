const startGame = () => {
const prompt = require('prompt-sync')({sigint: true});

let board = {
    1: ' ',  2: ' ', 3: ' ',
    4: ' ',  5: ' ', 6: ' ',
    7: ' ',  8: ' ', 9: ' '
};

function markBoard(position, mark) {
   board[position] = mark.toUpperCase()
}

function printBoard() {
console.log('\n' +
    '' + board [1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
    '---------\n' +
    '' + board [4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
    '---------\n' +
    '' + board [7] + ' | ' + board[8] + ' | ' + board[9] + '\n') ;
}

function isInt(value) {
    return !isNaN(value) && parseFloat(value) === parseInt(value)
    }

function validateMove(position) {
 return isInt(position) && board[position] === ' ';
}

let winCombinations = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
    [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]
];

function checkWin(player) {
 return winCombinations.some(combination =>
    combination.every(index => board[index] === player)
 )
}

function checkTie() {
 return Object.values(board).every(value => value !== ' ')
}

function playTurn(player) {
    console.log('Your turn player:' + player);
    const position = prompt('Choose a position (1-9): ');

        if (validateMove(position)) {
            markBoard(position, player);
            printBoard()

            if (checkWin(player)) {
                console.log(`Congrats! Player ${player} won!`);
                return true;
            }
            if (checkTie()) {
                console.log('Opps, it is a tie!');
                return true;
            }
            return false;
        } else {
            console.log('Sorry wrong input, try again!');
            return playTurn(player)
        }
    }


console.log('Game started: \n\n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');

let winnerIdentified = false
let currentTurnPlayer = 'X'

while (!winnerIdentified){
    winnerIdentified = playTurn(currentTurnPlayer);
     currentTurnPlayer = currentTurnPlayer === 'X' ? 'O' : 'X';
    }

    const playAgain = prompt ("Do you want to restart the game? (Y/N): ").toUpperCase();

    if (playAgain === "Y"){
      startGame();
    } else {
      console.log("Alright! Thank you for playing.")
    }
  
    }
    
     startGame()

