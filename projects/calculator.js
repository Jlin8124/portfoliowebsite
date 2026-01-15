
const keypad = document.getElementById('calculator-keys');
const screen = document.getElementById('calc-screen');

let calculatorState = "";

keypad.addEventListener('click', (event) => {

    const target = event.target; // basically we set the sort of element to a const target

    if (!target.matches('button')) {
        return;
    }

    const value = target.getAttribute('data-val');

    // Added all-clear command 
    if (value === 'all-clear') {
        calculatorState = ''; 
    }

    else if (value === 'delete') {

        if (calculatorState === 'Infinity' || calculatorState === 'Error') {
            calculatorState = '';
        }
        else {
        calculatorState = calculatorState.slice(0, -1);
        }
    }

    else if (value === '=') {
        calculatorState = eval(calculatorState); // So i only put val in the eval(screen) 
        // that means I would be evaluating the expression of =
    }
    else {
        calculatorState += value;
    }
    screen.value = calculatorState
    
    // So we set the target to a constant whatever this is. 

});

const demo = document.getElementById('demo');

document.addEventListener('click', myfunction1);

function myfunction1() {
    document.getElementById('demo').innerHTML += "Hey guys ";
}

console.log("hello");

let history = [];

function calculate(num1, operator, num2) {
    let result = 0;

        if (operator === "+") {
            result = num1 + num2;
        }
        else if (operator === "-") {
            result = num1 - num2;
        }
        else if (operator ==="*") {
            result = num1 * num2;
        }
        else if (operator ==="/") {
            result = num1 / num2;
        }
        else {
            console.log("Error: Invalid Operator)");
            return;
        }
        
        history.push(result);

        console.log("Calculation:", num1, operator, num2, '=', result);
        console.log("Current History:", history);

        return result;
}

calculate(100, "+", 50);

