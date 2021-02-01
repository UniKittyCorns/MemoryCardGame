// import functions and grab DOM elements
import { saveUser } from './utils.js';

// initialize state

// set event listeners to update state and DOM

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const user = {
        name: formData.get('userName'),
        scores: [],
    };
    saveUser(user);
    window.location = './game/index.html';
});
