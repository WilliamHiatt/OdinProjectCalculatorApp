let firstNum = '';
let secondNum = '';
let operator = '';
let displayText = '';

const numberButton = document.querySelectorAll('.numberButton');
const operatorButton = document.querySelectorAll('.operatorButton');
const clearButton = document.querySelector('.clearButton');
const equalsButton = document.querySelector('.equalsButton');
const display = document.querySelector('.display');

numberButton.forEach(btn => btn.addEventListener('click', () => {
    let value = btn.getAttribute("id");
    displayText += value;
    display.textContent = displayText;
    if (operator == '')
    {
        firstNum += value;
    }
    else
    {
        secondNum += value;
    }
}));

operatorButton.forEach(btn => btn.addEventListener('click', () => {
    if (operator != '')
    {
        equals();
    }
    let value = btn.getAttribute("id");
    operator = value;
    displayText += ' ' + value + ' ';
    display.textContent = displayText;
}));

clearButton.addEventListener('click', () => {
    firstNum = '';
    secondNum = '';
    operator = '';
    displayText = '';
    display.textContent = displayText;
});

equalsButton.addEventListener('click', () => {
    equals();
})

function equals()
{
    if (operator == '/' && secondNum == '0')
    {
        display.textContent = "You can't divide by 0!";
        firstNum = '';
        displayText = '';
        secondNum = '';
        operator = '';
    }
    else
    {
        let answer = operate(parseInt(firstNum), parseInt(secondNum), operator);
        display.textContent = answer;
        firstNum = answer;
        displayText = answer;
        secondNum = '';
        operator = '';
    }
}

function operate(first, second, oper)
{
    if (oper == '+')
    {
        return add(first, second);
    }
    else if (oper == '-')
    {
        return subtract(first, second);
    }
    else if (oper == '*')
    {
        return multiply(first, second);
    }
    else if (oper == '/')
    {
        return divide(first, second);
    }
}

function add(x, y)
{
    return x + y;
}

function subtract(x, y)
{
    return x - y;
}

function multiply(x, y)
{
    return x * y;
}

function divide(x, y)
{
    return x / y;
}