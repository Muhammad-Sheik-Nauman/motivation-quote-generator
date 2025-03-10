const quotes = [
    "Believe in yourself and you will be unstoppable.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Don’t stop until you’re proud.",
    "Dream big and dare to fail."
];

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}
