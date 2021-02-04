import { makeGameBoard, resetGameState, currentUser } from './game-utils.js';

// DOM Elements
const giveUpButton = document.getElementById('give-up');
const resetGameButton = document.getElementById('reset-game');
const newGameButton = document.getElementById('new-game');
const difficultyLevelDisplay = document.getElementById('difficulty-level');

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
});

newGameButton.addEventListener('click', () => {
    window.location = '../index.html';
});

// Called Functions
makeGameBoard();