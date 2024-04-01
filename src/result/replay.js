export function addPlayAgainListener() {
    const playAgainButton = document.querySelector('.play-again-button');
    playAgainButton.addEventListener('click', playAgain);
}

function playAgain() {
    window.location.href = '../../public/index.html';
}