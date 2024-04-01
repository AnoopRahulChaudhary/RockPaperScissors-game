export function addShowRulesListener() {
    document.querySelector('.rules-button')
        .addEventListener('click', showRules);
}

function showRules() {
    const rules = document.querySelector('.rules-container');
    rules.classList.remove('close-rules');
    rules.classList.add('show-rules');
}

export function addCloseRulesListener() {
    document.querySelector('.close-symbol-container')
        .addEventListener('click', closeRules);
}

function closeRules() {
    const rules = document.querySelector('.rules-container');
    rules.classList.remove('show-rules');
    rules.classList.add('close-rules');
}