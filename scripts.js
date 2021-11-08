// global variables
//-----------------

let displayNumber = '0';
let firstPress = true; 
let x = null;
let y = null;
let operator = null;

let xForRepeat = null;
let yForRepeat = null;
let opForRepeat = null;


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
//----------------

function updateDisplay() {
    let dispVal = document.querySelector('#true-display');
    dispVal.textContent = displayNumber;
};

function clearData() {
    displayNumber = '0';
    x = null;
    y = null;
    operator = null;
};

function removeTrailingZeros(numStr) {
    num = Number(numStr);
    return '' + num;
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
};

function removeOperator() {
    strArray = displayNumber.split(' ');
    displayNumber = strArray[0];
    x = null;
    operator = null;
};

function checkDecimalLength(number) {
    number -= Math.floor(number);
    decStr = '';
    decStr += number;
    if (decStr.length > 10) return true;
    else return false; 
};

function reduceDecimalLength(number) {
   fNumber = number.toFixed(10);
    return fNumber;
};

function calcAndUpdate() {
    getY();
    solution = operate(operator, x, y);
    toggleRepeat(solution);
    clearData();
    if (checkDecimalLength(solution)) {
        solution = reduceDecimalLength(solution);
    }
    newNum = '' + solution;
    newNum = removeTrailingZeros(newNum);
    displayNumber = newNum;
    updateDisplay();
};

function calcAndUpdateNoY() {
    solution = operate(operator, x, y);
    toggleRepeat(solution);
    clearData();
    if (checkDecimalLength(solution)) {
        solution = reduceDecimalLength(solution);
    }
    newNum = '' + solution;
    newNum = removeTrailingZeros(newNum);
    displayNumber = newNum;
    updateDisplay();
};

function toggleRepeat(number) {
    xForRepeat = number;
    yForRepeat = y;
    opForRepeat = operator;
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
// --------------------

btnAdd.addEventListener('click', () => {
    if (displayNumber === '0' && firstPress === true) return;
    if (checkOpSwitch() === true) removeOperator();
    if (!(x === null)) {
        calcAndUpdate();
        firstPress = false;
    }
    x = Number(displayNumber);
    displayNumber += ' + ';
    operator = '+';
    updateDisplay();
});

btnSub.addEventListener('click', () => {
    if (displayNumber === '0' && firstPress === true) return;
    if (checkOpSwitch() === true) removeOperator();
    if (!(x === null)) {
        calcAndUpdate();
        firstPress = false;
        }
    x = Number(displayNumber);
    displayNumber += ' - ';
    operator = '-';
    updateDisplay();
});

btnMult.addEventListener('click', () => {
    if (displayNumber === '0' && firstPress === true) return;
    if (checkOpSwitch() === true) removeOperator();
    if (!(x === null)) {
        calcAndUpdate();
        firstPress = false;
        }
    x = Number(displayNumber);
    displayNumber += ' \xD7 ';
    operator = '*';
    updateDisplay();
});

btnDiv.addEventListener('click', () => {
    if (displayNumber === '0' && firstPress === true) return;
    if (checkOpSwitch() === true) removeOperator();
    if (!(x === null)) {
        calcAndUpdate();
        firstPress = false;
        }
    x = Number(displayNumber);
    displayNumber += ' \xF7 ';
    operator = '/';
    updateDisplay();
});


// the point button
//-----------------
btnDot.addEventListener('click', () => {
    if (displayNumber.split(' ')[2] === '') {
        displayNumber += '0.';
    } else {
        displayNumber += '.';
    }
    updateDisplay();
});

// the clear button
//-----------------

btnC.addEventListener('click', () => {
    clearData();
    firstPress = true;
    updateDisplay();
});

// the equals button
//------------------

btnEq.addEventListener('click', () => {
    if (x === null) {
        x = xForRepeat;
        y = yForRepeat;
        operator = opForRepeat;
        calcAndUpdateNoY();
        return;
    }
    calcAndUpdate();
});