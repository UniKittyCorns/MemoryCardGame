export function findById(id, array) {
    for (let item of array) {
        if (id === item.id) {
            return item;
        }
    }
}

const USER = 'user';

export function saveUser(user) {
    localStorage.setItem(USER, JSON.stringify(user));
}

export function getUser() {
    let stringyUser = localStorage.getItem(USER);
    let parsedUser = JSON.parse(stringyUser);
    return parsedUser;
}

