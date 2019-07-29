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


let numberTries = tries.innerHTML;
let validNumberTries = parseInt(numberTries);

const isThisTheNumber = function () {
    const number = input.value;
    const validNumber = parseInt(number);

    if (validNumber === myRandomNumber) {
        phrase.innerHTML = "¡HAS GANADO, CAMPEONA!";
        validNumberTries = `${validNumberTries + 1}`;
    }
    if (validNumber > myRandomNumber) {
        phrase.innerHTML = "Demasiado alto"
        let counter = tries + 1;
    }
    if (validNumber < myRandomNumber) {
        phrase.innerHTML = "Demasiado bajo"
        let counter = tries + 1;
    }
    if (validNumber < 0 || validNumber > 100) {
        phrase.innerHTML = "Tiene que ser entre 0 y 100"
        let counter = tries + 1;
    }
}


button.addEventListener("click", isThisTheNumber)

