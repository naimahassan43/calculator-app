const displayValue = document.querySelector('h1');
const buttons = document.querySelectorAll('button');
const clearBtn = document.querySelector('.clear');


//buttons

buttons.forEach((inputBtn) => {
    if (inputBtn.classList.length == 0) {
        inputBtn.addEventListener('click', () => {
            console.log(inputBtn.value);
        });
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => {
            console.log(inputBtn.value);
        });
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => {
            console.log(inputBtn.value);
        })
    }
})