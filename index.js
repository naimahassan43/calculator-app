const display = document.querySelector('h1');
const buttons = document.querySelectorAll('button');
const clearBtn = document.querySelector('.clear');

//Functions

function displayItem(item) {
    let displayValue = display.textContent;
    display.innerText = displayValue == 0 ? item : displayValue + item;

}

function addDecimal() {
    if (!display.textContent.includes('.')) {
        display.textContent = `${display.textContent}.`
    }
}

function reset() {
    display.textContent = '0';
}

//Event Listeners

buttons.forEach((inputBtn) => {
    if (inputBtn.classList.length == 0) {
        inputBtn.addEventListener('click', () => displayItem(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => displayItem(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal());
    }
})

clearBtn.addEventListener('click', reset);