import { setUserScore } from '../game/game-utils.js';
import { saveUsers } from '../utils.js';
import { renderScoreLine } from '../results/results-utils.js';



const test = QUnit.test;

test('update trycount for specific user and difficulty in users array', (expect) => {
    const user = [
        {
            name: 'b-rad',
            levels:
            {
                easy: [],
                medium: [],
                hard: []
            }
        },
        {
            name: 'sally',
            levels:
            {
                easy: [],
                medium: [],
                hard: []
            }
        }
    ];

    saveUsers(user);

    const currentUser = {
        name: 'b-rad',
        game: 'easy'
    };

    const tryCount = 32;

    const expected = [
        {
            name: 'b-rad',
            levels:
            {
                easy: [32],
                medium: [],
                hard: []
            }
        },
        {
            name: 'sally',
            levels:
            {
                easy: [],
                medium: [],
                hard: []
            }
        },
    ];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = setUserScore(tryCount, currentUser);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

// renderScoreLine test
test('render table line based on user data in local storage; returns "-" for empty array, and returns lowest(best) score for multiple entries', (expect) => {
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