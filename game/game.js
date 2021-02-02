import cardDeck from '../data.js';
import { getCurrentUsers } from '../utils.js';

const tryCountDisplay = document.getElementById('try-count');
const difficultyLevelDisplay = document.getElementById('difficulty-level');


let tryCount = 0;
let clicked = [];
const currentUser = getCurrentUsers();
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

const size = setGameSize(currentUser.game);

export function makeGameArray(cardDeck, gameBoardSize) {
    const halfDeck = cardDeck.splice(0, gameBoardSize / 2);
    const fullDeck = halfDeck.concat(halfDeck);

    const gameboardArray = [];

    for (let i = gameBoardSize; i > 0; i--) {
        const cardIndex = Math.floor(Math.random() * i);
        gameboardArray.push(...fullDeck.splice(cardIndex, 1));
    }

    return gameboardArray;
}

export function makeGameBoard(gameBoardSize) {
    const gameboardArray = makeGameArray(cardDeck, gameBoardSize);
    const gameBoard = document.querySelector('#game-board');

    for (let card of gameboardArray) {
        const img = document.createElement('img');
        img.src = `../assets/cards/${card.img}`;
        img.classList.add('hidden');
        img.value = card.id;

        const imgBack = document.createElement('img');
        imgBack.src = `../assets/cards/mock-up-back.png`;  // switch to new image assets name

        imgBack.addEventListener('click', () => {
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
                    clicked = [];
                    gameBoard.classList.remove('noClick');
                } else {
                    setTimeout(() => {
                        clicked[0].classList.add('hidden');
                        clicked[1].classList.remove('hidden');
                        clicked[2].classList.add('hidden');
                        clicked[3].classList.remove('hidden');
                        clicked = [];
                        gameBoard.classList.remove('noClick');
                    }, 2000);

                }

            }

        });

        gameBoard.append(img, imgBack);
    }
}

makeGameBoard(size);