const cards = ['A', 'C', 'C', 'B', 'A', 'B'];
let selectedCards = [];
let score = 0;
let failedAttempts = 0;

function initializeGame() {
    const gameContainer = document.getElementById('gameContainer');
    for (let i = 0; i < 6; i++) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('data-card', cards[i]);
        cardElement.textContent = '?';
        cardElement.addEventListener('click', () => {
            if (selectedCards.length < 2 && !selectedCards.includes(cardElement)) {
                revealCard(cardElement);
                selectedCards.push(cardElement);
                if (selectedCards.length === 2) {
                    setTimeout(checkMatch, 500);
                }
            }
        });
        gameContainer.appendChild(cardElement);
    }
}

function revealCard(card) {
    const cardValue = card.getAttribute('data-card');
    card.textContent = cardValue;
}

function hideCard(card) {
    card.textContent = '?';
}

function checkMatch() {
    const [card1, card2] = selectedCards;
    const value1 = card1.getAttribute('data-card');
    const value2 = card2.getAttribute('data-card');
    if (value1 === value2) {
        score += 10;
        document.getElementById('score').textContent = score;
        selectedCards = [];
    } else {
        failedAttempts++;
        document.getElementById('failedAttempts').textContent = failedAttempts;
        hideCard(card1);
        hideCard(card2);
        selectedCards = [];
    }
}

initializeGame();