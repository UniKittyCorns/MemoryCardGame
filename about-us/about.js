const cards = document.querySelectorAll('.card');

function flipCard() {
    this.classList.toggle('flip');
    const audio = document.querySelector('#flip-audio');
    audio.volume = 0.1;
    audio.play();
}
cards.forEach((card) => card.addEventListener('click', flipCard));

/*const caseyPic = document.getElementById('casey-f');
const caseyInfo = document.getElementById('casey-b');

caseyPic.addEventListener('click', () => {
    const audio = document.querySelector('#flip-audio');
    audio.volume = 0.1;
    audio.play();
});

caseyInfo.addEventListener('click', () => {
    const audio = document.querySelector('#flip-audio');
    audio.volume = 0.1;
    audio.play();

    caseyPic.classList.remove('hidden');
    caseyInfo.classList.add('hidden');
});

const katrinaPic = document.getElementById('katrina-f');
const katrinaInfo = document.getElementById('katrina-b');

katrinaPic.addEventListener('click', () => {
    const audio = document.querySelector('#flip-audio');
    audio.volume = 0.1;
    audio.play();

    katrinaPic.classList.add('hidden');
    katrinaInfo.classList.remove('hidden');
});

katrinaInfo.addEventListener('click', () => {
    const audio = document.querySelector('#flip-audio');
    audio.volume = 0.1;
    audio.play();

    katrinaPic.classList.remove('hidden');
    katrinaInfo.classList.add('hidden');
});

const bRadPic = document.getElementById('b-rad-f');
const bRadInfo = document.getElementById('b-rad-b');

bRadPic.addEventListener('click', () => {
    const audio = document.querySelector('#flip-audio');
    audio.volume = 0.1;
    audio.play();

    bRadPic.classList.add('hidden');
    bRadInfo.classList.remove('hidden');
});

bRadInfo.addEventListener('click', () => {
    const audio = document.querySelector('#flip-audio');
    audio.volume = 0.1;
    audio.play();

    bRadPic.classList.remove('hidden');
    bRadInfo.classList.add('hidden');
});

const sorayaPic = document.getElementById('soraya-f');
const sorayaInfo = document.getElementById('soraya-b');

sorayaPic.addEventListener('click', () => {
    const audio = document.querySelector('#flip-audio');
    audio.volume = 0.1;
    audio.play();

    sorayaPic.classList.add('hidden');
    sorayaInfo.classList.remove('hidden');
});

sorayaInfo.addEventListener('click', () => {
    const audio = document.querySelector('#flip-audio');
    audio.volume = 0.1;
    audio.play();

    sorayaPic.classList.remove('hidden');
    sorayaInfo.classList.add('hidden');
});

*/


