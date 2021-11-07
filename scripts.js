// global variables
//-----------------

let displayNumber = '0';
let firstPress = true; 
let x = null;
let y = null;
let operator = null;


// basic math functions
//---------------------

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


// other functions

function updateDisplay() {
    let dispVal = document.querySelector('#true-display');
    dispVal.textContent = displayNumber;
};

function clearData() {
    displayNumber = '0';
    firstPress = true;
    x = null;
    y = null;
    operator = null;
};

function getY() {
    numArray = displayNumber.split(' ');
    y = Number(numArray[2]);
};

function checkOpSwitch() {
    strArray = displayNumber.split(' ');
    if (strArray[2] === '') {
        return true; 
    } else {
        return false;
    }; 
    // was a new operator button pressed before a num entered?
};

function removeOperator() {
    strArray = displayNumber.split(' ');
    displayNumber = strArray[0];
    x = null;
    operator = null;
};


// button listeners
//-----------------

const btn0 = document.querySelector('#b0');
const btn1 = document.querySelector('#b1');
const btn2 = document.querySelector('#b2');
const btn3 = document.querySelector('#b3');
const btn4 = document.querySelector('#b4');
const btn5 = document.querySelector('#b5');
const btn6 = document.querySelector('#b6');
const btn7 = document.querySelector('#b7');
const btn8 = document.querySelector('#b8');
const btn9 = document.querySelector('#b9');
const btnAdd = document.querySelector('#badd');
const btnSub = document.querySelector('#bsub');
const btnMult = document.querySelector('#bmult');
const btnDiv = document.querySelector('#bdiv');
const btnDot = document.querySelector('#bdot');
const btnC = document.querySelector('#bc');
const btnEq = document.querySelector('#beq');


// the number buttons 
//-------------------
btn0.addEventListener('click', () => {
    if (firstPress === true) {
        displayNumber = '0';
        firstPress = false;
    } else {
        displayNumber += '0';
    }
    updateDisplay();
});

btn1.addEventListener('click', () => {
    if (firstPress === true) {
        displayNumber = '1';
        firstPress = false;
    } else {
        displayNumber += '1';
    }
    updateDisplay();
});

btn2.addEventListener('click', () => {
    if (firstPress === true) {
        displayNumber = '2';
        firstPress = false;
    } else {
        displayNumber += '2';
    }
    updateDisplay();
});

btn3.addEventListener('click', () => {
    if (firstPress === true) {
        displayNumber = '3';
        firstPress = false;
    } else {
        displayNumber += '3';
    }
    updateDisplay();
});

btn4.addEventListener('click', () => {
    if (firstPress === true) {
        displayNumber = '4';
        firstPress = false;
    } else {
        displayNumber += '4';
    }
    updateDisplay();
});

btn5.addEventListener('click', () => {
    if (firstPress === true) {
        displayNumber = '5';
        firstPress = false;
    } else {
        displayNumber += '5';
    }
    updateDisplay();
});

btn6.addEventListener('click', () => {
    if (firstPress === true) {
        displayNumber = '6';
        firstPress = false;
    } else {
        displayNumber += '6';
    }
    updateDisplay();
});

btn7.addEventListener('click', () => {
    if (firstPress === true) {
        displayNumber = '7';
        firstPress = false;
    } else {
        displayNumber += '7';
    }
    updateDisplay();
});

btn8.addEventListener('click', () => {
    if (firstPress === true) {
        displayNumber = '8';
        firstPress = false;
    } else {
        displayNumber += '8';
    }
    updateDisplay();
});

btn9.addEventListener('click', () => {
    if (firstPress === true) {
        displayNumber = '9';
        firstPress = false;
    } else {
        displayNumber += '9';
    }
    updateDisplay();
});


// the operator buttons

btnAdd.addEventListener('click', () => {
    if (checkOpSwitch() === true) removeOperator();
    if (x === null) {
        x = Number(displayNumber);
        displayNumber += ' + ';
        operator = '+';
        updateDisplay();
    }
});

btnSub.addEventListener('click', () => {
    if (checkOpSwitch() === true) removeOperator();
    if (x === null) {
        x = Number(displayNumber);
        displayNumber += ' - ';
        operator = '-';
        updateDisplay();
        }
});

btnMult.addEventListener('click', () => {
    if (checkOpSwitch() === true) removeOperator();
    if (x === null) {
        x = Number(displayNumber);
        displayNumber += ' \xD7 ';
        operator = '*';
        updateDisplay();
        }
});

btnDiv.addEventListener('click', () => {
    if (checkOpSwitch() === true) removeOperator();
    if (x === null) {
        x = Number(displayNumber);
        displayNumber += ' \xF7 ';
        operator = '/';
        updateDisplay();
        }
});


// the point button

// the clear button
btnC.addEventListener('click', () => {
    clearData();
    updateDisplay();
});

// the equals button
btnEq.addEventListener('click', () => {
    getY();
    solution = operate(operator, x, y);
    clearData();
    displayNumber = solution;
    updateDisplay();
});


// decimal button operational
// reduce or limit size of decimal values 
// chain operations: 4 + 6 + 2 - 45 etc
// after an operation, with number on display, hit new operator and enter new number 