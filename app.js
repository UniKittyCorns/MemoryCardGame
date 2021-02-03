import { saveUsers, getUsers, setCurrentUser, findById } from './utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const currentUser = { name: formData.get('name'), game: formData.get('game') };
    const existingUsers = getUsers();
    const userInArray = findById(formData.get('name'), existingUsers);


    if (!existingUsers.length) {
        const user = {
            name: formData.get('name'),
            levels:
            {
                easy: [],
                medium: [],
                hard: [],
            }
        };
        existingUsers.push(user);
        saveUsers(existingUsers);
        setCurrentUser(currentUser);
    } else if (userInArray) {
        setCurrentUser(currentUser);
    } else {
        const user = {
            name: formData.get('name'),
            levels:
            {
                easy: [],
                medium: [],
                hard: [],
            }
        };
        existingUsers.push(user);
        saveUsers(existingUsers);
        setCurrentUser(currentUser);
    }
    window.location = './game/index.html';
});