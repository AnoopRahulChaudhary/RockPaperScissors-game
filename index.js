function showGameResult(usersPic){
    const userSelection = usersPic;
    const computerSelection = getComputerSelection();
    const result = getGameResult(userSelection, computerSelection);
    redirectToResultPage(result);
}

function getComputerSelection() {
    const randomNumber = Math.floor(Math.random()*3) + 1;
    let selection;

    if (randomNumber === 1) {
        selection = 'rock';
    } else if (randomNumber === 2) {
        selection = 'paper';
    } else {
        selection = 'scissors';
    }

    return selection;
}

const selectionCombinationToWinnerMap = new Map([
    ['rock:scissors', 'rock'],
    ['scissors:rock', 'rock'],
    ['scissors:paper', 'scissors'],
    ['paper:scissors', 'scissors'],
    ['paper:rock', 'paper'],
    ['rock:paper', 'paper']
])

function getGameResult(userSelection, computerSelection) {
    console.log('Your selection - '+ userSelection);
    console.log('Computer selection - '+ computerSelection);

    if (userSelection === computerSelection) {
        return 'draw';
    }

    const winnersSelection = selectionCombinationToWinnerMap.get(userSelection+':'+computerSelection);

    if (userSelection === winnersSelection) {
        return 'user-won';
    } else {
        return 'computer-won';
    }
}

function redirectToResultPage(result) {
    let pageLink;
    switch(result) {
        case 'user-won':
            pageLink = "./result/human-win.html";
            break;
        case 'computer-won':
            pageLink = "./result/computer-win.html";
            break;
        case 'draw':
            pageLink = "./result/draw.html";
            break;
        default : console.log('Unknown winner - '+ result);
    }

    window.location.href = pageLink;
}