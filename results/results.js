import { renderScoreLine } from './results-utils.js';
import { getUsers } from '../utils.js';

const resultsTable = document.querySelector('#results-table');
const userData = getUsers();

for (let user of userData) {
    const scoreLine = renderScoreLine(user);
    resultsTable.append(scoreLine);
};