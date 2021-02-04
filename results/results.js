import { renderScoreLine } from './results-utils.js';
import { getUsers, getCurrentUser } from '../utils.js';

const resultsTable = document.querySelector('#results-table');
const playAgainButton = document.getElementById('play-again');
const changeLevelButton = document.getElementById('change');
const userData = getUsers();

for (let user of userData) {
    const scoreLine = renderScoreLine(user);
    resultsTable.append(scoreLine);
}

playAgainButton.addEventListener('click', () => {
    const currentUser = getCurrentUser();
    if (currentUser === null) {
        window.location = '../index.html';
    } else {
        window.location = '../game/';
    }
});

changeLevelButton.addEventListener('click', () => {
    window.location = '../index.html';
});

const resetBoard = document.querySelector('#clear-local-storage');
resetBoard.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});