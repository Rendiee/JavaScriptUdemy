let textSlider = document.getElementById('slider-update');
let passLength = document.getElementById('slider-range');

let upper = document.getElementById('upper');
let number = document.getElementById('number');
let symbol = document.getElementById('symbol');

let final = document.getElementById('final-password');
let generate = document.getElementById('generate');
let copy = document.getElementById('copy');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

window.onload = function () {
    generatePassword();
}

passLength.oninput = function() {
    textSlider.innerHTML = this.value;
}

function getLower() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpper() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {

    let password = '';

    for(let i = 0; i < passLength.value; i++) {
        password += generateX();
    }

    final.innerHTML = password;
}

function generateX() {

    const c = [];

    c.push(getLower());

    if(upper.checked) {
        c.push(getUpper());
    }

    if(number.checked) {
        c.push(getNumber());
    }

    if(symbol.checked) {
        c.push(getSymbol());
    }

    if(c.length === 0) {
        return getLower();
    }

    return c[Math.floor(Math.random() * c.length)];
}

generate.addEventListener('click', () => {
    generatePassword();
});

copy.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = final.innerText;

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!');
});

