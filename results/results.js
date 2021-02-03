import { renderScoreLine } from './results-utils.js';
import { getUsers } from '../utils.js';

const resultsTable = document.querySelector('#results-table');
const playAgainButton = document.getElementById('play-again');
const changeLevelButton = document.getElementById('change');
const userData = getUsers();

for (let user of userData) {
    const scoreLine = renderScoreLine(user);
    resultsTable.append(scoreLine);
}

playAgainButton.addEventListener('click', () => {
    window.location = '../game/';
});

changeLevelButton.addEventListener('click', () => {
    window.location = '../index.html';
});