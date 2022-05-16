let numberButton = document.querySelectorAll('[data-number]');
let operationButton = document.querySelectorAll('[data-operator]');
let reset = document.querySelector('[data-reset]');
let removeNumber = document.querySelector('[data-remove-number]');
let equals = document.querySelector('[data-equals]');
let calcul = document.querySelector('[data-calcul]');

let current = document.querySelector('[data-current]');
let old = document.querySelector('[data-old]');
let operator = document.querySelector('[data-symbol-operator]');
class Calculator {

    constructor(currentNumber, oldNumber) {
        this.currentNumber = currentNumber;
        this.oldNumber = oldNumber;
        this.operation = undefined;
        this.clear();
    }

    addNumber(number) {
        if(number === '.' && this.currentNumber.textContent.includes('.')) { return }
        if(this.currentNumber.textContent.length >= 12) { return }
        this.currentNumber.textContent = this.currentNumber.textContent + number;
    }

    delete() {
        this.currentNumber.textContent = this.currentNumber.textContent.slice(0, -1);
    }

    clear() {
        this.currentNumber.textContent = '';
        this.oldNumber.textContent = '';
        this.operation = undefined;
    }

    chooseOperation(operation) {
        if(this.currentNumber.textContent === '') { return }
        if(this.oldNumber !== '') { this.calculate(); }
        this.oldNumber.textContent = this.currentNumber.textContent + ' ' + operation;
        this.operation = operation;
        this.currentNumber.textContent = '';
    }

    calculate(){
        let a = parseFloat(this.oldNumber.textContent);
        let b = parseFloat(this.currentNumber.textContent);

        let result;

        switch(this.operation){
            case 'x':
                result = a * b;
                break;
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '÷':
                result = a / b;
                break;
            default:
                return;
        }
        if(result.toString().length >= 12) { result = result.toString().substring(0, 12); }
        this.currentNumber.textContent = result;
        this.oldNumber.textContent = '';
        this.operation = undefined;
    }

}

const calculator = new Calculator(current, old);

numberButton.forEach(number => {
    number.addEventListener('click', () => {
        calculator.addNumber(number.textContent);
    });
});

operationButton.forEach(operation => {
    operation.addEventListener('click', () => {
        calculator.chooseOperation(operation.textContent);
    });
});

equals.addEventListener('click', () => {
    calculator.calculate();
});

reset.addEventListener('click', () => {
    calculator.clear();
});

removeNumber.addEventListener('click', () => {
    calculator.delete();
});