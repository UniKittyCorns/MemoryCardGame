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

export function renderScore(userDataLevels) {
    if (userDataLevels.length === 0) {
        return '-';
    }
    const sorted = userDataLevels.sort();
    return sorted[0];
}

