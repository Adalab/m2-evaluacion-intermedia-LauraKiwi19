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

function allFunctions() {
    isThisTheNumber();
    triesCounter();
}

const isThisTheNumber = function () {
    const number = input.value;
    const validNumber = parseInt(number);

    if (validNumber === myRandomNumber) {
        phrase.innerHTML = "¡HAS GANADO, CAMPEONA!";
    }
    if (validNumber > myRandomNumber) {
        phrase.innerHTML = "Demasiado alto"
    }
    if (validNumber < myRandomNumber) {
        phrase.innerHTML = "Demasiado bajo"
    }
    if (validNumber < 0 || validNumber > 100) {
        phrase.innerHTML = "Tiene que ser entre 0 y 100"
    }
}
function triesCounter() {
    tryNumber = tryNumber + 1;
    return tries.innerHTML = `${tryNumber}`;

}


button.addEventListener("click", allFunctions)

