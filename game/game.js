// switch to cardDeck import
let tryCount = 0;
let clicked = [];
const gameBoard = document.getElementById('game-board');

export function createUser(name, difficulty) {
    const user = {};
    user.name = name;
    user.difficulty = difficulty;
    user.clicks = 0;

    return activeUser;
}

export function updateSavedUser(savedUser, activeUser) {
    const difficulty = activeUser.difficulty;
    savedUser[difficulty].push(activeUser.clicks);
}

export function makeGameArray(deck, gameBoardSize) {
    const halfDeck = deck.splice(0, gameBoardSize / 2);
    const fullDeck = halfDeck.concat(halfDeck);

    const gameboardArray = [];

    for (let i = gameBoardSize; i > 0; i--) {
        const cardIndex = Math.floor(Math.random() * i);
        gameboardArray.push(...fullDeck.splice(cardIndex, 1));
    }

    return gameboardArray;
}

export function makeGameBoard(gameBoardSize) {
    const gameboardArray = makeGameArray(deck, gameBoardSize);
    const gameBoard = document.querySelector('#game-board');

    for (let card of gameboardArray) {
        const img = document.createElement('img');
        img.src = `../assets/cards/${card.img}`;
        img.classList.add(card.name);
        img.classList.toggle('hidden');

        const imgBack = document.createElement('img');
        imgBack.src = `../assets/cards/mock-up-back.png`;

        imgBack.addEventListener('click', () => {
            imgBack.classList.toggle('hidden');
            img.classList.toggle('hidden');
            const clickedCard = img;
            clicked.push(clickedCard);
        });

        /*img.addEventListener('click', () => {
            imgBack.classList.toggle('hidden');
            img.classList.toggle('hidden');
        });*/

        gameBoard.append(img, imgBack);
    }
    gameBoard.addEventListener('click', () => {
        if (clicked.length === 2) {
            const clicked1 = clicked[0].classList;
            const clicked2 = clicked[1].classList;
            tryCount++;
            //comare
            if (clicked1 === clicked2) {
                clicked1.add('matched');
                clicked2.add('matched');
            }
            else {
                //time
                clicked1.toggle('hidden');
                clicked2.toggle('hidden');
            }
        }
    });
}







const deck = [
    {
        id: 1,
        name: 'one',
        img: 'mock-up-one.png',
    },
    {
        id: 2,
        name: 'two',
        img: 'mock-up-two.png',
    },
    {
        id: 3,
        name: 'three',
        img: 'mock-up-three.png',
    },
    {
        id: 4,
        name: 'four',
        img: 'mock-up-four.png',
    },
    {
        id: 5,
        name: 'five',
        img: 'mock-up-five.png',
    },
    {
        id: 6,
        name: 'six',
        img: 'mock-up-six.png',
    },
];

makeGameBoard(12);