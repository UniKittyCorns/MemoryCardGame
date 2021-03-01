import { renderScoreLine } from '../results/results-utils.js';

const test = QUnit.test;

// renderScoreLine test
test('render table line based on user data in local storage; returns "-" for empty array, and returns lowest(best) score for multiple entries', (expect) => {
    // would have like to see some more tests in here. I think the reubric asked for at least 3?
    const userData = {
        name: 'Casey',
        levels:
        {
            easy: [7],
            medium: [],
            hard: [4, 3],
        }
    };

    const expected = `<tr><td>Casey</td><td>7</td><td>-</td><td>3</td></tr>`;

    const actual = renderScoreLine(userData);


    expect.equal(actual.outerHTML, expected);

});
