document.addEventListener('DOMContentLoaded', function () {
    const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const cards = symbols.concat(symbols); // Duplicate symbols to create pairs
    let flippedCards = [];
    let matchedPairs = 0;

    // Shuffle the cards
    cards.sort(() => Math.random() - 0.5);

    const gameBoard = document.getElementById('game-board');

    // Create card elements and add them to the game board
    cards.forEach((symbol, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.index = index;
      card.dataset.symbol = symbol;
      card.addEventListener('click', flipCard);
      gameBoard.appendChild(card);
    });

    function flipCard() {
      const card = this;

      // Prevent flipping more than 2 cards or clicking on a matched card
      if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
          setTimeout(checkMatch, 500);
        }
      }
    }

    function checkMatch() {
      const [card1, card2] = flippedCards;
      const symbol1 = card1.dataset.symbol;
      const symbol2 = card2.dataset.symbol;

      if (symbol1 === symbol2) {
        // Match found
        flippedCards = [];
        matchedPairs++;

        if (matchedPairs === symbols.length) {
          window.location.href = "https://youtu.be/_tZzhR9P58A?si=Q1nV86z_jgcTjEAL";
        }
      } else {
        // No match, flip the cards back
        setTimeout(() => {
          card1.classList.remove('flipped');
          card2.classList.remove('flipped');
          flippedCards = [];
        }, 500);
      }
    }
  });