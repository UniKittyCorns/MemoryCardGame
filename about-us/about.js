const cards = document.querySelectorAll('.card');

function flipCard() {
    this.classList.toggle('flip');
    const audio = document.querySelector('#flip-audio');
    audio.volume = 0.1;
    audio.play();
}
cards.forEach((card) => card.addEventListener('click', flipCard));


