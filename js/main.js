'use strict'

const input = document.querySelector('.js-inputNumber');
const button = document.querySelector('.js-buttonTry');
const phrase = document.querySelector('.js-phraseSolution');
let tries = document.querySelector('.js-triesNumber');



function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const myRandomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es ${myRandomNumber}`);



let tryNumber = parseInt(tries.innerHTML);

function guessNumber(event) {
    event.preventDefault();
    checkNumber();
    addCounterTries();
}

function feedbackText(text) {
    phrase.innerHTML = text;
}

const checkNumber = function () {
    const number = input.value;
    const validNumber = parseInt(number);

    if (validNumber === myRandomNumber) {
        feedbackText("¡HAS GANADO, CAMPEONA!");
    } else if (validNumber > myRandomNumber) {
        feedbackText("Demasiado alto");
    } else if (validNumber < myRandomNumber) {
        feedbackText("Demasiado bajo");
    } else if (validNumber < 0 || validNumber > 100) {
        feedbackText("Tiene que ser entre 0 y 100");
    }
}
function addCounterTries() {
    tryNumber = tryNumber + 1;
    return tries.innerHTML = `${tryNumber}`;

}


button.addEventListener("click", guessNumber)

