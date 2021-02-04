import { makeGameBoard, resetGameState, currentUser } from './game-utils.js';

// DOM Elements
const giveUpButton = document.getElementById('give-up');
const resetGameButton = document.getElementById('reset-game');
const newGameButton = document.getElementById('new-game');
const difficultyLevelDisplay = document.getElementById('difficulty-level');

// animation flip test

/*const card = document.getElementById('card');

card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
});*/



// Audio Elements
var pageAudio = document.getElementById('page-open-audio');
pageAudio.volume = 0.2;
pageAudio.play();

// Rendered Elements
difficultyLevelDisplay.textContent = `difficulty level: ${currentUser.game}`;

// Click Handlers
giveUpButton.addEventListener('click', () => {
    resetGameButton.style.display = 'block';
    newGameButton.style.display = 'block';
    giveUpButton.style.display = 'none';
});

resetGameButton.addEventListener('click', () => {
    resetGameState();
    makeGameBoard();
    resetGameButton.style.display = 'none';
    newGameButton.style.display = 'none';
    giveUpButton.style.display = 'block';

    const restartAudio = document.querySelector('#restart-audio');
    restartAudio.volume = 0.1;
    restartAudio.play();
});

newGameButton.addEventListener('click', () => {
    window.location = '../index.html';
});

// Called Functions
makeGameBoard();
