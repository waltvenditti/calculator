


function operate(operator, x, y) {
    let solution; 
    switch (operator) {
        case '+': 
            solution = add(x, y);
            break;
        case '-':
            solution = subtract(x, y);
            break;
        case '*':
            solution = multiply(x, y);
            break;
        case '/':
            solution = divide(x, y);
            break;
    };

    return solution;
};

function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    return x / y;
};