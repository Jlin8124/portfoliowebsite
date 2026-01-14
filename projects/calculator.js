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

