import cardDeck from '../data.js';
import { getCurrentUser, saveUsers, getUsers } from '../utils.js';

// DOM Elements
const tryCountDisplay = document.getElementById('try-count');
const displayWrapper = document.getElementById('display-wrapper');
const giveUpButton = document.getElementById('give-up');
const resetGameButton = document.getElementById('reset-game');
const gameBoard = document.querySelector('#game-board');

// Game Constants
export const currentUser = getCurrentUser();
const cardPairs = setGameSize();

// Game State
let matched = 0;
let tryCount = 0;
let clicked = [];


// Exported Functions
export function makeGameBoard() {
    const shuffledDeck = makeShuffledDeck();
    for (let card of shuffledDeck) {
        const cardOnBoard = renderCard(card);
        gameBoard.append(cardOnBoard);
    }
}

// Game Utility Functions
function setGameSize() {
    const difficulty = currentUser.game;
    if (difficulty === 'easy') {
        gameBoard.classList.add('easy-gameboard');
        return 6;
        
    } else if (difficulty === 'medium') {
        gameBoard.classList.add('medium-gameboard');
        return 12;
    } else {
        gameBoard.classList.add('hard-gameboard');
        return 24;
    }
}

// Using game size, will randomly choose number of card pairs needed, then shuffles them
function makeShuffledDeck() {
    const copiedDeck = cardDeck.slice();
    copiedDeck.sort(function (a, b) { return 0.5 - Math.random(); });  // eslint-disable-line
    const halfDeck = copiedDeck.splice(0, cardPairs);
    const fullDeck = halfDeck.concat(halfDeck);
    const shuffledDeck = fullDeck.sort(function (a, b) { return 0.5 - Math.random(); }); // eslint-disable-line
    return shuffledDeck;
}

// Looks at shuffled deck array and appends those cards to the game board
function renderCard(card) {
    const cardDivWrapper = document.createElement('div');
    cardDivWrapper.classList.add('game-card');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.id = 'card';
    cardDiv.value = card.id;
    cardDivWrapper.append(cardDiv);
    cardDiv.addEventListener('click', flipCard);

    const frontImg = document.createElement('img');
    frontImg.src = `../assets/cards/${card.img}`;
    frontImg.classList.add('card-face', 'card-front');
    cardDiv.append(frontImg);

    const backImg = document.createElement('img');
    backImg.src = `../assets/cards/card-back-pink.png`;
    backImg.classList.add('card-face', 'card-back');
    cardDiv.append(backImg);

    return cardDivWrapper;
}

// On click, flips card over and checks for a match
function flipCard() {
    if (clicked[0] !== this) {
        this.classList.toggle('is-flipped');
        const audio = document.querySelector('#flip-audio');
        audio.volume = 0.1;
        audio.play();
        clicked.push(this);
        if (clicked.length === 2) {
            gameBoard.classList.add('noClick');
            tryCount++;
            tryCountDisplay.textContent = `try count: ${tryCount}`;

            const clicked1Id = clicked[0].value;
            const clicked2Id = clicked[1].value;
            if (clicked1Id === clicked2Id) {
                clicked[0].classList.add('noClick');
                clicked[1].classList.add('noClick');

                gameBoard.classList.remove('noClick');
                matched++;

                const matchedAudio = document.querySelector('#match-audio');
                matchedAudio.volume = 0.08;
                matchedAudio.currentTime = 0;
                matchedAudio.play();

                checkEndGame();
                clicked = [];
            } else {
                resetGameButton.classList.add('noClick');
                setTimeout(() => {
                    clicked[0].classList.toggle('is-flipped');
                    clicked[1].classList.toggle('is-flipped');
                    gameBoard.classList.remove('noClick');
                    resetGameButton.classList.remove('noClick');
                    clicked = [];
                }, 2000);
            }
        }
    }
}

// Checks if all cards have matched
function checkEndGame() {
    if (matched === cardPairs) {
        const winAudio = document.querySelector('#win-audio');
        winAudio.volume = 0.2;
        winAudio.play();

        const winMessage = document.createElement('p');
        winMessage.textContent = `Well done ${currentUser.name}, you have completed level ${currentUser.game} in ${tryCount} turns`;
        giveUpButton.style.display = 'none';
        const resultsButton = document.createElement('button');
        resultsButton.textContent = 'view high scores';
        resultsButton.addEventListener('click', () => {
            window.location = '../results/index.html';
        });

        displayWrapper.textContent = '';
        displayWrapper.append(winMessage, resultsButton);
        const updatedUsersArray = setUserScore();
        saveUsers(updatedUsersArray);
    }
}

// Saves user score to local storage
function setUserScore() {
    const currentUsersArray = getUsers();
    for (let user of currentUsersArray) {
        if (user.name === currentUser.name) {
            user.levels[currentUser.game].push(tryCount);
        }
    }
    return currentUsersArray;
}

// Starts the game over
export function resetGameState() {
    gameBoard.textContent = '';
    tryCount = 0;
    matched = 0;
    clicked = [];
    tryCountDisplay.textContent = `try count: ${tryCount}`;
}
