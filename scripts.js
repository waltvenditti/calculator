// global variables
//-----------------


// reducing exponents




let displayNumber = '0';
let firstPress = true; 
let x = null;
let y = null;
let operator = null;
let clearState = true;

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
    //if (displayNumber.indexOf('e') > -1) {
    //    displayNumber = reduceStringLength(displayNumber);
    //}

    //if (checkStringLength(displayNumber)) {
    //   if (x === null) {
    //    displayNumber = reduceStringLength(displayNumber);
    //    }
    //}
    dispVal.textContent = displayNumber;
};

function checkStringLength(number) {
    if (number.length > 16) return true;
    else return false;
}

function reduceStringLength(number) {
    return Number(number).toExponential(10);
}

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
    if (clearState === false) toggleClear();
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
    if (clearState === false) toggleClear();
};

function toggleRepeat(number) {
    xForRepeat = number;
    yForRepeat = y;
    opForRepeat = operator;
};

function toggleClear() {
    if (clearState === true) {
        btnC.style['display'] = 'none';
        btnCE.style['display'] = 'inline';
    } else {
        btnC.style['display'] = 'inline';
        btnCE.style['display'] = 'none';
    };

    clearState = !clearState;
};

function checkForDecimal() {
    if (displayNumber.split('.').length === 3) return true;
    if (displayNumber.indexOf('.') > -1) {
        if (x === null) return true;
        else {
            if (displayNumber.split(' ')[2].indexOf('.') > -1) return true;
        };
    } else return false; 
};


// functions for button action
//----------------------------

function numberButtonAction(number) {
    if (clearState === true) toggleClear();
    if (firstPress === true) {
        displayNumber = number;
        firstPress = false;
    } else {
        displayNumber += number;
    }
    updateDisplay();
};

function operatorButtonAction(op) {
    if (clearState === true) toggleClear();
    if (displayNumber === '0' && firstPress === true) return;
    if (checkOpSwitch() === true) removeOperator();
    if (!(x === null)) {
        calcAndUpdate();
        firstPress = false;
    }
    x = Number(displayNumber);
    if (op === '*') displayNumber += ' \xD7 ';
    else if (op === '/') displayNumber += ' \xF7 ';
    else displayNumber += ` ${op} `;
    operator = op;
    updateDisplay();
};

function pointButtonAction() {
    if (clearState === true) toggleClear();
    if (checkForDecimal()) return;
    if (displayNumber.split(' ')[2] === '') {
        displayNumber += '0.';
    } else {
        displayNumber += '.';
    }
    if (firstPress === true) firstPress = false;
    updateDisplay();
};

function cButtonAction() {
    clearData();
    firstPress = true;
    xForRepeat = null;
    yForRepeat = null;
    opForRepeat = null;
    updateDisplay();
};

function ceButtonAction() {
    numArray = displayNumber.split(' ');
    arrayLen = numArray.length;
    if (arrayLen === 1) {
        if (numArray[0].length > 1) {
            displayNumber = displayNumber.slice(0, -1);
            updateDisplay();
            return;
        } else if (!(numArray[0] === '0')) {
            displayNumber = '0';
            updateDisplay();
            firstPress = true;
            toggleClear();
            xForRepeat = null;
            yForRepeat = null;
            opForRepeat = null;

            return;
        } else if (numArray[0] === '0') {
            if (clearState === false) toggleClear();
        }
    };
    if (arrayLen === 3) {
        if (!(numArray[2] === '')) {
            displayNumber = displayNumber.slice(0, -1);
            updateDisplay();
        } else {
            displayNumber = displayNumber.slice(0, -3);
            x = null;
            operator = null;
            updateDisplay();
        }
    };
};

function EqualButtonAction() {
    if (x === null) {
        if (!(xForRepeat === null)) {
            x = xForRepeat;
            y = yForRepeat;
            operator = opForRepeat;
            calcAndUpdateNoY();
            return;
        } else return; 
    }
    calcAndUpdate();
};

// isteners
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
const btnCE = document.querySelector('#bce');
const btnEq = document.querySelector('#beq');


// the number buttons 
//-------------------

btn0.addEventListener('click', () => {
    numberButtonAction('0');
});
btn1.addEventListener('click', () => {
    numberButtonAction('1');
});
btn2.addEventListener('click', () => {
    numberButtonAction('2');
});
btn3.addEventListener('click', () => {
    numberButtonAction('3');
});
btn4.addEventListener('click', () => {
    numberButtonAction('4');
});
btn5.addEventListener('click', () => {
    numberButtonAction('5');
});
btn6.addEventListener('click', () => {
    numberButtonAction('6');
});
btn7.addEventListener('click', () => {
    numberButtonAction('7');
});
btn8.addEventListener('click', () => {
    numberButtonAction('8');
});
btn9.addEventListener('click', () => {
    numberButtonAction('9');
});


// the operator buttons
// --------------------

btnAdd.addEventListener('click', () => {
    operatorButtonAction('+');
});
btnSub.addEventListener('click', () => {
    operatorButtonAction('-');
});
btnMult.addEventListener('click', () => {
    operatorButtonAction('*');
});
btnDiv.addEventListener('click', () => {
    operatorButtonAction('/');
});


// the point button
//-----------------
btnDot.addEventListener('click', () => {
    pointButtonAction()
});

// the clear buttons
//-----------------

btnC.addEventListener('click', () => {
    cButtonAction();
});
btnCE.addEventListener('click', () => {
    ceButtonAction();
});

// the equals button
//------------------

btnEq.addEventListener('click', () => {
    EqualButtonAction();
});


// keyboard support
//------------------------------------------------
//------------------------------------------------
//------------------------------------------------
//------------------------------------------------

// number keys
//------------------------------------------------


document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '0') {
        numberButtonAction('0');
    }
});
document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '1') {
        numberButtonAction('1');
    }
});
document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '2') {
        numberButtonAction('2');
    }
});
document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '3') {
        numberButtonAction('3');
    }
});
document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '4') {
        numberButtonAction('4');
    }
});
document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '5') {
        numberButtonAction('5');
    }
});
document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '6') {
        numberButtonAction('6');
    }
});
document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '7') {
        numberButtonAction('7');
    }
});
document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '8') {
        numberButtonAction('8');
    }
});
document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '9') {
        numberButtonAction('9');
    }
});


// the operator keys
// -----------------

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '+') {
        operatorButtonAction('+');
    }
});

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '-') {
        operatorButtonAction('-');
    };
});

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '*') {
        operatorButtonAction('*');
    }
});

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '/') {
        operatorButtonAction('/');
    }
});

document.documentElement.addEventListener('keydown', (e) => {
        if (e.key === '.') {
        pointButtonAction();
    }
});

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
        if (clearState === true) {
            cButtonAction();
        } else {
            ceButtonAction();
        }
    }
});

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
            EqualButtonAction();
    }
});