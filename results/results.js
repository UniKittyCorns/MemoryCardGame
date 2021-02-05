import { renderScoreLine } from './results-utils.js';
import { getUsers, getCurrentUser } from '../utils.js';

const resultsTable = document.querySelector('#results-table');
const playAgainButton = document.getElementById('play-again');
const changeLevelButton = document.getElementById('change');
const userData = getUsers();

// Appends a line to results table for each unique user
for (let user of userData) {
    const scoreLine = renderScoreLine(user);
    resultsTable.append(scoreLine);
}

// On score board page, if no user info is saved in local storage, play again button will redirect home page
playAgainButton.addEventListener('click', () => {
    const currentUser = getCurrentUser();
    if (currentUser === null) {
        window.location = '../index.html';
    } else {
        window.location = '../game/';
    }
});

// brings user back to home page
changeLevelButton.addEventListener('click', () => {
    window.location = '../index.html';
});


// clears local storage
const resetBoard = document.querySelector('#clear-local-storage');
resetBoard.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});