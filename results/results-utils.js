export function renderScoreLine(userData) {
    /*
    <tr>
        <td>Casey</td>
        <td>7</td>
        <td>-</td>
        <td>3</td>
    </tr>
    */

    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = userData.name;

    const tdEasyScore = document.createElement('td');
    tdEasyScore.textContent = userData.levels.easy;

    const tdMediumScore = document.createElement('td');
    tdMediumScore.textContent = userData.levels.medium;

    const tdHardScore = document.createElement('td');
    tdHardScore.textContent = userData.levels.hard;    
    
    tr.append(tdName, tdEasyScore, tdMediumScore, tdHardScore);
    return tr;
}