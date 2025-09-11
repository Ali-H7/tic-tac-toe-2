const game = (function () {
    const gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    function printBoard() {
        console.log(gameBoard[0], gameBoard[1], gameBoard[2]);
        console.log(gameBoard[3], gameBoard[4], gameBoard[5]);
        console.log(gameBoard[6], gameBoard[7], gameBoard[8]);

    };

    function checkGameStatus() {

    };

    return { gameBoard, printBoard };
})();

function player(playerName, playerMark) {
    let score = 0;
    const playerMoves = [];
    function inceraseScore() {
        score++;
    }

    function getScore() {
        return score;
    };

    function play(location) {
        game.gameBoard[location] = playerMark;
        playerMoves.push(location);
        game.printBoard();
    };

    return { play, getScore, inceraseScore };
};

const p1 = player("p1", "x");
const p2 = player("p2", "o");
game.printBoard();
