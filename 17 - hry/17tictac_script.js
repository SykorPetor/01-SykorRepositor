let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
 
function renderBoard() {
    const boardElements = document.querySelectorAll('.cell');
    boardElements.forEach((cell, index) => {
        cell.textContent = board[index];
    });
}
 
function handleCellClick(index) {
    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        renderBoard();
        checkWinner();
        switchPlayer();
    }
}
 
function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
 
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
 
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById('result').textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
            return;
        }
    }
 
    if (!board.includes('')) {
        document.getElementById('result').textContent = 'It\'s a tie!';
        gameActive = false;
    }
}
 
renderBoard();