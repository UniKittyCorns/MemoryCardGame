// import functions and grab DOM elements
import { saveUsers, getUsers, setCurrentUser, findById } from './utils.js';

// initialize state

// set event listeners to update state and DOM

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const currentUser = { name: formData.get('name'), game: formData.get('game') };
    const existingUsers = getUsers();
    const userInArray = findById(formData.get('name'), existingUsers);
    const currentLevel = formData.get('game');
    
    if (!existingUsers) {
        const user = [{
            name: formData.get('name'),
            difficultyLevel: currentLevel,
            scores: [],
        }];
        saveUsers(user);
        setCurrentUser(currentUser);
    } else if (userInArray) {
        setCurrentUser(currentUser);
    } else {
        const user = { name: formData.get('name'), scores: [], };
        existingUsers.push(user);
        saveUsers(existingUsers);
        setCurrentUser(currentUser);
    }
    //window.location = './game/index.html';
});