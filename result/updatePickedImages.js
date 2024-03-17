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
    updateCssForUserPickedImage(imageValue);
}

function updateComputersPickedImage() {
    const imageValue =  getQueryValueFromUrl(keyForComputerImageSelection);
    const computerImageHolder = document.querySelector('.computer-picked-status .picked-img-container img');
    computerImageHolder.setAttribute('src', getImagePath(imageValue));
    updateCssForComputerPickedImage(imageValue);
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

function updateCssForUserPickedImage(imageValue) {
    const userImageContainer = document.querySelector('.human-picked-status .picked-img-container');
    userImageContainer.setAttribute('class', getAllClassesForImageContainer(imageValue));
    
    const userImageTag = document.querySelector('.human-picked-status .picked-img-container img');
    userImageTag.setAttribute('alt', getAltValueForPickedImage(imageValue));
}

function updateCssForComputerPickedImage(imageValue) {
    const computerImageContainer = document.querySelector('.computer-picked-status .picked-img-container');
    computerImageContainer.setAttribute('class', getAllClassesForImageContainer(imageValue));

    const computerImageTag = document.querySelector('.computer-picked-status .picked-img-container img');
    computerImageTag.setAttribute('alt', getAltValueForPickedImage(imageValue));
}

function getAllClassesForImageContainer(imageValue) {
    return 'picked-img-container' + ' ' +
         imageValue + '-border-color';
}

function getAltValueForPickedImage(imageValue) {
    return imageValue + ' image';
}