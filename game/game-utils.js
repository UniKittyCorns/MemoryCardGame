import { getUsers } from '../utils.js';

export function setUserScore(tryCount, currentUser) {
    const currentUsersArray = getUsers();
    for (let user of currentUsersArray) {
        if (user.name === currentUser.name) {
            user.levels[currentUser.game].push(tryCount);
        }
    }
    return currentUsersArray;
}

export function renderCard(card) {

    const cardDiv = document.createElement('div');    

    const labelCard = document.createElement('label');
    labelCard.htmlFor = 'card';
    labelCard.classList.add('card');
    cardDiv.append(labelCard);

    const divCardFront = document.createElement('div');
    divCardFront.classList.add('card-front');
    labelCard.append(divCardFront);

    const imgFront = document.createElement('img');
    imgFront.src = `../assets/cards/${card.img}`;
    imgFront.value = card.id;
    divCardFront.append(imgFront);

    const divCardBack = document.createElement('div');
    divCardBack.classList.add('card-back');
    labelCard.append(divCardBack);

    const imgBack = document.createElement('img');
    imgBack.src = `../assets/cards/mock-up-back.png`;  // switch to new image assets name 
    divCardBack.append(imgBack);
     
    return cardDiv;    
}