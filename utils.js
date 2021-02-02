export function findById(id, array) {
    for (let item of array) {
        if (id === item.id) {
            return item;
        }
    }
}

const USERS = 'users';
const CURRENTUSER = 'current user';

export function saveUsers(user) {
    localStorage.setItem(USERS, JSON.stringify(user));
}

export function setCurrentUser(currentUser) {
    localStorage.setItem(CURRENTUSER, JSON.stringify(currentUser));
}

export function getUsers() {
    let stringyUser = localStorage.getItem(USERS);
    if (!stringyUser) {
        const emptyArray = [];
        return emptyArray;
    }
    let parsedUser = JSON.parse(stringyUser);
    return parsedUser;
}

