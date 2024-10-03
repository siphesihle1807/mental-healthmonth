const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Your time is limited, so don't waste it living someone else's life.",
    "The best way to predict the future is to invent it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "I am proud of you. You're doing your best and that is enough.",
    "You miss 100% of the opportunities you don't take. Take that risk you today.",
    "You don't have to have it figured out all the time.",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock, do what it does. Keep going. - Sam Levenson",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Keep your eyes on the stars, and your feet on the ground. - Theodore Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Do something today that your future self will thank you for.",
    "Happiness is not something ready made, it comes from your own actions. - Dalai Lama",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "You are stronger than you seem, braver than you believe, and smarter than you think.",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The best way to predict your future is to create it. - Abraham Lincoln",
    "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
    "You can't go back and change the beginning, but you can start where you are and change the ending.",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "You're never too young to make a difference.",
    "Every moment wasted looking back keeps us from moving forward.",
    "The biggest risk is not taking any risk.",
    "You don't have to see the whole staircase, just take the first step.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Don't let fear hold you back, let it fuel you.",
    "You are one decision away from a completely different life.",
    "The best is yet to come.",
    "Your only limit is your own mind.",
    "Every great success story started with a single step.",
    "Keep moving forward, no matter how small the step may seem.",
    "You are capable of amazing things.",
    "The future belongs to those who believe in the beauty of their dreams."
];

// Function to get a random quote that is displayed on the message.html file.
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Checks if user is on the index page
if (document.getElementById('form')) {
    const form = document.getElementById('form');
    const usernameInput = document.getElementById('username');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = usernameInput.value;
        localStorage.setItem('username', username);
        const randomQuote = getRandomQuote();
        localStorage.setItem('quote', randomQuote);
        window.location.href = 'message.html';
    });
}

// Check if user is on the message page
if (document.getElementById('username')) {
    const usernameElement = document.getElementById('username');
    const quoteElement = document.getElementById('quote');
    const newQuoteBtn = document.getElementById('newQuoteBtn');
    const backBtn = document.getElementById('backBtn');
    
    const username = localStorage.getItem('username');
    let quote = localStorage.getItem('quote');
    
    function updateQuote() {
        usernameElement.textContent = username;
        quoteElement.textContent = quote;
    }

    updateQuote();

    // EventListeners for when the user wants to go back or generate a new quote
    newQuoteBtn.addEventListener('click', () => {
        quote = getRandomQuote();
        localStorage.setItem('quote', quote);
        updateQuote();
    });

    backBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}