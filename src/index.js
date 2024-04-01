import {updateScore} from './score.js';
import {keyForUserImageSelection, keyForComputerImageSelection} from './result/updatePickedImages.js'

export function showGameResultAndUpdateScore(usersPic){
    const userSelection = usersPic;
    const computerSelection = getComputerSelection();
    const result = getGameResult(userSelection, computerSelection);
    updateScore(result);
    redirectToResultPage(result, userSelection, computerSelection);
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

function redirectToResultPage(result, userSelection, computerSelection) {
    let pageLink;
    switch(result) {
        case 'user-won':
            pageLink = "../src/result/human-win.html";
            break;
        case 'computer-won':
            pageLink = "../src/result/computer-win.html";
            break;
        case 'draw':
            pageLink = "../src/result/draw.html";
            break;
        default : console.log('Unknown winner - '+ result);
    }

    const pageLinkWithParams = updateLinkWithSelectionParam(pageLink, userSelection, computerSelection);
    window.location.href = pageLinkWithParams;
}

function updateLinkWithSelectionParam(pageLink, userSelection, computerSelection) {
    return pageLink + '?' +
            prepareQueryParameter(keyForUserImageSelection, userSelection) +
            '&' +
            prepareQueryParameter(keyForComputerImageSelection, computerSelection);
}

function prepareQueryParameter(key, value) {
    return key + '=' + value;
}