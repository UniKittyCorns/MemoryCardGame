import cardDeck from '../data.js';
import { getCurrentUser, saveUsers } from '../utils.js';
import { setUserScore } from './game-utils.js';

const tryCountDisplay = document.getElementById('try-count');
const difficultyLevelDisplay = document.getElementById('difficulty-level');
const displayWrapper = document.getElementById('display-wrapper');
const giveUpButton = document.getElementById('give-up');
const resetGameButton = document.getElementById('reset-game');
const newGameButton = document.getElementById('new-game');
const gameBoard = document.querySelector('#game-board');

const currentUser = getCurrentUser();
const size = setGameSize(currentUser.game);
const fullDeck = makeGameArray(cardDeck, size);
const shuffledDeck = shuffleGameDeck(fullDeck);

var pageAudio = document.getElementById('page-open-audio');
pageAudio.volume = 0.2;
pageAudio.play();

let matched = 0;
let tryCount = 0;
let clicked = [];

difficultyLevelDisplay.textContent = `difficulty level: ${currentUser.game}`;

export function setGameSize(size) {
    if (size === 'easy') {
        return 12;
    } else if (size === 'medium') {
        return 24;
    } else {
        return 48;
    }
}

export function checkEndGame(size, matched) {
    if (matched === size / 2) {
        const winAudio = document.querySelector('#win-audio');
        winAudio.volume = 0.1;
        winAudio.play();

        const winMessage = document.createElement('p');
        winMessage.textContent = `Well done, you have completed level ${currentUser.game} in ${tryCount} turns`;
        giveUpButton.style.display = 'none';
        const resultsButton = document.createElement('button');
        resultsButton.textContent = 'view high scores';
        resultsButton.addEventListener('click', () => {
            window.location = '../results/index.html';
        });

        displayWrapper.textContent = '';
        displayWrapper.append(winMessage, resultsButton);
        const updatedUsersArray = setUserScore(tryCount, currentUser);
        saveUsers(updatedUsersArray);
    }
}

export function makeGameArray(cardDeck, gameBoardSize) {
    const halfDeck = cardDeck.splice(0, gameBoardSize / 2);
    const fullDeck = halfDeck.concat(halfDeck);

    return fullDeck;
}

export function shuffleGameDeck(_fullDeck) {
    const gameboardArray = [];
    const copyFullDeck = _fullDeck.slice();

    for (let i = copyFullDeck.length; i > 0; i--) {
        const cardIndex = Math.floor(Math.random() * i);
        gameboardArray.push(...copyFullDeck.splice(cardIndex, 1));
    }
    return gameboardArray;
}

export function makeGameBoard(shuffledDeck) {

    for (let card of shuffledDeck) {
        const img = document.createElement('img');
        img.src = `../assets/cards/${card.img}`;
        img.classList.add('hidden');
        img.value = card.id;

        const imgBack = document.createElement('img');
        imgBack.src = `../assets/cards/mock-up-back.png`;  // switch to new image assets name

        imgBack.addEventListener('click', () => {
            const audio = document.querySelector('#flip-audio');
            audio.volume = 0.1;
            audio.play();

            imgBack.classList.add('hidden');
            img.classList.remove('hidden');
            clicked.push(img, imgBack);  // even index = front of card, odd index = back of card
            if (clicked.length === 4) {
                gameBoard.classList.add('noClick');
                tryCount++;
                tryCountDisplay.textContent = `try count: ${tryCount}`;

                const clicked1Id = clicked[0].value;
                const clicked2Id = clicked[2].value;
                if (clicked1Id === clicked2Id) {
                    clicked[0].classList.add('matched');
                    clicked[2].classList.add('matched');
                    matched++;
                    clicked = [];
                    gameBoard.classList.remove('noClick');
                    checkEndGame(size, matched);

                    const matchedAudio = document.querySelector('#match-audio');
                    matchedAudio.volume = 0.08;
                    matchedAudio.currentTime = 0;
                    matchedAudio.play();
                } else {
                    resetGameButton.classList.add('noClick');
                    setTimeout(() => {
                        clicked[0].classList.add('hidden');
                        clicked[1].classList.remove('hidden');
                        clicked[2].classList.add('hidden');
                        clicked[3].classList.remove('hidden');
                        clicked = [];
                        gameBoard.classList.remove('noClick');
                        resetGameButton.classList.remove('noClick');
                    }, 2000);

                }

            }

        });

        gameBoard.append(img, imgBack);
    }
}

makeGameBoard(shuffledDeck);

giveUpButton.addEventListener('click', () => {
    resetGameButton.style.display = 'block';
    newGameButton.style.display = 'block';
    giveUpButton.style.display = 'none';
});

resetGameButton.addEventListener('click', () => {
    gameBoard.textContent = '';
    tryCount = 0;
    matched = 0;
    clicked = [];
    tryCountDisplay.textContent = `try count: 0`;
    const reshuffledDeck = shuffleGameDeck(fullDeck);
    makeGameBoard(reshuffledDeck);
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


