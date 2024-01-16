document.addEventListener('DOMContentLoaded', function () {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const cards = [...letters, ...letters];
  let flippedCards = [];
  let matchedCards = [];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function createGameBoard() {
    const gameBoard = document.getElementById('game-board');
    shuffle(cards);

    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.cardValue = cards[i];
      card.addEventListener('click', flipCard);
      gameBoard.appendChild(card);
    }
  }

  function flipCard() {
    if (flippedCards.length < 2) {
      const card = this;
      card.textContent = card.dataset.cardValue;
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        setTimeout(checkMatch, 500);
      }
    }
  }

  function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.cardValue === card2.dataset.cardValue) {
      matchedCards.push(card1, card2);
      if (matchedCards.length === cards.length) {
        alert('Gratulujeme! Vyhráli jste!');
      }
    } else {
      flipBack(card1, card2);
    }

    flippedCards = [];
  }

  function flipBack(card1, card2) {
    setTimeout(() => {
      card1.textContent = '';
      card2.textContent = '';
    }, 500);
  }

  createGameBoard();
});