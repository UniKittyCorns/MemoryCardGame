export function renderScoreLine(userData) {

    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = userData.name;

    const tdEasyScore = document.createElement('td');
    tdEasyScore.textContent = renderScore(userData.levels.easy);

    const tdMediumScore = document.createElement('td');
    tdMediumScore.textContent = renderScore(userData.levels.medium);

    const tdHardScore = document.createElement('td');
    tdHardScore.textContent = renderScore(userData.levels.hard);

    tr.append(tdName, tdEasyScore, tdMediumScore, tdHardScore);
    return tr;
}

// Sorts saved scores to get lowest score, add dash if no score is saved
export function renderScore(userDataLevels) {
    if (userDataLevels.length === 0) {
        return '-';
    }
    const sorted = userDataLevels.sort(function (a, b) { return a - b; }) // eslint-disable-line
        ;
    return sorted[0];
}

