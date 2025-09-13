const game = (function () {

    const board = (function () {
        const gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        const update = function (location, mark) {
            gameBoard[location] = mark;
        };
        const print = function () {
            console.log(gameBoard[0], gameBoard[1], gameBoard[2]);
            console.log(gameBoard[3], gameBoard[4], gameBoard[5]);
            console.log(gameBoard[6], gameBoard[7], gameBoard[8]);
        };
        return { gameboard, update, print };
    })();

    const turn = function () {
        let currentTurn = 1;
        let currentPlayer;
        const nextTurn = () => currentTurn++;
        const resetTurn = () => currentTurn = 1;
        const getTurn = () => currentTurn;
        const updatePlayer = (player) => currentPlayer = player;
        return { nextTurn, resetTurn, getTurn, updatePlayer };
    };

    // check winning condition need work
    function checkGameStatus(playerName, playerMoves) {
        if (checkWinCondition) {
            console.log(`${playerName} wins"`);
        } else if (currentTurn === 9) {
            console.log("Tie");
        }
    };

    return { gameBoard, printBoard, updateBoard, getCurrentTurn, nextTurn, checkGameStatus };
})();

function player(playerName, playerMark) {
    let score = 0;
    const playerMoves = [];

    function inceraseScore() {
        score++;
    }

    function getPlayerName() {
        return playerName;
    };

    function getPlayerMark() {
        return playerMark;
    };

    function getScore() {
        return score;
    };

    function getPlayerMoves() {
        return playerMoves;
    };

    function makeMove(location) {
        playerMoves.push(location);
    };

    function winCondition() {
        const winningCombination = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        return winningCombination.some(array => array.every(number => playerMoves.includes(number)));
    };

    function checkIfWon() {
        const currentTurn = game.getCurrentTurn();
        if (winCondition()) {
            console.log(`${playerName} wins"`);
            return true;
        } else if (currentTurn === 9) {
            console.log("Tie");
            return false;
        }
    };


    return { makeMove, getPlayerMark, getScore, inceraseScore, checkIfWon };
};

const logicController = (function () {
    function play(player, location) {
        const playerMark = player.getPlayerMark();
        game.updateBoard(location, playerMark)
        player.makeMove(location);
        const checkResult = player.checkIfWon();
        // need some work here
        if (checkResult) endGame(winner,)
        // game.checkGameStatus(playerName, playerMoves);
        game.nextTurn();
        game.printBoard();
    };
    return { play };
})();

const p1 = player("player1", "x");
const p2 = player("player2", "o");
game.printBoard();
