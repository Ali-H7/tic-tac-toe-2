const game = (function () {
    const gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    function printBoard() {
        console.log(gameBoard[0], gameBoard[1], gameBoard[2]);
        console.log(gameBoard[3], gameBoard[4], gameBoard[5]);
        console.log(gameBoard[6], gameBoard[7], gameBoard[8]);

    };

    function play(location, playerMark) {
        gameBoard[location] = playerMark;
        printBoard();
    };
    return { printBoard, play };
})();



game.printBoard();
