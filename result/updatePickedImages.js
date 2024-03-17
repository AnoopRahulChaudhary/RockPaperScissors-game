export const keyForUserImageSelection = 'userSelection';
export const keyForComputerImageSelection = 'computerSelection';

export function updatePickedImages() {
    updateUsersPickedImage();
    updateComputersPickedImage();
}

function updateUsersPickedImage() {
    const imageValue =  getQueryValueFromUrl(keyForUserImageSelection);
    const userImageHolder = document.querySelector('.human-picked-status .picked-img-container img');
    userImageHolder.setAttribute('src', getImagePath(imageValue));
}

function updateComputersPickedImage() {
    const imageValue =  getQueryValueFromUrl(keyForComputerImageSelection);
    const computerImageHolder = document.querySelector('.computer-picked-status .picked-img-container img');
    computerImageHolder.setAttribute('src', getImagePath(imageValue));
}

function  getQueryValueFromUrl(keyForImageSelection) {
    const params = new URLSearchParams(getPageUrl());
    return params.get(keyForImageSelection);
}

function getPageUrl() {
    return window.location.search;
}

function getImagePath(imageValue) {
    return '../assets/images/'+imageValue+'.png';
}