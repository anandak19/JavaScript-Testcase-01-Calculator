let display = document.getElementById('output');

let currentInput = '';
let previousInput = '';
let operator = '';

function appendToDisplay(number) {
    currentInput += number;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput;
}

function handleOperator(selectedOperator) {
    if (currentInput !== '') {
        if (previousInput !== '') {
            calculate();
        } else {
            previousInput = currentInput;
        }
        operator = selectedOperator;
        currentInput = '';
    }
}

function calculate() {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'x':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = '';
    operator = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

