const cards = document.querySelectorAll('.card');
let currentIndex = 1; // Start with the middle card

function rotateCards() {
    currentIndex = (currentIndex + 1) % 3;
    cards.forEach((card, index) => {
        const position = (index - currentIndex + 3) % 3;
        card.className = 'card ' + ['left', 'center', 'right'][position];
    });
}

setInterval(rotateCards, 4000);