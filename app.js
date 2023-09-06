function appendNumber(number) {
    const display = document.getElementById('display');
    const currentInput = display.innerText;


if(currentInput.length >= 14){return;}
    display.innerText += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = display.innerText.slice(-1);

    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        return;
    }

    display.innerText += operator;
}

function calculate() {
    const display = document.getElementById('display');
    const expression = display.innerText;

    try {
        const result = eval(expression);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}
