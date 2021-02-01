export function createUser(name, difficulty) {
    const user = {};
    user.name = name;
    user.difficulty = difficulty;
    user.clicks = 0;

    return user;
}