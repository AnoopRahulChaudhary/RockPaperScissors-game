import { getUserScore,getComputerScore } from './score.js'

export function loadComputerScore() {
    const userScoreView = document.querySelector('.your-score .score');
    userScoreView.innerHTML = getUserScore();
}

export function loadUserScore() {
    const userScoreView = document.querySelector('.computer-score .score');
    userScoreView.innerHTML = getComputerScore();
}