import { setUserScore } from '../game/game-utils.js';
import { saveUsers, getUsers } from '../utils.js';



const test = QUnit.test;

test('update trycount for specific user and difficulty in users array', (expect) => {
    const user = [
        {
            name: "b-rad",
            levels:
            {
                easy: [],
                medium: [],
                hard: []
            }
        },
        {
            name: "sally",
            levels:
            {
                easy: [],
                medium: [],
                hard: []
            }
        }
    ];

    saveUsers(user);
    // const currentUsersArray = getUsers();

    const currentUser = {
        name: "b-rad",
        game: "easy"
    }

    const tryCount = 32;

    const expected = [
        {
            name: "b-rad",
            levels:
            {
                easy: [32],
                medium: [],
                hard: []
            }
        },
        {
            name: "sally",
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
