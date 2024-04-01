const userScore = 'userScore';
const computerScore = 'computerScore';

export function updateScore(result) {
    switch(result) {
        case 'user-won':
            increaseUserScoreByOne();
            break;
        case 'computer-won':
            increaseComputerScoreByOne();
            break;
        case 'draw':
            break;
        default: console.log('Unexpected result - '+result+ '. Not updating result.');
    }
}

export function increaseUserScoreByOne() {
    const currentScore = getUserScore();
    localStorage.setItem(userScore, currentScore+1);
}

export function getUserScore() {
    const score = Number(localStorage.getItem(userScore));
    if (score == null) {
        return 0;
    } else {
        return score;
    }
}

export function increaseComputerScoreByOne() {
    const currentScore = getComputerScore();
    localStorage.setItem(computerScore, currentScore+1);
}

export function getComputerScore() {
    const score = Number(localStorage.getItem(computerScore));
    if (score == null) {
        return 0;
    } else {
        return score;
    }
}